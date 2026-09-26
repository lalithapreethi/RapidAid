import { useLocation, useNavigate } from "react-router-dom";

import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import RecommendationCard from "../components/cards/RecommendationCard";
import MetricCard from "../components/cards/MetricCard";

export default function Results() {
  const navigate = useNavigate();
  const location = useLocation();

  const data: any = location.state;

  // If someone opens /results directly
  if (!data) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#050816",
          color: "#F3F4F6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <Card width="420px">
          <h2>No Dispatch Data</h2>
          <p style={{ color: "#9CA3AF", marginBottom: "20px" }}>
            Please analyze an emergency first.
          </p>

          <Button onClick={() => navigate("/dispatch")}>
            Go to Dispatcher
          </Button>
        </Card>
      </div>
    );
  }

  const bestOption = data.best_option;
  const secondOption = data.second_option;
  const benchmark = data.benchmark;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050816",
        color: "#F3F4F6",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "24px 48px",
          borderBottom: "1px solid #1F2937",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h2 style={{ margin: 0, color: "#6C63FF" }}>RapidAid</h2>
          <p style={{ margin: 0, color: "#9CA3AF" }}>
            Emergency Dispatch Platform
          </p>
        </div>

        <div
          style={{
            background: "#111827",
            padding: "10px 18px",
            borderRadius: "12px",
            border: "1px solid #374151",
          }}
        >
          EMP1024
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 24px",
        }}
      >
        <h1 style={{ marginTop: 0 }}>Dispatch Results</h1>

        <p style={{ color: "#9CA3AF", marginBottom: "32px" }}>
          Best emergency response recommendation based on dispatch analysis.
        </p>

        {/* Recommendation Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
          }}
        >
          <RecommendationCard
            title="Best Option"
            recommended
            ambulance={bestOption.ambulance}
            hospital={bestOption.hospital}
            eta={bestOption.eta}
            beds={`${bestOption.beds} Available`}
            route={bestOption.route}
          />

          <RecommendationCard
            title="Second Option"
            ambulance={secondOption.ambulance}
            hospital={secondOption.hospital}
            eta={secondOption.eta}
            beds={`${secondOption.beds} Available`}
            route={secondOption.route}
          />
        </div>

        {/* Benchmark */}
        <div style={{ marginTop: "32px" }}>
          <Card>
            <h2 style={{ marginTop: 0, marginBottom: "24px" }}>
              CPU vs GPU Benchmark
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: "20px",
              }}
            >
              <MetricCard
                label="CPU Time"
                value={`${benchmark.cpu_ms} ms`}
              />

              <MetricCard
                label="GPU Time"
                value={`${benchmark.gpu_ms} ms`}
              />

              <MetricCard
                label="Speedup"
                value={`${benchmark.speedup}× Faster`}
                success
              />
            </div>
          </Card>
        </div>

        {/* Back Button */}
        <div style={{ marginTop: "24px", maxWidth: "220px" }}>
          <Button
            variant="secondary"
            onClick={() => navigate("/dispatch")}
          >
            ← Back
          </Button>
        </div>
      </div>
    </div>
  );
}