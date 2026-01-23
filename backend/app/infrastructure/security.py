from jose import jwt
from app.core.config import settings 

SECRET_KEY = settings.SECRET_KEY
ALGORITHM = settings.ALGORITHM

# Mover la clave secreta
def encode_token(payload: dict) -> str:
    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)

def decode_token(token: str) -> dict:
    return jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])