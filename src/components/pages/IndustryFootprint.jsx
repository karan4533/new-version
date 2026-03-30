import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Section } from "../shared";
import { Reveal } from "../shared";

const sectors = [
  "Manufacturing and Automotive",
  "Retail",
  "Legal Tech",
  "E-Commerce",
  "Services",
  "Government and Public Sector",
  "Energy and Utilities",
  "Education",
  "Real Estate",
  "Construction",
];

const sectorIcon = {
  "Manufacturing and Automotive": "🏭",
  Retail: "🛍️",
  "Legal Tech": "⚖️",
  "E-Commerce": "🛒",
  Services: "🧩",
  "Government and Public Sector": "🏛️",
  "Energy and Utilities": "⚡",
  Education: "🎓",
  "Real Estate": "🏢",
  Construction: "🏗️",
};

export function IndustryFootprint() {
  const { isMobile, isSmallMobile } = useViewport();

  return (
    <Section id="industry-footprint">
      <Reveal distance={14} blurFrom={8}>
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
          Industries We Serve.
        </h2>
      </Reveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2,minmax(0,1fr))" : "repeat(5,minmax(0,1fr))",
          gap: 10,
          maxWidth: 920,
          margin: "0 auto",
        }}
      >
        {sectors.map((sector, index) => (
          <Reveal
            key={sector}
            delay={0.06 + index * 0.04}
            distance={14}
            blurFrom={6}
            style={{ height: "100%" }}
          >
            <div
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
                height: "100%",
              }}
            >
              <div style={{ fontSize: 18, lineHeight: 1 }}>{sectorIcon[sector]}</div>
              <div
                style={{
                  fontFamily: font.sans,
                  color: T.ink60,
                  fontSize: 10,
                  lineHeight: 1.35,
                }}
              >
                {sector}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
