from app.repositories.user_repository import UserRepository
from app.auth.google import verify_google_token
from app.auth.jwt import create_jwt
from fastapi import Depends


class AuthService:
    def __init__(self, user_repo: UserRepository = Depends()): 
        self.user_repo = user_repo

    def login_with_google(self, token: str ) -> str:
        user_info = verify_google_token(token) 

        if not user_info: 
            return None

        user = self.user_repo.get_by_email(user_info["email"])
        if not user:
            self.user_repo.new_user(user_info)
        
        jwt_token = create_jwt(user.model_dump())

        return {"access_token": jwt_token, "token_type": "bearer", "user": user}
