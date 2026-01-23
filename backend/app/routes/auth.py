import json
from fastapi import APIRouter
from app.auth.google import verify_google_token
from fastapi import HTTPException
from pathlib import Path


routes_auth = APIRouter(tags=["auth"])

FILE_PATH = Path(__file__).parent.parent / "usuarios.json"

def load_users():
    with open(FILE_PATH, "r") as f:
        data = json.load(f)
        return data

def save_users(data):
    with open(FILE_PATH, "w") as f:
        json.dump(data, f, indent=4)

def new_user(user_info: dict):
    
    data = load_users()

    new_user_data = {
        "id": user_info.get("sub", ""),
        "email": user_info.get("email", ""),
        "name": user_info.get("name", ""),
        "picture": user_info.get("picture", "")
    }
    
    data["users"][user_info["email"]] = new_user_data
    save_users(data)


def user_exists(email: str) -> bool:
    user_data = load_users()
    return email in user_data["users"]

@routes_auth.post("/auth/google")
async def google_login(token: str):

    user_info = verify_google_token(token)

    if not user_info:
        raise HTTPException(status_code=401, detail="Invalid Google token")

    if not user_exists(user_info["email"]):
        new_user(user_info)

    return {"user_info": user_info}


