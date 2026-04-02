import { useState } from "react";
import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Reveal, Section } from "../shared";
import { CASES } from "../../constants/data/cases";

const THEME_BY_CATEGORY = {
  "E-Commerce": {
    bg: "linear-gradient(135deg, #4f6679 0%, #2f4252 48%, #1f2b36 100%)",
    overlay: "linear-gradient(180deg, rgba(17,20,24,.28) 0%, rgba(17,20,24,.74) 100%)",
  },
  Legal: {
    bg: "linear-gradient(135deg, #556a79 0%, #3b4e5c 48%, #263641 100%)",
    overlay: "linear-gradient(180deg, rgba(16,20,24,.24) 0%, rgba(16,20,24,.72) 100%)",
  },
  Construction: {
    bg: "linear-gradient(135deg, #3f5d63 0%, #2f474f 48%, #1f3136 100%)",
    overlay: "linear-gradient(180deg, rgba(14,20,20,.24) 0%, rgba(14,20,20,.72) 100%)",
  },
  "Medico-Legal": {
    bg: "linear-gradient(135deg, #4d5866 0%, #384452 48%, #232f3b 100%)",
    overlay: "linear-gradient(180deg, rgba(16,18,24,.24) 0%, rgba(16,18,24,.72) 100%)",
  },
  "D2C Brand": {
    bg: "linear-gradient(135deg, #6b5f53 0%, #4f453d 48%, #322b26 100%)",
    overlay: "linear-gradient(180deg, rgba(24,18,16,.24) 0%, rgba(24,18,16,.72) 100%)",
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
    isSmallMobile ? 120 : 180,
  );
  const outcomePreview = getCompactText(
    activeCase.outcome || activeCase.body,
    isSmallMobile ? 120 : 160,
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
                lineHeight: 1.02,
                letterSpacing: "-.02em",
                fontSize: isSmallMobile ? 34 : isMobile ? 44 : 58,
                maxWidth: 520,
              }}
            >
              We&apos;ve built systems for global enterprises
            </h2>

            <p
              style={{
                margin: "0 0 12px",
                maxWidth: 460,
                fontFamily: font.sans,
                fontSize: isSmallMobile ? 13 : 15,
                lineHeight: 1.65,
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
              marginTop: isSmallMobile ? 0 : isTablet ? -14 : -36,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 12,
                overflowX: isTablet ? "auto" : "visible",
                paddingBottom: isTablet ? 4 : 0,
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
                      padding: "7px 13px",
                      fontFamily: font.sans,
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: ".07em",
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
                background: activeTheme.bg,
                minHeight: isSmallMobile ? 290 : isTablet ? 360 : 470,
                position: "relative",
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
                  height: "100%",
                  minHeight: isSmallMobile ? 290 : isTablet ? 360 : 470,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: 14,
                  padding: isSmallMobile ? "18px 14px" : "22px 20px",
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
                      maxWidth: 620,
                      fontFamily: font.sans,
                      fontSize: isSmallMobile ? 24 : isMobile ? 30 : 36,
                      fontWeight: 700,
                      lineHeight: 1.08,
                      letterSpacing: "-.02em",
                      color: T.w,
                    }}
                  >
                    {activeCase.shortTitle || activeCase.title}
                  </h3>
                </div>

                <div>
                  <p
                    style={{
                      margin: "0 0 12px",
                      maxWidth: 620,
                      fontFamily: font.sans,
                      fontSize: isSmallMobile ? 13 : 15,
                      lineHeight: 1.6,
                      color: "rgba(255,255,255,.88)",
                    }}
                  >
                    {objectivePreview}
                  </p>

                  <p
                    style={{
                      margin: "0 0 10px",
                      fontFamily: font.sans,
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,.78)",
                    }}
                  >

                  </p>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: isSmallMobile ? "repeat(2,minmax(0,1fr))" : "repeat(4,minmax(0,1fr))",
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
                          fontSize: 11,
                          fontWeight: 600,
                          lineHeight: 1.35,
                          color: "rgba(255,255,255,.9)",
                          minHeight: 42,
                          display: "flex",
                          alignItems: "center",
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
