import datetime
import os
import streamlit as st
import requests
from dotenv import load_dotenv
from dateutil.parser import parse
import pandas as pd
load_dotenv()

HOST = os.getenv("HOST")
APP_PORT = os.getenv("APP_PORT")

# Конфигурация
API_URL = f"http://{HOST}:{APP_PORT}"

def login(username, password):
    """ Авторизация пользователя и получение токена """
    response = requests.post(f"{API_URL}/login", json={"username": username, "password": password})
    if response.status_code == 200:
        auth_data = response.json()
        # Сохраняем время истечения токена и refresh_token
        auth_data['expires_at'] = (datetime.datetime.utcnow() + datetime.timedelta(hours=1)).isoformat()[:-1]
        auth_data['refresh_token_expires_at'] = (datetime.datetime.utcnow() + datetime.timedelta(days=30)).isoformat()[:-1]
        auth_data['is_admin'] = response.json().get('is_admin', False)
        st.session_state['auth_data'] = auth_data
       #st.success("Авторизация прошла успешно")
        return auth_data
    else:
        st.error("Неверное имя пользователя или пароль")
        return None

def refresh_access_token(refresh_token):
    """ Обновление токена доступа """
    response = requests.post(f"{API_URL}/refresh", json={"refresh_token": refresh_token})
    if response.status_code == 200:
        new_tokens = response.json()
        # Обновляем время истечения токена
        new_tokens['expires_at'] = (datetime.datetime.utcnow() + datetime.timedelta(hours=1)).isoformat()[:-1]
        st.session_state['auth_data'].update(new_tokens)
        return new_tokens
    else:
        st.error("Ошибка при обновлении токена")
        return None

def fetch_users():
    """ Получение списка пользователей """
    token = get_valid_access_token()
    print(token)
    if token:
        headers = {"Authorization": f"Bearer {token}"}
        response = requests.get(f"{API_URL}/users", headers=headers)
        #print(response.json())  # Добавьте эту строку для отладки
        return response.json() if response.status_code == 200 else []
    else:
        st.error("Токен не доступен, пожалуйста, войдите заново")
        return []

def display_users():
    users = fetch_users()
    df = pd.DataFrame(users)

    # Заголовки столбцов
    colms = st.columns((1, 2, 3, 1, 2, 2))
    fields = ["ID", "Name", "Email", "Админ", "Edit", "Del"]
    for col, field_name in zip(colms, fields):
        col.write(field_name)

    # Отображение данных пользователей и кнопок
    for index, user in df.iterrows():
        col1, col2, col3, col4, col5, col6 = st.columns((1, 2, 3, 1, 2, 2))
        col1.write(user['id'])  # Индекс
        col2.write(user['username'])  # Имя пользователя
        col3.write(user['email'])  # Email
        col4.write("Да" if user['is_admin'] else "Нет")  # Администратор

        # Кнопка редактирования
        edit_phold = col5.empty()  # Создаем плейсхолдер для кнопки
        edit_action = edit_phold.button("Edit", key=f"edit_{user['id']}")
        if edit_action:
            modify_user(st.session_state['auth_data']['access_token'], user)


        # Кнопка удаления
        delete_phold = col6.empty()  # Создаем плейсхолдер для кнопки
        delete_action = delete_phold.button("Del", key=f"delete_{user['id']}")
        if delete_action:
            delete_user(st.session_state['auth_data']['access_token'], user['id'])


def modify_user(token, user_data):
    with st.sidebar.form(key=f"user_edit_form_{user_data['id']}"):
        st.write(f"Редактирование пользователя {user_data['username']}")
        new_username = st.text_input("Имя пользователя", user_data['username'], key=f"username_{user_data['id']}")
        new_email = st.text_input("Email", user_data['email'], key=f"email_{user_data['id']}")
        new_is_admin = st.checkbox("Администратор", user_data['is_admin'], key=f"is_admin_{user_data['id']}")
        submit_button = st.form_submit_button("Сохранить изменения")

        if submit_button:
            # Подготовка данных для отправки
            user_update_data = {
                "username": new_username,
                "email": new_email,
                "is_admin": new_is_admin
            }
            print("Отправляемые данные изменения пользователя:", user_update_data)  # Добавьте эту строку для отладки
            # Отправка запроса на сервер
            headers = {"Authorization": f"Bearer {token}"}
            response = requests.put(f"{API_URL}/users/modify", json=user_update_data, headers=headers)
            if response.status_code == 200:
                st.success("Данные пользователя успешно обновлены")
                st.rerun()
            else:
                st.error("Ошибка при обновлении данных пользователя")

