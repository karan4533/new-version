import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";

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

export function LandingPage({ onAbout, onContact }) {
  const { isMobile, isSmallMobile } = useViewport();

  return (
    <section
      id="home"
      style={{
        minHeight: isMobile ? "auto" : "76vh",
        scrollMarginTop: 84,
        padding: isSmallMobile ? "54px 0 28px" : isMobile ? "64px 0 36px" : "82px 0 52px",
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
          Why work with us? We operate as your Applied AI Lab
        </p>

        <h1
          style={{
            margin: isSmallMobile ? "16px 0 10px" : "20px 0 12px",
            fontFamily: font.serif,
            fontWeight: 600,
            letterSpacing: "-.02em",
            color: T.ink,
            lineHeight: 1.05,
            fontSize: isMobile ? "clamp(42px, 13vw, 64px)" : "clamp(66px, 7.4vw, 108px)",
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
          We help you build AI systems that are useful, production-ready, and measurable.
        </p>

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
          <HeroBtn label="Book a Discovery Call" onClick={onContact} primary />
          <HeroBtn label="Explore Our Services" onClick={onAbout} />
        </div>
      </div>
    </section>
  );
}
