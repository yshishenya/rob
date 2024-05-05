import redis
from .token_storage import TokenStorage
import logging
import os

logger = logging.getLogger(__name__)


class RedisTokenStorage(TokenStorage):
    def __init__(self):
        REDIS_HOST = 'redis'  # Use 'localhost' if connecting locally
        REDIS_PORT = os.environ.get('REDIS_PORT', 6379)
        REDIS_PASSWORD = os.environ.get('REDIS_PASSWORD')
        logger.debug(f"Connecting to Redis at {REDIS_HOST}:{REDIS_PORT} with password set: {'yes' if REDIS_PASSWORD else 'no'}")
        self.redis_client = redis.Redis(host=REDIS_HOST, port=REDIS_PORT, db=0, password=REDIS_PASSWORD)
        try:
            self.redis_client.ping()
            logger.info("Connected to Redis successfully.")
        except redis.ConnectionError as e:
            logger.error(f"Failed to connect to Redis at {REDIS_HOST}:{REDIS_PORT}: {e}")
            raise ConnectionError(f"Failed to connect to Redis: {e}")

    def store_token(self, token, user_id, expires_in):
        # Сохраняем токен с временем жизни
        self.redis_client.setex(f"token:{token}", expires_in, user_id)
        # Добавляем токен в множество токенов пользователя
        self.redis_client.sadd(f"user:{user_id}:tokens", token)
        # Устанавливаем время жизни для каждого токена в множестве индивидуально
        # Это строка не нужна, так как TTL устанавливается для каждого токена при его создании
        # self.redis_client.expire(f"user:{user_id}:tokens", expires_in)
        logger.info(f"Token for user {user_id} stored successfully with expiration of {expires_in} seconds.")


    def retrieve_token(self, token):
        # Получаем user_id по токену
        user_id = self.redis_client.get(f"token:{token}")
        if user_id is None:
            return None
        return user_id.decode()

    def delete_token(self, token):
        # Получаем user_id по токену
        user_id = self.redis_client.get(f"token:{token}")
        if user_id:
            user_id = user_id.decode()
            # Удаляем токен
            self.redis_client.delete(f"token:{token}")
            # Удаляем токен из списка токенов пользователя
            self.redis_client.srem(f"user:{user_id}:tokens", token)
            logger.info(f"Token {token} for user {user_id} deleted successfully.")
        else:
            logger.warning(f"Attempted to delete non-existing token: {token}")

    def delete_tokens_by_user_id(self, user_id):
        # Получаем все токены пользователя
        tokens = self.redis_client.smembers(f"user:{user_id}:tokens")
        if tokens:
            # Создаем pipeline
            pipeline = self.redis_client.pipeline()
            # Удаляем каждый токен
            for token in tokens:
                pipeline.delete(f"token:{token.decode()}")
            # Удаляем список токенов пользователя
            pipeline.delete(f"user:{user_id}:tokens")
            # Выполняем все команды в pipeline
            pipeline.execute()

    def store_refresh_token(self, refresh_token, user_id, expires_in):
        # Сохраняем токен обновления с временем жизни
        self.redis_client.setex(f"refresh_token:{refresh_token}", expires_in, user_id)
        # Добавляем токен обновления в множество токенов обновления пользователя
        self.redis_client.sadd(f"user:{user_id}:refresh_tokens", refresh_token)
        logger.info(f"Refresh token for user {user_id} stored successfully with expiration of {expires_in} seconds.")

    def retrieve_user_id_by_refresh_token(self, refresh_token):
        user_id = self.redis_client.get(f"refresh_token:{refresh_token}")
        if user_id is None:
            logger.error(f"Failed to retrieve user ID for refresh token: {refresh_token}")
            return None
        return user_id.decode()

    def delete_refresh_token(self, refresh_token):
        user_id = self.redis_client.get(f"refresh_token:{refresh_token}")
        if user_id:
            user_id = user_id.decode()
            self.redis_client.srem(f"user:{user_id}:refresh_tokens", refresh_token)
            self.redis_client.delete(f"refresh_token:{refresh_token}")

    def delete_all_refresh_tokens_by_user_id(self, user_id):
        refresh_tokens = self.redis_client.smembers(f"user:{user_id}:refresh_tokens")
        if refresh_tokens:
            # Создаем pipeline
            pipeline = self.redis_client.pipeline()
            # Удаляем каждый токен обновления
            for refresh_token in refresh_tokens:
                pipeline.delete(f"refresh_token:{refresh_token.decode()}")
            # Удаляем список токенов обновления пользователя
            pipeline.delete(f"user:{user_id}:refresh_tokens")
            # Выполняем все команды в pipeline
            pipeline.execute()


