import { useState } from "react";
import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Section } from "../shared";
import { CASES } from "../../constants/data/cases";

const leftMenuLabels = [
  "Product Inventory",
  "Contract Intelligence",
  "Filter / Techniques",
  "Clinical Contracts Intelligence",
  "Case Full Inquiry Year Agent",
];

export function CaseStudies({ onOpenCaseStudy }) {
  const { isMobile, isTablet, isSmallMobile } = useViewport();
  const [activeIndex, setActiveIndex] = useState(1);

  const visibleCases = CASES.slice(0, 5);
  const activeCase = visibleCases[activeIndex] ?? visibleCases[0];

  const metrics = [
    ...(activeCase?.metrics || []),
    { val: activeCase?.weeks || "8 weeks", label: "delivery timeline" },
    { val: activeCase?.cat || "Enterprise", label: "domain" },
  ].slice(0, 4);

  return (
    <Section id="case-studies">
      <p
        style={{
          margin: "0 0 4px",
          fontFamily: font.sans,
          fontSize: 10,
          letterSpacing: ".16em",
          textTransform: "uppercase",
          color: T.ink40,
        }}
      >
        The. C-Case. Indonny Droite.
      </p>

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
        Case Studies.
      </h2>

      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isTablet ? "1fr" : "minmax(300px,0.74fr) minmax(0,1.26fr)",
          gap: isSmallMobile ? 12 : 18,
          alignItems: "start",
        }}
      >
        <aside
          style={{
            borderRadius: 8,
            overflow: "hidden",
            background: "transparent",
          }}
        >
          {visibleCases.map((item, index) => {
            const isActive = index === activeIndex;
            const menuLabel = leftMenuLabels[index] || item.title;

            return (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                style={{
                  width: "100%",
                  border: "none",
                  borderTop: index === 0 ? `1px solid ${T.ink12}` : "none",
                  borderBottom: `1px solid ${T.ink12}`,
                  borderLeft: isActive ? `2px solid ${T.amber}` : "2px solid transparent",
                  background: "transparent",
                  padding: "13px 10px 13px 12px",
                  textAlign: "left",
                  cursor: "pointer",
                  fontFamily: font.sans,
                  fontSize: isSmallMobile ? 12 : 13,
                  color: isActive ? T.ink : T.ink60,
                  fontWeight: isActive ? 600 : 500,
                  lineHeight: 1.4,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {menuLabel}
              </button>
            );
          })}
        </aside>

        <article
          style={{
            border: `1px solid ${T.ink12}`,
            borderRadius: 10,
            background: "rgba(255,255,255,.68)",
            padding: isSmallMobile ? "12px" : "16px 18px 14px",
            display: "grid",
            gap: 10,
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
            Non - We Studies
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
              {activeCase.body}
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
              {"Gotmme a compare optic? ADC section enters with concise wins where metrics translate to business and operations impact."}
            </p>
          </div>

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
            Open Case Study
          </button>

          <div
            style={{
              marginTop: 2,
              borderTop: `1px solid ${T.ink12}`,
              paddingTop: 10,
              display: "grid",
              gridTemplateColumns: isMobile ? "repeat(2,minmax(0,1fr))" : "repeat(4,minmax(0,1fr))",
              gap: 8,
            }}
          >
            {metrics.map((metric) => (
              <div key={`${metric.label}-${metric.val}`}>
                <div
                  style={{
                    fontFamily: font.serif,
                    fontSize: isSmallMobile ? 26 : 30,
                    lineHeight: 1,
                    color: T.amber,
                    marginBottom: 3,
                  }}
                >
                  {metric.val}
                </div>
                <div
                  style={{
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
      </div>
    </Section>
  );
}
