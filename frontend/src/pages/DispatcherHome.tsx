import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DispatcherHome() {
  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [emergencyType, setEmergencyType] = useState("Road Accident");
  const [severity, setSeverity] = useState("High");
  const [patients, setPatients] = useState(1);

  const handleAnalyze = () => {
    navigate("/results");
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

      {/* Main Form */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "48px 24px",
        }}
      >
        <div
          style={{
            width: "700px",
            background: "#111827",
            border: "1px solid #1F2937",
            borderRadius: "24px",
            padding: "32px",
          }}
        >
          <h1 style={{ marginTop: 0 }}>Emergency Details</h1>
          <p style={{ color: "#9CA3AF", marginBottom: "32px" }}>
            Enter the incident information to analyze the best ambulance and
            hospital.
          </p>

          {/* Location */}
          <div style={{ marginBottom: "20px" }}>
            <label>Incident Location</label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Banjara Hills, Hyderabad"
              style={inputStyle}
            />
          </div>

          {/* Emergency Type */}
          <div style={{ marginBottom: "20px" }}>
            <label>Emergency Type</label>
            <select
              value={emergencyType}
              onChange={(e) => setEmergencyType(e.target.value)}
              style={inputStyle}
            >
              <option>Road Accident</option>
              <option>Cardiac Arrest</option>
              <option>Fire Injury</option>
              <option>Stroke</option>
            </select>
          </div>

          {/* Severity */}
          <div style={{ marginBottom: "20px" }}>
            <label>Severity</label>
            <select
              value={severity}
              onChange={(e) => setSeverity(e.target.value)}
              style={inputStyle}
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

          {/* Patients */}
          <div style={{ marginBottom: "28px" }}>
            <label>Number of Patients</label>
            <input
              type="number"
              min={1}
              value={patients}
              onChange={(e) => setPatients(Number(e.target.value))}
              style={inputStyle}
            />
          </div>

          <button onClick={handleAnalyze} style={buttonStyle}>
            Analyze & Find Best Option
          </button>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  marginTop: "8px",
  padding: "14px",
  borderRadius: "12px",
  border: "1px solid #374151",
  background: "#0B1020",
  color: "#F3F4F6",
  boxSizing: "border-box" as const,
};

const buttonStyle = {
  width: "100%",
  padding: "16px",
  borderRadius: "14px",
  border: "none",
  background: "#6C63FF",
  color: "white",
  fontWeight: 600,
  cursor: "pointer",
};