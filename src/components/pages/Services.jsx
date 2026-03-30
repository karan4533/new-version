import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Section } from "../shared";
import { Reveal } from "../shared";
import { SERVICES } from "../../constants/data/services";

export function Services() {
  const { isMobile, isTablet, isSmallMobile } = useViewport();

  return (
    <Section id="services">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isTablet ? "1fr" : "minmax(0,.9fr) minmax(0,1.1fr)",
          gap: isSmallMobile ? 14 : 24,
          alignItems: "start",
          marginBottom: isSmallMobile ? 14 : 20,
        }}
      >
        <Reveal distance={18} blurFrom={10}>
          <div>
            <p
              style={{
                margin: "0 0 16px",
                fontFamily: font.sans,
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                display: "inline-block",
                padding: "6px 12px",
                borderRadius: 100,
                background: T.ink07,
                color: "#B07845",
              }}
            >
              What we do
            </p>
            <h2
              style={{
                margin: 0,
                fontFamily: font.serif,
                fontWeight: 500,
                lineHeight: 1.02,
                letterSpacing: "-.02em",
                color: T.ink,
                fontSize: isSmallMobile ? 46 : isMobile ? 52 : 62,
              }}
            >
              Six ways we turn AI ambition into production reality.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.08} distance={16} blurFrom={8}>
          <p
            style={{
              margin: isTablet ? 0 : "24px 0 0",
              maxWidth: 520,
              fontFamily: font.sans,
              fontSize: isSmallMobile ? 12 : 13,
              lineHeight: 1.58,
              color: T.ink60,
            }}
          >
            Most enterprises have a strategy. Few have systems that run in production.
            We bridge that gap as your on-demand Applied AI Lab. Every engagement starts
            with business outcomes, not technology.
            <br />
            <br />
            We scope, validate, build, and ship, typically in 4 to 16 weeks depending on
            complexity. No hand-waving. No slide decks that never ship.
          </p>
        </Reveal>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2,minmax(0,1fr))" : "repeat(3,minmax(0,1fr))",
          gap: isSmallMobile ? 10 : 12,
        }}
      >
        {SERVICES.map((card, index) => (
          <Reveal
            key={card.name}
            delay={0.08 + index * 0.05}
            distance={16}
            blurFrom={7}
            style={{ height: "100%" }}
          >
            <article
              style={{
                border: `1px solid ${T.ink12}`,
                background: "rgba(255,255,255,.74)",
                borderRadius: 10,
                padding: isSmallMobile ? "12px" : "14px 14px 12px",
                minHeight: isSmallMobile ? 232 : 258,
                display: "grid",
                alignContent: "start",
                gap: 7,
                height: "100%",
              }}
            >
              <span
                style={{
                  fontFamily: font.serif,
                  fontSize: isSmallMobile ? 44 : 46,
                  lineHeight: 1,
                  color: "rgba(176,120,69,.24)",
                  letterSpacing: "-.01em",
                }}
              >
                  {card.id || String(index + 1).padStart(2, "0")}
              </span>
              <span
                style={{
                  display: "inline-block",
                  width: "fit-content",
                  padding: "2px 5px",
                  borderRadius: 3,
                  background: "rgba(176,120,69,.09)",
                  fontFamily: font.sans,
                  fontSize: 8,
                  letterSpacing: ".06em",
                  textTransform: "uppercase",
                  color: "rgba(30,26,16,.48)",
                }}
              >
                {`Timeline: ${card.timeline}`}
              </span>
              <h3
                style={{
                  margin: 0,
                  fontFamily: font.serif,
                  fontWeight: 600,
                  color: T.ink,
                  fontSize: isSmallMobile ? 18 : 19,
                  lineHeight: 1.1,
                  letterSpacing: "-.01em",
                  maxWidth: 220,
                }}
              >
                {card.name}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontFamily: font.sans,
                  color: T.ink60,
                  fontSize: isSmallMobile ? 11 : 12,
                  lineHeight: 1.45,
                  minHeight: isSmallMobile ? 48 : 52,
                }}
              >
                {card.desc}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: 5,
                  marginTop: 2,
                }}
              >
                {[card.technicalTags.join(" | "), card.seoTags.join(" | ")].map((chip) => (
                  <span
                    key={`${card.name}-${chip}`}
                    style={{
                      display: "inline-block",
                      border: `1px solid ${T.ink12}`,
                      borderRadius: 3,
                      padding: "1px 5px",
                      fontFamily: font.sans,
                      fontSize: 7,
                      fontWeight: 600,
                      color: T.ink40,
                      letterSpacing: ".04em",
                      textTransform: "uppercase",
                      background: "rgba(255,255,255,.7)",
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
