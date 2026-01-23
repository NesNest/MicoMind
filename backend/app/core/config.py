from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    CORS_ORIGINS: str = "http://localhost:5173"
    SECRET_KEY: str = "hola"
    ALGORITHM: str = "HS256"

    @property
    def cors_origins_list(self):
        return [origin.strip() for origin in self.CORS_ORIGINS.split(",")]

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")

settings = Settings()



