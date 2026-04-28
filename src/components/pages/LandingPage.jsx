import { useEffect, useRef, useState } from "react";
import { T, font } from "../../constants/designTokens";
// import { HERO_BRAIN_IMG } from "../../constants/assets";
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

const HERO_USE_CASE_CROSSFADE_MS = 560;

const HERO_STATS = [
  { value: "50+", label: "AI engagements shipped" },
  { value: "6-10 weeks", label: "Typical production timeline" },
  { value: "2x", label: "Faster than traditional AI delivery" },
  { value: "40+ years", label: "Leadership experience in AI" },
];

/**
 * Viewport-height CSS injected once so we can stack the three minHeight
 * declarations in cascade order (vh → svh → dvh). React inline styles
 * can't hold duplicate keys, so a <style> block is the correct pattern.
 *
 * dvh  — shrinks when the mobile address bar hides/shows  ← best
 * svh  — "small viewport" (bar always visible); Safari 15.4+
 * vh   — classic fallback for any browser that knows neither
 */
const HERO_VIEWPORT_CSS = `
  .hero-root {
    min-height: 100vh;
    min-height: 100svh;
    min-height: 100dvh;
  }
  .hero-root-inner {
    min-height: 100vh;
    min-height: 100svh;
    min-height: 100dvh;
  }
`;

