import { useState } from "react";
import "./CaseStudies.css";
import { T } from "../../constants/designTokens";
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
import fintechImage from "../../assets/fintech.webp";

const CASE_GRADIENTS_BY_KEY = {
  Construction: "linear-gradient(135deg, #0d2133 0%, #1a3a4a 40%, #0a1a20 100%)",
  "E-Commerce": "linear-gradient(135deg, #1a1020 0%, #2d1a3a 40%, #0f0a18 100%)",
  "D2C Brand": "linear-gradient(135deg, #0f1a10 0%, #1a2e1a 40%, #0a150a 100%)",
  "Enterprise Search": "linear-gradient(135deg, #12100a 0%, #2a2010 40%, #181408 100%)",
  Legal: "linear-gradient(135deg, #0a0a14 0%, #14142a 40%, #080810 100%)",
  Fintech: "linear-gradient(135deg, #0a1210 0%, #102018 40%, #080e0c 100%)",
  "AI Governance": "linear-gradient(135deg, #0a0e14 0%, #10182a 40%, #080c10 100%)",
  Automotive: "linear-gradient(135deg, #14100a 0%, #2a1e08 40%, #100c06 100%)",
  "Sales Copilot": "linear-gradient(135deg, #112036 0%, #18314d 42%, #0c1622 100%)",
  Translation: "linear-gradient(135deg, #131916 0%, #1f2f29 42%, #0e1412 100%)",
  "Video Localization": "linear-gradient(135deg, #17131c 0%, #241b2e 42%, #0f0b14 100%)",
  Enterprise: "linear-gradient(135deg, #15120e 0%, #252019 42%, #0d0b09 100%)",
  "Medico-Legal": "linear-gradient(135deg, #101822 0%, #1a2c3a 42%, #0a1218 100%)",
};

const DEFAULT_CASE_GRADIENT = "linear-gradient(135deg, #15120e 0%, #252019 42%, #0d0b09 100%)";

const CASE_DISPLAY_ORDER = [
  "Video Localization",
  "Construction",
  "D2C Brand",
  "Sales Copilot",
  "Enterprise Search",
  "Legal",
  "AI Governance",
  "Automotive",
  "Translation",
  "E-Commerce",
  "Medico-Legal",
  "Fintech",
];

const normalizeCaseKey = (value) => String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, "");

