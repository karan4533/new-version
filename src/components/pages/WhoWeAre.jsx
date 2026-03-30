import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Section } from "../shared";
import { Reveal } from "../shared";

export function WhoWeAre() {
  const { isMobile, isTablet, isSmallMobile } = useViewport();

  const notes = [
    "A custom confidence layer that is aligned to risk and compliance goals.",
    "AI stack optimization across retrieval, orchestration, and evaluation.",
    "What does your team actually need this quarter?",
  ];

  const stats = [
    { value: "14 Days", label: "Idea cycle" },
    { value: "90%", label: "Process wins" },
    { value: "12 +", label: "Astro realization" },
    { value: "Proprietory", label: "Postset play" },
  ];

  return (
    <Section id="about">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isTablet ? "1fr" : "minmax(0,.92fr) minmax(0,1.08fr)",
          gap: isSmallMobile ? 16 : 26,
          alignItems: "start",
        }}
      >
        <Reveal distance={18} blurFrom={10}>
          <div>
            <p
              style={{
                margin: "0 0 8px",
                fontFamily: font.sans,
                fontSize: 11,
                letterSpacing: ".11em",
                textTransform: "uppercase",
                color: T.ink40,
              }}
            >
              Our Values, Our Purpose
            </p>
            <h2
              style={{
                margin: 0,
                fontFamily: font.serif,
                fontSize: isSmallMobile ? 34 : isMobile ? 42 : 50,
                fontWeight: 500,
                lineHeight: 1.04,
                letterSpacing: "-.02em",
                color: T.ink,
                maxWidth: 560,
              }}
            >
              We build the systems
              <br />
              that optimize for
              <br />
              precision and power.
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
              Applied AI Labs operates with a new form of digital clarity. Digital labor
              allows for the coordinated operation of capabilities at scale, where first-order
              outcomes become measurable and practical.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08} distance={18} blurFrom={8}>
          <div style={{ paddingTop: isTablet ? 0 : 18 }}>
            <p
              style={{
                margin: "0 0 12px",
                fontFamily: font.sans,
                fontSize: 10,
                color: T.ink40,
                letterSpacing: ".16em",
                textTransform: "uppercase",
              }}
            >
              We calibrate to where value and velocity meet.
            </p>
            <div style={{ display: "grid", gap: 0 }}>
              {notes.map((item, idx) => (
                <div
                  key={item}
                  style={{
                    borderTop: idx === 0 ? `1px solid ${T.ink12}` : "none",
                    borderBottom: `1px solid ${T.ink12}`,
                    padding: "12px 0 13px 14px",
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
            margin: isSmallMobile ? "34px 0 18px" : "44px 0 20px",
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

      <div
        style={{
          border: `1px solid ${T.ink12}`,
          background: "rgba(255,255,255,.78)",
          borderRadius: 8,
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2,minmax(0,1fr))" : "repeat(4,minmax(0,1fr))",
          marginTop: 4,
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
