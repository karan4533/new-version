import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Reveal, Section } from "../shared";
import caseStudyDocumentRaw from "../../../converted-document.md?raw";
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
import fintechImage from "../../assets/fintech.png";

const normalizeLine = (value) => String(value || "").replace(/\s+/g, " ").trim();
const toKey = (value) => normalizeLine(value).toLowerCase();

const findLineIndex = (lines, target) =>
  lines.findIndex((line) => toKey(line) === toKey(target));

const parseIndustryDuration = (line) => {
  const match = String(line || "").match(/^Industry:\s*(.*?)\s*\|\s*Duration:\s*(.*)$/i);

  if (!match) {
    return { industry: "", duration: "" };
  }

  return {
    industry: normalizeLine(match[1]),
    duration: normalizeLine(match[2]),
  };
};

const looksLikeWhyLine = (line) => {
  const text = normalizeLine(line);
  return text.length > 72 || /[.,:;!?]/.test(text);
};

const mergeWrappedDecisionLines = (lines) => {
  const merged = [...lines];
  let index = 0;

  while (index < merged.length - 2) {
    const current = merged[index];
    const next = merged[index + 1];
    const after = merged[index + 2];

    if (!looksLikeWhyLine(current) && !looksLikeWhyLine(next) && looksLikeWhyLine(after)) {
      merged[index] = `${normalizeLine(current)} ${normalizeLine(next)}`.trim();
      merged.splice(index + 1, 1);
      continue;
    }

    index += 1;
  }

  return merged;
};

const parseChallengeSection = (lines) => {
  const filtered = lines.map(normalizeLine).filter(Boolean);
  const contextIndex = findLineIndex(filtered, "Context");
  const breakingIndex = findLineIndex(filtered, "The breaking point");

  const contextStart = contextIndex === -1 ? 0 : contextIndex + 1;
  const contextEnd = breakingIndex === -1 ? filtered.length : breakingIndex;
  const context = normalizeLine(filtered.slice(contextStart, contextEnd).join(" "));

  if (breakingIndex === -1) {
    return {
      context,
      breakingPoint: "",
      quote: "",
    };
  }

  const trailing = filtered.slice(breakingIndex + 1).map(normalizeLine).filter(Boolean);

  return {
    context,
    breakingPoint: trailing[0] || "",
    quote: normalizeLine(trailing.slice(1).join(" ")),
  };
};

const parseBuildSection = (lines) => {
  const bodyLines = lines
    .map(normalizeLine)
    .filter((line) => line && toKey(line) !== "decision" && toKey(line) !== "why");

  const normalizedLines = mergeWrappedDecisionLines(bodyLines);
  const rows = [];

  for (let index = 0; index < normalizedLines.length; index += 2) {
    rows.push({
      decision: normalizedLines[index] || "",
      why: normalizedLines[index + 1] || "",
    });
  }

  return rows.filter((row) => row.decision || row.why);
};

const parseResultsSection = (lines) => {
  let rowLines = lines
    .map(normalizeLine)
    .filter(
      (line) =>
        line &&
        toKey(line) !== "stat" &&
        toKey(line) !== "label" &&
        toKey(line) !== "context",
    );

  let summary = "";

  if (rowLines.length % 3 === 1) {
    summary = rowLines.pop() || "";
  } else if (rowLines.length % 3 === 2) {
    summary = normalizeLine(rowLines.slice(-2).join(" "));
    rowLines = rowLines.slice(0, -2);
  }

  const rows = [];

  for (let index = 0; index < rowLines.length; index += 3) {
    rows.push({
      stat: rowLines[index] || "",
      label: rowLines[index + 1] || "",
      context: rowLines[index + 2] || "",
    });
  }

  return {
    rows: rows.filter((row) => row.stat || row.label || row.context),
    summary,
  };
};

