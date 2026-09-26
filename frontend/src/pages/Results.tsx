import { useNavigate } from "react-router-dom";

import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import RecommendationCard from "../components/cards/RecommendationCard";
import MetricCard from "../components/cards/MetricCard";

export default function Results() {
  const navigate = useNavigate();

  const bestOption = {
    ambulance: "A-12",
    hospital: "Apollo Jubilee Hills",
    eta: "6 min",
    beds: "3 Available",
    route: "NH44 → Road 36",
  };

  const secondOption = {
    ambulance: "A-08",
    hospital: "Yashoda Somajiguda",
    eta: "9 min",
    beds: "5 Available",
    route: "Road 45 → Punjagutta",
  };

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

      {/* Content */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 24px",
        }}
      >
        <h1 style={{ marginTop: 0 }}>Dispatch Results</h1>

        <p style={{ color: "#9CA3AF", marginBottom: "32px" }}>
          Best emergency response recommendation based on simulated dispatch
          analysis.
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
            beds={bestOption.beds}
            route={bestOption.route}
          />

          <RecommendationCard
            title="Second Option"
            ambulance={secondOption.ambulance}
            hospital={secondOption.hospital}
            eta={secondOption.eta}
            beds={secondOption.beds}
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
              <MetricCard label="CPU Time" value="8.6 ms" />
              <MetricCard label="GPU Time" value="1.2 ms" />
              <MetricCard
                label="Speedup"
                value="7.2× Faster"
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