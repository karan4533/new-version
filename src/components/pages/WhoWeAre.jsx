import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Section } from "../shared";
import { Reveal } from "../shared";

export function WhoWeAre() {
  const { isMobile, isTablet, isSmallMobile } = useViewport();

  const notes = [
    "Is your data architecture ready to support real LLM reasoning, not just retrieval?",
    "Are your agents autonomous, or just scripted loops dressed up as AI?",
    "Where is token waste bleeding your margins?",
  ];

  const stats = [
    { value: "50+", label: "AI engagements shipped" },
    { value: "6-10 wks", label: "Typical production timeline" },
    { value: "2x", label: "Faster than traditional AI delivery" },
    { value: "40+ yrs", label: "Leadership experience in AI" },
  ];

  return (
    <Section id="about">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isTablet ? "1fr" : "minmax(0,1fr) minmax(0,1fr)",
          gap: isSmallMobile ? 16 : isTablet ? 24 : 34,
          alignItems: "start",
        }}
      >
        <Reveal distance={18} blurFrom={10}>
          <div style={{ paddingRight: isTablet ? 0 : 10 }}>
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
              The Mission
            </p>
            <h2
              style={{
                margin: 0,
                marginTop: isTablet ? 0 : 14,
                fontFamily: font.serif,
                fontSize: isSmallMobile ? 34 : isMobile ? 42 : 50,
                fontWeight: 500,
                lineHeight: 1.04,
                letterSpacing: "-.02em",
                color: T.ink,
                maxWidth: isSmallMobile ? 520 : 700,
              }}
            >
              <span
                style={{
                  display: "block",
                  whiteSpace: isTablet ? "normal" : "nowrap",
                }}
              >
                We build the intelligence
              </span>
              <span
                style={{
                  display: "block",
                  whiteSpace: isTablet ? "normal" : "nowrap",
                }}
              >
                that scales your edge.
              </span>
            </h2>
            <p
              style={{
                margin: "16px 0 0",
                maxWidth: 520,
                fontFamily: font.sans,
                fontSize: isSmallMobile ? 13 : 14,
                lineHeight: 1.66,
                color: T.ink60,
              }}
            >
              Heuristic Labs operates at the intersection of academic rigor and startup
              velocity. We don't just consult - we embed into your product cycle to ship
              production-ready AI that compounds directly into EBITDA.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08} distance={18} blurFrom={8}>
          <div
            style={{
              paddingLeft: isTablet ? 0 : 8,
              paddingTop: isTablet ? 0 : 74,
            }}
          >
            <p
              style={{
                margin: "0 0 14px",
                fontFamily: font.sans,
                fontSize: 10,
                color: T.ink40,
                letterSpacing: ".16em",
                textTransform: "uppercase",
              }}
            >
              The questions we answer before your competitors ask them:
            </p>
            <div style={{ display: "grid", gap: 0 }}>
              {notes.map((item, idx) => (
                <div
                  key={item}
                  style={{
                    borderTop: idx === 0 ? `1px solid ${T.ink12}` : "none",
                    borderBottom: `1px solid ${T.ink12}`,
                    padding: "14px 0",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontFamily: font.sans,
                      fontSize: isSmallMobile ? 12 : 13,
                      lineHeight: 1.55,
                      color: T.ink,
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.12} distance={16} blurFrom={8}>
        <h3
          style={{
            margin: isSmallMobile ? "60px 0 18px" : isMobile ? "76px 0 22px" : "96px 0 26px",
            textAlign: "center",
            fontFamily: font.serif,
            fontWeight: 500,
            color: T.ink,
            fontSize: isSmallMobile ? 32 : isMobile ? 42 : 52,
            lineHeight: 1.08,
            letterSpacing: "-.02em",
          }}
        >
          From AI confusion to <span style={{ color: T.amber, fontStyle: "italic" }}>clarity.</span>
        </h3>
      </Reveal>

      <Reveal delay={0.18} distance={14} blurFrom={6}>
        <p
          style={{
            margin: "0 auto",
            maxWidth: 860,
            textAlign: "center",
            fontFamily: font.sans,
            fontSize: isSmallMobile ? 13 : 15,
            lineHeight: 1.72,
            color: T.ink60,
          }}
        >
          Heuristic Labs acts as your Applied AI Lab, turning AI ambition into secure,
          scalable, production-ready systems.
        </p>
      </Reveal>

      <div
        style={{
          border: `1px solid ${T.ink12}`,
          background: "rgba(255,255,255,.78)",
          borderRadius: 8,
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2,minmax(0,1fr))" : "repeat(4,minmax(0,1fr))",
          marginTop: 14,
        }}
      >
        {stats.map((item, index) => (
          <Reveal
            key={`${item.value}-${item.label}`}
            delay={0.16 + index * 0.06}
            distance={14}
            blurFrom={6}
            style={{ height: "100%" }}
          >
            <div
              style={{
                padding: isSmallMobile ? "13px 10px" : "14px 12px",
                borderRight:
                  !isMobile && index < stats.length - 1 ? `1px solid ${T.ink12}` : "none",
                borderBottom:
                  isMobile && index < stats.length - 2 ? `1px solid ${T.ink12}` : "none",
                textAlign: "center",
                height: "100%",
              }}
            >
              <div
                style={{
                  fontFamily: font.serif,
                  fontSize: isSmallMobile ? 26 : 31,
                  color: T.amber,
                  lineHeight: 1.1,
                  marginBottom: 3,
                }}
              >
                {item.value}
              </div>
              <div
                style={{
                  fontFamily: font.sans,
                  fontSize: 10,
                  color: T.ink40,
                  lineHeight: 1.5,
                  textTransform: "uppercase",
                  letterSpacing: ".08em",
                }}
              >
                {item.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
