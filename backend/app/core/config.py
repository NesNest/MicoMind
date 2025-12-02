import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    CORS_ORIGINS: str = "http://localhost:5173"

    @property
    def cors_origins_list(self):
        return [origin.strip() for origin in self.CORS_ORIGINS.split(",")]

    class Config:
        env_file = ".env"


settings = Settings()
