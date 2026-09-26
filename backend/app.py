from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.dispatch import router as dispatch_router

app = FastAPI(
    title="RapidAid API",
    version="1.0.0"
)

# Allow React frontend to access the API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(dispatch_router)

@app.get("/")
def root():
    return {
        "status": "running",
        "message": "RapidAid Backend is Live"
    }