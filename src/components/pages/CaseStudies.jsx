import { useState } from "react";
import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Section } from "../shared";
import { Reveal } from "../shared";
import { CASES } from "../../constants/data/cases";

const getCompactText = (value, maxChars) => {
  if (!value) return "";

  const cleaned = String(value).replace(/\s+/g, " ").trim();
  const firstSentenceMatch = cleaned.match(/.*?[.!?](?:\s|$)/);
  const firstSentence = firstSentenceMatch?.[0]?.trim();
  const candidate =
    firstSentence && firstSentence.length <= maxChars ? firstSentence : cleaned;

  if (candidate.length <= maxChars) return candidate;

  return `${candidate.slice(0, maxChars - 1).trimEnd()}…`;
};

const CASE_PREVIEW = {
  "Product Taxonomy and Attribute Enrichment Engine": {
    listTitle: "Product Taxonomy",
    title: "Product Taxonomy and Enrichment Engine",
    objective:
      "Classify and enrich 100,000+ SKUs across 4,000 taxonomy nodes with minimal manual intervention.",
    solution:
      "Built an agentic enrichment pipeline with fine-tuned Llama 3.2 and Hybrid RAG across supplier catalogs and product assets.",
    outcome:
      "Cut processing time from ~3 months to ~2 weeks while increasing consistency across listing operations.",
    metrics: [
      { val: "92%", label: "end-to-end automation" },
      { val: "2 weeks", label: "100K SKU cycle" },
      { val: "100K+", label: "SKUs processed" },
      { val: "Hybrid RAG", label: "core architecture" },
    ],
  },
  "Legal Contracts Intelligence Assistant": {
    listTitle: "Contracts Intelligence",
    title: "Legal Contracts Intelligence Assistant",
    meta: "LEGAL TECH | 12 WEEKS",
    objective:
      "Extract complex legal obligations and risk factors from multi-hundred page service agreements with human-level precision.",
    solution:
      "Deployed a bespoke agentic RAG system using Claude 3.5 Sonnet for logical reasoning and proprietary vector reranking.",
    outcome:
      "Reduced legal review time by 85%, allowing senior counsel to focus on high-stakes negotiations rather than initial document triage.",
    metrics: [
      { val: "85%", label: "time saved per doc" },
      { val: "< 3 mins", label: "full audit speed" },
      { val: "99.8%", label: "extraction accuracy" },
      { val: "Multi-Agent", label: "verification logic" },
    ],
  },
  "Real-Time Safety Vision System": {
    listTitle: "Safety Vision System",
    title: "Real-Time Safety Vision System",
    objective:
      "Detect PPE non-compliance and restricted-zone breaches in real time across active construction sites.",
    solution:
      "Deployed edge computer vision with YOLOv8 and DeepSORT tracking for low-latency detection and instant alerts.",
    outcome:
      "Lowered safety violations by 60% in the first month with sub-second intervention loops.",
    metrics: [
      { val: "60%", label: "violation reduction" },
      { val: "< 1 sec", label: "alert latency" },
      { val: "24/7", label: "continuous monitoring" },
      { val: "Edge AI", label: "deployment model" },
    ],
  },
  "Multimodal Clinical Document Intelligence": {
    listTitle: "Clinical Document Intelligence",
    title: "Clinical Document Intelligence",
    objective:
      "Review mixed-format medical records rapidly while preserving chronology, traceability, and legal defensibility.",
    solution:
      "Used multimodal OCR and layout-aware extraction to generate structured timelines with source-level audit links.",
    outcome:
      "Reduced manual review from days to minutes with high reliability on handwritten and scanned records.",
    metrics: [
      { val: "97%", label: "extraction accuracy" },
      { val: "minutes", label: "review turnaround" },
      { val: "10K+", label: "pages per case" },
      { val: "Audit-Ready", label: "output quality" },
    ],
  },
  "Customer Support Voice Agent": {
    listTitle: "Customer Support Voice Agent",
    title: "Customer Support Voice Agent",
    objective:
      "Scale support operations for orders, returns, payments, and product discovery without adding headcount.",
    solution:
      "Implemented a modular multi-agent voice stack with Hybrid RAG grounded in live order and policy data.",
    outcome:
      "Improved first-contact resolution and reduced common-query handling time by 80%.",
    metrics: [
      { val: "80%", label: "query time reduction" },
      { val: "800ms", label: "avg response latency" },
      { val: "24/7", label: "voice availability" },
      { val: "Multi-Agent", label: "orchestration" },
    ],
  },
};

