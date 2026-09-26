import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Card from "../components/ui/Card";

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
        <Card width="700px">
          <h1 style={{ marginTop: 0 }}>Emergency Details</h1>

          <p style={{ color: "#9CA3AF", marginBottom: "32px" }}>
            Enter the incident information to analyze the best ambulance and
            hospital.
          </p>

          <Input
            label="Incident Location"
            placeholder="Banjara Hills, Hyderabad"
            value={location}
            onChange={setLocation}
          />

          {/* Emergency Type */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: 500,
              }}
            >
              Emergency Type
            </label>

            <select
              value={emergencyType}
              onChange={(e) => setEmergencyType(e.target.value)}
              style={selectStyle}
            >
              <option>Road Accident</option>
              <option>Cardiac Arrest</option>
              <option>Fire Injury</option>
              <option>Stroke</option>
            </select>
          </div>

          {/* Severity */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: 500,
              }}
            >
              Severity
            </label>

            <select
              value={severity}
              onChange={(e) => setSeverity(e.target.value)}
              style={selectStyle}
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

          <Input
            label="Number of Patients"
            type="number"
            value={patients}
            onChange={(value) => setPatients(Number(value))}
          />

          <Button onClick={handleAnalyze}>
            Analyze & Find Best Option
          </Button>
        </Card>
      </div>
    </div>
  );
}

const selectStyle = {
  width: "100%",
  padding: "14px",
  borderRadius: "12px",
  border: "1px solid #374151",
  background: "#0B1020",
  color: "#F3F4F6",
  boxSizing: "border-box" as const,
  fontSize: "15px",
};