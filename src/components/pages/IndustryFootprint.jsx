import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Section } from "../shared";

const sectors = [
  "Fashion",
  "Retail",
  "Healthcare",
  "Real Estate",
  "Construction",
  "Legal",
  "Apparel",
  "Retail Ops",
  "Vision AI",
  "B2B",
];

const sectorIcon = {
  Fashion: "👗",
  Retail: "🛍️",
  Healthcare: "🏥",
  "Real Estate": "🏢",
  Construction: "🏗️",
  Legal: "⚖️",
  Apparel: "🧵",
  "Retail Ops": "📦",
  "Vision AI": "👁️",
  B2B: "🤝",
};

export function IndustryFootprint() {
  const { isMobile, isSmallMobile } = useViewport();

  return (
    <Section id="industry-footprint">
      <h2
        style={{
          margin: "0 0 16px",
          textAlign: "center",
          fontFamily: font.serif,
          color: T.ink,
          fontWeight: 500,
          letterSpacing: "-.02em",
          fontSize: isSmallMobile ? 30 : isMobile ? 38 : 48,
        }}
      >
        Industry Footprint.
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(3,minmax(0,1fr))" : "repeat(5,minmax(0,1fr))",
          gap: 10,
          maxWidth: 920,
          margin: "0 auto",
        }}
      >
        {sectors.map((sector) => (
          <div
            key={sector}
            style={{
              border: `1px solid ${T.ink12}`,
              borderRadius: 12,
              background: "rgba(255,255,255,.56)",
              padding: isSmallMobile ? "10px 8px" : "12px 10px",
              textAlign: "center",
              minHeight: 86,
              display: "grid",
              alignContent: "center",
              gap: 4,
            }}
          >
            <div style={{ fontSize: 18, lineHeight: 1 }}>{sectorIcon[sector]}</div>
            <div
              style={{
                fontFamily: font.sans,
                color: T.ink60,
                fontSize: 11,
                letterSpacing: ".04em",
                textTransform: "uppercase",
              }}
            >
              {sector}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
