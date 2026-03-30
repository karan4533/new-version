import { useState } from "react";
import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Section } from "../shared";
import { Reveal } from "../shared";
import { CASES } from "../../constants/data/cases";

export function CaseStudies({ onOpenCaseStudy }) {
  const { isMobile, isTablet, isSmallMobile } = useViewport();
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const visibleCases = CASES.slice(0, 5);
  const activeCase = visibleCases[activeIndex] ?? visibleCases[0];

  const handlePrevCase = () => {
    setActiveIndex((current) =>
      current === 0 ? visibleCases.length - 1 : current - 1,
    );
  };

  const handleNextCase = () => {
    setActiveIndex((current) =>
      current === visibleCases.length - 1 ? 0 : current + 1,
    );
  };

  const summaryMetrics = [
    ...(activeCase?.metrics || []),
    { val: activeCase?.weeks || "8 weeks", label: "delivery timeline" },
    { val: activeCase?.cat || "Enterprise", label: "industry" },
  ].slice(0, 4);

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
            color: "#B07845",
          }}
        >
          Case studies
        </p>
      </Reveal>

      <Reveal delay={0.08} distance={16} blurFrom={10}>
        <h2
          style={{
            margin: "0 0 16px",
            fontFamily: font.serif,
            fontWeight: 600,
            color: T.ink,
            fontSize: isSmallMobile ? 34 : isMobile ? 42 : 50,
            lineHeight: 1.04,
            letterSpacing: "-.02em",
          }}
        >
          Real systems. Measurable results.
        </h2>
      </Reveal>

      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isTablet ? "1fr" : "minmax(300px,0.74fr) minmax(0,1.26fr)",
          gap: isSmallMobile ? 12 : 18,
          alignItems: "stretch",
        }}
      >
        <Reveal distance={16} blurFrom={8} style={{ height: isTablet ? "auto" : "100%" }}>
          <aside
            style={{
              borderRadius: 8,
              overflow: "hidden",
              background: "rgba(255,255,255,.42)",
              border: `1px solid ${T.ink12}`,
              height: isTablet ? "auto" : "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "grid" }}>
              {visibleCases.map((item, index) => {
                const isActive = index === activeIndex;
                const isHovered = hoveredIndex === index;

                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                      width: "100%",
                      border: "none",
                      borderTop: index === 0 ? `1px solid ${T.ink12}` : "none",
                      borderBottom: `1px solid ${T.ink12}`,
                      borderLeft: isActive ? `2px solid ${T.amber}` : "2px solid transparent",
                      background: isActive
                        ? "rgba(255,255,255,.66)"
                        : isHovered
                          ? "rgba(255,255,255,.5)"
                          : "transparent",
                      padding: isSmallMobile ? "11px 12px" : "12px 12px",
                      textAlign: "left",
                      cursor: "pointer",
                      fontFamily: font.sans,
                      color: isActive ? T.ink : T.ink60,
                      transition: "background .22s ease, transform .22s ease, color .22s ease",
                      transform: isHovered && !isActive ? "translateX(2px)" : "none",
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: ".06em",
                        textTransform: "uppercase",
                        color: isActive ? T.ink40 : "rgba(30,26,16,.45)",
                        marginBottom: 3,
                      }}
                    >
                      {item.cat} | {item.weeks}
                    </span>
                    <span
                      style={{
                        display: "block",
                        fontSize: isSmallMobile ? 12 : 13,
                        fontWeight: isActive ? 700 : 600,
                        lineHeight: 1.34,
                        whiteSpace: "normal",
                      }}
                    >
                      {item.shortTitle || item.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {!isTablet && (
              <div
                style={{
                  marginTop: "auto",
                  padding: "12px 12px 13px",
                  borderTop: `1px solid ${T.ink12}`,
                  background: "rgba(255,255,255,.6)",
                }}
              >
                <p
                  style={{
                    margin: "0 0 10px",
                    fontFamily: font.sans,
                    fontSize: 11,
                    lineHeight: 1.45,
                    color: T.ink40,
                  }}
                >
                  Select a case to instantly update objective, solution, and outcomes.
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <button
                    type="button"
                    onClick={handlePrevCase}
                    style={{
                      border: `1px solid ${T.ink12}`,
                      borderRadius: 999,
                      background: "rgba(255,255,255,.72)",
                      color: T.ink,
                      fontFamily: font.sans,
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: ".04em",
                      textTransform: "uppercase",
                      padding: "5px 10px",
                      cursor: "pointer",
                    }}
                  >
                    Prev
                  </button>
                  <span
                    style={{
                      fontFamily: font.sans,
                      fontSize: 11,
                      color: T.ink40,
                      letterSpacing: ".04em",
                      textTransform: "uppercase",
                    }}
                  >
                    {activeIndex + 1} / {visibleCases.length}
                  </span>
                  <button
                    type="button"
                    onClick={handleNextCase}
                    style={{
                      border: `1px solid ${T.ink12}`,
                      borderRadius: 999,
                      background: "rgba(255,255,255,.72)",
                      color: T.ink,
                      fontFamily: font.sans,
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: ".04em",
                      textTransform: "uppercase",
                      padding: "5px 10px",
                      cursor: "pointer",
                    }}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </aside>
        </Reveal>

        <Reveal delay={0.08} distance={20} blurFrom={10} style={{ height: isTablet ? "auto" : "100%" }}>
          <article
            style={{
              border: `1px solid ${T.ink12}`,
              borderRadius: 10,
              background: "rgba(255,255,255,.68)",
              padding: isSmallMobile ? "12px" : "16px 18px 14px",
              display: "grid",
              gap: 10,
              height: isTablet ? "auto" : "100%",
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily: font.sans,
                fontSize: 10,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                color: T.ink40,
              }}
            >
              {`${activeCase.cat} | ${activeCase.weeks}`}
            </p>

            <h3
              style={{
                margin: 0,
                fontFamily: font.serif,
                fontWeight: 600,
                color: T.ink,
                fontSize: isSmallMobile ? 22 : isMobile ? 28 : 30,
                lineHeight: 1.1,
                letterSpacing: "-.01em",
                maxWidth: 720,
              }}
            >
              {activeCase.title}
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(2,minmax(0,1fr))",
                gap: 14,
              }}
            >
              <div>
                <p
                  style={{
                    margin: "0 0 4px",
                    fontFamily: font.sans,
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    color: T.ink40,
                  }}
                >
                  Objective
                </p>
                <p
                  style={{
                    margin: 0,
                    fontFamily: font.sans,
                    fontSize: isSmallMobile ? 12 : 13,
                    lineHeight: 1.58,
                    color: T.ink60,
                    maxWidth: 380,
                  }}
                >
                  {activeCase.objective || activeCase.body}
                </p>
              </div>
              <div>
                <p
                  style={{
                    margin: "0 0 4px",
                    fontFamily: font.sans,
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    color: T.ink40,
                  }}
                >
                  Solution
                </p>
                <p
                  style={{
                    margin: 0,
                    fontFamily: font.sans,
                    fontSize: isSmallMobile ? 12 : 13,
                    lineHeight: 1.58,
                    color: T.ink60,
                    maxWidth: 380,
                  }}
                >
                  {activeCase.solution || activeCase.body}
                </p>
              </div>
            </div>

            <div
              style={{
                borderTop: `1px solid ${T.ink12}`,
                borderBottom: `1px solid ${T.ink12}`,
                padding: "10px 0",
              }}
            >
              <p
                style={{
                  margin: "0 0 4px",
                  fontFamily: font.sans,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  color: T.ink40,
                }}
              >
                Outcome
              </p>
              <p
                style={{
                  margin: 0,
                  fontFamily: font.sans,
                  fontSize: isSmallMobile ? 12 : 13,
                  lineHeight: 1.58,
                  color: T.ink60,
                }}
              >
                {activeCase.outcome || activeCase.body}
              </p>
            </div>

            {!!activeCase.techTags?.length && (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                }}
              >
                {activeCase.techTags.map((tag) => (
                  <span
                    key={`${activeCase.title}-${tag}`}
                    style={{
                      fontFamily: font.sans,
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: ".05em",
                      textTransform: "uppercase",
                      color: T.ink60,
                      border: `1px solid ${T.ink12}`,
                      borderRadius: 100,
                      background: T.ink07,
                      padding: "4px 9px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={() => onOpenCaseStudy?.(activeIndex)}
              style={{
                justifySelf: "start",
                border: `1px solid ${T.ink12}`,
                background: "rgba(255,255,255,.72)",
                borderRadius: 999,
                padding: "7px 12px",
                fontFamily: font.sans,
                fontSize: 11,
                fontWeight: 700,
                color: T.ink,
                letterSpacing: ".05em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Read full case study
            </button>

            <div
              style={{
                marginTop: 2,
                borderTop: `1px solid ${T.ink12}`,
                paddingTop: 10,
                display: "grid",
                gridTemplateColumns: isMobile ? "repeat(2,minmax(0,1fr))" : "repeat(4,minmax(0,1fr))",
                gap: 8,
                alignItems: "stretch",
              }}
            >
              {summaryMetrics.map((metric) => (
                <div
                  key={`${metric.label}-${metric.val}`}
                  style={{
                    minHeight: isSmallMobile ? 74 : 88,
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                  }}
                >
                  <div
                    style={{
                      fontFamily: font.serif,
                      fontSize: isSmallMobile ? 26 : 30,
                      lineHeight: 1.02,
                      color: T.amber,
                      maxWidth: "100%",
                      overflowWrap: "anywhere",
                    }}
                  >
                    {metric.val}
                  </div>
                  <div
                    style={{
                      marginTop: "auto",
                      fontFamily: font.sans,
                      fontSize: 9,
                      color: T.ink40,
                      textTransform: "uppercase",
                      letterSpacing: ".08em",
                      lineHeight: 1.45,
                    }}
                  >
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
