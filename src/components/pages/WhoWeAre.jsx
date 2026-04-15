import { useEffect, useState } from "react";
import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Section } from "../shared";
import { Reveal } from "../shared";

export function WhoWeAre() {
  const { isMobile, isTablet, isSmallMobile } = useViewport();
  const aboutSectionPaddingPx = isSmallMobile ? 12 : isMobile ? 16 : isTablet ? 20 : 24;
  const aboutSectionPadding = `${aboutSectionPaddingPx}px`;
  const [aboutNavOffset, setAboutNavOffset] = useState(
    isSmallMobile ? 58 : isMobile ? 66 : isTablet ? 76 : 86,
  );
  const aboutContentMinHeight = `calc(100dvh - ${aboutNavOffset + aboutSectionPaddingPx * 2}px)`;
  const aboutBg = T.footer;
  const aboutText = "rgba(255,255,255,.92)";
  const aboutTextMuted = "rgba(255,255,255,.72)";
  const aboutTextSoft = "rgba(255,255,255,.5)";
  const aboutRule = "rgba(255,255,255,.16)";
  const aboutDivider = "rgba(255,255,255,.1)";
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

  useEffect(() => {
    const syncAboutNavOffset = () => {
      const navElement = document.querySelector("nav");

      if (!navElement) {
        const fallbackOffset = isSmallMobile ? 58 : isMobile ? 66 : isTablet ? 76 : 86;
        setAboutNavOffset((current) => (current === fallbackOffset ? current : fallbackOffset));
        return;
      }

      const rect = navElement.getBoundingClientRect();
      const nextOffset = Math.max(0, Math.min(160, Math.round(rect.top + rect.height)));
      setAboutNavOffset((current) => (current === nextOffset ? current : nextOffset));
    };

    syncAboutNavOffset();
    window.addEventListener("resize", syncAboutNavOffset, { passive: true });
    window.addEventListener("orientationchange", syncAboutNavOffset, { passive: true });

    return () => {
      window.removeEventListener("resize", syncAboutNavOffset);
      window.removeEventListener("orientationchange", syncAboutNavOffset);
    };
  }, [isSmallMobile, isMobile, isTablet]);

  return (
    <Section
      id="about"
      paddingTop={aboutSectionPadding}
      paddingBottom={aboutSectionPadding}
      bg={aboutBg}
      minHeight="100dvh"
    >
      <div
        style={{
          minHeight: aboutContentMinHeight,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: isSmallMobile ? 14 : isMobile ? 18 : 22,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Reveal delay={0.06} distance={14} blurFrom={8}>
            <p
              style={{
                margin: isSmallMobile ? "0 auto 10px" : isMobile ? "0 auto 12px" : "0 auto 14px",
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
        </div>

      <Reveal delay={0.22} distance={18} blurFrom={8}>
        <div
          style={{
            margin: isSmallMobile ? "14px auto 0" : isMobile ? "16px auto 0" : "18px auto 0",
            maxWidth: 980,
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,minmax(0,1fr))",
              gap: 0,
            }}
          >
            {notes.map((item, index) => (
              <div
                key={item}
                style={{
                  padding: isSmallMobile ? "10px 10px 12px" : "12px 12px 14px",
                  borderRight: index % 2 === 0 ? `1px solid ${aboutDivider}` : "none",
                  borderBottom: index < 2 ? `1px solid ${aboutDivider}` : "none",
                }}
              >
                <span
                  style={{
                    display: "block",
                    marginBottom: isSmallMobile ? 8 : 10,
                    fontFamily: font.sans,
                    fontSize: isSmallMobile ? 11 : 12,
                    fontWeight: 600,
                    letterSpacing: ".08em",
                    color: "rgba(176,120,69,.9)",
                    textAlign: "left",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p
                  style={{
                    margin: 0,
                    maxWidth: "100%",
                    marginLeft: 0,
                    fontFamily: font.sans,
                    fontSize: isSmallMobile ? 15 : 16,
                    lineHeight: 1.55,
                    color: aboutText,
                    textAlign: "left",
                    display: isMobile ? "block" : "-webkit-box",
                    overflow: isMobile ? "visible" : "hidden",
                    WebkitBoxOrient: isMobile ? "initial" : "vertical",
                    WebkitLineClamp: isMobile ? "unset" : 2,
                    lineClamp: isMobile ? "unset" : 2,
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
          marginTop: isSmallMobile ? 54 : isMobile ? 62 : 74,
        }}
      >
        <div
          style={{
            maxWidth: 980,
            width: "100%",
            margin: "0 auto",
            background: "linear-gradient(180deg, rgba(7,5,2,.56) 0%, rgba(7,5,2,.44) 100%)",
            border: `1px solid ${aboutRule}`,
            borderRadius: isSmallMobile ? 16 : 20,
            padding: isSmallMobile ? "8px 6px" : isMobile ? "10px 8px" : "12px 10px",
            position: "relative",
            zIndex: 1,
            overflow: "hidden",
            boxShadow: "0 12px 26px rgba(0,0,0,.2)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "repeat(2,minmax(0,1fr))" : "repeat(4,minmax(0,1fr))",
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
                    padding: isSmallMobile ? "16px 10px" : isMobile ? "18px 12px" : "20px 14px",
                    borderRight:
                      !isMobile
                        ? index < stats.length - 1
                          ? `1px solid ${aboutDivider}`
                          : "none"
                        : index % 2 === 0
                          ? `1px solid ${aboutDivider}`
                          : "none",
                    borderBottom: isMobile && index < 2 ? `1px solid ${aboutDivider}` : "none",
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
                      textTransform: "capitalize",
                      letterSpacing: ".08em",
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      </div>
    </Section>
  );
}
