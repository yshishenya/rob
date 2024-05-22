Давайте дополним руководство, добавив недостающую информацию из предоставленных вами фрагментов кода и моделей.

---

# Руководство по использованию API

## Введение

Данное руководство предназначено для фронтенд- и бэкенд-разработчиков. Оно описывает основные маршруты для взаимодействия с бэкендом через API, а также детали авторизации и управления пользователями. Все запросы к API должны быть авторизованы с использованием токена доступа.

---

## Аутентификация

### Получение токенов

Для выполнения аутентификации и получения токенов доступа и обновления, отправьте POST-запрос на `/login`, указав имя пользователя и пароль в теле запроса в формате `application/x-www-form-urlencoded`.

```bash
curl -X POST https://dev.rob.pro-4.ru/login \
 -H "Content-Type: application/json" \
 -d '{"username":"user", "password":"password"}'
```

### Пример успешного ответа

В ответе вы получите два токена: `access_token` для доступа к защищенным маршрутам и `refresh_token` для обновления `access_token` по его истечении.

```json
{
  "access_token": "25ac806aba456abac04dade950f754592f3763ff1a3fa564",
  "expires_in": 3600,
  "expires_at": "2024-05-18T09:39:27.487986",
  "refresh_token": "14c23f5e6c412cdadfc3e71fbff240d8d7bf7edd582e6153",
  "refresh_expires_in": 2592000,
  "refresh_token_expires_at": "2024-06-17T08:39:27.487995",
  "is_admin": true
}
```

### Описание полей ответа

- **access_token**: Токен доступа, который используется для аутентификации пользователя в системе.
- **expires_in**: Время жизни токена доступа в секундах (3600 секунд = 1 час).
- **expires_at**: Точная дата и время истечения токена доступа в формате ISO 8601.
- **refresh_token**: Токен для обновления доступа, который можно использовать для получения нового токена доступа после истечения текущего.
- **refresh_expires_in**: Время жизни токена для обновления в секундах (2592000 секунд = 30 дней).
- **refresh_token_expires_at**: Точная дата и время истечения токена обновления в формате ISO 8601.
- **is_admin**: Флаг, указывающий, является ли пользователь администратором. `true`, если пользователь имеет права администратора.

---

## Использование access_token

Для доступа к защищенным маршрутам включайте полученный `access_token` в запросы.

### Пример подключения к WebSocket

```javascript
const listenToSockEvents = () => {
  const { protocol, host, pathname } = window.location;
  const token = "токен"; // вставьте свой токен
  const ws_uri = `${
    protocol === "https:" ? "wss:" : "ws:"
  }//${host}${pathname}ws?token=${encodeURIComponent(token)}`;
  const converter = new showdown.Converter();
  const socket = new WebSocket(ws_uri);

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.type === "logs") {
      addAgentResponse(data);
    } else if (data.type === "report") {
      writeReport(data, converter);
    } else if (data.type === "path") {
      updateState("finished");
      updateDownloadLink(data);
    }
  };
};
```

### Пример использования WebSocket на Python

```python
import asyncio
import websockets
import json

async def connect():
    uri = "ws://localhost:8000/ws?token=<access_token>"
    async with websockets.connect(uri) as websocket:
        await websocket.send(json.dumps({
            "task": "Example task",
            "report_type": "pdf"
        }))
        response = await websocket.recv()
        print(response)

asyncio.get_event_loop().run_until_complete(connect())
```

---

## Обновление токена доступа

### Использование refresh_token

Когда срок действия `access_token` подходит к концу, вы можете использовать `refresh_token` для получения нового токена доступа. Для этого отправьте POST-запрос на `/api/refresh`, передав `refresh_token` в теле запроса.

```bash
curl -X POST https://dev.volter.pro-4.ru/api/refresh \
 -H "Content-Type: application/json" \
 -d '{"refresh_token":"<ваш_refresh_token>"}'
