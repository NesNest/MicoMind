from google.oauth2 import id_token
from google.auth.transport import requests

def verify_google_token(token: str) -> dict | None:
#     try:
#         idinfo = id_token.verify_oauth2_token(token, requests.Request(), audience=None)
#         return idinfo
    
#     except ValueError:
#         return None
    return { 
            "sub": "1234567890", 
            "email": "test@example.com", 
            "name": "Usuario Prueba", 
            "picture": "https://example.com/foto.png" 
    }