import { ImageResponse } from "next/og";

export const alt = "Martí Castaño — Fullstack & AI Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#09090b",
          padding: "80px",
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top Branding Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderBottom: "1px solid #27272a",
            paddingBottom: "32px",
          }}
        >
          <span
            style={{
              fontSize: "28px",
              fontWeight: 400,
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            martí castaño
          </span>
          <span
            style={{
              fontSize: "20px",
              color: "#71717a",
              fontFamily: "monospace",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            barcelona, es
          </span>
        </div>

        {/* Center Headline & Subtitle */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 500,
              color: "#ffffff",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            fullstack & ai software engineer
          </h1>
          <p
            style={{
              fontSize: "26px",
              color: "#a1a1aa",
              lineHeight: 1.4,
              margin: 0,
              maxWidth: "960px",
            }}
          >
            desarrollo aplicaciones web fullstack, automatizo sistemas y creo soluciones de software basadas en inteligencia artificial.
          </p>
        </div>

        {/* Bottom Projects List */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid #27272a",
            paddingTop: "32px",
          }}
        >
          <span
            style={{
              fontSize: "20px",
              color: "#71717a",
              fontFamily: "monospace",
            }}
          >
            selected work: lattice · volta · iter ecosystem · muvv
          </span>
          <span
            style={{
              fontSize: "20px",
              color: "#71717a",
              fontFamily: "monospace",
            }}
          >
            marticastanorodriguez@gmail.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
