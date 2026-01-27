from fastapi import APIRouter
from app.auth.google import verify_google_token
from fastapi import HTTPException
from pathlib import Path
from app.services.auth_service import AuthService
from fastapi import Depends



routes_auth = APIRouter(tags=["auth"])

FILE_PATH = Path(__file__).parent.parent / "usuarios.json"


@routes_auth.post("/auth/google")
async def google_login(token: str, service: AuthService = Depends()):

    result = service.login_with_google(token)

    if not result:
        raise HTTPException(status_code=401, detail="Invalid Google token")
    
    return result

