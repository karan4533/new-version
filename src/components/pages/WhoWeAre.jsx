import { useEffect, useState } from "react";
import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Section } from "../shared";
import { Reveal } from "../shared";

export function WhoWeAre() {
  const { isMobile, isTablet, isSmallMobile } = useViewport();
  const aboutSectionPaddingPx = isSmallMobile ? 12 : isMobile ? 16 : isTablet ? 20 : 24;
  const aboutSectionPadding = `${aboutSectionPaddingPx}px`;
  const [aboutNavOffset, setAboutNavOffset] = useState(
    isSmallMobile ? 58 : isMobile ? 66 : isTablet ? 76 : 86,
  );
  const aboutContentMinHeight = `calc(100dvh - ${aboutNavOffset + aboutSectionPaddingPx * 2}px)`;
  const aboutBg = T.footer;
  const aboutText = "rgba(255,255,255,.92)";
  const aboutTextMuted = "rgba(255,255,255,.72)";
  const aboutTextSoft = "rgba(255,255,255,.5)";
  const aboutRule = "rgba(255,255,255,.16)";
  const aboutDivider = "rgba(255,255,255,.1)";

  const notes = [
    "Is your data ready for real AI reasoning, or just retrieval?",
    "Are your agents truly autonomous, or just scripted workflows?",
    "Where is AI cost quietly eating into your profit margins?",
    "Is your AI production-ready on governance and reliability?",
  ];

  function MissionMatrix() {
    const { width, isMobile: matrixIsMobile, isTablet: matrixIsTablet, isSmallMobile: matrixIsSmallMobile } = useViewport();
    const progress = 1;
    const matrixUseDesktopLayout = !matrixIsMobile && width >= 1180;

    const levers = [
      { label: "Accuracy", hl: 88, avg: 62, insight: "Precision-tuned per use case — not over-engineered globally." },
      { label: "Latency", hl: 83, avg: 48, insight: "Semantic caching + provider routing eliminates the speed tradeoff." },
      { label: "Operational Cost", hl: 76, avg: 35, insight: "Multi-provider orchestration cuts spend without risking reliability." },
      { label: "Governance", hl: 79, avg: 28, insight: "Guardrails built into the Skills layer — not bolted on after." },
      { label: "Development Time", hl: 81, avg: 44, insight: "Skills architecture ships 2x faster without cutting corners." },
    ];

    const N = levers.length;
    const CX = 160;
    const CY = 165;
    const R = 108;
    const matrixChartWidth = matrixIsSmallMobile ? 298 : matrixIsMobile ? 326 : matrixIsTablet ? 344 : 332;
    const matrixChartHeight = matrixIsSmallMobile ? 304 : matrixIsMobile ? 338 : matrixIsTablet ? 352 : 338;
    const matrixLabelFontSize = matrixIsSmallMobile ? 11 : 12;
    const matrixLabelRadius = matrixIsSmallMobile ? R + 18 : matrixIsMobile ? R + 22 : R + 28;
    const matrixChartNudgeX = matrixUseDesktopLayout ? -14 : 0;
    const matrixLayoutMaxWidth = matrixUseDesktopLayout ? 940 : matrixIsTablet ? 720 : 560;

    const polarToXY = (angleIdx, radius) => {
      const angle = ((360 / N) * angleIdx - 90) * (Math.PI / 180);
      return { x: CX + radius * Math.cos(angle), y: CY + radius * Math.sin(angle) };
    };

    const buildPath = (values, amount = 1) =>
      `${values
        .map((value, index) => {
          const { x, y } = polarToXY(index, (value / 100) * R * amount);
          return `${index === 0 ? "M" : "L"}${x},${y}`;
        })
        .join(" ")} Z`;

    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: matrixIsSmallMobile ? 12 : 14 }}>
        <div
          style={{
            width: "100%",
            maxWidth: matrixLayoutMaxWidth,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: matrixUseDesktopLayout ? "minmax(260px, 1fr) minmax(300px, 360px)" : "1fr",
            alignItems: "center",
            justifyItems: "center",
            columnGap: matrixIsSmallMobile ? 12 : matrixIsTablet ? 16 : 20,
            rowGap: matrixIsSmallMobile ? 12 : 14,
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: matrixUseDesktopLayout ? 360 : 560,
              justifySelf: matrixUseDesktopLayout ? "start" : "center",
              display: "flex",
              flexDirection: "column",
              alignItems: matrixUseDesktopLayout ? "flex-start" : "center",
              gap: matrixIsSmallMobile ? 10 : 12,
            }}
          >
            <p
              style={{
                margin: 0,
                maxWidth: matrixUseDesktopLayout ? 340 : "100%",
                textAlign: matrixUseDesktopLayout ? "left" : "center",
                fontFamily: font.serif,
                fontSize: matrixIsSmallMobile ? 22 : matrixIsMobile ? 24 : 28,
                lineHeight: 1.2,
                fontWeight: 600,
                color: aboutText,
                letterSpacing: "-.01em",
              }}
            >
              Every lever optimized<span style={{ color: "#9A6B38", fontWeight: 700 }}>—no trade-offs left on the table</span>
            </p>

            <p
              style={{
                margin: 0,
                textAlign: matrixUseDesktopLayout ? "left" : "center",
                maxWidth: matrixUseDesktopLayout ? 340 : 460,
                fontFamily: font.sans,
                fontSize: matrixIsSmallMobile ? 13 : 14,
                lineHeight: 1.6,
                color: aboutTextMuted,
              }}
            >
              Most AI vendors optimize one dimension.
              <br />
              We engineer across all five.
            </p>
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              justifySelf: "center",
              transform: `translateX(${matrixChartNudgeX}px)`,
            }}
          >
            <svg width={matrixChartWidth} height={matrixChartHeight} viewBox="0 0 320 330" style={{ overflow: "visible", maxWidth: "100%" }}>
            {[25, 50, 75, 100].map((pct) => (
              <polygon
                key={pct}
                points={levers
                  .map((_, index) => {
                    const { x, y } = polarToXY(index, (pct / 100) * R);
                    return `${x},${y}`;
                  })
                  .join(" ")}
                fill="none"
                stroke={pct === 100 ? "#2a2720" : "#181614"}
                strokeWidth={pct === 100 ? 1.5 : 1}
              />
            ))}

            {levers.map((_, index) => {
              const { x, y } = polarToXY(index, R);
              return <line key={index} x1={CX} y1={CY} x2={x} y2={y} stroke="#1e1c18" strokeWidth={1} />;
            })}

            <path d={buildPath(levers.map((lever) => lever.avg), progress)} fill="#8f6a3d" fillOpacity={0.12} stroke="#8f6a3d" strokeOpacity={0.7} strokeWidth={1.6} strokeDasharray="4 3" />
            <path d={buildPath(levers.map((lever) => lever.hl), progress)} fill="#C4883A" fillOpacity={0.14} stroke="#C4883A" strokeWidth={2} />

            {levers.map((lever, index) => {
              const { x, y } = polarToXY(index, (lever.hl / 100) * R * progress);

              return (
                <g key={lever.label}>
                  <circle
                    cx={x}
                    cy={y}
                    r={matrixIsSmallMobile ? 5.5 : 6}
                    fill="#161410"
                    stroke="#C4883A"
                    strokeWidth={2}
                  />
                </g>
              );
            })}

            {levers.map((lever, index) => {
              const { x, y } = polarToXY(index, matrixLabelRadius);
              const anchor = x < CX - 8 ? "end" : x > CX + 8 ? "start" : "middle";
              const labelX = matrixIsMobile && anchor === "end"
                ? x + (matrixIsSmallMobile ? 20 : 16)
                : x;

              return (
                <text
                  key={lever.label}
                  x={labelX}
                  y={y + 5}
                  textAnchor={anchor}
                  fill="#9e8f78"
                  fontSize={matrixLabelFontSize}
                  fontFamily="sans-serif"
                  fontWeight="500"
                >
                  {lever.label}
                </text>
              );
            })}
            </svg>
          </div>
        </div>

        <div style={{ width: "100%", maxWidth: matrixLayoutMaxWidth, boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
          <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap", marginTop: matrixIsSmallMobile ? 2 : 4 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <svg width="20" height="10">
                <line x1="0" y1="5" x2="20" y2="5" stroke="#8f6a3d" strokeWidth="1.8" strokeDasharray="4 3" />
              </svg>
              <span style={{ fontSize: 11, color: "#9e8f78", fontFamily: "sans-serif", fontWeight: 600 }}>Industry avg</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <svg width="20" height="10">
                <line x1="0" y1="5" x2="20" y2="5" stroke="#C4883A" strokeWidth="2" />
              </svg>
              <span style={{ fontSize: 11, color: "#C4883A", fontFamily: "sans-serif", fontWeight: 600 }}>Heuristic Labs</span>
            </div>
          </div>
        </div>

      </div>
    );
  }

  useEffect(() => {
    const syncAboutNavOffset = () => {
      const navElement = document.querySelector("nav");

      if (!navElement) {
        const fallbackOffset = isSmallMobile ? 58 : isMobile ? 66 : isTablet ? 76 : 86;
        setAboutNavOffset((current) => (current === fallbackOffset ? current : fallbackOffset));
        return;
      }

      const rect = navElement.getBoundingClientRect();
      const nextOffset = Math.max(0, Math.min(160, Math.round(rect.top + rect.height)));
      setAboutNavOffset((current) => (current === nextOffset ? current : nextOffset));
    };

    syncAboutNavOffset();
    window.addEventListener("resize", syncAboutNavOffset, { passive: true });
    window.addEventListener("orientationchange", syncAboutNavOffset, { passive: true });

    return () => {
      window.removeEventListener("resize", syncAboutNavOffset);
      window.removeEventListener("orientationchange", syncAboutNavOffset);
    };
  }, [isSmallMobile, isMobile, isTablet]);

  return (
    <Section
      id="about"
      paddingTop={aboutSectionPadding}
      paddingBottom={aboutSectionPadding}
      bg={aboutBg}
      minHeight="100dvh"
    >
      <div
        style={{
          minHeight: aboutContentMinHeight,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: isSmallMobile ? 14 : isMobile ? 18 : 22,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Reveal delay={0.06} distance={14} blurFrom={8}>
            <p
              style={{
                margin: isSmallMobile ? "0 auto 10px" : isMobile ? "0 auto 12px" : "0 auto 14px",
                width: "fit-content",
                fontFamily: font.sans,
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                padding: "6px 12px",
                borderRadius: 100,
                background: T.ink07,
                color: T.amber,
              }}
            >
              The Mission
            </p>
          </Reveal>

          <Reveal delay={0.12} distance={16} blurFrom={8}>
            <h3
              style={{
                margin: isSmallMobile ? "0 0 18px" : isMobile ? "0 0 22px" : "0 0 26px",
                textAlign: "center",
                fontFamily: font.serif,
                fontWeight: 500,
                color: aboutText,
                fontSize: isSmallMobile ? 32 : isMobile ? 42 : 52,
                lineHeight: 1.08,
                letterSpacing: "-.02em",
              }}
            >
              From AI confusion to <span style={{ color: T.amber, fontStyle: "italic", fontWeight: 700 }}>clarity.</span>
            </h3>
          </Reveal>

          <Reveal delay={0.18} distance={14} blurFrom={6}>
            <>
              <p
                style={{
                  margin: "0 auto",
                  maxWidth: 860,
                  textAlign: "center",
                  fontFamily: font.sans,
                  fontSize: isSmallMobile ? 13 : 15,
                  lineHeight: 1.72,
                  color: aboutTextMuted,
                }}
              >
                We help you answer the questions that actually matter.
              </p>

              <div
                aria-hidden="true"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: `${isSmallMobile ? 10 : 12}px 0 0`,
                }}
              >
                <span
                  style={{
                    width: isSmallMobile ? 88 : 124,
                    height: 1,
                    background: aboutRule,
                  }}
                />
              </div>
            </>
          </Reveal>
        </div>

      <Reveal delay={0.22} distance={18} blurFrom={8}>
        <div
          style={{
            margin: isSmallMobile ? "14px auto 0" : isMobile ? "16px auto 0" : "18px auto 0",
            maxWidth: 980,
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isSmallMobile ? "1fr" : "repeat(2,minmax(0,1fr))",
              gap: 0,
            }}
          >
            {notes.map((item, index) => (
              <div
                key={item}
                style={{
                  padding: isSmallMobile ? "10px 10px 12px" : "12px 12px 14px",
                  borderRight: isSmallMobile ? "none" : index % 2 === 0 ? `1px solid ${aboutDivider}` : "none",
                  borderBottom: isSmallMobile
                    ? index < notes.length - 1
                      ? `1px solid ${aboutDivider}`
                      : "none"
                    : index < 2
                      ? `1px solid ${aboutDivider}`
                      : "none",
                }}
              >
                <span
                  style={{
                    display: "block",
                    marginBottom: isSmallMobile ? 8 : 10,
                    fontFamily: font.sans,
                    fontSize: isSmallMobile ? 11 : 12,
                    fontWeight: 600,
                    letterSpacing: ".08em",
                    color: "rgba(176,120,69,.9)",
                    textAlign: "left",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p
                  style={{
                    margin: 0,
                    maxWidth: "100%",
                    marginLeft: 0,
                    fontFamily: font.sans,
                    fontSize: isSmallMobile ? 16 : 17,
                    lineHeight: 1.55,
                    color: aboutText,
                    textAlign: "left",
                    display: isMobile ? "block" : "-webkit-box",
                    overflow: isMobile ? "visible" : "hidden",
                    WebkitBoxOrient: isMobile ? "initial" : "vertical",
                    WebkitLineClamp: isMobile ? "unset" : 2,
                    lineClamp: isMobile ? "unset" : 2,
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div
        style={{
          marginTop: isSmallMobile ? 28 : isMobile ? 34 : 44,
        }}
      >
        <div
          style={{
            maxWidth: 980,
            width: "100%",
            margin: "0 auto",
            background: "transparent",
            border: "none",
            borderRadius: isSmallMobile ? 16 : 20,
            padding: isSmallMobile ? "6px 4px" : isMobile ? "8px 6px" : "10px 8px",
            position: "relative",
            zIndex: 1,
            overflow: isMobile ? "visible" : "hidden",
            boxShadow: "none",
          }}
        >
          <MissionMatrix />
        </div>
      </div>
      </div>
    </Section>
  );
}
