import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background:
            "radial-gradient(circle at top left, #1f2937, #0b1120 45%, #030712)",
          color: "#f8fafc",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 28,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#94a3b8",
          }}
        >
          Portfolio
        </p>
        <h1
          style={{
            margin: "16px 0 8px",
            fontSize: 68,
            lineHeight: 1.1,
            fontWeight: 700,
          }}
        >
          Saksham Jain
        </h1>
        <p style={{ margin: 0, fontSize: 34, color: "#cbd5e1" }}>@saksh3j</p>
        <p style={{ margin: "24px 0 0", fontSize: 30, color: "#e2e8f0" }}>
          Software Engineer | Product Engineer
        </p>
      </div>
    ),
    size,
  );
}