```

### Пример успешного ответа

После успешного выполнения запроса на обновление токена доступа, вы получите JSON с новым `access_token` и `refresh_token`.

```json
{
  "access_token": "2dc01915898f60c9f378074e62b677285281c6338fdcb787",
  "expires_in": 3600,
  "expires_at": "2024-05-18T09:49:04.334472",
  "refresh_token": "cb96f0025f869215a047f354c95b8145c17949be16b9391c",
  "refresh_expires_in": 2592000,
  "refresh_expires_at": "2024-06-17T08:49:04.334500"
}
```

### Описание ошибок

**1. 401 Unauthorized:** Ошибка аутентификации. Возникает, если предоставленный токен недействителен или истек.

**Причины**:
- Неверный `access_token` или `refresh_token`.
- Токен истек.

**Пример ответа:**

```json
{
  "detail": "Could not validate credentials"
}
```

---

## Описание системы авторизации

### Общая структура

Система авторизации состоит из нескольких модулей, которые взаимодействуют друг с другом для обеспечения безопасности и управления доступом пользователей. Основные компоненты включают:

1. **auth.py** - Основной модуль, содержащий маршруты и логику авторизации.
2. **redis_token_storage.py** - Реализация хранилища токенов на основе Redis.
3. **token_storage.py** - Абстрактный класс для хранилища токенов.
4. **db.py** - Модуль для работы с базой данных.
5. **server.py** - Основной серверный модуль, который включает маршруты и инициализирует приложение.

### Модуль auth.py

Этот модуль содержит маршруты и логику для авторизации пользователей. Основные функции включают:

- **/login**: Позволяет пользователю войти в систему, используя имя пользователя и пароль. Возвращает токены доступа и обновления.
- **/refresh**: Обновляет токен доступа, используя токен обновления.
- **/users/create**: Создает нового пользователя (только для администраторов).
- **/users/delete**: Удаляет пользователя по идентификатору (только для администраторов).
- **/users/password**: Изменяет пароль пользователя (только для администраторов).
- **/users/modify**: Изменяет данные пользователя (только для администраторов).
- **/users**: Возвращает список всех пользователей (только для администраторов).

### Модели Pydantic

Для валидации данных используются Pydantic-модели.

```python
class LoginRequest(BaseModel):
    username: str = Field(..., description="Имя пользователя для входа в систему. Должно быть уникальным и не повторяться с другими пользователями.")
    password: str = Field(..., description="Пароль пользователя. Должен быть надежным и содержать минимум 6 символов для обеспечения безопасности.")

class LoginResponse(BaseModel):
    access_token: str = Field(..., description="Токен доступа, который используется для аутентификации пользователя в системе.")
    expires_in: int = Field(..., description="Время жизни токена доступа в секундах, после которого токен становится недействительным.")
    expires_at: str = Field(..., description="Точная дата и время истечения токена доступа в формате ISO 8601.")
    refresh_token: str = Field(..., description="Токен для обновления доступа, который можно использовать для получения нового токена доступа после истечения текущего.")
    refresh_expires_in: int = Field(..., description="Время жизни токена для обновления в секундах, после которого токен становится недействительным.")
    refresh_token_expires_at: str = Field(..., description="Точная дата и время истечения токена обновления в формате ISO 8601.")
    is_admin: bool = Field(..., description="Флаг, указывающий, является ли пользователь администратором. True, если пользователь имеет права администратора.")

class RefreshRequest(BaseModel):
    refresh_token: str = Field(..., description="Токен обновления, который нужно использовать для получения нового токена доступа.")

class RefreshResponse(BaseModel):
    access_token: str = Field(..., description="Новый токен доступа, выданный пользователю.")
    expires_in: int = Field(..., description="Время жизни нового токена доступа в секундах.")
    expires_at: str = Field(..., description="Время истечения нового токена доступа в формате ISO 8601.")
    refresh_token: str = Field(..., description="Новый токен обновления, выданный пользователю.")
    refresh_expires_in: int = Field(..., description="Время жизни нового токена обновления в секундах.")
    refresh_expires_at: str = Field(..., description="Время истечения нового токена обновления в формате ISO 8601.")

class UserCreateRequest(BaseModel):
    username: constr(min_length=3, max_length=50) = Field(..., description="Имя пользователя. Должно быть уникальным и содержать от 3 до 50 символов.")
    email: EmailStr = Field(..., description="Электронная почта пользователя. Должна быть действительной и уникальной.")
    password: constr(min_length=6, max_length=50) = Field(..., description="Пароль пользователя. Должен быть надежным и содержать от 6 до 50 символов.")
    is_admin: bool = Field(..., description="Является ли пользователь администратором. True, если пользователь имеет права администратора.")

