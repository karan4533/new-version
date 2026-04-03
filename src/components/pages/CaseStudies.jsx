import { useEffect, useMemo, useRef, useState } from "react";
import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Reveal, Section } from "../shared";
import { CASES } from "../../constants/data/cases";
import dataAnalyticsImage from "../../assets/data analytics.png";
import legalImage from "../../assets/legal.png";
import constructionImage from "../../assets/constuction.png";
import d2cImage from "../../assets/D2C.png";
import medicoLegalImage from "../../assets/medigo legal.png";

const THEME_BY_CATEGORY = {
  "Data analytics": {
    image: dataAnalyticsImage,
    position: "center 42%",
    tabletPosition: "center 38%",
    mobilePosition: "center 34%",
    overlay: "linear-gradient(180deg, rgba(12,18,26,.32) 0%, rgba(12,18,26,.78) 100%)",
  },
  "E-Commerce": {
    image: dataAnalyticsImage,
    position: "center 44%",
    tabletPosition: "center 40%",
    mobilePosition: "center 36%",
    bg: "linear-gradient(135deg, #4f6679 0%, #2f4252 48%, #1f2b36 100%)",
    overlay: "linear-gradient(180deg, rgba(17,20,24,.28) 0%, rgba(17,20,24,.74) 100%)",
  },
  Legal: {
    image: legalImage,
    position: "center 40%",
    tabletPosition: "center 36%",
    mobilePosition: "center 30%",
    overlay: "linear-gradient(180deg, rgba(12,16,22,.34) 0%, rgba(12,16,22,.78) 100%)",
  },
  Construction: {
    image: constructionImage,
    position: "center 44%",
    tabletPosition: "center 40%",
    mobilePosition: "center 34%",
    overlay: "linear-gradient(180deg, rgba(14,20,20,.28) 0%, rgba(14,20,20,.76) 100%)",
  },
  "Medico-Legal": {
    image: medicoLegalImage,
    position: "center 42%",
    tabletPosition: "center 38%",
    mobilePosition: "center 34%",
    overlay: "linear-gradient(180deg, rgba(16,18,24,.3) 0%, rgba(16,18,24,.76) 100%)",
  },
  "D2C Brand": {
    image: d2cImage,
    position: "center 40%",
    tabletPosition: "center 36%",
    mobilePosition: "center 30%",
    overlay: "linear-gradient(180deg, rgba(24,18,16,.28) 0%, rgba(24,18,16,.74) 100%)",
  },
  "Sales Tech": {
    bg: "linear-gradient(135deg, #34536d 0%, #24425b 48%, #1b2f43 100%)",
    overlay: "linear-gradient(180deg, rgba(12,18,24,.26) 0%, rgba(12,18,24,.74) 100%)",
  },
  Enterprise: {
    bg: "linear-gradient(135deg, #4a5c66 0%, #33444d 48%, #232f36 100%)",
    overlay: "linear-gradient(180deg, rgba(16,20,24,.24) 0%, rgba(16,20,24,.7) 100%)",
  },
  Automotive: {
    bg: "linear-gradient(135deg, #56606b 0%, #3d4751 48%, #2b333b 100%)",
    overlay: "linear-gradient(180deg, rgba(16,20,24,.22) 0%, rgba(16,20,24,.72) 100%)",
  },
};

const DEFAULT_THEME = {
  bg: "linear-gradient(135deg, #5d646d 0%, #424b54 48%, #2a3138 100%)",
  overlay: "linear-gradient(180deg, rgba(16,20,24,.24) 0%, rgba(16,20,24,.72) 100%)",
};

const getCompactText = (value, maxChars) => {
  if (!value) return "";

  const cleaned = String(value).replace(/\s+/g, " ").trim();
  if (cleaned.length <= maxChars) return cleaned;
  return `${cleaned.slice(0, maxChars - 1).trimEnd()}...`;
};

const toTabLabel = (value) =>
  String(value)
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .toUpperCase();

const getTheme = (category) => THEME_BY_CATEGORY[category] || DEFAULT_THEME;

