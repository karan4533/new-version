import { useEffect, useState } from "react";
import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Section } from "../shared";
import { Reveal } from "../shared";
import { SERVICES } from "../../constants/data/services";
import { RiLoginBoxLine } from "react-icons/ri";
import { FiActivity, FiCompass, FiCpu, FiSettings, FiShield, FiUsers } from "react-icons/fi";

export function Services() {
  const { isMobile, isTablet, isSmallMobile } = useViewport();
  const servicesTopPadding = isSmallMobile ? "10px" : isMobile ? "14px" : "20px";
  const serviceIconById = {
    "01": FiCpu,
    "02": FiSettings,
    "03": FiShield,
    "04": FiCompass,
    "05": FiActivity,
    "06": FiUsers,
  };
  const [hasHoverInput, setHasHoverInput] = useState(false);
  const supportsHoverFlip = hasHoverInput;
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const syncInteractionMode = () => {
      setHasHoverInput(mediaQuery.matches);
    };

    syncInteractionMode();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", syncInteractionMode);
      return () => mediaQuery.removeEventListener("change", syncInteractionMode);
    }

    mediaQuery.addListener(syncInteractionMode);
    return () => mediaQuery.removeListener(syncInteractionMode);
  }, []);

  const toggleCardForTouch = (index) => {
    if (supportsHoverFlip) return;
    setActiveCardIndex((current) => (current === index ? null : index));
  };

  const flipHintBaseStyle = {
    position: "absolute",
    right: isSmallMobile ? 10 : 12,
    bottom: isSmallMobile ? 10 : 12,
    width: isSmallMobile ? 22 : 24,
    height: isSmallMobile ? 22 : 24,
    borderRadius: 7,
    display: "grid",
    placeItems: "center",
    pointerEvents: "none",
  };

  const flipHintFrontStyle = {
    ...flipHintBaseStyle,
    border: `1px solid ${T.ink12}`,
    background: "linear-gradient(180deg, rgba(176,120,69,.14) 0%, rgba(176,120,69,.08) 100%)",
    color: T.ink40,
  };

  const flipHintBackStyle = {
    ...flipHintBaseStyle,
    border: "1px solid rgba(176,120,69,.34)",
    background: "linear-gradient(180deg, rgba(176,120,69,.14) 0%, rgba(176,120,69,.08) 100%)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,.45)",
    color: T.amber,
  };

  return (
    <Section id="services" paddingTop={servicesTopPadding}>
      <style>{`
        #services .services-split-layout {
          display: grid !important;
          grid-template-columns: 30% 70% !important;
          align-items: stretch !important;
          gap: 20px !important;
        }

        #services .services-left-panel,
        #services .services-right-panel,
        #services .services-card-slot {
          min-width: 0 !important;
          width: 100% !important;
          height: 100% !important;
        }

        #services .services-left-panel {
          display: flex !important;
        }

        #services .services-cards-grid {
          display: grid !important;
          grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          grid-template-rows: repeat(2, minmax(0, 1fr)) !important;
          gap: 12px !important;
          align-items: stretch !important;
        }

        #services .services-card-shell {
          width: 100% !important;
          position: relative !important;
          transform: none !important;
          float: none !important;
          border-radius: 14px !important;
          overflow: hidden !important;
          display: block !important;
        }

        #services .services-card-face {
          position: static !important;
          transform: none !important;
          float: none !important;
          height: 100% !important;
          box-sizing: border-box !important;
          border-radius: 14px !important;
        }

        @media (max-width: 1024px) {
          #services .services-split-layout {
            grid-template-columns: 1fr !important;
            gap: 18px !important;
          }

          #services .services-cards-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            grid-template-rows: repeat(3, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 767px) {
          #services .services-cards-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: none !important;
            gap: 10px !important;
          }
        }
      `}</style>

      <div
        className="services-split-layout"
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr" : "minmax(220px,30%) minmax(0,1fr)",
          gap: isSmallMobile ? 14 : isMobile ? 16 : isTablet ? 18 : 20,
          alignItems: "stretch",
        }}
      >
        <div className="services-left-panel">
          <Reveal distance={18} blurFrom={10} style={{ minWidth: 0, height: "100%" }}>
            <div
            style={{
              minWidth: 0,
              border: `1px solid rgba(30,26,16,.14)`,
              background:
                "linear-gradient(180deg, rgba(255,255,255,.86) 0%, rgba(255,255,255,.74) 100%)",
              borderRadius: 14,
              boxShadow: "0 8px 18px rgba(30,26,16,.08)",
              padding: isSmallMobile ? "18px 16px" : isMobile ? "20px 18px" : "24px 22px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              justifyContent: isMobile || isTablet ? "flex-start" : "center",
              gap: isSmallMobile ? 10 : 12,
              minHeight: isMobile || isTablet ? "auto" : 284,
              height: isMobile || isTablet ? "auto" : "100%",
            }}
          >
            <p
              style={{
                margin: 0,
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
              What we do
            </p>
            <h2
              style={{
                margin: 0,
                fontFamily: font.serif,
                fontWeight: 500,
                lineHeight: 1.08,
                letterSpacing: "-.02em",
                color: T.ink,
                fontSize: isSmallMobile ? 28 : isMobile ? 34 : isTablet ? 38 : 40,
                whiteSpace: "normal",
                maxWidth: "100%",
              }}
            >
              Six ways we turn AI ambition into production reality.
            </h2>

            <p
              style={{
                margin: 0,
                fontFamily: font.sans,
                fontSize: isSmallMobile ? 12 : 13,
                lineHeight: 1.58,
                color: T.ink60,
                overflowWrap: "anywhere",
                maxWidth: isMobile || isTablet ? 520 : "100%",
              }}
            >
              Most enterprises have a strategy. Few have systems that run in production.
              We bridge that gap as your on-demand Applied AI Lab.
            </p>

            <div
              aria-hidden="true"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                marginTop: isSmallMobile ? 2 : 4,
              }}
            >
              <span
                style={{
                  width: isSmallMobile ? 88 : 124,
                  height: 1,
                  background: T.ink12,
                }}
              />
            </div>
            </div>
          </Reveal>
        </div>

        <div className="services-right-panel" style={{ minWidth: 0 }}>
          <div
            className="services-cards-grid"
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2,minmax(0,1fr))" : "repeat(3,minmax(0,1fr))",
              gap: isSmallMobile ? 10 : 12,
            }}
          >
            {SERVICES.map((card, index) => (
              <div key={card.name} className="services-card-slot">
              <Reveal
                delay={0.08 + index * 0.05}
                distance={0}
                scaleFrom={1}
                blurFrom={0}
                style={{ height: "100%" }}
              >
            {(() => {
              const isFlipped = activeCardIndex === index;
              const highlights = (card.items || []).slice(0, 5);
              const ServiceTopicIcon = serviceIconById[card.id] || FiCpu;
              const allowTwoLineTitle = card.name
                .toLowerCase()
                .startsWith("academic and industry partnership");
              const technicalTags = (card.technicalTags || [])
                .map((tag) => String(tag).trim())
                .filter(Boolean);

              return (
                <div
                  className="services-card-wrap"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <article
                    className="services-card-shell"
                    onMouseEnter={() => {
                      if (!supportsHoverFlip) return;
                      setActiveCardIndex(index);
                    }}
                    onMouseLeave={() => {
                      if (!supportsHoverFlip) return;
                      setActiveCardIndex((current) => (current === index ? null : current));
                    }}
                    onFocus={() => {
                      setActiveCardIndex(index);
                    }}
                    onBlur={() => {
                      setActiveCardIndex((current) => (current === index ? null : current));
                    }}
                    onClick={() => toggleCardForTouch(index)}
                    onKeyDown={(event) => {
                      if (event.key !== "Enter" && event.key !== " ") return;
                      event.preventDefault();
                      setActiveCardIndex((current) => (current === index ? null : index));
                    }}
                    tabIndex={0}
                    aria-pressed={isFlipped}
                    aria-label={`${card.name} service card`}
                    style={{
                      position: "relative",
                      width: "100%",
                      height: isSmallMobile ? 246 : 284,
                      overflow: "hidden",
                      outline: "none",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      className="services-card-face services-card-face-front"
                      style={{
                        border: `1px solid rgba(30,26,16,.14)`,
                        background:
                          "linear-gradient(180deg, rgba(255,255,255,.86) 0%, rgba(255,255,255,.74) 100%)",
                        borderRadius: 14,
                        padding: isSmallMobile ? "14px 13px" : "17px 15px 14px",
                        display: isFlipped ? "none" : "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: isSmallMobile ? 8 : 10,
                        boxShadow: "0 8px 18px rgba(30,26,16,.08)",
                      }}
                    >
                      <span
                        style={{
                          width: isSmallMobile ? 40 : 44,
                          height: isSmallMobile ? 40 : 44,
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: T.amber,
                        }}
                      >
                        <ServiceTopicIcon size={isSmallMobile ? 24 : 26} />
                      </span>
                      <h3
                        style={{
                          margin: 0,
                          fontFamily: font.serif,
                          fontWeight: 600,
                          color: T.ink,
                          fontSize: isSmallMobile ? 19 : 21,
                          lineHeight: 1.14,
                          letterSpacing: "-.01em",
                          width: "100%",
                          maxWidth: "100%",
                          minHeight: allowTwoLineTitle
                            ? (isSmallMobile ? 56 : 60)
                            : (isSmallMobile ? 44 : 48),
                          whiteSpace: allowTwoLineTitle ? "normal" : "nowrap",
                          display: allowTwoLineTitle ? "-webkit-box" : "block",
                          WebkitLineClamp: allowTwoLineTitle ? 2 : "unset",
                          WebkitBoxOrient: allowTwoLineTitle ? "vertical" : "horizontal",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {card.name}
                      </h3>
                      <p
                        style={{
                          margin: 0,
                          fontFamily: font.sans,
                          color: T.ink60,
                          fontSize: isSmallMobile ? 12 : 13,
                          lineHeight: 1.52,
                          minHeight: isSmallMobile ? 64 : 68,
                        }}
                      >
                        {card.desc}
                      </p>

                      {technicalTags.length > 0 && (
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            alignItems: "center",
                            gap: isSmallMobile ? 6 : 7,
                            marginTop: isSmallMobile ? 8 : 10,
                            paddingTop: isSmallMobile ? 4 : 6,
                          }}
                        >
                          {technicalTags.map((tag, tagIndex) => {
                            const normalizedTag = tag.toUpperCase();

                            return (
                            <span
                              key={`${card.name}-${normalizedTag}-${tagIndex}`}
                              style={{
                                display: "inline-block",
                                width: "fit-content",
                                maxWidth: "100%",
                                border: "1px solid rgba(176,120,69,.34)",
                                borderRadius: 6,
                                padding: "4px 9px",
                                fontFamily: font.sans,
                                fontSize: isSmallMobile ? 7 : 8,
                                fontWeight: 700,
                                letterSpacing: ".06em",
                                lineHeight: 1.35,
                                textTransform: "uppercase",
                                color: "rgba(30,26,16,.78)",
                                background:
                                  "linear-gradient(180deg, rgba(176,120,69,.15) 0%, rgba(176,120,69,.08) 100%)",
                                boxShadow: "inset 0 1px 0 rgba(255,255,255,.45)",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                              title={normalizedTag}
                            >
                              {normalizedTag}
                            </span>
                            );
                          })}
                        </div>
                      )}

                      <span aria-hidden="true" style={flipHintFrontStyle}>
                        <RiLoginBoxLine size={isSmallMobile ? 10 : 11} />
                      </span>

                    </div>

                    <div
                      className="services-card-face services-card-face-back"
                      style={{
                        border: "1px solid rgba(30,26,16,.16)",
                        background:
                          "linear-gradient(180deg, rgba(247,242,232,.98) 0%, rgba(239,231,216,.98) 100%)",
                        borderRadius: 14,
                        padding: isSmallMobile ? "14px 13px" : "17px 15px 14px",
                        display: isFlipped ? "flex" : "none",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: isSmallMobile ? 8 : 10,
                        boxShadow: "0 10px 22px rgba(30,26,16,.1)",
                      }}
                    >
                      <span
                        style={{
                          width: isSmallMobile ? 40 : 44,
                          height: isSmallMobile ? 40 : 44,
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: T.amber,
                        }}
                      >
                        <ServiceTopicIcon size={isSmallMobile ? 24 : 26} />
                      </span>
                      <h3
                        style={{
                          margin: 0,
                          fontFamily: font.serif,
                          fontWeight: 600,
                          color: T.ink,
                          fontSize: isSmallMobile ? 19 : 21,
                          lineHeight: 1.14,
                          letterSpacing: "-.01em",
                          width: "100%",
                          maxWidth: "100%",
                          minHeight: allowTwoLineTitle ? (isSmallMobile ? 52 : 56) : "unset",
                          whiteSpace: allowTwoLineTitle ? "normal" : "nowrap",
                          display: allowTwoLineTitle ? "-webkit-box" : "block",
                          WebkitLineClamp: allowTwoLineTitle ? 2 : "unset",
                          WebkitBoxOrient: allowTwoLineTitle ? "vertical" : "horizontal",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {card.name}
                      </h3>

                      <ul
                        style={{
                          margin: 0,
                          padding: 0,
                          listStyle: "none",
                          display: "grid",
                          gap: 7,
                        }}
                      >
                        {highlights.map((item) => (
                          <li
                            key={`${card.name}-${item}`}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 8,
                              color: T.ink60,
                              fontFamily: font.sans,
                              fontSize: 12,
                              lineHeight: 1.45,
                            }}
                          >
                            <span
                              aria-hidden="true"
                              style={{ color: T.amber, fontSize: 13 }}
                            >
                              •
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <span aria-hidden="true" style={flipHintBackStyle}>
                        <RiLoginBoxLine size={isSmallMobile ? 10 : 11} />
                      </span>

                    </div>
                  </article>
                </div>
              );
            })()}
              </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
