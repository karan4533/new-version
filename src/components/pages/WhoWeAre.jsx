import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Section } from "../shared";
import { Reveal } from "../shared";

export function WhoWeAre() {
  const { isMobile, isTablet, isSmallMobile } = useViewport();
  const aboutTopPadding = isSmallMobile ? "10px" : isMobile ? "14px" : "20px";
  const aboutBg = "#181A16";
  const aboutText = "rgba(255,255,255,.92)";
  const aboutTextMuted = "rgba(255,255,255,.72)";
  const aboutTextSoft = "rgba(255,255,255,.5)";
  const aboutRule = "rgba(255,255,255,.16)";
  const aboutPanelBg = "rgba(25,28,23,.9)";
  const aboutPanelBorder = "rgba(255,255,255,.14)";
  const aboutStatLabel = "rgba(255,255,255,.62)";

  const notes = [
    "Is your data ready for real AI reasoning, or just basic retrieval?",
    "Are your agents truly autonomous, or just scripted workflows?",
    "Where is AI cost quietly eating into your margins?",
    "Is your AI production-ready from a governance and reliability standpoint?",
  ];

  const stats = [
    { value: "50+", label: "AI engagements shipped" },
    { value: "6-10 wks", label: "Typical production timeline" },
    { value: "2x", label: "Faster than traditional AI delivery" },
    { value: "40+ yrs", label: "Leadership experience in AI" },
  ];

  return (
    <Section id="about" paddingTop={aboutTopPadding} bg={aboutBg}>
      <Reveal delay={0.06} distance={14} blurFrom={8}>
        <p
          style={{
            margin: isSmallMobile ? "22px auto 10px" : isMobile ? "32px auto 12px" : "40px auto 14px",
            width: "fit-content",
            fontFamily: font.sans,
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: ".08em",
            textTransform: "uppercase",
            padding: "6px 12px",
            borderRadius: 100,
            background: T.ink07,
            color: T.amber,
          }}
        >
          The Mission
        </p>
      </Reveal>

      <Reveal delay={0.12} distance={16} blurFrom={8}>
        <h3
          style={{
            margin: isSmallMobile ? "0 0 18px" : isMobile ? "0 0 22px" : "0 0 26px",
            textAlign: "center",
            fontFamily: font.serif,
            fontWeight: 500,
            color: aboutText,
            fontSize: isSmallMobile ? 32 : isMobile ? 42 : 52,
            lineHeight: 1.08,
            letterSpacing: "-.02em",
          }}
        >
          From AI confusion to <span style={{ color: T.amber, fontStyle: "italic" }}>clarity.</span>
        </h3>
      </Reveal>

      <Reveal delay={0.18} distance={14} blurFrom={6}>
        <>
          <p
            style={{
              margin: "0 auto",
              maxWidth: 860,
              textAlign: "center",
              fontFamily: font.sans,
              fontSize: isSmallMobile ? 13 : 15,
              lineHeight: 1.72,
              color: aboutTextMuted,
            }}
          >
            We help you answer the questions that actually matter.
          </p>

          <div
            aria-hidden="true"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: `${isSmallMobile ? 10 : 12}px 0 0`,
            }}
          >
            <span
              style={{
                width: isSmallMobile ? 88 : 124,
                height: 1,
                background: aboutRule,
              }}
            />
          </div>
        </>
      </Reveal>

      <Reveal delay={0.22} distance={18} blurFrom={8}>
        <div
          style={{
            margin: isSmallMobile ? "18px auto 0" : isMobile ? "20px auto 0" : "24px auto 0",
            maxWidth: 980,
            width: "100%",
          }}
        >
          <p
            style={{
              margin: isSmallMobile ? "0 0 18px" : isMobile ? "0 0 20px" : "0 0 22px",
              fontFamily: font.sans,
              fontSize: 10,
              color: aboutTextSoft,
              letterSpacing: ".16em",
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            The questions we answer before your competitors ask them:
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isTablet ? "1fr" : "repeat(2,minmax(0,1fr))",
              gap: isSmallMobile ? 10 : 12,
            }}
          >
            {notes.map((item) => (
              <div
                key={item}
                style={{
                  border: `1px solid ${aboutPanelBorder}`,
                  borderRadius: 8,
                  background: aboutPanelBg,
                  padding: isSmallMobile ? "12px 12px" : "14px 14px",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: font.sans,
                    fontSize: isSmallMobile ? 12 : 13,
                    lineHeight: 1.55,
                    color: aboutText,
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div
        style={{
          border: `1px solid ${aboutPanelBorder}`,
          background: aboutPanelBg,
          borderRadius: 8,
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2,minmax(0,1fr))" : "repeat(4,minmax(0,1fr))",
          marginTop: isSmallMobile ? 28 : isMobile ? 32 : 36,
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
                  !isMobile && index < stats.length - 1 ? `1px solid ${aboutPanelBorder}` : "none",
                borderBottom:
                  isMobile && index < stats.length - 2 ? `1px solid ${aboutPanelBorder}` : "none",
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
                  color: aboutStatLabel,
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
