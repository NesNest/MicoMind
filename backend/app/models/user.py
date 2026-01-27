from pydantic import BaseModel

class User(BaseModel):
    id: str | None = None
    email: str
    name: str
    picture: str | None = None
    isActive: bool = True
    isSuperuser: bool = False


import hashlib 
import string

def derive_password(base: str, length=20) -> str: 
    print(base)
    # Hash de tu clave base 
    h = hashlib.sha256(base.encode()).hexdigest() 
    print(h)
    # Mezcla con caracteres más variados 
    alphabet = string.ascii_letters + string.digits + string.punctuation 
    return ''.join(alphabet[int(h[i:i+2], 16) % len(alphabet)] for i in range(0, length*2, 2)) 
print(derive_password("ada"))