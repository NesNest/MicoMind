from google.oauth2 import id_token
from google.auth.transport import requests

def verify_google_token(token: str) -> dict | None:
    try:
        idinfo = id_token.verify_oauth2_token(token, requests.Request(), audience=None)
        return idinfo
    
    except ValueError:
        print("Invalid token")
        return None
