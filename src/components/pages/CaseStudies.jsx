import { useEffect, useMemo, useState } from "react";
import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Reveal, Section } from "../shared";
import { CASES } from "../../constants/data/cases";
import dataAnalyticsImage from "../../assets/data analytics.png";
import legalImage from "../../assets/legal.png";
import constructionImage from "../../assets/constuction.png";
import d2cImage from "../../assets/D2C.png";
import medicoLegalImage from "../../assets/medigo legal.png";
import enterpriseSearchImage from "../../assets/enterprise search.png";
import aiGovernanceImage from "../../assets/AI Governance.jpg";
import automotiveImage from "../../assets/automotive .png";
import translationImage from "../../assets/translation.png";
import videoLocalizationImage from "../../assets/video localization.png";
import salesCopilotImage from "../../assets/sales copilot.png";

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

  const activeCase = showcaseCases[activeIndex] ?? showcaseCases[0];
  const activeTheme = getTheme(activeCase);
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
        : "clamp(36px, 3vw, 44px)";

  const previewImageHeight = isSmallMobile
    ? 182
    : isMobile
      ? 228
      : isTablet
        ? 268
        : 312;

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
    <Section id="case-studies" paddingTop={caseStudiesTopPadding}>
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
                color: T.ink,
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

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(2,minmax(0,1fr))",
                columnGap: isMobile ? 0 : 16,
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
                      borderBottom: `1px solid ${T.ink12}`,
                      cursor: "pointer",
                      textAlign: "left",
                      padding: isSmallMobile ? "11px 0" : "13px 0",
                      fontFamily: font.sans,
                      fontSize: isSmallMobile ? 12 : 14,
                      fontWeight: isActive ? 600 : 500,
                      lineHeight: 1.45,
                      color: isActive ? T.ink : T.ink40,
                      transition: "color .2s",
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
              width: useSingleColumnCaseLayout ? "100%" : "96%",
              maxWidth: "100%",
              justifySelf: useSingleColumnCaseLayout ? "stretch" : "end",
              overflowX: "hidden",
            }}
          >
            <article
              style={{
                borderRadius: 14,
                overflow: "hidden",
                border: `1px solid ${T.ink12}`,
                background: "rgba(255,255,255,.72)",
                position: "relative",
                width: "100%",
                maxWidth: "100%",
                isolation: "isolate",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: previewImageHeight,
                  borderTopLeftRadius: 14,
                  borderTopRightRadius: 14,
                  overflow: "hidden",
                  background: activeTheme.bg || DEFAULT_THEME.bg,
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
                      transform: width < 420 ? "scale(1.04)" : isMobile ? "scale(1.02)" : "scale(1)",
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
                  background: "rgba(255,255,255,.82)",
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
                      color: T.ink40,
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
                      color: T.ink,
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
                      color: T.ink60,
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
                          : "repeat(2,minmax(0,1fr))",
                      gap: 8,
                    }}
                  >
                    {tags.slice(0, 4).map((tag) => (
                      <div
                        key={`${activeCase.title}-${tag}`}
                        style={{
                          border: `1px solid ${T.ink12}`,
                          borderRadius: 8,
                          padding: "8px 10px",
                          background: "rgba(255,255,255,.62)",
                          fontFamily: font.sans,
                          fontSize: isSmallMobile ? 10 : 11,
                          fontWeight: 600,
                          lineHeight: 1.35,
                          color: T.ink,
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
