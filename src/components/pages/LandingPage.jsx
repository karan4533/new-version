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
  const { width, isMobile, isTablet, isSmallMobile } = useViewport();
  const [useCaseIndex, setUseCaseIndex] = useState(0);
  const heroRef = useRef(null);
  // const backLayerRef = useRef(null);
  // const frontLayerRef = useRef(null);
  const textLayerRef = useRef(null);
  // const useSingleParallaxLayer = isTablet || width < 1280;
  const heroViewportMinHeight = isSmallMobile ? "100dvh" : isMobile ? "100dvh" : isTablet ? "100dvh" : "96dvh";
  const heroSceneHeight = isSmallMobile ? "116dvh" : isMobile ? "120dvh" : isTablet ? "124dvh" : "130dvh";
  const isMobileViewport = isSmallMobile || isMobile || isTablet;
  const isPhoneViewport = isMobile;
  const mobileCenterTuning = isSmallMobile ? 12 : isMobile ? 14 : 16;
  const heroSubheadingFontSize = isSmallMobile ? 14 : isTablet ? 15 : 16;
  const [heroUseCaseSlotWidth, setHeroUseCaseSlotWidth] = useState(
    isSmallMobile ? "220px" : isMobile ? "250px" : isTablet ? "280px" : "320px",
  );
  const [heroSubheadingNudgeX, setHeroSubheadingNudgeX] = useState(
    isSmallMobile ? 10 : isMobile ? 14 : isTablet ? 18 : 24,
  );
  const [mobileHeroCompensation, setMobileHeroCompensation] = useState(
    isSmallMobile ? 76 : isMobile ? 80 : isTablet ? 88 : 0,
  );
  const heroTextLift = isMobileViewport
    ? -Math.max(0, mobileHeroCompensation - mobileCenterTuning)
    : -26;

  useEffect(() => {
    const probe = document.createElement("span");
    probe.style.position = "fixed";
    probe.style.left = "-9999px";
    probe.style.top = "-9999px";
    probe.style.visibility = "hidden";
    probe.style.pointerEvents = "none";
    probe.style.whiteSpace = "nowrap";
    probe.style.fontFamily = font.sans;
    probe.style.fontSize = `${heroSubheadingFontSize}px`;
    probe.style.fontWeight = "700";
    probe.style.letterSpacing = "0.01em";
    probe.style.lineHeight = "1.6";
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
    const nextSlotWidth = Math.max(1, Math.ceil(maxWidth + 2));
    const nextNudge = Math.max(0, Math.round((nextSlotWidth - averageWidth) / 2));
    const nextSlotWidthPx = `${nextSlotWidth}px`;

    setHeroUseCaseSlotWidth((current) => (current === nextSlotWidthPx ? current : nextSlotWidthPx));
    setHeroSubheadingNudgeX((current) => (current === nextNudge ? current : nextNudge));
  }, [width, heroSubheadingFontSize]);

  useEffect(() => {
    if (!isMobileViewport) {
      setMobileHeroCompensation(0);
      return;
    }

    const syncHeroCompensation = () => {
      const navElement = document.querySelector("nav");

      if (!navElement) {
        const fallbackCompensation = isSmallMobile ? 76 : isMobile ? 80 : 88;
        setMobileHeroCompensation((current) => (current === fallbackCompensation ? current : fallbackCompensation));
        return;
      }

      const rect = navElement.getBoundingClientRect();
      const nextCompensation = Math.max(0, Math.min(120, Math.round(rect.top + rect.height)));

      setMobileHeroCompensation((current) => (current === nextCompensation ? current : nextCompensation));
    };

    syncHeroCompensation();
    window.addEventListener("resize", syncHeroCompensation, { passive: true });
    window.addEventListener("orientationchange", syncHeroCompensation, { passive: true });

    return () => {
      window.removeEventListener("resize", syncHeroCompensation);
      window.removeEventListener("orientationchange", syncHeroCompensation);
    };
  }, [isMobileViewport, isSmallMobile, isMobile, isTablet]);

  useEffect(() => {
    const ticker = window.setInterval(() => {
      setUseCaseIndex((current) => (current + 1) % HERO_USE_CASES.length);
    }, 2000);

    return () => window.clearInterval(ticker);
  }, []);

  /*
   * Hero parallax + background image motion temporarily disabled.
   * Keeping this block commented for easy reuse later.
   */
  // useEffect(() => {
  //   const heroElement = heroRef.current;
  //   const backLayerElement = backLayerRef.current;
  //   const frontLayerElement = frontLayerRef.current;
  //   const textLayerElement = textLayerRef.current;

  //   if (!heroElement || !backLayerElement || !frontLayerElement || !textLayerElement) return;

  //   const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  //   const shouldAnimate = !prefersReducedMotion;

  //   let rafId = 0;

  //   const paintParallax = () => {
  //     rafId = 0;

  //     const rect = heroElement.getBoundingClientRect();
  //     const viewportHeight = window.innerHeight || 1;
  //     const viewportWidth = window.innerWidth || 1;
  //     const scrollSpan = Math.max(rect.height - viewportHeight, viewportHeight * (isMobile ? 0.58 : 0.42));
  //     const progress = Math.max(0, Math.min(1, -rect.top / scrollSpan));
  //     const eased = progress < 0.5
  //       ? 2 * progress * progress
  //       : 1 - Math.pow(-2 * progress + 2, 2) / 2;
  //     const revealSpan = isSmallMobile ? 0.34 : isMobile ? 0.3 : 0.24;
  //     const revealProgress = shouldAnimate
  //       ? Math.max(0, Math.min(1, progress / revealSpan))
  //       : 1;

  //     const viewportScale = Math.max(0.78, Math.min(1, viewportWidth / 1440));
  //     const motionScale = (isSmallMobile ? 0.44 : isMobile ? 0.6 : isTablet ? 0.82 : 1) * viewportScale;
  //     const backStartY = viewportHeight * (isMobile ? 0.024 : isTablet ? 0.03 : 0.042) * motionScale;
  //     const backEndY = -viewportHeight * (isMobile ? 0.012 : isTablet ? 0.018 : 0.026) * motionScale;
  //     const frontStartY = viewportHeight * (isSmallMobile ? 0.095 : isMobile ? 0.115 : isTablet ? 0.145 : 0.18) * motionScale;
  //     const sideTravel = useSingleParallaxLayer
  //       ? 0
  //       : viewportWidth * (isTablet ? 0.006 : 0.01) * motionScale;

  //     const backY = shouldAnimate ? Math.round(backStartY * (1 - eased) + backEndY * eased) : 0;
  //     const frontY = shouldAnimate ? Math.round(frontStartY * (1 - eased)) : frontStartY;
  //     const frontX = shouldAnimate ? Math.round((1 - eased) * sideTravel) : 0;
  //     const backScale = 1 + eased * (useSingleParallaxLayer ? 0.014 : 0.045) * motionScale;
  //     const frontScale = 1 + eased * (useSingleParallaxLayer ? 0.072 : 0.11) * motionScale;

  //     const textCoverStart = isSmallMobile ? 0.44 : isMobile ? 0.41 : 0.38;
  //     const textCoverSpan = isSmallMobile ? 0.46 : isMobile ? 0.5 : 0.52;
  //     const textCoverProgress = Math.max(0, Math.min(1, (progress - textCoverStart) / textCoverSpan));
  //     const textOpacity = shouldAnimate ? Math.max(0.04, 1 - textCoverProgress * 0.96) : 1;
  //     const textShiftY = shouldAnimate ? Math.round(-textCoverProgress * viewportHeight * (isMobile ? 0.008 : 0.014)) : 0;

  //     backLayerElement.style.transform = `translate3d(calc(-50% + 0px), calc(-50% + ${backY}px), 0) scale(${backScale})`;
  //     backLayerElement.style.opacity = useSingleParallaxLayer
  //       ? "0"
  //       : String(((isMobile ? 0.13 : 0.17) + eased * 0.06 * motionScale) * revealProgress);
  //     backLayerElement.style.visibility = useSingleParallaxLayer ? "hidden" : "visible";
  //     frontLayerElement.style.transform = `translate3d(calc(-50% + ${frontX}px), calc(-50% + ${frontY}px), 0) scale(${frontScale})`;
  //     textLayerElement.style.transform = `translate3d(0, ${textShiftY}px, 0)`;
  //     textLayerElement.style.opacity = String(textOpacity);
  //     textLayerElement.style.pointerEvents = textOpacity < 0.08 ? "none" : "auto";
  //     frontLayerElement.style.opacity = String(
  //       ((useSingleParallaxLayer ? (isMobile ? 0.26 : 0.24) : isMobile ? 0.24 : 0.28)
  //         + eased * (useSingleParallaxLayer ? 0.3 : 0.42) * motionScale)
  //         * revealProgress,
  //     );
  //   };

  //   const requestPaint = () => {
  //     if (rafId !== 0) return;
  //     rafId = window.requestAnimationFrame(paintParallax);
  //   };

  //   requestPaint();
  //   window.addEventListener("scroll", requestPaint, { passive: true });
  //   window.addEventListener("resize", requestPaint, { passive: true });
  //   window.addEventListener("orientationchange", requestPaint, { passive: true });

  //   return () => {
  //     if (rafId !== 0) {
  //       window.cancelAnimationFrame(rafId);
  //     }

  //     window.removeEventListener("scroll", requestPaint);
  //     window.removeEventListener("resize", requestPaint);
  //     window.removeEventListener("orientationchange", requestPaint);
  //   };
  // }, [isMobile, isTablet, isSmallMobile, useSingleParallaxLayer]);

  return (
    <section
      ref={heroRef}
      id="home"
      style={{
        minHeight: heroSceneHeight,
        scrollMarginTop: 84,
        background: "var(--site-base-bg)",
        position: "relative",
        isolation: "isolate",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          minHeight: heroViewportMinHeight,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: isSmallMobile
            ? "24px 0"
            : isMobile
              ? "30px 0"
              : isTablet
                ? "34px 0"
                : "38px 0",
          overflow: "hidden",
          isolation: "isolate",
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
        {/*
          Hero background image layer (back) temporarily disabled.
          <div ref={backLayerRef}>...</div>
        */}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(84% 72% at 50% 58%, rgba(232,227,217,.24) 0%, rgba(232,227,217,.04) 56%, rgba(232,227,217,0) 100%), linear-gradient(180deg, rgba(232,227,217,.98) 0%, rgba(232,227,217,.94) 44%, rgba(232,227,217,.72) 72%, rgba(232,227,217,.34) 100%)",
          }}
        />

        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: isSmallMobile ? 0.56 : isMobile ? 0.52 : isTablet ? 0.42 : 0.46,
          }}
        >
          <svg
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <g
              fill="none"
              stroke={isMobile ? "rgba(136,104,73,.8)" : "rgba(136,104,73,.64)"}
              strokeWidth={isSmallMobile ? 1.05 : isMobile ? 1 : 0.95}
              strokeLinecap="butt"
              strokeDasharray={isSmallMobile ? "5 8" : isMobile ? "5.2 9" : "5.5 11"}
              shapeRendering="geometricPrecision"
            >
              <line x1="160" y1="-20" x2="160" y2="620" />
              <line x1="840" y1="-20" x2="840" y2="620" />
              <line x1="-20" y1="110" x2="1020" y2="110" />
              <line x1="-20" y1="520" x2="1020" y2="520" />
            </g>
          </svg>
        </div>
      </div>

      <div
        ref={textLayerRef}
        style={{
          width: "100%",
          maxWidth: 1020,
          margin: "0 auto",
          padding: `0 ${isSmallMobile ? 14 : isMobile ? 20 : 44}px`,
          textAlign: "center",
          position: "relative",
          zIndex: 2,
          transform: `translateY(${heroTextLift}px)`,
          willChange: "transform, opacity",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Reveal delay={0.04} distance={14} blurFrom={10}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: isSmallMobile ? "7px 14px" : "8px 16px",
              borderRadius: 999,
              border: `1px solid ${T.ink12}`,
              background: "rgba(255,255,255,.72)",
              backdropFilter: "blur(2px)",
              WebkitBackdropFilter: "blur(2px)",
              fontFamily: font.sans,
              fontSize: isSmallMobile ? 11 : 12,
              fontWeight: 600,
              letterSpacing: ".01em",
              color: T.ink,
              lineHeight: 1.2,
            }}
          >
            Turn AI into real business outcomes
          </span>
        </Reveal>

        <Reveal delay={0.08} distance={10} blurFrom={8}>
          <div
            style={{
              marginTop: isSmallMobile ? 10 : 12,
              marginBottom: isSmallMobile ? 4 : 6,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: isSmallMobile ? 8 : 10,
            }}
            aria-hidden="true"
          >
            <span
              style={{
                display: "block",
                width: isSmallMobile ? 42 : 58,
                height: 1,
                background: T.ink12,
              }}
            />
            <span
              style={{
                display: "block",
                width: 6,
                height: 6,
                border: `1px solid ${T.ink12}`,
                background: T.ink07,
                transform: "rotate(45deg)",
              }}
            />
            <span
              style={{
                display: "block",
                width: isSmallMobile ? 42 : 58,
                height: 1,
                background: T.ink12,
              }}
            />
          </div>
        </Reveal>

        <Reveal delay={0.12} distance={22} blurFrom={12}>
          <h1
            style={{
              margin: isSmallMobile ? "24px 0 18px" : isMobile ? "30px 0 22px" : "28px 0 20px",
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
              maxWidth: 860,
              width: "min(100%, 860px)",
              display: "inline-flex",
              flexWrap: isTablet ? "wrap" : "nowrap",
              alignItems: "baseline",
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
              style={{ width: heroUseCaseSlotWidth, minWidth: heroUseCaseSlotWidth, textAlign: isPhoneViewport ? "center" : "left" }}
            >
              <span className="hero-use-case-word" style={{ textAlign: isPhoneViewport ? "center" : "left" }}>
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

      {/*
        Hero background image layer (front) temporarily disabled.
        <div ref={frontLayerRef}>...</div>
      */}
      </div>
    </section>
  );
}
