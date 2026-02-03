from pydantic import BaseModel

class User(BaseModel):
    id: str | None = None
    email: str
    name: str
    picture: str | None = None
    isActive: bool = True
    isSuperuser: bool = False

