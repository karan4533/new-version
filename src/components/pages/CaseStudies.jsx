import { useEffect, useMemo, useState } from "react";
import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Reveal, Section } from "../shared";
import { CASES } from "../../constants/data/cases";
import dataAnalyticsImage from "../../assets/data analytics.webp";
import legalImage from "../../assets/legal.webp";
import constructionImage from "../../assets/constuction.webp";
import d2cImage from "../../assets/D2C.webp";
import medicoLegalImage from "../../assets/medigo legal.webp";
import enterpriseSearchImage from "../../assets/enterprise search.webp";
import aiGovernanceImage from "../../assets/AI Governance.webp";
import automotiveImage from "../../assets/automotive .webp";
import translationImage from "../../assets/translation.webp";
import videoLocalizationImage from "../../assets/video localization.webp";
import salesCopilotImage from "../../assets/sales copilot.webp";

const THEME_BY_CATEGORY = {
  "Data analytics": {
    image: dataAnalyticsImage,
    position: "42% 36%",
    tabletPosition: "42% 34%",
    mobilePosition: "42% 30%",
    desktopScale: 1.08,
    tabletScale: 1.1,
    mobileScale: 1.12,
    overlay: "linear-gradient(180deg, rgba(12,18,26,.32) 0%, rgba(12,18,26,.78) 100%)",
  },
  "E-Commerce": {
    image: dataAnalyticsImage,
    position: "42% 36%",
    tabletPosition: "42% 34%",
    mobilePosition: "42% 30%",
    desktopScale: 1.08,
    tabletScale: 1.1,
    mobileScale: 1.12,
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
    image: automotiveImage,
    position: "center 44%",
    tabletPosition: "center 40%",
    mobilePosition: "center 36%",
    bg: "linear-gradient(135deg, #56606b 0%, #3d4751 48%, #2b333b 100%)",
    overlay: "linear-gradient(180deg, rgba(16,20,24,.22) 0%, rgba(16,20,24,.72) 100%)",
  },
};

