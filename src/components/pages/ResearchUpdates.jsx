import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Reveal, SecHeader, Section, Em } from "../shared";
import { RESEARCH_UPDATES } from "../../constants/data/researchUpdates";

export function ResearchUpdates() {
  const { isMobile, isTablet, isSmallMobile } = useViewport();
  const visibleUpdates = RESEARCH_UPDATES.slice(0, 3);

  return (
    <Section id="how-we-work">
      <Reveal>
        <SecHeader
          pill="How We Work"
          title={
            <>
              Our AI
              <br />
              <Em>Operating Engine</Em>
            </>
          }
          desc="Research-backed engineering. Production-first delivery."
        />
      </Reveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : isTablet
              ? "repeat(2,minmax(0,1fr))"
              : "repeat(3,minmax(0,1fr))",
          gap: isSmallMobile ? 14 : 20,
          alignItems: "stretch",
        }}
      >
        {visibleUpdates.map((item, index) => (
          <Reveal key={`update-${index}`} delay={index * 0.06}>
            <div style={{ height: "100%" }}>
              <article
                style={{
                  border: `1px solid ${T.ink12}`,
                  borderRadius: 22,
                  padding: isSmallMobile ? 14 : 18,
                  background: "rgba(255,255,255,.09)",
                  boxShadow: "0 4px 12px rgba(30,26,16,.04)",
                  transition: "transform .24s ease, box-shadow .24s ease, border-color .24s ease",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 14px 24px rgba(30,26,16,.08)";
                  e.currentTarget.style.borderColor = "rgba(30,26,16,.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(30,26,16,.04)";
                  e.currentTarget.style.borderColor = T.ink12;
                }}
              >
                {item.category && (
                  <div
                    style={{
                      fontFamily: font.sans,
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: T.ink40,
                      marginBottom: 9,
                    }}
                  >
                    {item.category}
                  </div>
                )}

                {item.title && (
                  <h3
                    style={{
                      margin: 0,
                      fontFamily: font.serif,
                      fontSize: isSmallMobile ? 22 : 30,
                      fontWeight: 600,
                      lineHeight: 1.16,
                      color: T.ink,
                    }}
                  >
                    {item.title}
                  </h3>
                )}

                {item.detail && (
                  <p
                    style={{
                      margin: "10px 0 14px",
                      fontFamily: font.sans,
                      fontSize: isSmallMobile ? 13 : 14,
                      color: T.ink60,
                      lineHeight: 1.55,
                    }}
                  >
                    {item.detail}
                  </p>
                )}

                <div
                  style={{
                    borderRadius: 16,
                    minHeight: isSmallMobile ? 170 : 210,
                    background: item.visualBg,
                    border: "1px solid rgba(255,255,255,.16)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "16px",
                    marginTop: "auto",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,.14)",
                  }}
                >
                  {item.visualText && (
                    <span
                      style={{
                        fontFamily: font.serif,
                        fontSize: isSmallMobile ? 26 : 36,
                        fontWeight: 600,
                        lineHeight: 1.1,
                        color: "rgba(255,255,255,.9)",
                        textAlign: "center",
                      }}
                    >
                      {item.visualText}
                    </span>
                  )}
                </div>
              </article>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
