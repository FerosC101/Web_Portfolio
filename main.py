from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend requests
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to my FastAPI backend!"}

@app.get("/api/portfolio")
def get_portfolio():
    return {
        "title": "Welcome to My Portfolio",
        "description": "Showcasing my projects, skills, and experiences",
    }