function HeroBtn({ label, onClick, primary }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        borderRadius: 999,
        padding: "10px 18px",
        border: primary ? `1px solid ${T.ink}` : `1px solid ${T.ink12}`,
        background: primary ? T.ink : "transparent",
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
  const { width, isMobile, isTablet, isSmallMobile, isLargeDesktop } = useViewport();
  const isTabletViewport = isTablet && !isMobile;
  const isHeaderGuardMobileViewport = isMobile && width >= 500 && width <= 650;
  const isWideTabletGuardViewport = isTabletViewport && width >= 900 && width <= 1030;
  const [useCaseIndex, setUseCaseIndex] = useState(0);
  const [previousUseCaseIndex, setPreviousUseCaseIndex] = useState(null);
  const useCaseIndexRef = useRef(0);
  const useCaseFadeTimeoutRef = useRef(null);
  const heroRef = useRef(null);
  const textLayerRef = useRef(null);
  const isPhoneViewport = isMobile;
  const isHeroMobileLayout = width <= 768;
  const heroSubheadingFontSize = isSmallMobile ? 18 : isTablet ? 19 : isLargeDesktop ? 22 : 20;
  const heroUseCaseFontSize = heroSubheadingFontSize + 1;
  const [heroUseCaseSlotWidth, setHeroUseCaseSlotWidth] = useState(
    isSmallMobile ? "220px" : isMobile ? "250px" : isTablet ? "280px" : "320px",
  );
  const [heroSubheadingNudgeX, setHeroSubheadingNudgeX] = useState(
    isSmallMobile ? 10 : isMobile ? 14 : isTablet ? 18 : 24,
  );
  const heroGuideViewBoxHeight = isSmallMobile ? 900 : isMobile ? 840 : isTablet ? 760 : 620;
  const heroTopGuideLineY = isSmallMobile ? 60 : isMobile ? 64 : isTablet ? 70 : 76;
  const heroBottomGuideLineY = Math.round(
    heroGuideViewBoxHeight * (isSmallMobile ? 0.92 : isMobile ? 0.92 : isTablet ? 0.91 : 0.9),
  );
  const heroGuideLineTailY = Math.min(
    heroBottomGuideLineY + (isSmallMobile ? 120 : 100),
    heroGuideViewBoxHeight - 8,
  );
  const heroGridLeftX = isSmallMobile ? 70 : isMobile ? 84 : isTablet ? 104 : 124;
  const heroGridRightX = 1000 - heroGridLeftX;
  const heroGuideLeftPct = `${(heroGridLeftX / 1000) * 100}%`;
  const heroGuideRightPct = `${(heroGridRightX / 1000) * 100}%`;
  const heroGuideStartYPct = `${(-20 / heroGuideViewBoxHeight) * 100}%`;
  const heroGuideTopPct = `${(heroTopGuideLineY / heroGuideViewBoxHeight) * 100}%`;
  const heroGuideBottomPct = `${(heroBottomGuideLineY / heroGuideViewBoxHeight) * 100}%`;
  const heroGuideTailPct = `${(heroGuideLineTailY / heroGuideViewBoxHeight) * 100}%`;
  const heroContainerMaxWidth = 1160;

  // ─── Spacing (mobile tightened so stats stay above fold on real devices) ───
  const heroSidePadding = isSmallMobile ? 16 : isMobile ? 20 : isTablet ? 28 : 40;

  const heroTopPadding = isSmallMobile
    ? "10px"
    : isHeaderGuardMobileViewport
      ? "28px"
      : isHeroMobileLayout
        ? "18px"
        : isWideTabletGuardViewport
          ? "18px"
          : isTabletViewport
            ? "10px"
            : "clamp(10px, 2.8vh, 34px)";

  const heroBottomPadding = isSmallMobile
    ? "10px"
    : isMobile
      ? "14px"
      : isWideTabletGuardViewport
        ? "22px"
        : isTabletViewport
          ? "18px"
          : "clamp(20px, 3.2vh, 38px)";

  const heroFlowGap = isSmallMobile ? 10 : isHeroMobileLayout ? 12 : isWideTabletGuardViewport ? 18 : isTabletViewport ? 16 : 20;
  const heroTopClusterGap = isSmallMobile ? 10 : isHeroMobileLayout ? 12 : heroFlowGap;
  const heroTitleScrollerSpacing = isSmallMobile ? 18 : isHeroMobileLayout ? 14 : 0;
  const heroCtaTopSpacing = isSmallMobile ? 50 : isHeroMobileLayout ? 38 : 0;
  const heroStatsNudgeY = isSmallMobile ? -40 : isMobile ? -24 : isWideTabletGuardViewport ? 0 : isTabletViewport ? 0 : 0;
    const heroStatsGridGap = isSmallMobile ? 6 : isMobile ? 10 : 14;
    const heroStatsCardPadding = isSmallMobile ? "6px 6px" : isMobile ? "10px 6px" : "12px 10px";
  const heroStatsCardMinHeight = isSmallMobile ? 60 : isMobile ? 68 : 82;
  const heroStatsValueFontSize = isSmallMobile ? 19 : isMobile ? 20 : isLargeDesktop ? 31 : 25;
  const heroStatsLabelFontSize = isSmallMobile ? 8 : isMobile ? 8.5 : 9.5;
  const heroCtaTopMargin = isHeroMobileLayout ? 0 : isWideTabletGuardViewport ? 18 : isTabletViewport ? 14 : 0;
  const heroContentNudgeY = isHeroMobileLayout ? 0 : isWideTabletGuardViewport ? -8 : isTabletViewport ? -14 : -24;
  const showHeroGuideLines = false;

  useEffect(() => {
    useCaseIndexRef.current = useCaseIndex;
  }, [useCaseIndex]);

  useEffect(() => {
    const probe = document.createElement("span");
    probe.style.position = "fixed";
    probe.style.left = "-9999px";
    probe.style.top = "-9999px";
    probe.style.visibility = "hidden";
    probe.style.pointerEvents = "none";
    probe.style.whiteSpace = "nowrap";
    probe.style.fontFamily = font.serif;
    probe.style.fontStyle = "normal";
    probe.style.fontSize = `${heroUseCaseFontSize}px`;
    probe.style.fontWeight = "700";
    probe.style.letterSpacing = "0.01em";
    probe.style.lineHeight = "1.15";
    document.body.appendChild(probe);

    let maxWidth = 0;
    let totalWidth = 0;

    for (const phrase of HERO_USE_CASES) {
      probe.textContent = phrase;
      const measuredWidth = Math.ceil(probe.getBoundingClientRect().width);
      maxWidth = Math.max(maxWidth, measuredWidth);
      totalWidth += measuredWidth;
    }

    probe.remove();

    const averageWidth = totalWidth / HERO_USE_CASES.length;
    const highlightHorizontalAllowance = isSmallMobile ? 24 : isMobile ? 26 : isTablet ? 28 : 30;
    const nextSlotWidth = Math.max(1, Math.ceil(maxWidth + highlightHorizontalAllowance));
    const nextNudge = Math.max(0, Math.round((nextSlotWidth - averageWidth) / 2));
    const nextSlotWidthPx = `${nextSlotWidth}px`;

    setHeroUseCaseSlotWidth((current) => (current === nextSlotWidthPx ? current : nextSlotWidthPx));
    setHeroSubheadingNudgeX((current) => (current === nextNudge ? current : nextNudge));
  }, [width, heroUseCaseFontSize, isSmallMobile, isMobile, isTablet]);

  useEffect(() => {
    const ticker = window.setInterval(() => {
      const current = useCaseIndexRef.current;
      const next = (current + 1) % HERO_USE_CASES.length;

      setPreviousUseCaseIndex(current);
      setUseCaseIndex(next);
      useCaseIndexRef.current = next;

      if (useCaseFadeTimeoutRef.current) {
        window.clearTimeout(useCaseFadeTimeoutRef.current);
      }

      useCaseFadeTimeoutRef.current = window.setTimeout(() => {
        setPreviousUseCaseIndex(null);
        useCaseFadeTimeoutRef.current = null;
      }, HERO_USE_CASE_CROSSFADE_MS);
    }, 2000);

    return () => {
      window.clearInterval(ticker);
      if (useCaseFadeTimeoutRef.current) {
        window.clearTimeout(useCaseFadeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* ── Viewport-height cascade: vh → svh → dvh ─────────────────────────
          Inline React styles can't hold duplicate keys, so a <style> block
          is the only way to emit all three declarations in the correct order.
          dvh is the winner on modern mobile — it shrinks when the browser
          address bar collapses, preventing stats from slipping below the fold.
      ─────────────────────────────────────────────────────────────────────── */}
      <style>{HERO_VIEWPORT_CSS}</style>

      <section
        ref={heroRef}
        id="home"
        className="hero-root"
        style={{
          /* minHeight controlled by .hero-root CSS class above */
          scrollMarginTop: 84,
          background: "var(--site-base-bg)",
          position: "relative",
          isolation: "isolate",
          overflowAnchor: "none",
        }}
      >
        <div
          className="hero-root-inner"
          style={{
            /* minHeight controlled by .hero-root-inner CSS class above */
            position: "relative",
            boxSizing: "border-box",
            display: "flex",
            alignItems: isHeroMobileLayout ? "flex-start" : "center",
            justifyContent: "flex-start",
            padding: `${heroTopPadding} 0 ${heroBottomPadding}`,
            overflowX: "hidden",
            overflowY: "visible",
            isolation: "isolate",
            overflowAnchor: "none",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              zIndex: 0,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(84% 72% at 50% 58%, rgba(232,227,217,.24) 0%, rgba(232,227,217,.04) 56%, rgba(232,227,217,0) 100%), linear-gradient(180deg, rgba(232,227,217,.98) 0%, rgba(232,227,217,.94) 44%, rgba(232,227,217,.72) 72%, rgba(232,227,217,.34) 100%)",
              }}
            />

            {showHeroGuideLines && (
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  opacity: isSmallMobile ? 0.46 : isMobile ? 0.46 : isTablet ? 0.42 : 0.46,
                }}
              >
                <svg
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    overflow: "visible",
                  }}
                >
                  <g
                    fill="none"
                    stroke="rgba(136,104,73,.64)"
                    strokeWidth={isSmallMobile ? 1.05 : isMobile ? 1 : 0.95}
                    strokeLinecap="butt"
                    strokeDasharray={isSmallMobile ? "5 8" : isMobile ? "5.2 9" : "5.5 11"}
                    shapeRendering="geometricPrecision"
                    vectorEffect="non-scaling-stroke"
                  >
                    <line x1={heroGuideLeftPct} y1={heroGuideStartYPct} x2={heroGuideLeftPct} y2={heroGuideTailPct} />
                    <line x1={heroGuideRightPct} y1={heroGuideStartYPct} x2={heroGuideRightPct} y2={heroGuideTailPct} />
                    <line x1="-2%" y1={heroGuideTopPct} x2="102%" y2={heroGuideTopPct} />
                    <line x1="-2%" y1={heroGuideBottomPct} x2="102%" y2={heroGuideBottomPct} />
                  </g>
                </svg>
              </div>
            )}
          </div>

          <div
            ref={textLayerRef}
            style={{
              width: "100%",
              minHeight: isHeroMobileLayout
                ? `calc(100dvh - ${heroTopPadding} - ${heroBottomPadding})`
                : "auto",
              maxWidth: heroContainerMaxWidth,
              margin: "0 auto",
              padding: `0 ${heroSidePadding}px`,
              textAlign: "center",
              position: "relative",
              zIndex: 2,
              transform: `translateY(${heroContentNudgeY}px)`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: isSmallMobile ? "space-around" : isHeroMobileLayout ? "space-evenly" : "flex-start",
              gap: isHeroMobileLayout ? 0 : heroFlowGap,
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: heroTopClusterGap,
                flexGrow: 0,
              }}
            >
              <Reveal delay={0.04} distance={14} blurFrom={10}>
                <span
                  style={{
                    display: "inline-block",
                    fontFamily: font.sans,
                    fontSize: isSmallMobile ? 11 : isLargeDesktop ? 14 : 12,
                    fontWeight: 500,
                    letterSpacing: ".18em",
                    textTransform: "uppercase",
                    color: T.ink50,
                    lineHeight: 1.2,
                  }}
                >
                  Your on-demand Applied AI Lab
                </span>
              </Reveal>



              <Reveal delay={0.12} distance={22} blurFrom={12}>
                <h1
                  style={{
                    margin: 0,
                    fontFamily: font.serif,
                    fontWeight: 500,
                    letterSpacing: "-.02em",
                    color: T.ink,
                    lineHeight: 1.05,
                    fontSize: isMobile ? "clamp(38px, 12vw, 58px)" : "clamp(56px, 6.4vw, 110px)",
                  }}
                >
                  Turn AI into real
                  <span
                    style={{
                      display: "block",
                      color: T.amber,
                      fontFamily: font.serif,
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontOpticalSizing: "auto",
                      whiteSpace: "nowrap",
                      fontSize: isMobile ? "1em" : "1.14em",
                    }}
                  >
                    business outcomes
                  </span>
                </h1>
              </Reveal>

              {!isHeroMobileLayout && (
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
              )}

              <Reveal delay={0.28} distance={16} blurFrom={6}>
                <p
                  style={{
                    margin: 0,
                    paddingTop: heroTitleScrollerSpacing,
                    maxWidth: 860,
                    width: "min(100%, 860px)",
                    display: "inline-flex",
                    flexWrap: isTablet ? "wrap" : "nowrap",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: isPhoneViewport ? 0 : isSmallMobile ? 2 : 4,
                    rowGap: isPhoneViewport ? 6 : 2,
                    fontFamily: font.sans,
                    fontSize: heroSubheadingFontSize,
                    lineHeight: 1.6,
                    color: T.ink60,
                    whiteSpace: isTablet ? "normal" : "nowrap",
                    transform: isPhoneViewport ? "translateX(0px)" : `translateX(${heroSubheadingNudgeX}px)`,
                  }}
                >
                  <span style={{ flexShrink: 0 }}>We design, deploy, and scale</span>
                  <span
                    className="hero-use-case-shell"
                    style={{
                      width: heroUseCaseSlotWidth,
                      minWidth: heroUseCaseSlotWidth,
                      textAlign: isPhoneViewport ? "center" : "left",
                      justifyItems: isPhoneViewport ? "center" : "start",
                    }}
                  >
                    {previousUseCaseIndex !== null && (
                      <span
                        className="hero-use-case-word hero-use-case-word-out"
                        style={{ textAlign: isPhoneViewport ? "center" : "left", fontSize: heroUseCaseFontSize }}
                      >
                        {HERO_USE_CASES[previousUseCaseIndex]}
                      </span>
                    )}
                    <span
                      key={useCaseIndex}
                      className="hero-use-case-word hero-use-case-word-in"
                      style={{ textAlign: isPhoneViewport ? "center" : "left", fontSize: heroUseCaseFontSize }}
                    >
                      {HERO_USE_CASES[useCaseIndex]}
                    </span>
                  </span>
                </p>
              </Reveal>

              <Reveal delay={0.34} distance={16} blurFrom={6}>
                <div
                  style={{
                    marginTop: heroCtaTopMargin,
                    paddingTop: heroCtaTopSpacing,
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

            <Reveal delay={0.42} distance={14} blurFrom={6}>
              <div
                style={{
                  width: "100%",
                  maxWidth: isTablet ? 800 : 1000,
                  margin: "0 auto",
                  transform: `translateY(${heroStatsNudgeY}px)`,
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: isSmallMobile ? 8 : isMobile ? 10 : 12,
                    width: "100%",
                  }}
                >
                  <span
                    style={{
                      width: "100%",
                      height: 1,
                      background: T.ink12,
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "grid",
                      gridTemplateColumns: isSmallMobile
                        ? "repeat(2, minmax(0, 1fr))"
                        : isMobile
                          ? "repeat(2, minmax(132px, 1fr))"
                          : isTablet
                            ? "repeat(2, minmax(0, 1fr))"
                            : "repeat(4, minmax(0, 1fr))",
                      gap: heroStatsGridGap,
                      alignItems: "stretch",
                  }}
                >
                  {HERO_STATS.map((item, index) => {
                      const columns = isMobile ? 2 : isTablet ? 2 : 4;
                    const isRowEnd = (index + 1) % columns === 0;
                    const isLast = index === HERO_STATS.length - 1;

                    return (
                    <div
                      key={item.label}
                      style={{
                        width: "100%",
                        minWidth: 0,
                        padding: heroStatsCardPadding,
                        textAlign: "center",
                        minHeight: heroStatsCardMinHeight,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRight: !isRowEnd && !isLast ? `1px solid ${T.ink12}` : "none",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: font.sans,
                          fontSize: heroStatsLabelFontSize,
                          fontWeight: 600,
                          textTransform: "uppercase",
                          lineHeight: 1.3,
                          letterSpacing: ".05em",
                          color: "rgba(30,26,16,.7)",
                          marginBottom: isMobile ? 6 : 8,
                          maxWidth: "100%",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Fraunces', serif",
                          fontSize: heroStatsValueFontSize,
                          fontWeight: 600,
                          lineHeight: 1,
                          color: T.ink,
                        }}
                      >
                        {item.value}
                      </div>
                    </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}