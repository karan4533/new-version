import { useState } from "react";
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
    overlay: "linear-gradient(180deg, rgba(12,18,26,.32) 0%, rgba(12,18,26,.78) 100%)",
  },
  "E-Commerce": {
    bg: "linear-gradient(135deg, #4f6679 0%, #2f4252 48%, #1f2b36 100%)",
    overlay: "linear-gradient(180deg, rgba(17,20,24,.28) 0%, rgba(17,20,24,.74) 100%)",
  },
  Legal: {
    image: legalImage,
    overlay: "linear-gradient(180deg, rgba(12,16,22,.34) 0%, rgba(12,16,22,.78) 100%)",
  },
  Construction: {
    image: constructionImage,
    overlay: "linear-gradient(180deg, rgba(14,20,20,.28) 0%, rgba(14,20,20,.76) 100%)",
  },
  "Medico-Legal": {
    image: medicoLegalImage,
    overlay: "linear-gradient(180deg, rgba(16,18,24,.3) 0%, rgba(16,18,24,.76) 100%)",
  },
  "D2C Brand": {
    image: d2cImage,
    overlay: "linear-gradient(180deg, rgba(24,18,16,.28) 0%, rgba(24,18,16,.74) 100%)",
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
  const { isMobile, isTablet, isSmallMobile } = useViewport();
  const showcaseCases = CASES.slice(0, 5);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCase = showcaseCases[activeIndex] ?? showcaseCases[0];
  const activeTheme = getTheme(activeCase?.cat);

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
                fontSize: isSmallMobile ? 28 : isMobile ? 36 : isTablet ? 48 : 58,
                maxWidth: isMobile ? "100%" : 520,
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
              style={{
                display: "flex",
                alignItems: "center",
                gap: isSmallMobile ? 6 : 8,
                marginBottom: 12,
                flexWrap: isSmallMobile ? "wrap" : "nowrap",
                overflowX: isSmallMobile ? "visible" : isTablet ? "auto" : "visible",
                paddingBottom: isSmallMobile ? 0 : isTablet ? 4 : 0,
                scrollbarWidth: "none",
              }}
            >
              {showcaseCases.map((caseItem, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={caseItem.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    style={{
                      border: `1px solid ${isActive ? "transparent" : T.ink12}`,
                      borderRadius: 999,
                      background: isActive ? T.ink : "rgba(255,255,255,.56)",
                      color: isActive ? T.w : T.ink40,
                      padding: isSmallMobile ? "6px 10px" : "7px 13px",
                      fontFamily: font.sans,
                      fontSize: isSmallMobile ? 9 : 10,
                      fontWeight: 700,
                      letterSpacing: isSmallMobile ? ".05em" : ".07em",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                      cursor: "pointer",
                      flexShrink: 0,
                    }}
                  >
                    {toTabLabel(caseItem.cat)}
                  </button>
                );
              })}
            </div>

            <article
              style={{
                borderRadius: 14,
                overflow: "hidden",
                border: `1px solid ${T.ink12}`,
                background: activeTheme.image ? undefined : activeTheme.bg,
                backgroundImage: activeTheme.image ? `url(${activeTheme.image})` : undefined,
                backgroundPosition: isMobile ? "center top" : "center center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                minHeight: isSmallMobile ? 260 : isMobile ? 320 : isTablet ? 360 : 470,
                position: "relative",
                width: "100%",
              }}
            >
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
                  minHeight: isSmallMobile ? 280 : isMobile ? 320 : isTablet ? 360 : 470,
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
                      display: "grid",
                      gridTemplateColumns: isSmallMobile
                        ? "1fr"
                        : isMobile || isTablet
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
