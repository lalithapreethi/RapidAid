
from pydantic import BaseModel

# ---------- Request ----------

class DispatchRequest(BaseModel):
    location: str
    emergency_type: str
    severity: str
    patients: int


# ---------- Reusable Response ----------

class Recommendation(BaseModel):
    ambulance: str
    hospital: str
    eta: str
    beds: int
    route: str


class Benchmark(BaseModel):
    cpu_ms: float
    gpu_ms: float
    speedup: float


# ---------- Final Response ----------

class DispatchResponse(BaseModel):
    best_option: Recommendation
    second_option: Recommendation
    benchmark: Benchmark