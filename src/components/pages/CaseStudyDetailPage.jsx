import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Reveal, Section } from "../shared";

export function CaseStudyDetailPage({ caseStudy, caseIndex = 0, onBack }) {
  const { isSmallMobile } = useViewport();

  if (!caseStudy) return null;

  const renderMetricValue = (value) => {
    const normalized = String(value).trim();
    const match = normalized.match(/^([<>]?\d+(?:\.\d+)?)([%×x])$/);

    if (!match) return normalized;

    const [, numberPart, symbolPart] = match;
    const symbol = symbolPart === "x" ? "×" : symbolPart;

    return (
      <>
        <span>{numberPart}</span>
        <span
          style={{
            fontSize: "0.82em",
            fontWeight: 700,
            lineHeight: 1,
            transform: "translateY(-0.02em)",
          }}
        >
          {symbol}
        </span>
      </>
    );
  };
  const detailDate = new Date(2024, (caseIndex * 2) % 12, 1).toLocaleDateString(
    "en-US",
    {
      month: "short",
      year: "numeric",
    },
  );

  const solutionPoints = Array.isArray(caseStudy.solutionPoints) && caseStudy.solutionPoints.length > 0
    ? caseStudy.solutionPoints
    : caseStudy.solution
      ? [caseStudy.solution]
      : [];

  const detailBlocks = [
    { label: "Objective", text: caseStudy.objective || caseStudy.body },
    {
      label: "Solution",
      text: caseStudy.solution || caseStudy.body,
      points: solutionPoints,
    },
    { label: "Outcome", text: caseStudy.outcome || caseStudy.body },
  ];

  return (
    <Section id="case-study-detail">
      <Reveal>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <button
            type="button"
            onClick={onBack}
            style={{
              border: "none",
              background: "transparent",
              padding: 0,
              margin: 0,
              fontFamily: font.sans,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: ".08em",
              textTransform: "uppercase",
              color: T.ink40,
              cursor: "pointer",
              transition: "color .2s ease",
              marginBottom: isSmallMobile ? 12 : 14,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = T.ink60;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = T.ink40;
            }}
          >
            ← Back to case studies
          </button>

          <div
            style={{
              display: "grid",
              gap: isSmallMobile ? 10 : 12,
              marginBottom: isSmallMobile ? 20 : 26,
            }}
          >
            <h2
              style={{
                margin: 0,
                fontFamily: font.serif,
                fontSize: isSmallMobile
                  ? "clamp(30px, 8.8vw, 40px)"
                  : "clamp(38px, 5.2vw, 64px)",
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: "-.02em",
                color: T.ink,
                maxWidth: 920,
              }}
            >
              {caseStudy.title}
            </h2>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: isSmallMobile ? 8 : 10,
              }}
            >
              {[detailDate, caseStudy.weeks, caseStudy.cat].map((meta) => (
                <span
                  key={meta}
                  style={{
                    fontFamily: font.sans,
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: ".06em",
                    textTransform: "uppercase",
                    color: T.ink60,
                    border: `1px solid ${T.ink12}`,
                    borderRadius: 100,
                    padding: "4px 10px",
                    background: T.ink07,
                  }}
                >
                  {meta}
                </span>
              ))}
            </div>

            <p
              style={{
                margin: 0,
                maxWidth: 860,
                fontFamily: font.sans,
                fontSize: isSmallMobile ? 14 : 16,
                lineHeight: 1.72,
                color: T.ink60,
              }}
            >
              {caseStudy.body}
            </p>
          </div>

          <div
            style={{
              maxWidth: 860,
              margin: 0,
              display: "grid",
              gap: isSmallMobile ? 16 : 22,
            }}
          >
            {detailBlocks.map((block) => (
              <div key={`${caseStudy.title}-${block.label}`}>
                <p
                  style={{
                    margin: "0 0 6px",
                    fontFamily: font.sans,
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    color: T.ink40,
                  }}
                >
                  {block.label}
                </p>
                {Array.isArray(block.points) && block.points.length > 1 ? (
                  <ul
                    style={{
                      margin: 0,
                      padding: 0,
                      listStyle: "none",
                      display: "grid",
                      gap: isSmallMobile ? 8 : 10,
                    }}
                  >
                    {block.points.map((point) => (
                      <li
                        key={`${caseStudy.title}-${block.label}-${point}`}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 8,
                          fontFamily: font.sans,
                          fontSize: isSmallMobile ? 14 : 16,
                          lineHeight: 1.72,
                          color: T.ink60,
                        }}
                      >
                        <span aria-hidden="true" style={{ color: T.amber, fontSize: 13 }}>
                          •
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p
                    style={{
                      margin: 0,
                      fontFamily: font.sans,
                      fontSize: isSmallMobile ? 14 : 16,
                      lineHeight: 1.82,
                      color: T.ink60,
                    }}
                  >
                    {block.text}
                  </p>
                )}
              </div>
            ))}

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
              }}
            >
              {(caseStudy.techTags || caseStudy.metrics.map((metric) => metric.label)).map((tag) => (
                <span
                  key={`${caseStudy.title}-${tag}`}
                  style={{
                    fontFamily: font.sans,
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: ".05em",
                    textTransform: "uppercase",
                    color: T.ink60,
                    border: `1px solid ${T.ink12}`,
                    borderRadius: 100,
                    background: T.ink07,
                    padding: "5px 10px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ borderTop: `1px solid ${T.ink12}` }}>
              {caseStudy.metrics.map((metric, index) => (
                <div
                  key={metric.val + metric.label}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    gap: 16,
                    padding: isSmallMobile ? "12px 0" : "14px 0",
                    borderBottom:
                      index === caseStudy.metrics.length - 1
                        ? "none"
                        : `1px solid ${T.ink12}`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: font.sans,
                      fontSize: isSmallMobile ? 13 : 14,
                      fontWeight: 500,
                      color: T.ink60,
                      lineHeight: 1.5,
                      minWidth: 0,
                      overflowWrap: "anywhere",
                    }}
                  >
                    {metric.label}
                  </span>
                  <span
                    style={{
                      fontFamily: font.sans,
                      fontSize: isSmallMobile ? 19 : 22,
                      fontWeight: 600,
                      color: T.ink,
                      lineHeight: 1.2,
                      letterSpacing: "0",
                      fontVariantNumeric: "tabular-nums lining-nums",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 2,
                      flexShrink: 0,
                      textAlign: "right",
                    }}
                  >
                    {renderMetricValue(metric.val)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}