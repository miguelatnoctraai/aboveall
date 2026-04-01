interface LeadNotificationEmailProps {
  name: string
  email: string
  phone: string
  company?: string
  service: string
  propertyType: string
  urgency: string
  details: string
}

export function LeadNotificationEmail({
  name,
  email,
  phone,
  company,
  service,
  propertyType,
  urgency,
  details,
}: LeadNotificationEmailProps) {
  const isEmergency = urgency === "emergency"

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      {/* Header */}
      <div
        style={{
          backgroundColor: isEmergency ? "#DC2626" : "#0F172A",
          padding: "24px",
          textAlign: "center" as const,
        }}
      >
        <h1 style={{ color: "#C29828", margin: 0, fontSize: "24px" }}>
          {isEmergency ? "🚨 EMERGENCY LEAD" : "New Service Lead"}
        </h1>
        <p style={{ color: "#94A3B8", margin: "8px 0 0 0", fontSize: "14px" }}>Above All Maintenance & Repair</p>
      </div>

      {/* Body */}
      <div style={{ backgroundColor: "#1E293B", padding: "32px", color: "#E2E8F0" }}>
        {/* Urgency Badge */}
        <div
          style={{
            display: "inline-block",
            backgroundColor: isEmergency ? "#DC2626" : urgency === "urgent" ? "#F59E0B" : "#10B981",
            color: "#FFF",
            padding: "4px 12px",
            borderRadius: "4px",
            fontSize: "12px",
            fontWeight: "bold",
            marginBottom: "16px",
          }}
        >
          {urgency.toUpperCase()}
        </div>

        {/* Contact Info */}
        <div style={{ marginBottom: "24px" }}>
          <h2 style={{ color: "#C29828", margin: "0 0 16px 0", fontSize: "18px" }}>Contact Information</h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              <tr>
                <td style={{ padding: "8px 0", color: "#94A3B8", width: "120px" }}>Name:</td>
                <td style={{ padding: "8px 0", fontWeight: "bold" }}>{name}</td>
              </tr>
              <tr>
                <td style={{ padding: "8px 0", color: "#94A3B8" }}>Phone:</td>
                <td style={{ padding: "8px 0" }}>
                  <a href={`tel:${phone}`} style={{ color: "#C29828", textDecoration: "none" }}>
                    {phone}
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ padding: "8px 0", color: "#94A3B8" }}>Email:</td>
                <td style={{ padding: "8px 0" }}>
                  <a href={`mailto:${email}`} style={{ color: "#C29828", textDecoration: "none" }}>
                    {email}
                  </a>
                </td>
              </tr>
              {company && (
                <tr>
                  <td style={{ padding: "8px 0", color: "#94A3B8" }}>Company:</td>
                  <td style={{ padding: "8px 0" }}>{company}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Service Details */}
        <div style={{ marginBottom: "24px" }}>
          <h2 style={{ color: "#C29828", margin: "0 0 16px 0", fontSize: "18px" }}>Service Request</h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              <tr>
                <td style={{ padding: "8px 0", color: "#94A3B8", width: "120px" }}>Service:</td>
                <td style={{ padding: "8px 0", fontWeight: "bold" }}>{service}</td>
              </tr>
              <tr>
                <td style={{ padding: "8px 0", color: "#94A3B8" }}>Property Type:</td>
                <td style={{ padding: "8px 0" }}>{propertyType}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Message */}
        {details && (
          <div style={{ marginBottom: "24px" }}>
            <h2 style={{ color: "#C29828", margin: "0 0 16px 0", fontSize: "18px" }}>Project Details</h2>
            <div
              style={{
                backgroundColor: "#0F172A",
                padding: "16px",
                borderRadius: "8px",
                borderLeft: "4px solid #C29828",
              }}
            >
              <p style={{ margin: 0, lineHeight: "1.6" }}>{details}</p>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div style={{ marginTop: "32px", textAlign: "center" as const }}>
          <a
            href={`tel:${phone}`}
            style={{
              display: "inline-block",
              backgroundColor: "#C29828",
              color: "#0F172A",
              padding: "12px 24px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              marginRight: "12px",
            }}
          >
            Call Customer
          </a>
          <a
            href={`mailto:${email}`}
            style={{
              display: "inline-block",
              backgroundColor: "#334155",
              color: "#E2E8F0",
              padding: "12px 24px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Send Email
          </a>
        </div>
      </div>

      {/* Footer */}
      <div style={{ backgroundColor: "#0F172A", padding: "16px", textAlign: "center" as const }}>
        <p style={{ color: "#64748B", margin: 0, fontSize: "12px" }}>
          License #1075924 | Bonded & Insured | Serving San Bernardino, Riverside, San Diego & Orange Counties
        </p>
      </div>
    </div>
  )
}