export function CaseStudies({ onOpenCaseStudy }) {
  const { width, isMobile, isTablet, isSmallMobile } = useViewport();
  const isTabletOnly = isTablet && !isMobile;
  const isTabWrapViewport = width >= 640 && width <= 1024;
  const isNarrowTablet = isTablet && width <= 900;
  const showcaseCases = CASES;
  const [activeIndex, setActiveIndex] = useState(0);
  const [readyImages, setReadyImages] = useState({});
  const tabRailRef = useRef(null);
  const tabRefs = useRef([]);

  const preloadSources = useMemo(() => {
    const uniqueSources = new Set();

    showcaseCases.forEach((caseItem) => {
      const source = getTheme(caseItem.cat)?.image;
      if (source) uniqueSources.add(source);
    });

    return Array.from(uniqueSources);
  }, [showcaseCases]);

  useEffect(() => {
    let isCancelled = false;

    preloadSources.forEach((source) => {
      const image = new Image();
      image.decoding = "async";
      image.src = source;

      const markReady = () => {
        if (isCancelled) return;

        setReadyImages((current) => {
          if (current[source]) return current;
          return { ...current, [source]: true };
        });
      };

      if (image.complete) {
        markReady();
      } else {
        image.onload = markReady;
        image.onerror = markReady;
      }
    });

    return () => {
      isCancelled = true;
    };
  }, [preloadSources]);

  useEffect(() => {
    if (isSmallMobile || isTabWrapViewport) return;

    const rail = tabRailRef.current;
    const activeTab = tabRefs.current[activeIndex];
    if (!rail || !activeTab) return;

    // Keep the active tab near the left edge so upcoming tabs appear immediately.
    const leftAnchor = isTablet ? 20 : 28;
    const targetLeft = Math.max(
      0,
      Math.min(
        activeTab.offsetLeft - leftAnchor,
        rail.scrollWidth - rail.clientWidth,
      ),
    );

    rail.scrollTo({ left: targetLeft, behavior: "smooth" });
  }, [activeIndex, isSmallMobile, isTablet, isTabletOnly, isTabWrapViewport]);

  const activeCase = showcaseCases[activeIndex] ?? showcaseCases[0];
  const activeTheme = getTheme(activeCase?.cat);
  const activeImageSource = activeTheme?.image;
  const isActiveImageReady = activeImageSource ? Boolean(readyImages[activeImageSource]) : false;
  const activeImagePosition = isSmallMobile
    ? activeTheme?.mobilePosition || activeTheme?.tabletPosition || activeTheme?.position || "center center"
    : isTablet
      ? activeTheme?.tabletPosition || activeTheme?.position || "center center"
      : activeTheme?.position || "center center";

  const headingSize = isSmallMobile
    ? "clamp(28px, 10.2vw, 34px)"
    : isMobile
      ? "clamp(34px, 8.2vw, 42px)"
      : isTablet
        ? "clamp(42px, 6vw, 52px)"
        : "clamp(52px, 4.8vw, 58px)";

  const cardMinHeight = isSmallMobile
    ? "clamp(260px, 78vw, 320px)"
    : isMobile
      ? "clamp(320px, 76vw, 420px)"
      : isTablet
        ? "clamp(360px, 58vw, 460px)"
        : "clamp(420px, 42vw, 500px)";

  if (!activeCase) return null;

  const objectivePreview = getCompactText(
    activeCase.objective || activeCase.body,
    isSmallMobile ? 120 : isMobile ? 140 : isTablet ? 160 : 180,
  );
  const outcomePreview = getCompactText(
    activeCase.outcome || activeCase.body,
    isSmallMobile ? 120 : isMobile ? 140 : 160,
  );
  const tags =
    (activeCase.techTags?.length
      ? activeCase.techTags
      : activeCase.metrics?.map((metric) => metric.label)) || [];

  return (
    <Section id="case-studies">
      <Reveal distance={14} blurFrom={8}>
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
            color: T.amber,
          }}
        >
          Case studies
        </p>
      </Reveal>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isTablet ? "1fr" : "minmax(0,.35fr) minmax(0,.65fr)",
          gap: isSmallMobile ? 18 : isTablet ? 24 : 30,
          alignItems: "start",
          width: "100%",
          overflowX: "clip",
        }}
      >
        <Reveal distance={16} blurFrom={8}>
          <div>
            <h2
              style={{
                margin: "0 0 12px",
                fontFamily: font.serif,
                fontWeight: 600,
                color: T.ink,
                lineHeight: 1.06,
                letterSpacing: "-.02em",
                fontSize: headingSize,
                maxWidth: isMobile ? "100%" : 520,
                overflowWrap: "anywhere",
              }}
            >
              We&apos;ve built systems for global enterprises
            </h2>

            <p
              style={{
                margin: "0 0 12px",
                maxWidth: 460,
                fontFamily: font.sans,
                fontSize: isSmallMobile ? 12 : 15,
                lineHeight: 1.6,
                color: T.ink60,
              }}
            >
              Click a category tab to preview how we solve real production problems.
            </p>

            <div
              style={{
                borderTop: `1px solid ${T.ink12}`,
                borderBottom: `1px solid ${T.ink12}`,
                padding: "12px 0",
                marginBottom: 14,
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: font.sans,
                  fontSize: isSmallMobile ? 12 : 13,
                  lineHeight: 1.6,
                  color: T.ink60,
                }}
              >
                {outcomePreview}
              </p>
            </div>

          </div>
        </Reveal>

        <Reveal delay={0.06} distance={20} blurFrom={10}>
          <div
            style={{
              marginTop: isTablet ? 0 : -36,
              minWidth: 0,
            }}
          >
            <div
              ref={tabRailRef}
              className="case-studies-tab-strip"
              style={{
                display: "flex",
                alignItems: "center",
                gap: isSmallMobile ? 6 : 8,
                marginBottom: 12,
                flexWrap: isSmallMobile || isTabWrapViewport ? "wrap" : "nowrap",
                overflowX: isSmallMobile || isTabWrapViewport ? "visible" : "auto",
                rowGap: isTabWrapViewport ? 8 : 0,
                paddingBottom: isSmallMobile ? 0 : 4,
                paddingRight: isSmallMobile || isTabWrapViewport ? 0 : 8,
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
                scrollSnapType: isSmallMobile || isTabWrapViewport ? "none" : "x proximity",
                scrollBehavior: "smooth",
                overscrollBehaviorX: "contain",
                width: "100%",
              }}
            >
              {showcaseCases.map((caseItem, index) => {
                const isActive = index === activeIndex;
                const tabText = toTabLabel(caseItem.tabLabel || caseItem.cat);

                return (
                  <button
                    key={caseItem.title}
                    ref={(element) => {
                      tabRefs.current[index] = element;
                    }}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    style={{
                      border: `1px solid ${isActive ? "transparent" : T.ink12}`,
                      borderRadius: 999,
                      background: isActive ? T.ink : "rgba(255,255,255,.56)",
                      color: isActive ? T.w : T.ink40,
                      padding: isSmallMobile ? "6px 10px" : isNarrowTablet ? "6px 10px" : "7px 13px",
                      fontFamily: font.sans,
                      fontSize: isSmallMobile ? 9 : isNarrowTablet ? 9 : 10,
                      fontWeight: 700,
                      letterSpacing: isSmallMobile ? ".05em" : isNarrowTablet ? ".06em" : ".07em",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                      cursor: "pointer",
                      flexShrink: isTabWrapViewport ? 1 : 0,
                      scrollSnapAlign: isSmallMobile || isTabWrapViewport ? "none" : "start",
                    }}
                  >
                    {tabText}
                  </button>
                );
              })}
            </div>

            <article
              style={{
                borderRadius: 14,
                overflow: "hidden",
                border: `1px solid ${T.ink12}`,
                background: activeTheme.bg || DEFAULT_THEME.bg,
                minHeight: cardMinHeight,
                position: "relative",
                width: "100%",
                maxWidth: "100%",
                isolation: "isolate",
              }}
            >
              {activeImageSource && (
                <img
                  src={activeImageSource}
                  alt=""
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    maxWidth: "100%",
                    objectFit: "cover",
                    objectPosition: activeImagePosition,
                    transform: width < 420 ? "scale(1.08)" : isMobile ? "scale(1.05)" : "scale(1.02)",
                    opacity: isActiveImageReady ? 1 : 0,
                    transition: "opacity .34s ease",
                  }}
                />
              )}

              {activeImageSource && !isActiveImageReady && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(120deg, rgba(255,255,255,.08) 0%, rgba(255,255,255,.02) 38%, rgba(255,255,255,.08) 100%)",
                  }}
                />
              )}

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: activeTheme.overlay,
                }}
              />

              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  minHeight: cardMinHeight,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: 14,
                  padding: isSmallMobile ? "18px 14px" : "22px 20px",
                  minWidth: 0,
                }}
              >
                <div>
                  <p
                    style={{
                      margin: "0 0 8px",
                      fontFamily: font.sans,
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,.88)",
                    }}
                  >
                    {`${activeCase.cat} | ${activeCase.weeks}`}
                  </p>
                  <h3
                    style={{
                      margin: 0,
                      maxWidth: isTablet ? 560 : 620,
                      fontFamily: font.sans,
                      fontSize: isSmallMobile ? 24 : isMobile ? 28 : isTablet ? 32 : 36,
                      fontWeight: 700,
                      lineHeight: 1.08,
                      letterSpacing: "-.02em",
                      color: T.w,
                      overflowWrap: "anywhere",
                    }}
                  >
                    {activeCase.shortTitle || activeCase.title}
                  </h3>
                </div>

                <div>
                  <p
                    style={{
                      margin: "0 0 12px",
                      maxWidth: isTablet ? 560 : 620,
                      fontFamily: font.sans,
                      fontSize: isSmallMobile ? 12 : isMobile ? 14 : 15,
                      lineHeight: 1.6,
                      color: "rgba(255,255,255,.88)",
                      overflowWrap: "anywhere",
                    }}
                  >
                    {objectivePreview}
                  </p>

                  <div
                    style={{
                      width: "100%",
                      maxWidth: "100%",
                      display: "grid",
                      gridTemplateColumns: isSmallMobile
                        ? "1fr"
                        : isMobile || isNarrowTablet
                          ? "1fr"
                          : isTablet
                          ? "repeat(2,minmax(0,1fr))"
                          : "repeat(4,minmax(0,1fr))",
                      gap: 8,
                    }}
                  >
                    {tags.slice(0, 4).map((tag) => (
                      <div
                        key={`${activeCase.title}-${tag}`}
                        style={{
                          border: "1px solid rgba(255,255,255,.22)",
                          borderRadius: 8,
                          padding: "8px 10px",
                          background: "rgba(20,20,20,.26)",
                          fontFamily: font.sans,
                          fontSize: isSmallMobile ? 10 : 11,
                          fontWeight: 600,
                          lineHeight: 1.35,
                          color: "rgba(255,255,255,.9)",
                          minHeight: isSmallMobile ? 38 : 42,
                          display: "flex",
                          alignItems: "center",
                          minWidth: 0,
                          width: "100%",
                          maxWidth: "100%",
                          overflowWrap: "anywhere",
                        }}
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
