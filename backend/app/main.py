from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.exceptions import HTTPException
from app.core.config import settings
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from typing import Annotated
from jose import jwt

app = FastAPI()

app.add_middleware(
# Configuración de CORS
    CORSMiddleware,
    allow_origins=settings.cors_origins_list, # URL del frontend local
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


users = {
    "angel": {"username": "angel", "email": "edgy@angel.com", "password": "angeledgy"},
    "luis": {"username": "luistonto", "email": "luis@angel.com", "password": "angeledgy"}
}
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# Mover la clave secreta
def encode_token(payload: dict) -> str:
    token = jwt.encode(payload, "clave", algorithm="HS256")
    return token

def decode_token(token: Annotated[str, Depends(oauth2_scheme)]) -> dict:
    data = jwt.decode(token,  "clave", algorithms="HS256")
    user = users.get(data["username"])
    return user


@app.get("/", tags=["main"])    
def read_root():
    return {"Hello": "World"}

@app.post("/token", tags=["token"])
def login(form_data: Annotated[OAuth2PasswordRequestForm, Depends()]):
    user = users.get(form_data.username)
    if not user:
        raise HTTPException(status_code=400, detail="No username match")
    payload = {
        "username": user["username"], 
        "email": user["email"]}
    token = encode_token(payload)
    return { "access_token": token, "token_type": "bearer" }

@app.get("/users/profile", tags=["profile"])
def profile(token: Annotated[dict, Depends(decode_token)]):
    return token