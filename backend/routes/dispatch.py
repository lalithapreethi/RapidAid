
from fastapi import APIRouter
from schemas import DispatchRequest, DispatchResponse, Recommendation, Benchmark

router = APIRouter(prefix="/dispatch", tags=["Dispatch"])


@router.get("/test")
def test_dispatch():
    return {"message": "Dispatch route working"}


@router.post("/analyze", response_model=DispatchResponse)
def analyze_dispatch(request: DispatchRequest):

    best = Recommendation(
        ambulance="A-12",
        hospital="Apollo Jubilee Hills",
        eta="6 min",
        beds=3,
        route="NH44 → Road 36"
    )

    second = Recommendation(
        ambulance="A-08",
        hospital="Yashoda Somajiguda",
        eta="9 min",
        beds=5,
        route="Road 45 → Punjagutta"
    )

    benchmark = Benchmark(
        cpu_ms=8.6,
        gpu_ms=1.2,
        speedup=7.2
    )

    return DispatchResponse(
        best_option=best,
        second_option=second,
        benchmark=benchmark
    )