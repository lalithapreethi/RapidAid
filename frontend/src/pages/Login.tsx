import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Card from "../components/ui/Card";

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
      <Card width="380px">
        <p
          style={{
            color: "#6C63FF",
            marginBottom: "8px",
            fontWeight: 600,
          }}
        >
          RapidAid
        </p>

        <h1 style={{ fontSize: "32px", marginBottom: "8px" }}>
          Dispatcher Login
        </h1>

        <p style={{ color: "#9CA3AF", marginBottom: "28px" }}>
          Smart Emergency Dispatch Platform
        </p>

        <Input
          label="Employee ID"
          placeholder="EMP1024"
          value={employeeId}
          onChange={setEmployeeId}
        />

        <Input
          label="Password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={setPassword}
        />

        <Button onClick={handleLogin}>Continue</Button>
      </Card>
    </div>
  );
}