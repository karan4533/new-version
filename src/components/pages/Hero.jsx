import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Reveal, Pill, H1, Em, Btn } from "../shared";
import { HERO_BRAIN_IMG } from "../../constants/assets";

export function Hero() {
  const { isMobile, isTablet, isSmallMobile } = useViewport();
  return (
    <div
      style={{
        maxWidth: 1160,
        margin: "0 auto",
        padding: `0 ${isSmallMobile ? 16 : isMobile ? 20 : isTablet ? 28 : 48}px`,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isTablet ? "1fr" : "1fr 1fr",
          alignItems: "center",
          gap: isSmallMobile ? 24 : isMobile ? 28 : 40,
          padding: isSmallMobile
            ? "28px 0 40px"
            : isMobile
              ? "36px 0 56px"
              : "60px 0 80px",
        }}
      >
        <Reveal>
          <Pill>About us</Pill>
          <H1>
            On a mission to
            <br />
            <Em>simplify</Em> automation.
          </H1>
          <p
            style={{
              fontSize: isSmallMobile ? 13 : 15,
              lineHeight: 1.75,
              color: T.ink60,
              maxWidth: 420,
              marginBottom: 36,
              fontFamily: font.sans,
            }}
          >
            We help teams move from AI curiosity to real-world impact through
            consulting, custom solutioning, and applied AI research.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Btn dark href="#contact">
              Talk to us
            </Btn>
            <a
              href="#about"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "9px 20px",
                borderRadius: 100,
                border: `1.5px solid ${T.ink12}`,
                fontSize: 14,
                fontWeight: 500,
                color: T.ink,
                textDecoration: "none",
              }}
            >
              How we work
              <span
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: T.ink,
                  color: T.w,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11,
                }}
              >
                ➜
              </span>
            </a>
          </div>
        </Reveal>
        <div
          style={{
            display: "flex",
            justifyContent: isTablet ? "center" : "flex-end",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: isMobile
                ? "min(88vw, 420px)"
                : "clamp(340px, 38vw, 500px)",
              height: isMobile
                ? "min(88vw, 420px)"
                : "clamp(340px, 38vw, 500px)",
              borderRadius: 24,
              overflow: "hidden",
              background: T.bg,
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={HERO_BRAIN_IMG}
              alt="AI Brain"
              style={{
                position: "relative",
                zIndex: 2,
                width: "100%",
                height: "100%",
                objectFit: "contain",
                animation: "floatBrain 7s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
