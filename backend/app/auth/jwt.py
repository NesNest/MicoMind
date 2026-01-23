import jwt
from datetime import datetime, timedelta, timezone
from app.core.config import settings

def create_jwt(user_id: str, expires: timedelta = timedelta(hours=60)) -> str:
    payload = {
        "sub": user_id,
        "exp": datetime.now(timezone.utc) + expires
    }
    token = jwt.encode(payload, settings.SECRET_KEY, settings.ALGORITHM)
    return token

def verify_jwt(token: str) -> dict | None:
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        return payload
    except jwt.ExpiredSignatureError:
        return None 