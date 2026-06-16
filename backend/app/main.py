import app.config

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.chat import (
    router as chat_router
)

app = FastAPI(
    title="AI Portfolio Assistant"
)

# CORS

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
         "https://ai-portfolio-seven-kappa-95.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes

app.include_router(
    chat_router,
    prefix="/api"
)

@app.get("/")
def root():

    return {
        "message":
        "AI Portfolio Assistant Running"
    }