const parseTechSection = (lines) => {
  const normalized = lines.map(normalizeLine).filter(Boolean);
  const rows = [];

  for (let index = 0; index < normalized.length; index += 1) {
    const line = normalized[index];
    const key = toKey(line);

    if (key === "models" || key === "techniques") {
      rows.push({
        label: line,
        value: normalized[index + 1] || "",
      });
      index += 1;
      continue;
    }

    if (!rows.length) {
      rows.push({
        label: "Techniques",
        value: line,
      });
      continue;
    }

    rows[rows.length - 1].value = `${rows[rows.length - 1].value} ${line}`.trim();
  }

  return rows.filter((row) => row.value);
};

const parseCaseChunk = (chunkLines) => {
  const lines = chunkLines.map(normalizeLine).filter(Boolean);

  if (lines.length < 3) return null;

  const caseLabel = lines[0] || "";
  const caseNumber = Number((caseLabel.match(/\d+/) || [0])[0]);
  const title = lines[1] || "";
  const { industry, duration } = parseIndustryDuration(lines[2] || "");

  const challengeIndex = findLineIndex(lines, "THE CHALLENGE");
  const buildIndex = findLineIndex(lines, "HOW WE BUILT IT");
  const resultsIndex = findLineIndex(lines, "THE RESULTS");
  const techIndex = findLineIndex(lines, "TECH STACK");

  const challengeLines =
    challengeIndex === -1
      ? []
      : lines.slice(challengeIndex + 1, buildIndex === -1 ? lines.length : buildIndex);

  const buildLines =
    buildIndex === -1
      ? []
      : lines.slice(buildIndex + 1, resultsIndex === -1 ? lines.length : resultsIndex);

  const resultsLines =
    resultsIndex === -1
      ? []
      : lines.slice(resultsIndex + 1, techIndex === -1 ? lines.length : techIndex);

  const techLines = techIndex === -1 ? [] : lines.slice(techIndex + 1);

  return {
    caseLabel,
    caseNumber,
    title,
    industry,
    duration,
    challenge: parseChallengeSection(challengeLines),
    buildRows: parseBuildSection(buildLines),
    ...parseResultsSection(resultsLines),
    techRows: parseTechSection(techLines),
  };
};

const parseWordCaseStudies = (raw) => {
  const normalized = String(raw || "").replace(/\r\n?/g, "\n");
  const paragraphs = normalized.split(/\n{2,}/).map(normalizeLine).filter(Boolean);
  const caseStartIndexes = [];

  paragraphs.forEach((line, index) => {
    if (/^Case Study #\d+$/i.test(line)) {
      caseStartIndexes.push(index);
    }
  });

  return caseStartIndexes
    .map((startIndex, index) => {
      const endIndex = caseStartIndexes[index + 1] ?? paragraphs.length;
      return parseCaseChunk(paragraphs.slice(startIndex, endIndex));
    })
    .filter(Boolean);
};

const WORD_CASE_STUDIES = parseWordCaseStudies(caseStudyDocumentRaw);

const getWordCaseByIndexOrTitle = (caseStudy, caseIndex) => {
  if (
    Number.isInteger(caseIndex) &&
    caseIndex >= 0 &&
    caseIndex < WORD_CASE_STUDIES.length
  ) {
    return WORD_CASE_STUDIES[caseIndex];
  }

  const titleKey = toKey(caseStudy?.title);
  return WORD_CASE_STUDIES.find((entry) => toKey(entry.title) === titleKey) || null;
};

const getFallbackBuildRows = (caseStudy) => {
  const points =
    Array.isArray(caseStudy?.solutionPoints) && caseStudy.solutionPoints.length > 0
      ? caseStudy.solutionPoints
      : caseStudy?.solution
        ? [caseStudy.solution]
        : [];

  return points.map((decision) => ({ decision: normalizeLine(decision), why: "" }));
};

const getFallbackResultRows = (caseStudy) => {
  if (!Array.isArray(caseStudy?.metrics)) return [];

  return caseStudy.metrics.map((metric) => ({
    stat: normalizeLine(metric?.val),
    label: normalizeLine(metric?.label),
    context: normalizeLine(metric?.context),
  }));
};

