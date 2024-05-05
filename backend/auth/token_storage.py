from abc import ABC, abstractmethod

class TokenStorage(ABC):
    @abstractmethod
    def store_token(self, token, user_id, expires_in):
        pass

    @abstractmethod
    def retrieve_token(self, token):
        pass

    @abstractmethod
    def delete_token(self, token):
        pass