class UserResponse(BaseModel):
    id: int = Field(..., description="Уникальный идентификатор пользователя в системе.")
    username: str = Field(..., description="Имя пользователя.")
    email: str = Field(..., description="Электронная почта пользователя.")
    is_admin: bool = Field(..., description="Признак того, является ли пользователь администратором.")

class PasswordChangeRequest(BaseModel):
    user_id: int = Field(..., description="Идентификатор пользователя, для которого нужно изменить пароль.")
    new_password: str = Field(..., description="Новый пароль пользователя. Должен быть надежным и содержать минимум 6 символов.")

class PasswordChangeResponse(BaseModel):
    user_id: int = Field(..., description="Идентификатор пользователя, для которого был изменен пароль.")
    message: str = Field(..., description="Сообщение об успешной смене пароля.")

class DeleteUserRequest(BaseModel):
    user_id: int = Field(..., description="Идентификатор пользователя, которого нужно удалить.")

class DeleteUserResponse(BaseModel):
    message: str = Field(..., description="Сообщение об успешном удалении пользователя.")
```

### Функции для работы с токенами

Использование функций для создания и проверки токенов:

```python
async def create_tokens(user_id):
    access_token = binascii.hexlify(os.urandom(24)).decode()
    access_token_expires_in = 3600  # 1 час в секундах
    access_token_expires_at = datetime.utcnow() + timedelta(seconds=access_token_expires_in)
    refresh_token = binascii.hexlify(os.urandom(24)).decode()
    refresh_token_expires_in = 2592000  # 30 дней в секундах
    refresh_token_expires_at = datetime.utcnow() + timedelta(seconds=refresh_token_expires_in)

    token_storage.store_token(access_token, user_id, access_token_expires_in)
    token_storage.store_refresh_token(refresh_token, user_id, refresh_token_expires_in)

    return {
        'token': access_token,
        'expires_in': access_token_expires_in,
        'expires_at': access_token_expires_at.isoformat()
    }, {
        'token': refresh_token,
        'expires_in': refresh_token_expires_in,
        'expires_at': refresh_token_expires_at.isoformat()
    }
```

### API Маршруты

#### Авторизация пользователя

```http
POST /login
Content-Type: application/x-www-form-urlencoded

username=<username>&password=<password>
```

#### Обновление токена доступа

```http
POST /refresh
Content-Type: application/json

{
  "refresh_token": "<refresh_token>"
}
```

#### Создание нового пользователя (только для администраторов)

```http
POST /users/create
Content-Type: application/json
Authorization: Bearer <admin_access_token>

{
  "username": "<username>",
  "email": "<email>",
  "password": "<password>",
  "is_admin": <true|false>
}
```

#### Удаление пользователя (только для администраторов)

```http
DELETE /users/delete
Content-Type: application/json
Authorization: Bearer <admin_access_token>

{
  "user_id": <user_id>
}
```

#### Смена пароля пользователя (только для администраторов)

```http
PUT /users/password
Content-Type: application/json
Authorization: Bearer <admin_access_token>

{
  "user_id": <user_id>,
  "new_password": "<new_password>"
}
```

#### Изменение данных пользователя (только для администраторов)

```http
PUT /users/modify
Content-Type: application/json
Authorization: Bearer <admin_access_token>

{
  "user_id": <user_id>,
  "username": "<new_username>",
  "email": "<new_email>",
  "password": "<new_password>",
  "is_admin": <true|false>
}
```

#### Получение списка пользователей (только для администраторов)

```http
GET /users
Authorization: Bearer <admin_access_token>
```

---

## Инициализация приложения

### Модуль server.py

Инициализация приложения происходит следующим образом:

```python
from fastapi import FastAPI
from backend.auth.auth import init_app

app = FastAPI()
init_app(app)
```

---

## Заключение

Эта система авторизации обеспечивает безопасное управление пользователями и токенами, используя FastAPI, SQLAlchemy и Redis. Для добавления новых функций или изменения существующих, следуйте структуре и принципам, описанным выше.