const getCasePreview = (caseStudy, isSmallMobile) => {
  if (!caseStudy) {
    return {
      listTitle: "",
      title: "",
      meta: "",
      objective: "",
      solution: "",
      outcome: "",
      metrics: [],
    };
  }

  const override = CASE_PREVIEW[caseStudy.title] || {};
  const fallbackMetrics = [
    ...(caseStudy.metrics || []).slice(0, 2),
    { val: caseStudy.weeks || "8 weeks", label: "delivery timeline" },
    { val: caseStudy.cat || "Enterprise", label: "industry" },
  ].slice(0, 4);

  return {
    listTitle: override.listTitle || caseStudy.shortTitle || caseStudy.title,
    title: override.title || caseStudy.shortTitle || caseStudy.title,
    meta: override.meta || `${caseStudy.cat} | ${caseStudy.weeks}`,
    objective:
      override.objective ||
      getCompactText(caseStudy.objective || caseStudy.body, isSmallMobile ? 120 : 150),
    solution:
      override.solution ||
      getCompactText(caseStudy.solution || caseStudy.body, isSmallMobile ? 120 : 150),
    outcome:
      override.outcome ||
      getCompactText(caseStudy.outcome || caseStudy.body, isSmallMobile ? 150 : 220),
    metrics: (override.metrics || fallbackMetrics).slice(0, 4),
  };
};

