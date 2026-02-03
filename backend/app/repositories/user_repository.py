import json 
from pathlib import Path 
from app.models.user import User

FILE_PATH = Path(__file__).parent.parent / "usuarios.json"

class UserRepository:
    def _load(self):
        with open(FILE_PATH, "r") as f:
            data = json.load(f)
            return data

    def _save(self, data):
        with open(FILE_PATH, "w") as f:
            json.dump(data, f, indent=4)

    def get_by_email(self, email: str) -> User | None:
        data = self._load()
        if email in data["users"]:
    
            return User(**data["users"][email])
        return None
    
    def new_user(self, user_info: dict) -> None:
        data = self._load()

        new_user_data = {
            "id": user_info.get("sub", ""),
            "email": user_info.get("email", ""),
            "name": user_info.get("name", ""),
            "picture": user_info.get("picture", ""),
            "isActive": True,
            "isSuperuser": False
        }

        data["users"][user_info["email"]] = new_user_data
        self._save(data)
        return User(**new_user_data)

    def is_active(self, user: User) -> bool:
        return user.isActive

    def save(self, user: User) -> None:
        data = self._load()
        data["users"][user.email] = user.model_dump()
        self._save(data)
        