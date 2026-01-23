from app.infrastructure.security import encode_token

def login_user(user): 
    payload = {"username": user.username, "email": user.email} 
    return encode_token(payload)