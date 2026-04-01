interface DiscountCodeEmailProps {
  email: string
}

export function DiscountCodeEmail({ email }: DiscountCodeEmailProps) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      {/* Header with Gold Accent */}
      <div
        style={{
          backgroundColor: "#0F172A",
          padding: "40px 24px",
          textAlign: "center" as const,
          borderBottom: "4px solid #C29828",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            backgroundColor: "#C29828",
            borderRadius: "50%",
            margin: "0 auto 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: "36px" }}>🎁</span>
        </div>
        <h1 style={{ color: "#FFFFFF", margin: "0 0 8px 0", fontSize: "28px", fontWeight: "bold" }}>
          Welcome to the <span style={{ color: "#C29828" }}>Above All</span> Family!
        </h1>
        <p style={{ color: "#94A3B8", margin: 0, fontSize: "16px" }}>Your exclusive discount is waiting for you.</p>
      </div>

      {/* Discount Code Box */}
      <div style={{ backgroundColor: "#1E293B", padding: "40px 24px", textAlign: "center" as const }}>
        <p style={{ color: "#E2E8F0", margin: "0 0 24px 0", fontSize: "18px" }}>
          Use this code on your first service call:
        </p>

        {/* Premium Code Display */}
        <div
          style={{
            background: "linear-gradient(135deg, #C29828 0%, #E8C547 50%, #C29828 100%)",
            padding: "4px",
            borderRadius: "12px",
            display: "inline-block",
            margin: "0 auto 24px",
          }}
        >
          <div
            style={{
              backgroundColor: "#0F172A",
              padding: "20px 48px",
              borderRadius: "10px",
            }}
          >
            <span
              style={{
                color: "#C29828",
                fontSize: "36px",
                fontWeight: "bold",
                letterSpacing: "4px",
              }}
            >
              ABOVE15
            </span>
          </div>
        </div>

        <p style={{ color: "#94A3B8", margin: "0 0 8px 0", fontSize: "14px" }}>
          This gives you <strong style={{ color: "#C29828" }}>15% OFF</strong> your first service.
        </p>
        <p style={{ color: "#64748B", margin: 0, fontSize: "12px" }}>Valid for 30 days from today.</p>
      </div>

      {/* Services We Offer */}
      <div style={{ backgroundColor: "#0F172A", padding: "32px 24px" }}>
        <h2 style={{ color: "#C29828", margin: "0 0 20px 0", fontSize: "20px", textAlign: "center" as const }}>
          Services We Offer
        </h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td style={{ padding: "8px", textAlign: "center" as const, color: "#E2E8F0" }}>🔧 Plumbing</td>
              <td style={{ padding: "8px", textAlign: "center" as const, color: "#E2E8F0" }}>⚡ Electrical</td>
            </tr>
            <tr>
              <td style={{ padding: "8px", textAlign: "center" as const, color: "#E2E8F0" }}>🏗️ Construction</td>
              <td style={{ padding: "8px", textAlign: "center" as const, color: "#E2E8F0" }}>🎨 Painting</td>
            </tr>
            <tr>
              <td style={{ padding: "8px", textAlign: "center" as const, color: "#E2E8F0" }}>🔩 Welding</td>
              <td style={{ padding: "8px", textAlign: "center" as const, color: "#E2E8F0" }}>🅿️ Parking Lot</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* CTA */}
      <div style={{ backgroundColor: "#1E293B", padding: "32px 24px", textAlign: "center" as const }}>
        <a
          href="https://aboveallmaintenancerepair.com/contact"
          style={{
            display: "inline-block",
            backgroundColor: "#C29828",
            color: "#0F172A",
            padding: "16px 48px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          Schedule Your Service Now
        </a>
        <p style={{ color: "#94A3B8", margin: "16px 0 0 0", fontSize: "14px" }}>
          Or call us directly:{" "}
          <a href="tel:951-330-6963" style={{ color: "#C29828", textDecoration: "none" }}>
            (951) 330-6963
          </a>
        </p>
      </div>

      {/* Footer */}
      <div style={{ backgroundColor: "#0F172A", padding: "24px", textAlign: "center" as const }}>
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
