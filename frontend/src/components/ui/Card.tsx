import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  width?: string;
};

export default function Card({
  children,
  width = "100%",
}: CardProps) {
  return (
    <div
      style={{
        width,
        background: "#111827",
        border: "1px solid #1F2937",
        borderRadius: "24px",
        padding: "32px",
      }}
    >
      {children}
    </div>
  );
}