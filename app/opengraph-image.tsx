import { ImageResponse } from "next/og";

export const alt = "Nawacraft Pvt. Ltd. | We Craft Software That Runs Businesses";
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
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#FAFAF9",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(149, 53, 83, 0.12) 0%, transparent 50%), radial-gradient(circle at 15% 85%, rgba(53, 149, 119, 0.08) 0%, transparent 40%)",
        }}
      >
        {/* Top Brand Bar */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "14px",
              backgroundColor: "#953553",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "26px",
              fontWeight: 800,
            }}
          >
            N
          </div>
          <span
            style={{
              fontSize: "30px",
              fontWeight: 800,
              color: "#111014",
              letterSpacing: "-0.02em",
            }}
          >
            Nawacraft
          </span>
          <span
            style={{
              fontSize: "14px",
              color: "#953553",
              backgroundColor: "rgba(149, 53, 83, 0.08)",
              padding: "6px 14px",
              borderRadius: "100px",
              marginLeft: "12px",
              fontWeight: 700,
              letterSpacing: "0.05em",
            }}
          >
            LALITPUR, NEPAL
          </span>
        </div>

        {/* Center Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "#111014",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            We craft software that runs businesses.
          </h1>
          <p
            style={{
              fontSize: "24px",
              color: "#5D5A64",
              lineHeight: 1.4,
              margin: 0,
              maxWidth: "880px",
            }}
          >
            A founding team of 9 specialists. Custom business systems and connected retail IoT products.
          </p>
        </div>

        {/* Bottom Feature Badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(17, 16, 20, 0.1)",
            paddingTop: "28px",
          }}
        >
          <div style={{ display: "flex", gap: "24px", fontSize: "16px", color: "#111014", fontWeight: 600 }}>
            <span>• Flagship: Meat Management System</span>
            <span>• Direct Machine-to-Server IoT</span>
            <span>• 9 Founders</span>
          </div>
          <span style={{ fontSize: "16px", color: "#953553", fontWeight: 700 }}>
            nawacraft.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
