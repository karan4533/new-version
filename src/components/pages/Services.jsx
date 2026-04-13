import { useEffect, useState } from "react";
import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Section, Reveal } from "../shared";
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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: isSmallMobile ? 12 : isMobile ? 14 : 16,
          alignItems: "start",
          marginBottom: isSmallMobile ? 28 : isMobile ? 36 : 46,
        }}
      >
        <Reveal distance={18} blurFrom={10} style={{ minWidth: 0 }}>
          <div style={{ minWidth: 0, textAlign: "center" }}>
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
              What we do
            </p>
            <h2
              style={{
                margin: "0 auto",
                fontFamily: font.serif,
                fontWeight: 500,
                lineHeight: 1.08,
                letterSpacing: "-.02em",
                color: T.ink,
                fontSize: isSmallMobile ? 28 : isMobile ? 34 : isTablet ? 40 : 50,
                whiteSpace: "normal",
                maxWidth: isSmallMobile ? "100%" : 1060,
                overflowWrap: "anywhere",
              }}
            >
              Six ways we turn AI ambition into production reality.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.08} distance={16} blurFrom={8} style={{ minWidth: 0 }}>
          <div style={{ minWidth: 0 }}>
            <p
              style={{
                margin: "0 auto",
                maxWidth: 620,
                fontFamily: font.sans,
                fontSize: isSmallMobile ? 12 : 13,
                lineHeight: 1.58,
                color: T.ink60,
                overflowWrap: "anywhere",
                textAlign: "center",
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
                margin: `${isSmallMobile ? 10 : 12}px 0 0`,
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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2,minmax(0,1fr))" : "repeat(3,minmax(0,1fr))",
          gap: isSmallMobile ? 10 : 12,
        }}
      >
        {SERVICES.map((card, index) => {
          const isFlipped = activeCardIndex === index;
          const ServiceTopicIcon = serviceIconById[card.id] || FiCpu;
          const allowTwoLineTitle = card.name
            .toLowerCase()
            .startsWith("academic and industry partnership");
          const technicalTags = (card.technicalTags || [])
            .map((tag) => String(tag).trim())
            .filter(Boolean);
          const highlights = (card.items || []).slice(0, 5);

          return (
            <Reveal
              key={card.name}
              delay={0.08 + index * 0.05}
              distance={16}
              blurFrom={7}
              style={{ height: "100%" }}
            >
              <div
                style={{
                  perspective: "1800px",
                  perspectiveOrigin: "50% 50%",
                  transformStyle: "preserve-3d",
                  position: "relative",
                  width: "100%",
                  height: "100%",
                }}
              >
                <article
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
                    minHeight: isSmallMobile ? 228 : isMobile ? 240 : isTablet ? 256 : 276,
                    height: "100%",
                    transformStyle: "preserve-3d",
                    WebkitTransformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    transition: "transform .46s ease-in-out",
                    transformOrigin: "center center",
                    outline: "none",
                    cursor: "pointer",
                    willChange: "transform",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      border: `1px solid rgba(30,26,16,.14)`,
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,.86) 0%, rgba(255,255,255,.74) 100%)",
                      borderRadius: 14,
                      padding: isSmallMobile ? "13px 12px 34px" : isMobile ? "14px 13px 36px" : "17px 15px 38px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: isSmallMobile ? 6 : 8,
                      transform: "rotateY(0deg) translateZ(1px)",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      boxShadow: "0 8px 18px rgba(30,26,16,.08)",
                    }}
                  >
                    <span
                      style={{
                        width: isSmallMobile ? 56 : isMobile ? 58 : isTablet ? 62 : 68,
                        height: isSmallMobile ? 56 : isMobile ? 58 : isTablet ? 62 : 68,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: T.amber,
                        marginBottom: isSmallMobile ? 2 : 4,
                      }}
                    >
                      <ServiceTopicIcon size={isSmallMobile ? 36 : isMobile ? 37 : isTablet ? 40 : 44} />
                    </span>

                    <h3
                      style={{
                        margin: 0,
                        fontFamily: font.serif,
                        fontWeight: 600,
                        color: T.ink,
                        fontSize: isSmallMobile ? 18 : isMobile ? 19 : isTablet ? 20 : 22,
                        lineHeight: 1.12,
                        letterSpacing: "-.01em",
                        width: "100%",
                        maxWidth: "100%",
                        minHeight: allowTwoLineTitle
                          ? (isSmallMobile ? 46 : isMobile ? 50 : isTablet ? 54 : 58)
                          : (isSmallMobile ? 34 : isMobile ? 38 : isTablet ? 40 : 46),
                        whiteSpace: "normal",
                        display: "block",
                        overflowWrap: "anywhere",
                      }}
                    >
                      {card.name}
                    </h3>

                    {technicalTags.length > 0 && (
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "flex-start",
                          gap: isSmallMobile ? 5 : 6,
                          marginTop: "auto",
                          paddingTop: isSmallMobile ? 6 : 8,
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
                                fontSize: isSmallMobile ? 8 : 9,
                                fontWeight: 700,
                                letterSpacing: ".06em",
                                lineHeight: 1.35,
                                textTransform: "uppercase",
                                color: "rgba(30,26,16,.94)",
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
                    style={{
                      position: "absolute",
                      inset: 0,
                      border: "1px solid rgba(30,26,16,.16)",
                      background:
                        "linear-gradient(180deg, rgba(247,242,232,.98) 0%, rgba(239,231,216,.98) 100%)",
                      borderRadius: 14,
                      padding: isSmallMobile ? "13px 12px 34px" : isMobile ? "14px 13px 36px" : "17px 15px 38px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: isSmallMobile ? 6 : 8,
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      boxShadow: "0 10px 22px rgba(30,26,16,.1)",
                    }}
                  >
                    <span
                      style={{
                        width: isSmallMobile ? 48 : isMobile ? 50 : isTablet ? 54 : 60,
                        height: isSmallMobile ? 48 : isMobile ? 50 : isTablet ? 54 : 60,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: T.amber,
                      }}
                    >
                      <ServiceTopicIcon size={isSmallMobile ? 30 : isMobile ? 31 : isTablet ? 34 : 38} />
                    </span>

                    <h3
                      style={{
                        margin: 0,
                        fontFamily: font.serif,
                        fontWeight: 600,
                        color: T.ink,
                        fontSize: isSmallMobile ? 18 : isMobile ? 19 : isTablet ? 20 : 22,
                        lineHeight: 1.12,
                        letterSpacing: "-.01em",
                        width: "100%",
                        maxWidth: "100%",
                        whiteSpace: "normal",
                        overflowWrap: "anywhere",
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
                        gap: isSmallMobile ? 6 : 7,
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
                            fontSize: isSmallMobile ? 11 : 12,
                            lineHeight: 1.45,
                          }}
                        >
                          <span aria-hidden="true" style={{ color: T.amber, fontSize: 13 }}>
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
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}