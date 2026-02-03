from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from app.services.auth_service import AuthService
from app.models.user import User

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/google")


def get_current_user(token: str = Depends(oauth2_scheme), service: AuthService = Depends()) -> User:
    return service._get_current_active_user(token)

def get_current_active_user(user: User = Depends(get_current_user)) -> User:
    if not user.isActive:
        raise HTTPException(status_code=400, detail="Inactive user")
    return user
