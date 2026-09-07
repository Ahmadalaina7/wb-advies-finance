import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "WB Advies & Finance — Boekhouding, fiscaal advies en salarisadministratie";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #181E22 0%, #2E3A40 100%)",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "linear-gradient(135deg, #6E9E93 0%, #416C62 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 800,
              color: "white",
            }}
          >
            WB
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 34, fontWeight: 800, color: "white" }}>WB</span>
            <span style={{ fontSize: 24, color: "#C7D1D5" }}>Advies &amp; Finance</span>
          </div>
        </div>

        {/* Middle: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            Uw financiële fundering, klaar voor de toekomst
          </div>
          <div style={{ fontSize: 30, color: "#C7D1D5" }}>
            Boekhouding · Belastingaangifte · Salaris · Advies
          </div>
        </div>

        {/* Bottom: badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              padding: "12px 28px",
              borderRadius: 999,
              background: "linear-gradient(135deg, #6E9E93 0%, #416C62 100%)",
              color: "white",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            Digitaal · Persoonlijk · Proactief
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
