import { ImageResponse } from "next/og";

import { heroHighlights, siteConfig } from "@/content/site";

export const dynamic = "force-static";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  const highlightValues = heroHighlights.slice(0, 2).map((item) => item.value);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "radial-gradient(circle at top right, rgba(49,92,128,0.22), transparent 26%), linear-gradient(180deg, #f7f3ec 0%, #f1ece4 100%)",
          padding: "56px",
          color: "#141821",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            borderRadius: "36px",
            border: "1px solid rgba(20,24,33,0.1)",
            background: "rgba(255,255,255,0.88)",
            boxShadow: "0 22px 60px rgba(16,25,38,0.08)",
            padding: "56px",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <div
              style={{
                fontSize: 22,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "#6b7280",
              }}
            >
              {siteConfig.role}
            </div>
            <div
              style={{
                fontSize: 74,
                lineHeight: 1,
                letterSpacing: "-0.05em",
                fontWeight: 700,
                maxWidth: "860px",
              }}
            >
              {siteConfig.name}
            </div>
            <div
              style={{
                fontSize: 34,
                lineHeight: 1.28,
                maxWidth: "930px",
                color: "#435063",
              }}
            >
              {siteConfig.headline}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "12px",
                color: "#193450",
                fontSize: 22,
              }}
            >
              {highlightValues.map((value, index) => (
                <span
                  key={value}
                  style={{
                    borderRadius: "999px",
                    border: "1px solid rgba(20,24,33,0.1)",
                    padding: "12px 18px",
                    background: index === 0 ? "#d9e6ef" : "rgba(255,255,255,0.8)",
                  }}
                >
                  {value}
                </span>
              ))}
            </div>

            <div style={{ fontSize: 24, color: "#6b7280" }}>{siteConfig.location}</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
