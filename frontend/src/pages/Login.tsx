
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigate("/dispatch");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050816",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, sans-serif",
        color: "#F3F4F6",
      }}
    >
      <div
        style={{
          width: "380px",
          background: "#111827",
          border: "1px solid #1F2937",
          borderRadius: "24px",
          padding: "32px",
        }}
      >
        <p style={{ color: "#6C63FF", marginBottom: "8px", fontWeight: 600 }}>
          RapidAid
        </p>

        <h1 style={{ fontSize: "32px", marginBottom: "8px" }}>
          Dispatcher Login
        </h1>

        <p style={{ color: "#9CA3AF", marginBottom: "28px" }}>
          Smart Emergency Dispatch Platform
        </p>

        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", marginBottom: "8px" }}>
            Employee ID
          </label>
          <input
            type="text"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            placeholder="EMP1024"
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "12px",
              border: "1px solid #374151",
              background: "#0B1020",
              color: "white",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ marginBottom: "24px" }}>
          <label style={{ display: "block", marginBottom: "8px" }}>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "12px",
              border: "1px solid #374151",
              background: "#0B1020",
              color: "white",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "14px",
            border: "none",
            borderRadius: "14px",
            background: "#6C63FF",
            color: "white",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}