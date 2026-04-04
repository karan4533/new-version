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

  const detailBlocks = [
    { label: "Objective", text: caseStudy.objective || caseStudy.body },
    { label: "Solution", text: caseStudy.solution || caseStudy.body },
    { label: "Outcome", text: caseStudy.outcome || caseStudy.body },
  ];

  return (
    <Section id="case-study-detail">
      <Reveal>
        <div style={{ maxWidth: 1020, margin: "0 auto" }}>
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

          <h2
            style={{
              margin: "12px 0 14px",
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
              marginBottom: isSmallMobile ? 16 : 18,
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

          <div
            style={{
              width: "100%",
              borderRadius: isSmallMobile ? 16 : 20,
              border: `1px solid ${T.ink12}`,
              background: `linear-gradient(155deg, ${T.bg2} 0%, ${T.bg3} 100%)`,
              minHeight: isSmallMobile ? 200 : 320,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              padding: isSmallMobile ? "14px" : "22px",
              marginBottom: isSmallMobile ? 22 : 30,
            }}
          >
            <span
              style={{
                fontFamily: font.sans,
                fontSize: isSmallMobile ? 11 : 12,
                fontWeight: 600,
                letterSpacing: ".06em",
                textTransform: "uppercase",
                color: T.ink60,
              }}
            >
              {caseStudy.cat}
            </span>
            <span
              style={{
                fontFamily: font.serif,
                fontSize: isSmallMobile ? 18 : 22,
                fontWeight: 600,
                color: T.ink,
              }}
            >
              {caseStudy.weeks}
            </span>
          </div>

          <div
            style={{
              maxWidth: 760,
              margin: "0 auto",
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
                      fontSize: isSmallMobile ? 12 : 13,
                      color: T.ink60,
                      lineHeight: 1.4,
                      minWidth: 0,
                      overflowWrap: "anywhere",
                    }}
                  >
                    {metric.label}
                  </span>
                  <span
                    style={{
                      fontFamily: font.sans,
                      fontSize: isSmallMobile ? 24 : 30,
                      fontWeight: 700,
                      color: T.ink,
                      lineHeight: 1.02,
                      letterSpacing: ".01em",
                      fontVariantNumeric: "tabular-nums lining-nums",
                      display: "inline-flex",
                      alignItems: "baseline",
                      gap: 1,
                      flexShrink: 0,
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