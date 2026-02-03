from http.client import HTTPException
from jose import jwt
from datetime import datetime, timedelta, timezone
from app.core.config import settings

SECRET_KEY = settings.SECRET_KEY
ALGORITHM = settings.ALGORITHM

def create_jwt(user: dict, expires: timedelta = timedelta(minutes=10)) -> str:
    payload = {
        "user_id": user["id"], 
        "email": user["email"], 
        "name": user.get("name"), 
        "exp": datetime.now(timezone.utc) + expires
    }
    token = jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)
    return token

def verify_jwt(token: str) -> dict | None:
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except jwt.ExpiredSignatureError:  
        raise HTTPException(status_code=401, detail="Token expirado") 
    except jwt.InvalidTokenError: raise HTTPException(status_code=401, detail="Token inválido")