const getFallbackTechRows = (caseStudy) => {
  if (Array.isArray(caseStudy?.techTags) && caseStudy.techTags.length > 0) {
    return [{ label: "Techniques", value: caseStudy.techTags.join(", ") }];
  }

  return [];
};

const buildFallbackCase = (caseStudy, caseIndex) => ({
  caseLabel: `Case Study #${(caseIndex || 0) + 1}`,
  caseNumber: (caseIndex || 0) + 1,
  title: caseStudy?.title || "",
  industry: caseStudy?.cat || "",
  duration: caseStudy?.weeks || "",
  challenge: {
    context: caseStudy?.objective || caseStudy?.body || "",
    breakingPoint: caseStudy?.body || "",
    quote: "",
  },
  buildRows: getFallbackBuildRows(caseStudy),
  rows: getFallbackResultRows(caseStudy),
  summary: caseStudy?.outcome || "",
  techRows: getFallbackTechRows(caseStudy),
});

const buildDisplayCase = (caseStudy, caseIndex) =>
  getWordCaseByIndexOrTitle(caseStudy, caseIndex) || buildFallbackCase(caseStudy, caseIndex);

const DETAIL_IMAGE_BY_KEY = {
  Construction: { src: constructionImage, position: "center 44%" },
  "E-Commerce": { src: dataAnalyticsImage, position: "42% 36%" },
  "D2C Brand": { src: d2cImage, position: "center 40%" },
  "Enterprise Search": { src: enterpriseSearchImage, position: "center 42%" },
  Legal: { src: legalImage, position: "center 40%" },
  Fintech: { src: fintechImage, position: "22% 44%" },
  "AI Governance": { src: aiGovernanceImage, position: "center 44%" },
  Automotive: { src: automotiveImage, position: "center 44%" },
  "Sales Copilot": { src: salesCopilotImage, position: "center 44%" },
  Translation: { src: translationImage, position: "center 44%" },
  "Video Localization": { src: videoLocalizationImage, position: "center 44%" },
  "Medico-Legal": { src: medicoLegalImage, position: "center 42%" },
  Enterprise: { src: enterpriseSearchImage, position: "center 42%" },
  "Sales Tech": { src: salesCopilotImage, position: "center 44%" },
};

const getCaseDisplayKey = (caseStudy) => caseStudy?.tabLabel || caseStudy?.cat || "";

const getDetailImageConfig = (caseStudy) => {
  if (!caseStudy) return null;

  return (
    DETAIL_IMAGE_BY_KEY[getCaseDisplayKey(caseStudy)] ||
    DETAIL_IMAGE_BY_KEY[caseStudy?.cat] ||
    null
  );
};

