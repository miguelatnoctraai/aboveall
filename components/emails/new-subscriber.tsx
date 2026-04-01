interface NewSubscriberEmailProps {
  email: string
}

export function NewSubscriberEmail({ email }: NewSubscriberEmailProps) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      {/* Header */}
      <div
        style={{
          backgroundColor: "#0F172A",
          padding: "24px",
          textAlign: "center" as const,
        }}
      >
        <h1 style={{ color: "#C29828", margin: 0, fontSize: "24px" }}>📧 New Subscriber</h1>
        <p style={{ color: "#94A3B8", margin: "8px 0 0 0", fontSize: "14px" }}>Claiming 15% Discount</p>
      </div>

      {/* Body */}
      <div style={{ backgroundColor: "#1E293B", padding: "32px", color: "#E2E8F0" }}>
        <div
          style={{
            backgroundColor: "#0F172A",
            padding: "24px",
            borderRadius: "8px",
            borderLeft: "4px solid #C29828",
            marginBottom: "24px",
          }}
        >
          <p style={{ margin: "0 0 8px 0", color: "#94A3B8", fontSize: "14px" }}>New Email Subscriber:</p>
          <p style={{ margin: 0, fontSize: "20px", fontWeight: "bold" }}>
            <a href={`mailto:${email}`} style={{ color: "#C29828", textDecoration: "none" }}>
              {email}
            </a>
          </p>
        </div>

        <div style={{ backgroundColor: "#334155", padding: "16px", borderRadius: "8px" }}>
          <p style={{ margin: 0, color: "#94A3B8", fontSize: "14px" }}>
            <strong style={{ color: "#E2E8F0" }}>Action Items:</strong>
          </p>
          <ul style={{ margin: "12px 0 0 0", paddingLeft: "20px", color: "#E2E8F0" }}>
            <li style={{ marginBottom: "8px" }}>Add to marketing email list</li>
            <li style={{ marginBottom: "8px" }}>Code sent: ABOVE15 (15% off, valid 30 days)</li>
            <li>Follow up if no booking in 7 days</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div style={{ backgroundColor: "#0F172A", padding: "16px", textAlign: "center" as const }}>
        <p style={{ color: "#64748B", margin: 0, fontSize: "12px" }}>Above All Maintenance & Repair</p>
      </div>
    </div>
  )
}