def create_user(token, username, email, password, is_admin):
    """ Создание нового пользователя """
    headers = {"Authorization": f"Bearer {token}"}
    print("Отправляемые данные нового пользователя:", {"username": username, "email": email, "password": password, "is_admin": is_admin})  # Добавьте эту строку для отладки
    response = requests.post(f"{API_URL}/users/create", json={"username": username, "email": email, "password": password, "is_admin": is_admin}, headers=headers)
    if response.status_code == 200:
        st.success("Пользователь создан")
        st.rerun()
    else:
        st.error("Ошибка при создании пользователя")

def delete_user(token, user_id):
    """ Удаление пользователя """
    headers = {"Authorization": f"Bearer {token}"}
    response = requests.delete(f"{API_URL}/users/{user_id}/delete", headers=headers)
    if response.status_code == 204:
        st.success("Пользователь удален")
        st.rerun()
    else:
        st.error("Ошибка при удалении пользователя")

def get_valid_access_token():
    if 'auth_data' in st.session_state:
        current_time = datetime.datetime.utcnow()
        expires_at = parse(st.session_state['auth_data']['expires_at'])
        if current_time >= expires_at:
            # Токен истек, обновляем
            refreshed_tokens = refresh_access_token(st.session_state['auth_data']['refresh_token'])
            if refreshed_tokens:
                st.session_state['auth_data'].update(refreshed_tokens)
                return st.session_state['auth_data']['access_token']
            else:
                st.error("Не удалось обновить токен, пожалуйста, войдите заново")
                del st.session_state['auth_data']
                return None
        return st.session_state['auth_data']['access_token']
    return None

def main():
    st.title("Управление пользователями")

def on_login_clicked():
    username = st.session_state['username']
    password = st.session_state['password']
    auth_data = login(username, password)
    if auth_data:
        st.session_state['auth_data'] = auth_data
        if not auth_data.get('is_admin', False):
            st.error("Доступ разрешен только администраторам")
            del st.session_state['auth_data']
        else:
            st.success("Вы успешно вошли")
    else:
        st.error("Ошибка авторизации")

if 'auth_data' not in st.session_state:
    with st.sidebar:
        st.text_input("Имя пользователя", key='username')
        st.text_input("Пароль", type="password", key='password')
        st.button("Войти", on_click=on_login_clicked)

else:
    # Отображение пользователей
    display_users()

    # Кнопка для создания нового пользователя в сайдбаре
    with st.sidebar:
        if st.button("Создать пользователя"):
            with st.sidebar:
                # Используем session_state для сохранения введенных данных
                new_username = st.text_input("Имя пользователя", value=st.session_state.get('new_username', ''), key='new_username')
                new_email = st.text_input("Email", value=st.session_state.get('new_email', ''), key='new_email')
                new_password = st.text_input("Пароль", type="password", value=st.session_state.get('new_password', ''), key='new_password')
                new_is_admin = st.checkbox("Администратор", value=st.session_state.get('new_is_admin', False), key='new_is_admin')
                if st.button("Подтвердить создание"):
                    create_user(st.session_state['auth_data']['access_token'], new_username, new_email, new_password, new_is_admin)
                    # Очистка session_state после создания пользователя
                    for key in ['new_username', 'new_email', 'new_password', 'new_is_admin']:
                        if key in st.session_state:
                            del st.session_state[key]

    # Удаление пользователя
    delete_user_id = st.text_input("ID пользователя для удаления")
    if st.button("Удалить пользователя"):
        delete_user(st.session_state['auth_data']['access_token'], delete_user_id)

if __name__ == "__main__":
    main()