const CASE_IMAGES_BY_KEY = {
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

const CASE_PREVIEW_CONTENT_BY_KEY = {
  "Video Localization": {
    title: "Voice-to-Voice Video Localization",
    industry: "Enterprise",
    duration: "8 weeks",
    oneLiner:
      "An enterprise needed scalable multilingual localisation for training and compliance videos across regions. Manual dubbing was slow, expensive, and introduced terminology inconsistencies and audio-video misalignment.",
    stats: [
      { val: "75%", label: "faster per language" },
      { val: "50%", label: "cost vs manual" },
      { val: "11", label: "languages" },
    ],
  },
  Construction: {
    title: "Real-Time Safety Monitoring",
    industry: "Construction",
    duration: "12 weeks",
    oneLiner:
      "Construction sites with 40+ camera feeds had no real-time PPE monitoring and supervisors could only cover a fraction of the site at any time. Violations were only discovered after an incident had already occurred.",
    stats: [
      { val: "60%", label: "fewer violations" },
      { val: "<3s", label: "alert" },
      { val: "40+", label: "cameras" },
    ],
  },
  "D2C Brand": {
    title: "Customer Support Voice Agent",
    industry: "D2C Brand",
    duration: "10 weeks",
    oneLiner:
      "A D2C brand needed to handle high volumes of customer queries across orders, returns, payments, and product discovery. Existing support could not maintain accuracy and personalisation across all query types at scale.",
    stats: [
      { val: "80%", label: "faster resolution" },
      { val: "900ms", label: "response" },
      { val: "100%", label: "first-contact" },
    ],
  },
  "Sales Copilot": {
    title: "Conversational BI Copilot",
    industry: "Sales Tech",
    duration: "8 weeks",
    oneLiner:
      "The organisation ran all data analysis through static dashboards and manual reporting workflows. Every ad hoc question needed a technical team and real-time decision-making was effectively impossible.",
    stats: [
      { val: "<2 min", label: "per query" },
      { val: "85%", label: "less report time" },
      { val: "25+", label: "sources" },
    ],
  },
  "Enterprise Search": {
    title: "Hybrid Enterprise Search",
    industry: "Enterprise",
    duration: "10 weeks",
    oneLiner:
      "Enterprises in regulated environments needed accurate search across millions of internal documents without sending data to the cloud. Existing keyword search returned irrelevant results and could not reason across documents.",
    stats: [
      { val: "80%", label: "faster search" },
      { val: "~0%", label: "hallucination" },
      { val: "10,000+", label: "files" },
    ],
  },
  Legal: {
    title: "Legal Contracts Assistant",
    industry: "Legal",
    duration: "8 weeks",
    oneLiner:
      "Over 500,000 legal contracts needed to be searchable and conversational for legal and business teams. Retrieving precise answers required extensive manual review, creating serious time cost and risk of oversight.",
    stats: [
      { val: "15s", label: "Latency" },
      { val: "500K+", label: "contracts" },
      { val: "Role-based", label: "access" },
    ],
  },
  "AI Governance": {
    title: "AI Governance & Model Risk Framework",
    industry: "Enterprise",
    duration: "8 weeks",
    oneLiner:
      "Rapid AI adoption across business functions created risks around hallucinations, bias, and regulatory non-compliance. Each unit was deploying independently with no oversight, no audit trail, and no way to detect failures.",
    stats: [
      { val: "65%", label: "fewer incidents" },
      { val: "70%", label: "faster audits" },
      { val: "100%", label: "traceable" },
    ],
  },
  Automotive: {
    title: "Vision Inspection: Assembly Line QC",
    industry: "Automotive",
    duration: "16 weeks",
    oneLiner:
      "Manual inspection on high-speed automotive assembly lines was creating defect leakage and inconsistent quality control. Inspectors could not maintain accuracy at line speed and defects were reaching downstream stages before being caught.",
    stats: [
      { val: "95%", label: "defect precision" },
      { val: "70%", label: "less rework" },
      { val: "3x", label: "faster inspection" },
    ],
  },
  Translation: {
    title: "Vernacular-First Machine Translation",
    industry: "Enterprise",
    duration: "6 weeks",
    oneLiner:
      "Enterprises operating across multilingual regions needed accurate translation of manuals, SOPs, and policies with consistent technical terminology. Generic tools produced inconsistent outputs, creating compliance risk and contradictory instructions across regions.",
    stats: [
      { val: "65%", label: "faster turnaround" },
      { val: "85%", label: "cost saving" },
      { val: "11", label: "languages" },
    ],
  },
  "E-Commerce": {
    title: "Product Taxonomy & Attribute Enrichment",
    industry: "E-Commerce",
    duration: "8 weeks",
    oneLiner:
      "A large KPO was classifying products across 4,000+ taxonomy nodes manually from PDFs, images, and supplier blueprints. Every supplier sent data differently and the process was too slow and inconsistent to scale.",
    stats: [
      { val: "10x faster", label: "processing time" },
      { val: "92%", label: "automated" },
      { val: "4,000+", label: "nodes" },
    ],
  },
  "Medico-Legal": {
    title: "Multimodal Clinical Document Intelligence",
    industry: "Medico-Legal",
    duration: "4 weeks",
    oneLiner:
      "Legal and healthcare teams were manually reviewing 10,000+ pages of handwritten and scanned medical records per case. Critical clinical details buried in handwritten notes were being missed during case preparation.",
    stats: [
      { val: "97%", label: "accuracy" },
      { val: "100,000+", label: "pages" },
      { val: "5x faster", label: "review" },
    ],
  },
  Fintech: {
    title: "Automated Loan disbursement",
    industry: "Fintech",
    duration: "8 weeks",
    oneLiner:
      "Financing institutions were verifying construction milestones through manual site visits and image review. The process was slow, subjective, and inconsistent across reviewers, increasing financial and operational risk for lenders and borrowers alike.",
    stats: [
      { val: "95% faster", label: "approval" },
      { val: "80%", label: "less manual review" },
      { val: "Zero", label: "site visits" },
    ],
  },
};

const getCaseLabel = (caseItem) => caseItem?.tabLabel || caseItem?.cat || "Case Study";

const getCaseSubLabel = (caseItem) => caseItem?.shortTitle || caseItem?.title || "";

const getCaseGradient = (caseItem) => {
  const byLabel = CASE_GRADIENTS_BY_KEY[getCaseLabel(caseItem)];
  if (byLabel) return byLabel;

  const byCategory = CASE_GRADIENTS_BY_KEY[caseItem?.cat];
  if (byCategory) return byCategory;

  return DEFAULT_CASE_GRADIENT;
};

const getCaseImage = (caseItem) => {
  const byLabel = CASE_IMAGES_BY_KEY[getCaseLabel(caseItem)];
  if (byLabel) return byLabel;

  const byCategory = CASE_IMAGES_BY_KEY[caseItem?.cat];
  if (byCategory) return byCategory;

  return null;
};

const getCasePreviewContent = (caseItem) => {
  const byLabel = CASE_PREVIEW_CONTENT_BY_KEY[getCaseLabel(caseItem)];
  if (byLabel) return byLabel;

  const byCategory = CASE_PREVIEW_CONTENT_BY_KEY[caseItem?.cat];
  if (byCategory) return byCategory;

  return null;
};

const getCaseStats = (caseItem) => {
  if (Array.isArray(caseItem?.metrics) && caseItem.metrics.length) {
    return caseItem.metrics.slice(0, 3).map((metric, index) => ({
      val: metric?.val || "",
      label: metric?.label || `Outcome ${index + 1}`,
    }));
  }

  return String(caseItem?.outcome || "")
    .split("|")
    .map((chunk) => chunk.trim())
    .filter(Boolean)
    .slice(0, 3)
    .map((value, index) => ({ val: value, label: `Outcome ${index + 1}` }));
};

const renderNavIcon = (caseItem) => {
  const iconKey = getCaseLabel(caseItem);

  switch (iconKey) {
    case "Construction":
      return (
        <>
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </>
      );

    case "E-Commerce":
      return (
        <>
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </>
      );

    case "D2C Brand":
      return (
        <>
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" y1="19" x2="12" y2="23" />
          <line x1="8" y1="23" x2="16" y2="23" />
        </>
      );

    case "Enterprise Search":
      return (
        <>
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </>
      );

    case "Legal":
      return (
        <>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </>
      );

    case "Fintech":
      return (
        <>
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </>
      );

    case "AI Governance":
      return <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />;

    case "Automotive":
      return (
        <>
          <path d="M3 13l2-5a2 2 0 0 1 2-1h10a2 2 0 0 1 2 1l2 5" />
          <path d="M5 13h14v5a1 1 0 0 1-1 1h-1" />
          <path d="M5 13v5a1 1 0 0 0 1 1h1" />
          <circle cx="7.5" cy="16.5" r="1.3" />
          <circle cx="16.5" cy="16.5" r="1.3" />
        </>
      );

    case "Sales Copilot":
      return (
        <>
          <path d="M4 20h16" />
          <rect x="6" y="11" width="3" height="6" rx="1" />
          <rect x="11" y="8" width="3" height="9" rx="1" />
          <rect x="16" y="5" width="3" height="12" rx="1" />
        </>
      );

    case "Translation":
      return (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a14 14 0 0 1 0 18" />
          <path d="M12 3a14 14 0 0 0 0 18" />
        </>
      );

    case "Video Localization":
      return (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <polygon points="10 9 16 12 10 15" />
        </>
      );

    case "Medico-Legal":
      return (
        <>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M9 3v3h6V3" />
          <path d="M9 13h6" />
          <path d="M12 10v6" />
        </>
      );

    default:
      return (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </>
      );
  }
};

export function CaseStudies({ onOpenCaseStudy }) {
  const { isMobile, isSmallMobile } = useViewport();
  const caseStudiesTopPadding = isSmallMobile ? "10px" : isMobile ? "14px" : "20px";
  const orderIndexByKey = CASE_DISPLAY_ORDER.reduce((acc, key, index) => {
    acc[normalizeCaseKey(key)] = index;
    return acc;
  }, {});

  const showcaseCases = [...CASES]
    .map((caseItem, originalIndex) => ({ caseItem, originalIndex }))
    .sort((a, b) => {
      const aIndex =
        orderIndexByKey[
          normalizeCaseKey(a.caseItem.tabLabel || a.caseItem.cat || a.caseItem.shortTitle || a.caseItem.title)
        ] ?? Number.MAX_SAFE_INTEGER;
      const bIndex =
        orderIndexByKey[
          normalizeCaseKey(b.caseItem.tabLabel || b.caseItem.cat || b.caseItem.shortTitle || b.caseItem.title)
        ] ?? Number.MAX_SAFE_INTEGER;

      return aIndex - bIndex;
    });
  const [activeIndex, setActiveIndex] = useState(0);

  const activeEntry = showcaseCases[activeIndex] ?? showcaseCases[0];
  const activeCase = activeEntry?.caseItem ?? activeEntry ?? null;

  if (!activeCase) return null;

  const activePreviewContent = getCasePreviewContent(activeCase);
  const casePreviewSummary =
    activePreviewContent?.oneLiner ||
    activeCase.body ||
    activeCase.objective ||
    activeCase.outcome ||
    "";
  const casePreviewStats = activePreviewContent?.stats || getCaseStats(activeCase);
  const casePreviewTitle = activePreviewContent?.title || activeCase.shortTitle || activeCase.title;
  const casePreviewIndustry = activePreviewContent?.industry || activeCase.cat;
  const casePreviewDuration = activePreviewContent?.duration || activeCase.weeks;
  const casePreviewImage = getCaseImage(activeCase);
  const stableCaseSummary =
    "Explore practical AI implementations across industries, with each case capturing the challenge, approach, and measurable business impact.";

  return (
    <Section id="case-studies" paddingTop={caseStudiesTopPadding} bg={T.footer}>
      <div className="case-home-shell">
        <Reveal distance={14} blurFrom={8}>
          <div className="case-home-section-header">
            <div className="case-home-header-left">
              <span className="case-home-eyebrow">Case studies</span>
              <h2 className="case-home-headline">
                We&apos;ve built systems for <em>global enterprises</em>
              </h2>
              <p className="case-home-subhead">{stableCaseSummary}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.04} distance={20} blurFrom={10}>
          <div className="case-home-layout">
            <nav className="case-home-nav-panel" aria-label="Case studies navigation">
              <div className="case-home-nav-list">
                {showcaseCases.map(({ caseItem, originalIndex }, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={`${caseItem.title}-${originalIndex}`}
                      type="button"
                      className={`case-home-nav-item${isActive ? " active" : ""}`}
                      onClick={() => setActiveIndex(index)}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <span className="case-home-nav-num">{String(index + 1).padStart(2, "0")}</span>
                      <span className="case-home-nav-icon" aria-hidden="true">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {renderNavIcon(caseItem)}
                        </svg>
                      </span>
                      <span className="case-home-nav-text">
                        <span className="case-home-nav-title">{getCaseLabel(caseItem)}</span>
                        <span className="case-home-nav-sub">{getCaseSubLabel(caseItem)}</span>
                      </span>
                      <span className="case-home-nav-arrow" aria-hidden="true">
                        &gt;
                      </span>
                    </button>
                  );
                })}
              </div>
            </nav>

            <div className="case-home-preview">
              <div key={`preview-media-${activeIndex}`} className="case-home-preview-media case-home-fade-in">
                <div className="case-home-preview-gradient" style={{ background: getCaseGradient(activeCase) }} />
                {casePreviewImage?.src && (
                  <>
                    <img
                      className="case-home-preview-image"
                      src={casePreviewImage.src}
                      alt={casePreviewTitle}
                      loading="lazy"
                      decoding="async"
                      style={{ objectPosition: casePreviewImage.position || "center center" }}
                    />
                    <div className="case-home-preview-image-overlay" />
                  </>
                )}

                {!casePreviewImage?.src && (
                  <div className="case-home-preview-media-label">
                    <svg
                      className="case-home-preview-media-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    <span className="case-home-preview-media-text">{activeCase.cat}</span>
                  </div>
                )}
              </div>

              <div key={`preview-body-${activeIndex}`} className="case-home-preview-body case-home-fade-in">
                <div className="case-home-preview-meta">
                  <span className="case-home-meta-industry">{casePreviewIndustry}</span>
                  <span className="case-home-meta-dot" />
                  <span className="case-home-meta-duration">{casePreviewDuration}</span>
                </div>

                <h3 className="case-home-preview-title">{casePreviewTitle}</h3>
                <p className="case-home-preview-desc">{casePreviewSummary}</p>

                <div className="case-home-preview-bottom">
                  {casePreviewStats.length > 0 && (
                    <div className="case-home-stats-row">
                      {casePreviewStats.map((stat, statIndex) => (
                        <div className="case-home-stat" key={`${stat.val}-${stat.label}-${statIndex}`}>
                          <span className="case-home-stat-val">{stat.val}</span>
                          <span className="case-home-stat-label">{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <a
                    className="case-home-preview-cta case-home-preview-link"
                    href="#case-studies"
                    onClick={(event) => {
                      event.preventDefault();
                      onOpenCaseStudy?.(activeEntry?.originalIndex);
                    }}
                    aria-label={`Learn more about ${casePreviewTitle}`}
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
