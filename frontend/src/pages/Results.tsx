
import { useNavigate } from "react-router-dom";

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
      <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ marginTop: 0 }}>Dispatch Results</h1>
        <p style={{ color: "#9CA3AF", marginBottom: "32px" }}>
          Best emergency response recommendation based on simulated dispatch
          analysis.
        </p>

        {/* Two Recommendation Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
          }}
        >
          <ResultCard
            title="Best Option"
            highlight
            ambulance={bestOption.ambulance}
            hospital={bestOption.hospital}
            eta={bestOption.eta}
            beds={bestOption.beds}
            route={bestOption.route}
          />

          <ResultCard
            title="Second Option"
            ambulance={secondOption.ambulance}
            hospital={secondOption.hospital}
            eta={secondOption.eta}
            beds={secondOption.beds}
            route={secondOption.route}
          />
        </div>

        {/* Benchmark */}
        <div
          style={{
            marginTop: "32px",
            background: "#111827",
            border: "1px solid #1F2937",
            borderRadius: "20px",
            padding: "24px",
          }}
        >
          <h3 style={{ marginTop: 0 }}>CPU vs GPU Benchmark</h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <Metric label="CPU Time" value="8.6 ms" />
            <Metric label="GPU Time" value="1.2 ms" />
            <Metric label="Speedup" value="7.2× Faster" success />
          </div>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate("/dispatch")}
          style={{
            marginTop: "28px",
            padding: "14px 24px",
            background: "transparent",
            border: "1px solid #374151",
            color: "#F3F4F6",
            borderRadius: "12px",
            cursor: "pointer",
          }}
        >
          ← Back to Dispatcher
        </button>
      </div>
    </div>
  );
}

type CardProps = {
  title: string;
  ambulance: string;
  hospital: string;
  eta: string;
  beds: string;
  route: string;
  highlight?: boolean;
};

function ResultCard({
  title,
  ambulance,
  hospital,
  eta,
  beds,
  route,
  highlight = false,
}: CardProps) {
  return (
    <div
      style={{
        background: "#111827",
        border: `1px solid ${highlight ? "#10B981" : "#1F2937"}`,
        borderRadius: "22px",
        padding: "24px",
      }}
    >
      <div
        style={{
          color: highlight ? "#10B981" : "#9CA3AF",
          fontWeight: 600,
          marginBottom: "18px",
        }}
      >
        {title}
      </div>

      <Info label="Ambulance ID" value={ambulance} />
      <Info label="Hospital" value={hospital} />
      <Info label="ETA" value={eta} />
      <Info label="Trauma Beds" value={beds} />
      <Info label="Route" value={route} />
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <div style={{ fontSize: "13px", color: "#9CA3AF" }}>{label}</div>
      <div style={{ marginTop: "4px", fontWeight: 600 }}>{value}</div>
    </div>
  );
}

function Metric({
  label,
  value,
  success = false,
}: {
  label: string;
  value: string;
  success?: boolean;
}) {
  return (
    <div
      style={{
        background: "#0B1020",
        borderRadius: "14px",
        padding: "18px",
        border: "1px solid #374151",
      }}
    >
      <div style={{ color: "#9CA3AF", fontSize: "14px" }}>{label}</div>
      <div
        style={{
          marginTop: "8px",
          fontSize: "24px",
          fontWeight: 700,
          color: success ? "#10B981" : "#F3F4F6",
        }}
      >
        {value}
      </div>
    </div>
  );
}