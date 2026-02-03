from app.auth import jwt
from app.models.user import User
from app.repositories.user_repository import UserRepository
from app.auth.google import verify_google_token
from app.auth.jwt import create_jwt
from fastapi import Depends, HTTPException
from app.infrastructure.security import decode_token


class AuthService:
    def __init__(self, user_repo: UserRepository = Depends()): 
        self.user_repo = user_repo

    def login_with_google(self, token: str ) -> str:
        user_info = verify_google_token(token)  

        if not user_info:
            return None
        
        user = self.user_repo.get_by_email(user_info["email"])

        if not user:
            user = self.user_repo.new_user(user_info)
        
        elif not user.isActive:
            user.isActive = True
            self.user_repo.save(user)

        jwt_token = create_jwt(user.model_dump())

        return {"access_token": jwt_token, "token_type": "bearer", "user": user}

    def _get_current_active_user(self, token: str) -> User: 
        try: 
            payload = decode_token(token) 
            user = self.user_repo.get_by_email(payload.get("email")) 
            if not user: 
                raise HTTPException(status_code=404, detail="User not found") 
            return user 
    
        except jwt.ExpiredSignatureError: 
            raise HTTPException(status_code=401, detail="Token expired") 
        except jwt.InvalidTokenError: 
            raise HTTPException(status_code=401, detail="Invalid token")
