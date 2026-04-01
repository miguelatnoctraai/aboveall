interface ContactConfirmationEmailProps {
  name: string
  service: string
  urgency: string
}

export function ContactConfirmationEmail({ name, service, urgency }: ContactConfirmationEmailProps) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      {/* Header */}
      <div
        style={{
          backgroundColor: "#0F172A",
          padding: "40px 24px",
          textAlign: "center" as const,
          borderBottom: "4px solid #C29828",
        }}
      >
        <h1 style={{ color: "#FFFFFF", margin: "0 0 8px 0", fontSize: "28px" }}>We Got Your Request!</h1>
        <p style={{ color: "#94A3B8", margin: 0, fontSize: "16px" }}>Above All Maintenance & Repair</p>
      </div>

      {/* Body */}
      <div style={{ backgroundColor: "#1E293B", padding: "40px 24px", color: "#E2E8F0" }}>
        <p style={{ fontSize: "18px", margin: "0 0 24px 0" }}>
          Hi <strong style={{ color: "#C29828" }}>{name}</strong>,
        </p>

        <p style={{ fontSize: "16px", lineHeight: "1.6", margin: "0 0 24px 0" }}>
          Thank you for reaching out! We've received your request for{" "}
          <strong style={{ color: "#C29828" }}>{service}</strong> service.
        </p>

        {/* Response Time Box */}
        <div
          style={{
            backgroundColor: "#0F172A",
            padding: "24px",
            borderRadius: "8px",
            borderLeft: "4px solid #C29828",
            marginBottom: "24px",
          }}
        >
          <p style={{ margin: 0, fontSize: "16px" }}>
            {urgency === "urgent" ? (
              <>
                ⚡ <strong>Priority Request:</strong> We'll contact you within{" "}
                <strong style={{ color: "#C29828" }}>4 hours</strong>.
              </>
            ) : (
              <>
                📋 <strong>Standard Request:</strong> We'll contact you within{" "}
                <strong style={{ color: "#C29828" }}>24 hours</strong> with a detailed estimate.
              </>
            )}
          </p>
        </div>

        <p style={{ fontSize: "14px", color: "#94A3B8", margin: "0 0 24px 0" }}>
          Need immediate assistance? Call us directly:
        </p>

        <div style={{ textAlign: "center" as const }}>
          <a
            href="tel:951-330-6963"
            style={{
              display: "inline-block",
              backgroundColor: "#C29828",
              color: "#0F172A",
              padding: "16px 48px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            (951) 330-6963
          </a>
        </div>
      </div>

      {/* What's Next */}
      <div style={{ backgroundColor: "#0F172A", padding: "32px 24px" }}>
        <h2 style={{ color: "#C29828", margin: "0 0 20px 0", fontSize: "18px" }}>What Happens Next?</h2>
        <ol style={{ margin: 0, paddingLeft: "20px", color: "#E2E8F0" }}>
          <li style={{ marginBottom: "12px" }}>Our team reviews your request</li>
          <li style={{ marginBottom: "12px" }}>We'll call or email to discuss details</li>
          <li style={{ marginBottom: "12px" }}>You receive a transparent quote</li>
          <li>Schedule at your convenience</li>
        </ol>
      </div>

      {/* Footer */}
      <div style={{ backgroundColor: "#1E293B", padding: "24px", textAlign: "center" as const }}>
        <p style={{ color: "#C29828", margin: "0 0 8px 0", fontSize: "14px", fontWeight: "bold" }}>
          Above All Maintenance & Repair
        </p>
        <p style={{ color: "#64748B", margin: 0, fontSize: "12px" }}>License #1075924 | Bonded & Insured</p>
        <p style={{ color: "#64748B", margin: "8px 0 0 0", fontSize: "12px" }}>
          Serving San Bernardino, Riverside, San Diego & Orange Counties
        </p>
      </div>
    </div>
  )
}