const THEME_BY_TAB_LABEL = {
  "Enterprise Search": {
    image: enterpriseSearchImage,
    position: "center 42%",
    tabletPosition: "center 40%",
    mobilePosition: "center 36%",
    overlay: "linear-gradient(180deg, rgba(14,20,24,.3) 0%, rgba(14,20,24,.76) 100%)",
  },
  "AI Governance": {
    image: aiGovernanceImage,
    position: "center 44%",
    tabletPosition: "center 42%",
    mobilePosition: "center 38%",
    overlay: "linear-gradient(180deg, rgba(12,18,26,.3) 0%, rgba(12,18,26,.76) 100%)",
  },
  Translation: {
    image: translationImage,
    position: "center 44%",
    tabletPosition: "center 41%",
    mobilePosition: "center 37%",
    overlay: "linear-gradient(180deg, rgba(14,18,24,.3) 0%, rgba(14,18,24,.76) 100%)",
  },
  "Video Localization": {
    image: videoLocalizationImage,
    position: "center 44%",
    tabletPosition: "center 41%",
    mobilePosition: "center 37%",
    overlay: "linear-gradient(180deg, rgba(14,18,24,.3) 0%, rgba(14,18,24,.76) 100%)",
  },
  "Sales Copilot": {
    image: salesCopilotImage,
    position: "center 44%",
    tabletPosition: "center 41%",
    mobilePosition: "center 37%",
    overlay: "linear-gradient(180deg, rgba(14,18,24,.3) 0%, rgba(14,18,24,.76) 100%)",
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

const getTheme = (caseItem) => {
  if (!caseItem) return DEFAULT_THEME;

  return (
    THEME_BY_TAB_LABEL[caseItem.tabLabel] ||
    THEME_BY_CATEGORY[caseItem.cat] ||
    DEFAULT_THEME
  );
};

export function CaseStudies({ onOpenCaseStudy }) {
  const { width, isMobile, isTablet, isSmallMobile } = useViewport();
  const caseStudiesTopPadding = isSmallMobile ? "10px" : isMobile ? "14px" : "20px";
  const caseSectionBg = T.footer;
  const caseText = "rgba(255,255,255,.92)";
  const caseTextMuted = "rgba(255,255,255,.72)";
  const caseTextSoft = "rgba(255,255,255,.52)";
  const caseRule = "rgba(255,255,255,.16)";
  const casePillBg = "rgba(255,255,255,.08)";
  const isIpadProViewport = width >= 1000 && width <= 1040;
  const useSingleColumnCaseLayout = isTablet || isIpadProViewport;
  const isNarrowTablet = isTablet && width <= 900;
  const showcaseCases = CASES;
  const [activeIndex, setActiveIndex] = useState(0);
  const [readyImages, setReadyImages] = useState({});

  const preloadSources = useMemo(() => {
    const uniqueSources = new Set();

    showcaseCases.forEach((caseItem) => {
      const source = getTheme(caseItem)?.image;
      if (source) uniqueSources.add(source);
    });

    return Array.from(uniqueSources);
  }, [showcaseCases]);

  const activeCase = showcaseCases[activeIndex] ?? showcaseCases[0];
  const activeTheme = getTheme(activeCase);
  const activeImageSource = activeTheme?.image;

  useEffect(() => {
    let isCancelled = false;

    const markSourceReady = (source) => {
      if (isCancelled) return;

      setReadyImages((current) => {
        if (current[source]) return current;
        return { ...current, [source]: true };
      });
    };

    const primeImage = (source) => {
      if (!source) return;

      const image = new Image();
      image.decoding = "async";
      image.src = source;

      if (image.complete) {
        markSourceReady(source);
      } else {
        image.onload = () => markSourceReady(source);
        image.onerror = () => markSourceReady(source);
      }
    };

    if (activeImageSource) {
      primeImage(activeImageSource);
    }

    const remainingSources = preloadSources.filter((source) => source && source !== activeImageSource);

    if (!remainingSources.length) {
      return () => {
        isCancelled = true;
      };
    }

    const preloadRemaining = () => {
      remainingSources.forEach((source) => {
        primeImage(source);
      });
    };

    let idleCallbackId;
    let timeoutId;

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      idleCallbackId = window.requestIdleCallback(preloadRemaining, { timeout: 1500 });
    } else {
      timeoutId = window.setTimeout(preloadRemaining, 350);
    }

    return () => {
      isCancelled = true;

      if (
        typeof idleCallbackId === "number" &&
        typeof window !== "undefined" &&
        "cancelIdleCallback" in window
      ) {
        window.cancelIdleCallback(idleCallbackId);
      }

      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [preloadSources, activeImageSource]);
  const isActiveImageReady = activeImageSource ? Boolean(readyImages[activeImageSource]) : false;
  const activeImagePosition = isSmallMobile
    ? activeTheme?.mobilePosition || activeTheme?.tabletPosition || activeTheme?.position || "center center"
    : isTablet
      ? activeTheme?.tabletPosition || activeTheme?.position || "center center"
      : activeTheme?.position || "center center";
  const fallbackImageScale = width < 420 ? 1.04 : isMobile ? 1.02 : 1;
  const activeImageScale = isSmallMobile
    ? activeTheme?.mobileScale || fallbackImageScale
    : isTablet
      ? activeTheme?.tabletScale || fallbackImageScale
      : activeTheme?.desktopScale || fallbackImageScale;

  const headingSize = isSmallMobile
    ? "clamp(28px, 10.2vw, 34px)"
    : isMobile
      ? "clamp(34px, 8.2vw, 42px)"
      : isTablet
        ? "clamp(42px, 6vw, 52px)"
        : "clamp(36px, 3vw, 44px)";

  const previewImageHeight = isSmallMobile
    ? 190
    : isMobile
      ? 236
      : isTablet
        ? 276
        : 324;
  const previewInset = isSmallMobile ? 10 : 12;

  if (!activeCase) return null;

  const casePreviewSummary = activeCase.body || getCompactText(
    activeCase.objective || activeCase.outcome || "",
    isSmallMobile ? 120 : isMobile ? 140 : isTablet ? 160 : 180,
  );
  const stableCaseSummary =
    "Explore practical AI implementations across industries, with each case capturing the challenge, approach, and measurable business impact.";

  return (
    <Section id="case-studies" paddingTop={caseStudiesTopPadding} bg={caseSectionBg}>
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
            background: casePillBg,
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
          gridTemplateColumns: useSingleColumnCaseLayout
            ? "1fr"
            : "minmax(0,.35fr) minmax(0,.65fr)",
          gap: isSmallMobile ? 18 : useSingleColumnCaseLayout ? 24 : 56,
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
                color: caseText,
                lineHeight: 1.06,
                letterSpacing: "-.02em",
                fontSize: headingSize,
                maxWidth: isMobile ? "100%" : 520,
                overflowWrap: "anywhere",
              }}
            >
              <span style={{ whiteSpace: isSmallMobile ? "normal" : "nowrap" }}>
                We&apos;ve built systems
              </span>
              <br />
              <span style={{ whiteSpace: isSmallMobile ? "normal" : "nowrap" }}>
                for global enterprises
              </span>
            </h2>

            <div
              style={{
                borderTop: `1px solid ${caseRule}`,
                borderBottom: `1px solid ${caseRule}`,
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
                  color: caseTextMuted,
                }}
              >
                {stableCaseSummary}
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2,minmax(0,1fr))",
                columnGap: isMobile ? 10 : 16,
                rowGap: isMobile ? 6 : 4,
                marginTop: isSmallMobile ? 4 : 6,
                alignItems: "start",
              }}
            >
              {showcaseCases.map((caseItem, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={`${caseItem.title}-${index}`}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      padding: isSmallMobile
                        ? "11px 0"
                        : "13px 0",
                      fontFamily: font.sans,
                      fontSize: isSmallMobile ? 12 : 14,
                      fontWeight: isActive ? 600 : 500,
                      lineHeight: 1.45,
                      color: isActive ? "rgba(182,225,255,.94)" : caseTextSoft,
                      textShadow: isActive ? "0 0 8px rgba(110,190,245,.24)" : "none",
                      transition: "color .2s, text-shadow .25s",
                    }}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {caseItem.tabLabel || caseItem.cat}
                  </button>
                );
              })}
            </div>

          </div>
        </Reveal>

        <Reveal delay={0.06} distance={20} blurFrom={10}>
          <div
            style={{
              marginTop: useSingleColumnCaseLayout ? 0 : 10,
              minWidth: 0,
              width: useSingleColumnCaseLayout ? "100%" : "98%",
              maxWidth: "100%",
              justifySelf: useSingleColumnCaseLayout ? "stretch" : "end",
              overflow: "visible",
            }}
          >
            <article
              style={{
                borderRadius: 14,
                overflow: "hidden",
                border: "1px solid rgba(148,189,224,.38)",
                background: caseSectionBg,
                position: "relative",
                width: "100%",
                maxWidth: "100%",
                isolation: "isolate",
                boxShadow:
                  "0 0 0 1px rgba(165,206,241,.14), 0 18px 36px rgba(6,10,18,.4), 0 0 38px rgba(74,136,198,.18), inset 0 1px 0 rgba(228,244,255,.12)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: `calc(100% - ${previewInset * 2}px)`,
                  height: previewImageHeight - previewInset,
                  margin: `${previewInset}px auto 0`,
                  borderRadius: isSmallMobile ? 10 : 12,
                  border: "1px solid rgba(184,219,246,.26)",
                  overflow: "hidden",
                  background: caseSectionBg,
                }}
              >
                {activeImageSource && (
                  <img
                    src={activeImageSource}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      maxWidth: "100%",
                      maxHeight: "100%",
                      display: "block",
                      objectFit: "cover",
                      objectPosition: activeImagePosition,
                      transform: `scale(${activeImageScale})`,
                      transformOrigin: "center top",
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
              </div>

              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  padding: isSmallMobile ? "18px 14px" : "22px 20px",
                  minWidth: 0,
                  background: caseSectionBg,
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
                      color: "rgba(214,228,245,.58)",
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
                      color: "rgba(244,248,255,.96)",
                      overflowWrap: "anywhere",
                    }}
                  >
                    {activeCase.shortTitle || activeCase.title}
                  </h3>
                </div>

                <div>
                  <p
                    style={{
                      margin: `0 0 ${isSmallMobile ? 14 : isMobile ? 16 : 18}px`,
                      maxWidth: isTablet ? 560 : 620,
                      fontFamily: font.sans,
                      fontSize: isSmallMobile ? 12 : isMobile ? 14 : 15,
                      lineHeight: 1.6,
                      color: "rgba(220,231,244,.74)",
                      overflowWrap: "anywhere",
                    }}
                  >
                    {casePreviewSummary}
                  </p>

                  <div style={{ width: "100%", maxWidth: "100%" }}>
                    <button
                      type="button"
                      onClick={() => onOpenCaseStudy?.(activeIndex)}
                      style={{
                        border: "1px solid rgba(190,220,248,.42)",
                        borderRadius: 8,
                        padding: isSmallMobile ? "9px 12px" : "10px 14px",
                        background:
                          "linear-gradient(180deg, rgba(33,45,60,.82) 0%, rgba(20,30,42,.88) 100%)",
                        boxShadow: "inset 0 1px 0 rgba(232,244,255,.16)",
                        fontFamily: font.sans,
                        fontSize: isSmallMobile ? 11 : 12,
                        fontWeight: 700,
                        letterSpacing: ".04em",
                        lineHeight: 1.2,
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,.94)",
                        minHeight: isSmallMobile ? 38 : 42,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      Explore
                    </button>
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
