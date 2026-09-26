type InputProps = {
  label: string;
  type?: string;
  placeholder?: string;
  value: string | number;
  onChange: (value: string) => void;
};

export default function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}: InputProps) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label
        style={{
          display: "block",
          marginBottom: "8px",
          color: "#F3F4F6",
          fontWeight: 500,
        }}
      >
        {label}
      </label>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          padding: "14px",
          borderRadius: "12px",
          border: "1px solid #374151",
          background: "#0B1020",
          color: "#F3F4F6",
          outline: "none",
          boxSizing: "border-box",
          fontSize: "15px",
        }}
      />
    </div>
  );
}