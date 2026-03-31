import { useEffect, useState } from "react";
import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Reveal } from "../shared";

const HERO_USE_CASES = [
  "Agentic AI Automation",
  "Multilingual Voice Agents",
  "Autonomous Customer Support",
  "Conversational Bots",
  "Document Analysis",
  "Vision Intelligence",
  "Compliance Monitoring",
  "Conversational Data Insights",
  "Agentic Knowledge Search",
];

function HeroBtn({ label, onClick, primary }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        borderRadius: 999,
        padding: "10px 18px",
        border: primary ? `1px solid ${T.amber}` : `1px solid ${T.ink12}`,
        background: primary ? T.amber : "transparent",
        color: primary ? T.w : T.ink,
        fontFamily: font.sans,
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: ".04em",
        textTransform: "uppercase",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
}

export function LandingPage({ onCaseStudies, onContact }) {
  const { isMobile, isTablet, isSmallMobile } = useViewport();
  const [useCaseIndex, setUseCaseIndex] = useState(0);

  useEffect(() => {
    const ticker = window.setInterval(() => {
      setUseCaseIndex((current) => (current + 1) % HERO_USE_CASES.length);
    }, 2000);

    return () => window.clearInterval(ticker);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: isMobile || isTablet ? "auto" : "clamp(520px, 64vh, 640px)",
        scrollMarginTop: 84,
        padding: isSmallMobile
          ? "54px 0 24px"
          : isMobile
            ? "62px 0 30px"
            : isTablet
              ? "66px 0 18px"
              : "74px 0 30px",
        background: "var(--site-base-bg)",
      }}
    >
      <div
        style={{
          maxWidth: 1020,
          margin: "0 auto",
          padding: `0 ${isSmallMobile ? 14 : isMobile ? 20 : 44}px`,
          textAlign: "center",
        }}
      >
        <Reveal delay={0.04} distance={14} blurFrom={10}>
          <p
            style={{
              margin: 0,
              fontFamily: font.sans,
              fontSize: isSmallMobile ? 11 : 12,
              letterSpacing: ".09em",
              textTransform: "uppercase",
              color: T.ink40,
            }}
          >
          </p>
        </Reveal>

        <Reveal delay={0.12} distance={22} blurFrom={12}>
          <h1
            style={{
              margin: isSmallMobile ? "16px 0 10px" : "20px 0 12px",
              fontFamily: font.serif,
              fontWeight: 600,
              letterSpacing: "-.02em",
              color: T.ink,
              lineHeight: 1.05,
              fontSize: isMobile ? "clamp(38px, 12vw, 58px)" : "clamp(60px, 6.9vw, 98px)",
            }}
          >
            Your on-demand
            <span
              style={{
                display: "block",
                color: T.amber,
                fontStyle: "italic",
                fontWeight: 700,
              }}
            >
              Applied AI Lab.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.2} distance={18} blurFrom={8}>
          <p
            style={{
              margin: "0 auto",
              maxWidth: 720,
              fontFamily: font.sans,
              fontSize: isSmallMobile ? 13 : 14,
              lineHeight: 1.75,
              color: T.ink60,
            }}
          >
           
          </p>
        </Reveal>

        <Reveal delay={0.28} distance={16} blurFrom={6}>
          <p
            style={{
              margin: "14px auto 0",
              maxWidth: 760,
              display: "inline-flex",
              alignItems: "baseline",
              justifyContent: "center",
              gap: 6,
              fontFamily: font.sans,
              fontSize: isSmallMobile ? 12 : isTablet ? 12 : 13,
              lineHeight: 1.6,
              color: T.ink60,
              whiteSpace: isMobile ? "normal" : "nowrap",
            }}
          >
            <span style={{ flexShrink: 0 }}>Enterprises engage us for</span>
            <span
              className="hero-use-case-shell"
              style={{
                minWidth: isMobile ? "unset" : "25ch",
                justifyItems: "start",
                textAlign: "left",
              }}
            >
              <span key={useCaseIndex} className="hero-use-case-word">
                {HERO_USE_CASES[useCaseIndex]}
              </span>
            </span>
          </p>
        </Reveal>

        <Reveal delay={0.34} distance={16} blurFrom={6}>
          <div
            style={{
              marginTop: 22,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            <HeroBtn label="See our work" onClick={onCaseStudies} primary />
            <HeroBtn label="Book a call" onClick={onContact} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
