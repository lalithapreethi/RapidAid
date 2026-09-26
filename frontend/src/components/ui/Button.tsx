import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
};

export default function Button({
  children,
  onClick,
  variant = "primary",
  type = "button",
}: ButtonProps) {
  const primary = {
    background: "#6C63FF",
    color: "#FFFFFF",
    border: "none",
  };

  const secondary = {
    background: "transparent",
    color: "#F3F4F6",
    border: "1px solid #374151",
  };

  const style = variant === "primary" ? primary : secondary;

  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        width: "100%",
        padding: "14px",
        borderRadius: "14px",
        fontWeight: 600,
        fontSize: "16px",
        cursor: "pointer",
        transition: "0.2s ease",
        ...style,
      }}
      onMouseOver={(e) => {
        if (variant === "primary") {
          e.currentTarget.style.background = "#7C73FF";
        }
      }}
      onMouseOut={(e) => {
        if (variant === "primary") {
          e.currentTarget.style.background = "#6C63FF";
        }
      }}
    >
      {children}
    </button>
  );
}