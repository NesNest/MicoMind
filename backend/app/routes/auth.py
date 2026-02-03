from fastapi import APIRouter
from fastapi import HTTPException
from pathlib import Path
from app.services.auth_service import AuthService
from fastapi import Depends
from app.models.auth import TokenRequest
from app.models.user import User
from app.services.auth_service import AuthService
from app.dependencies.auth_dependencies import get_current_active_user


routes_auth = APIRouter(tags=["auth"])

FILE_PATH = Path(__file__).parent.parent / "usuarios.json"


@routes_auth.post("/auth/google")
async def google_login(request: TokenRequest, service: AuthService = Depends()):

    result = service.login_with_google(request.token)

    if not result:
        raise HTTPException(status_code=401, detail="Invalid Google token")
    
    return result

@routes_auth.get("/auth/me")
def read_current_user(current_user: User = Depends(get_current_active_user)): 
    return current_user