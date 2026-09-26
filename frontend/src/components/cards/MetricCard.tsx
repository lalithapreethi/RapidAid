type MetricCardProps = {
  label: string;
  value: string;
  success?: boolean;
};

export default function MetricCard({
  label,
  value,
  success = false,
}: MetricCardProps) {
  return (
    <div
      style={{
        background: "#0B1020",
        border: "1px solid #374151",
        borderRadius: "16px",
        padding: "20px",
      }}
    >
      <p
        style={{
          color: "#9CA3AF",
          fontSize: "14px",
          margin: 0,
        }}
      >
        {label}
      </p>

      <h2
        style={{
          marginTop: "10px",
          marginBottom: 0,
          color: success ? "#10B981" : "#F3F4F6",
          fontSize: "28px",
        }}
      >
        {value}
      </h2>
    </div>
  );
}