# Руководство по использованию API

## Введение

Данное руководство предназначено для фронтенд-разработчиков и описывает основные маршруты для взаимодействия с бэкендом через API. Все запросы к API должны быть авторизованы с использованием токена доступа.

## Аутентификация

### Получение токенов

Для выполнения аутентификации и получения токенов доступа и обновления, отправьте POST-запрос на `/api/login`, указав имя пользователя и пароль в теле запроса в формате JSON.

```bash
curl -X POST https://dev.rob.pro-4.ru/login \
 -H "Content-Type: application/json" \
 -d '{"username":"user", "password":"password"}'
```

В ответе вы получите два токена: `access_token` для доступа к защищенным маршрутам и `refresh_token` для обновления `access_token` по его истечении.

### Использование access_token

Для доступа к защищенным маршрутам /ws включите полученный `access_token` в запрос. `access_token` имеет ограниченный срок действия (1 час).

```javascript
const listenToSockEvents = () => {
const { protocol, host, pathname } = window.location;
const token = "токен";
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
```

### Примеры получения ответа при аутентификации

После успешного выполнения запроса на аутентификацию, API возвращает JSON с токенами.

```json
{
  "access_token": "eyJ0еXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2MDc5MzU2MDB9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  "expires_at": "2023-04-12T12:00:00Z",
  "refresh_token": "def50200d13897d85e02c8c2c0a5...",
  "refresh_token_expires_at": "2023-05-12T12:00:00Z"
}
```

## Обновление токена доступа

### Использование refresh_token

Когда срок действия `access_token` подходит к концу, вы можете использовать `refresh_token` для получения нового токена доступа. Для этого отправьте POST-запрос на `/api/refresh`, передав `refresh_token` в теле запроса.

```bash
curl -X POST https://dev.volter.pro-4.ru/api/refresh \
 -H "Content-Type: application/json" \
 -d '{"refresh_token":"<ваш_refresh_token>"}'
```

В ответ на успешный запрос вы получите новый `access_token` с обновленным сроком действия.

### Пример успешного ответа:

После успешного выполнения запроса на обновление токена доступа, вы получите JSON с новым `access_token`.

```json
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE2MDc5NDIwMDB9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5d",
  "expires_at": "2023-04-12T14:00:00Z"
}
```

### Ошибки

В случае ошибки, например, при использовании недействительных учетных данных или истекшего `refresh_token`, сервер вернет соответствующее сообщение об ошибке.

```json
{
  "error": "Invalid or expired refresh token"
}
```