export function CaseStudyDetailPage({ caseStudy, caseIndex = 0, onBack }) {
  const { isTablet, isSmallMobile } = useViewport();

  if (!caseStudy) return null;

  const detailCase = buildDisplayCase(caseStudy, caseIndex);
  const detailImage = getDetailImageConfig(caseStudy);
  const statsRows = detailCase.rows.slice(0, 3);
  const summaryTakeaways = [detailCase.summary].filter(Boolean);
  const techHighlights = detailCase.techRows
    .map((row) => ({
      label: row.label || "Tech",
      value: row.value,
    }))
    .filter((row) => row.value);

  const sectionLabelStyle = {
    margin: 0,
    fontFamily: font.sans,
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: ".02em",
    color: T.amber,
  };

  const detailCardStyle = {
    border: `1px solid ${T.ink12}`,
    borderRadius: 12,
    background: "rgba(255,255,255,.5)",
    padding: isSmallMobile ? "12px 12px" : "14px 16px",
  };

  const titleText = detailCase.title || caseStudy.title;
  const industryText = detailCase.industry || caseStudy.cat;
  const durationText = detailCase.duration || caseStudy.weeks;

  return (
    <Section id="case-study-detail">
      <Reveal>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
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
              marginBottom: isSmallMobile ? 14 : 18,
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
              gap: isSmallMobile ? 22 : 28,
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isTablet ? "1fr" : "minmax(0,1.06fr) minmax(0,.94fr)",
                gap: isSmallMobile ? 18 : 30,
                alignItems: "start",
              }}
            >
              <div style={{ display: "grid", gap: isSmallMobile ? 12 : 14 }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
                  <span
                    style={{
                      display: "inline-block",
                      fontFamily: font.sans,
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: T.ink60,
                      border: `1px solid ${T.ink12}`,
                      borderRadius: 999,
                      padding: "4px 10px",
                      background: "rgba(255,255,255,.35)",
                    }}
                  >
                    Case Study
                  </span>
                  <span
                    style={{
                      display: "inline-block",
                      fontFamily: font.sans,
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                      color: T.amber,
                    }}
                  >
                    {detailCase.caseLabel}
                  </span>
                </div>

                <h2
                  style={{
                    margin: 0,
                    fontFamily: font.serif,
                    fontSize: isSmallMobile
                      ? "clamp(30px, 8.6vw, 40px)"
                      : "clamp(38px, 5vw, 60px)",
                    fontWeight: 700,
                    lineHeight: 1.08,
                    letterSpacing: "-.02em",
                    color: T.ink,
                  }}
                >
                  {titleText}
                </h2>

                <p
                  style={{
                    margin: 0,
                    fontFamily: font.sans,
                    fontSize: 13,
                    lineHeight: 1.6,
                    color: T.ink60,
                  }}
                >
                  <span style={{ fontWeight: 700 }}>Industry:</span> {industryText}
                  <span style={{ margin: "0 8px", color: T.ink40 }}>|</span>
                  <span style={{ fontWeight: 700 }}>Duration:</span> {durationText}
                </p>

                <div style={{ ...detailCardStyle, borderLeft: `3px solid ${T.teal}` }}>
                  <p style={sectionLabelStyle}>Client overview</p>
                  <p
                    style={{
                      margin: "8px 0 0",
                      fontFamily: font.sans,
                      fontSize: isSmallMobile ? 13 : 14,
                      lineHeight: 1.7,
                      color: T.ink60,
                    }}
                  >
                    {detailCase.challenge.context}
                  </p>
                </div>

                <div style={{ ...detailCardStyle, borderLeft: `3px solid ${T.teal}` }}>
                  <p style={sectionLabelStyle}>Challenge</p>
                  {detailCase.challenge.breakingPoint && (
                    <p
                      style={{
                        margin: "8px 0 0",
                        fontFamily: font.sans,
                        fontSize: isSmallMobile ? 13 : 14,
                        lineHeight: 1.7,
                        color: T.ink60,
                      }}
                    >
                      {detailCase.challenge.breakingPoint}
                    </p>
                  )}
                  {detailCase.challenge.quote && (
                    <p
                      style={{
                        margin: "8px 0 0",
                        fontFamily: font.sans,
                        fontSize: isSmallMobile ? 13 : 14,
                        lineHeight: 1.7,
                        color: T.ink60,
                        fontStyle: "italic",
                      }}
                    >
                      {detailCase.challenge.quote}
                    </p>
                  )}
                </div>

                <div style={{ ...detailCardStyle, borderLeft: `3px solid ${T.teal}` }}>
                  <p style={sectionLabelStyle}>Solution</p>
                  <ul
                    style={{
                      margin: "8px 0 0",
                      padding: 0,
                      listStyle: "none",
                      display: "grid",
                      gap: 8,
                    }}
                  >
                    {detailCase.buildRows.map((row, index) => (
                      <li
                        key={`${row.decision}-${index}`}
                        style={{
                          display: "grid",
                          gap: row.why ? 2 : 0,
                          fontFamily: font.sans,
                          fontSize: isSmallMobile ? 13 : 14,
                          lineHeight: 1.6,
                          color: T.ink60,
                        }}
                      >
                        <span style={{ color: T.ink, fontWeight: 600 }}>{row.decision}</span>
                        {row.why && <span>{row.why}</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ display: "grid", alignItems: "start" }}>
                <div
                  style={{
                    width: "100%",
                    maxWidth: isTablet ? "100%" : 430,
                    justifySelf: isTablet ? "stretch" : "end",
                    aspectRatio: isSmallMobile ? "4 / 3" : "5 / 4",
                    borderRadius: 14,
                    overflow: "hidden",
                    border: `1px solid ${T.ink12}`,
                    boxShadow: "0 12px 30px rgba(30,26,16,.12)",
                    background: "rgba(255,255,255,.35)",
                  }}
                >
                  {detailImage?.src && (
                    <img
                      src={detailImage.src}
                      alt={titleText}
                      loading="lazy"
                      decoding="async"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: detailImage.position || "center center",
                      }}
                    />
                  )}
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gap: isSmallMobile ? 10 : 12 }}>
              {statsRows.length > 0 && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: isSmallMobile ? "1fr" : "repeat(3,minmax(0,1fr))",
                    gap: 10,
                  }}
                >
                  {statsRows.map((row, index) => (
                    <div key={`${row.stat}-${index}`} style={detailCardStyle}>
                      <p
                        style={{
                          margin: 0,
                          fontFamily: font.serif,
                          fontSize: isSmallMobile ? 24 : 28,
                          fontWeight: 700,
                          lineHeight: 1.1,
                          color: T.amber,
                        }}
                      >
                        {row.stat}
                      </p>
                      <p
                        style={{
                          margin: "6px 0 0",
                          fontFamily: font.sans,
                          fontSize: isSmallMobile ? 13 : 14,
                          fontWeight: 600,
                          lineHeight: 1.45,
                          color: T.ink,
                        }}
                      >
                        {row.label}
                      </p>
                      {row.context && (
                        <p
                          style={{
                            margin: "6px 0 0",
                            fontFamily: font.sans,
                            fontSize: 12,
                            lineHeight: 1.55,
                            color: T.ink60,
                          }}
                        >
                          {row.context}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {(summaryTakeaways.length > 0 || techHighlights.length > 0) && (
                <div style={detailCardStyle}>
                  <p style={sectionLabelStyle}>Key takeaways</p>
                  <ul
                    style={{
                      margin: "8px 0 0",
                      padding: 0,
                      listStyle: "none",
                      display: "grid",
                      gap: 8,
                    }}
                  >
                    {summaryTakeaways.map((item, index) => (
                      <li
                        key={`summary-${item}-${index}`}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 8,
                          fontFamily: font.sans,
                          fontSize: isSmallMobile ? 13 : 14,
                          lineHeight: 1.65,
                          color: T.ink60,
                        }}
                      >
                        <span style={{ color: T.amber, lineHeight: 1.5 }}>•</span>
                        <span>{item}</span>
                      </li>
                    ))}

                    {techHighlights.map((item, index) => (
                      <li
                        key={`tech-${item.label}-${index}`}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 8,
                          fontFamily: font.sans,
                          fontSize: isSmallMobile ? 13 : 14,
                          lineHeight: 1.65,
                          color: T.ink60,
                        }}
                      >
                        <span
                          style={{
                            display: "inline-block",
                            marginTop: 1,
                            padding: "2px 8px",
                            borderRadius: 999,
                            background: "rgba(176,120,69,.16)",
                            border: `1px solid rgba(176,120,69,.28)`,
                            color: T.amber,
                            fontSize: 10,
                            fontWeight: 700,
                            letterSpacing: ".04em",
                            textTransform: "uppercase",
                            flexShrink: 0,
                          }}
                        >
                          {item.label}
                        </span>
                        <span style={{ color: T.ink }}>{item.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}