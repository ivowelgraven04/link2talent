import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Link2Talent — Remote Salesprofessionals via de app";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0057d8 0%, #007BFF 45%, #38b6ff 100%)",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "18px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            Link2Talent
          </p>
          <p
            style={{
              color: "#ffffff",
              fontSize: "56px",
              fontWeight: 800,
              lineHeight: 1.05,
              margin: 0,
              maxWidth: "800px",
            }}
          >
            Remote Salesprofessionals via de app
          </p>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "24px", margin: 0 }}>
            Actief binnen 14 dagen — vanaf €295 per maand
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
