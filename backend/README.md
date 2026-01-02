# Backend

![Python](https://img.shields.io/badge/python-3.11-blue)

This is the backend service for **MicoMind**, built with **FastAPI**.  
It provides the API and business logic that powers the frontend application.

## Project Structure

```text
backend/
├── app/
│ ├── api/ # FastAPI route definitions (e.g., `routes.py`)
│ ├── application/ # Business logic, services, use cases
│ ├── core/ # Core configuration and utilities
│ │ ├── `config.py `# Centralized environment settings using Pydantic
│ ├── domain/ # Interfaces, abstractions, contracts
│ ├── models/ # Data models (Pydantic, SQLAlchemy, etc.)
│ │ └── `__init__.py` # Core module initializer
│ └── `main.py`# FastAPI entry point
├── requirements.txt # Backend dependencies
├── .env # Environment variables for local development
├── `README.md` # Backend documentation
└── venv/ # Python virtual environment
```

## Prerequisites

- Python 3.10+ installed
- Git installed
- Recommended: a virtual environment (`venv`) to isolate dependencies

## Setup

### 1. Create a virtual environment

```bash
python -m venv env
```

### 2. Activate environment

- **linux/macOS (bash/zsh):**

```bash
source env/bin/activate
```

- **Windows PowerShell:**

```bash
.\env\Scripts\Activate.ps1
```

- **Windows CMD:**

```bash
env\Scripts\Activate.bat
```

You should see (env) at the beginning of your terminal prompt.

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### Environment Configuration (.env)

This project uses a [.env](.env) file to manage environment variables, including CORS settings.

#### Purpose

The [.env](.env) file allows you to define which URLs are permitted to access the backend API. This is especially important when connecting the frontend application to the backend during development or deployment.

## Run the backend

Start the FastAPI server with Uvicorn:

```bash
uvicorn app.main:app --reload
```

- app.main:app → points to the app instance inside main.py
- --reload → automatically restarts the server when code changes (development mode)

### Access

- API root: [http://localhost:8000](http://localhost:8000)

### Style & Conventions

- PEP8: Python style guide
- Commit messages: follow Conventional Commits
