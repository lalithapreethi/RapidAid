type RecommendationCardProps = {
  title: string;
  ambulance: string;
  hospital: string;
  eta: string;
  beds: string;
  route: string;
  recommended?: boolean;
};

export default function RecommendationCard({
  title,
  ambulance,
  hospital,
  eta,
  beds,
  route,
  recommended = false,
}: RecommendationCardProps) {
  return (
    <div
      style={{
        background: "#111827",
        border: `1px solid ${recommended ? "#10B981" : "#1F2937"}`,
        borderRadius: "22px",
        padding: "24px",
        position: "relative",
      }}
    >
      {recommended && (
        <div
          style={{
            position: "absolute",
            top: "18px",
            right: "18px",
            background: "#10B98122",
            color: "#10B981",
            border: "1px solid #10B98155",
            borderRadius: "999px",
            padding: "6px 12px",
            fontSize: "12px",
            fontWeight: 600,
          }}
        >
          Recommended
        </div>
      )}

      <h3
        style={{
          marginTop: 0,
          marginBottom: "20px",
          color: recommended ? "#10B981" : "#F3F4F6",
        }}
      >
        {title}
      </h3>

      <InfoRow label="Ambulance ID" value={ambulance} />
      <InfoRow label="Hospital" value={hospital} />
      <InfoRow label="ETA" value={eta} />
      <InfoRow label="Trauma Beds" value={beds} />
      <InfoRow label="Route" value={route} />
    </div>
  );
}

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <div
        style={{
          color: "#9CA3AF",
          fontSize: "13px",
          marginBottom: "4px",
        }}
      >
        {label}
      </div>

      <div
        style={{
          fontWeight: 600,
          fontSize: "18px",
        }}
      >
        {value}
      </div>
    </div>
  );
}