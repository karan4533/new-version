import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Section } from "../shared";
import { Reveal } from "../shared";
import {
  FaBalanceScale,
  FaBolt,
  FaBuilding,
  FaGraduationCap,
  FaHardHat,
  FaHandshake,
  FaIndustry,
  FaLandmark,
  FaShoppingCart,
  FaStore,
} from "react-icons/fa";

const industryTiles = [
  { label: "Manufacturing and Automotive", Icon: FaIndustry },
  { label: "Retail", Icon: FaStore },
  { label: "Legal Tech", Icon: FaBalanceScale },
  { label: "E-Commerce", Icon: FaShoppingCart },
  { label: "Services", Icon: FaHandshake },
  { label: "Government and Public Sector", Icon: FaLandmark },
  { label: "Energy and Utilities", Icon: FaBolt },
  { label: "Education", Icon: FaGraduationCap },
  { label: "Real Estate", Icon: FaBuilding },
  { label: "Construction", Icon: FaHardHat },
];

export function IndustryFootprint() {
  const { isTablet, isMobile, isSmallMobile } = useViewport();

  const gridTemplateColumns = isSmallMobile
    ? "1fr"
    : isMobile
      ? "repeat(2,minmax(0,1fr))"
      : isTablet
        ? "repeat(3,minmax(0,1fr))"
        : "repeat(5,minmax(0,1fr))";

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

      <Reveal delay={0.06} distance={14} blurFrom={6}>
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
          }}
        >
          <p
            style={{
              margin: "0 0 12px",
              textAlign: "center",
              fontFamily: font.sans,
              fontSize: isSmallMobile ? 12 : 14,
              letterSpacing: ".04em",
              color: T.ink40,
            }}
          >
            Built for teams operating in complex, high-stakes domains
          </p>

          <div
            role="list"
            aria-label="Industries we serve"
            style={{
              display: "grid",
              gridTemplateColumns,
              gap: isSmallMobile ? 10 : isMobile ? 12 : 14,
            }}
          >
            {industryTiles.map((industry, index) => (
              <Reveal key={industry.label} delay={0.08 + index * 0.03} distance={10} blurFrom={4}>
                <article
                  role="listitem"
                  className="card"
                  style={{
                    borderRadius: 18,
                    border: `1px solid ${T.ink12}`,
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,.44) 0%, rgba(255,255,255,.2) 100%)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,.42)",
                    minHeight: isSmallMobile ? 68 : isMobile ? 72 : 78,
                    display: "flex",
                    alignItems: "center",
                    gap: isSmallMobile ? 10 : 12,
                    padding: isSmallMobile ? "0 12px" : "0 16px",
                    width: "100%",
                  }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      flex: "0 0 auto",
                      width: isSmallMobile ? 30 : 34,
                      height: isSmallMobile ? 30 : 34,
                      borderRadius: 10,
                      border: `1px solid ${T.ink12}`,
                      background: "rgba(12,96,96,.1)",
                      color: T.teal,
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    <industry.Icon size={isSmallMobile ? 13 : 15} />
                  </div>

                  <span
                    style={{
                      fontFamily: font.sans,
                      fontSize: isSmallMobile ? 14 : 15,
                      fontWeight: 600,
                      lineHeight: 1.25,
                      color: T.ink,
                      overflowWrap: "anywhere",
                    }}
                  >
                    {industry.label}
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
