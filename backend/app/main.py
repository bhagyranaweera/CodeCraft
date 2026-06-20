from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import get_settings
from app.routers import auth, contact, content, quotes


settings = get_settings()

app = FastAPI(title=settings.app_name)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix=settings.api_prefix)
app.include_router(contact.router, prefix=settings.api_prefix)
app.include_router(quotes.router, prefix=settings.api_prefix)
app.include_router(content.router, prefix=settings.api_prefix)


@app.get("/health")
def health_check() -> dict[str, str]:
    return {"status": "ok"}