export function CaseStudies() {
  const { width, isMobile, isTablet, isSmallMobile } = useViewport();
  const isCompactDesktop = !isTablet && width < 1320;
  const isNarrowDetail = !isMobile && width < 1180;
  const leftItemFontSize = isSmallMobile
    ? 18
    : isMobile
      ? 22
      : isCompactDesktop
        ? "clamp(16px,1vw,20px)"
        : "clamp(18px,1.2vw,24px)";
  const detailTitleFontSize = isSmallMobile
    ? 30
    : isMobile
      ? 38
      : isCompactDesktop
        ? "clamp(30px,2vw,38px)"
        : "clamp(36px,2.5vw,46px)";
  const detailBodyFontSize = isSmallMobile ? 13 : isCompactDesktop ? 14 : 15;
  const metricMinHeight = isSmallMobile ? 78 : isCompactDesktop ? 90 : 98;

  const getMetricValueFontSize = (rawValue) => {
    const value = String(rawValue || "").trim();
    const length = value.length;

    if (length > 18) return isSmallMobile ? 14 : isCompactDesktop ? 15 : 16;
    if (length > 14) return isSmallMobile ? 16 : isCompactDesktop ? 17 : 18;
    if (length > 10) return isSmallMobile ? 18 : isCompactDesktop ? 19 : 20;
    if (length > 7) return isSmallMobile ? 20 : isCompactDesktop ? 21 : 22;

    return isSmallMobile ? 21 : isCompactDesktop ? 22 : 23;
  };
  const visibleCases = CASES.slice(0, 5);
  const defaultCaseIndex = visibleCases.findIndex(
    (item) => item.cat.toLowerCase() === "legal",
  );

  const [activeIndex, setActiveIndex] = useState(
    defaultCaseIndex >= 0 ? defaultCaseIndex : 0,
  );

  const caseCards = visibleCases.map((item) => ({
    item,
    preview: getCasePreview(item, isSmallMobile),
  }));

  const activeCard = caseCards[activeIndex] ?? caseCards[0];
  const activeCase = activeCard?.item ?? visibleCases[0];
  const activePreview =
    activeCard?.preview ?? getCasePreview(activeCase, isSmallMobile);

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
            margin: isSmallMobile ? "0 0 18px" : isMobile ? "0 0 24px" : "0 0 30px",
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
          gridTemplateColumns: isTablet ? "1fr" : "minmax(230px,0.68fr) minmax(0,1.32fr)",
          gap: isSmallMobile ? 16 : isCompactDesktop ? 24 : 30,
          alignItems: "start",
        }}
      >
        <Reveal
          distance={16}
          blurFrom={8}
          style={{
            height: isTablet ? "auto" : "100%",
            minWidth: 0,
          }}
        >
          <aside
            style={{
              height: isTablet ? "auto" : "100%",
              minWidth: 0,
            }}
          >
            <div
              style={{
                display: "grid",
                padding: isSmallMobile ? "0 10px" : "0 12px",
              }}
            >
              {caseCards.map(({ item, preview }, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    style={{
                      width: "100%",
                      minHeight: isSmallMobile ? 58 : isMobile ? 66 : 74,
                      display: "flex",
                      alignItems: "center",
                      overflow: "hidden",
                      border: "none",
                      borderTop: index === 0 ? `1px solid ${T.ink12}` : "none",
                      borderBottom: isActive ? `2px solid ${T.amber}` : `1px solid ${T.ink12}`,
                      background: "transparent",
                      padding: isSmallMobile ? "10px 6px" : "12px 8px",
                      textAlign: "left",
                      cursor: "pointer",
                      color: isActive ? T.ink : "rgba(30,26,16,.58)",
                      transition: "color .22s ease",
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        width: "100%",
                        minWidth: 0,
                        fontFamily: font.serif,
                        fontSize: leftItemFontSize,
                        fontWeight: isActive ? 700 : 500,
                        lineHeight: 1.08,
                        letterSpacing: "-.01em",
                        marginBottom: 0,
                        whiteSpace: isMobile ? "normal" : "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {preview.listTitle}
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>
        </Reveal>

        <Reveal delay={0.08} distance={20} blurFrom={10} style={{ minWidth: 0 }}>
          <article
            style={{
              border: `1px solid ${T.ink12}`,
              borderRadius: 12,
              background: "rgba(255,255,255,.44)",
              padding: isSmallMobile
                ? "16px 14px"
                : isCompactDesktop
                  ? "20px 22px 18px"
                  : "24px 26px 20px",
              display: "grid",
              gap: isSmallMobile ? 12 : isCompactDesktop ? 14 : 18,
              overflow: "hidden",
              minWidth: 0,
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily: font.sans,
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: T.amber,
              }}
            >
              {activePreview.meta}
            </p>

            <h3
              style={{
                margin: 0,
                fontFamily: font.serif,
                fontWeight: 600,
                color: T.ink,
                fontSize: detailTitleFontSize,
                lineHeight: 1.08,
                letterSpacing: "-.02em",
                maxWidth: isCompactDesktop ? 600 : 680,
              }}
            >
              {activePreview.title}
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile || isNarrowDetail ? "1fr" : "repeat(2,minmax(0,1fr))",
                columnGap: isSmallMobile ? 12 : isCompactDesktop ? 16 : 20,
                rowGap: isSmallMobile ? 12 : 14,
                alignItems: "start",
              }}
            >
              <div>
                <p
                  style={{
                    margin: "0 0 8px",
                    fontFamily: font.sans,
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: ".16em",
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
                    fontSize: detailBodyFontSize,
                    lineHeight: 1.54,
                    color: T.ink60,
                    maxWidth: 440,
                    overflowWrap: "anywhere",
                  }}
                >
                  {activePreview.objective}
                </p>
              </div>
              <div>
                <p
                  style={{
                    margin: "0 0 8px",
                    fontFamily: font.sans,
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: ".16em",
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
                    fontSize: detailBodyFontSize,
                    lineHeight: 1.54,
                    color: T.ink60,
                    maxWidth: 440,
                    overflowWrap: "anywhere",
                  }}
                >
                  {activePreview.solution}
                </p>
              </div>
            </div>

            <div
              style={{
                borderBottom: `1px solid ${T.ink12}`,
                padding: isSmallMobile ? "2px 0 10px" : isCompactDesktop ? "4px 0 12px" : "6px 0 14px",
              }}
            >
              <p
                style={{
                  margin: "0 0 8px",
                  fontFamily: font.sans,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: ".16em",
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
                  fontSize: detailBodyFontSize,
                  lineHeight: 1.54,
                  color: T.ink60,
                  maxWidth: 920,
                  overflowWrap: "anywhere",
                }}
              >
                {activePreview.outcome}
              </p>
            </div>

            <div
              style={{
                paddingTop: isSmallMobile ? 10 : isCompactDesktop ? 14 : 18,
                display: "grid",
                gridTemplateColumns: isSmallMobile
                  ? "repeat(2,minmax(0,1fr))"
                  : "repeat(auto-fit,minmax(150px,1fr))",
                gap: isSmallMobile ? 12 : isCompactDesktop ? 14 : 18,
                alignItems: "stretch",
              }}
            >
              {activePreview.metrics.map((metric) => {
                const metricValue = String(metric.val || "").trim();
                const isTextMetric = /[A-Za-z]/.test(metricValue);
                const shouldWrapValue = metricValue.length > 10;

                return (
                <div
                  key={`${metric.label}-${metric.val}`}
                  style={{
                    minHeight: metricMinHeight,
                    minWidth: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    overflow: "visible",
                  }}
                >
                  <div
                    style={{
                      fontFamily: font.sans,
                      fontSize: getMetricValueFontSize(metricValue),
                      lineHeight: shouldWrapValue ? 1.08 : 1.02,
                      fontWeight: 700,
                      color: T.amber,
                      fontStyle: "normal",
                      whiteSpace: shouldWrapValue ? "normal" : "nowrap",
                      wordBreak: shouldWrapValue ? "break-word" : "normal",
                      overflowWrap: "anywhere",
                      letterSpacing: isTextMetric ? "0" : ".01em",
                      maxWidth: "100%",
                      overflow: "visible",
                    }}
                  >
                    {metricValue}
                  </div>
                  <div
                    style={{
                      marginTop: 2,
                      fontFamily: font.sans,
                      fontSize: 8,
                      fontWeight: 600,
                      color: T.ink40,
                      textTransform: "uppercase",
                      letterSpacing: ".14em",
                      lineHeight: 1.45,
                    }}
                  >
                    {metric.label}
                  </div>
                </div>
                );
              })}
            </div>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
