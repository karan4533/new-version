import { useEffect, useState } from "react";
import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Section } from "../shared";
import { Reveal } from "../shared";
import { SERVICES } from "../../constants/data/services";
import { RiLoginBoxLine } from "react-icons/ri";

export function Services() {
  const { isMobile, isTablet, isSmallMobile } = useViewport();
  const servicesTopPadding = isSmallMobile ? "10px" : isMobile ? "14px" : "20px";
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
                fontSize: isSmallMobile ? 28 : isMobile ? 34 : isTablet ? 38 : 40,
                whiteSpace: isTablet ? "normal" : "nowrap",
                maxWidth: "100%",
              }}
            >
              Six ways we turn AI ambition into production reality.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.08} distance={16} blurFrom={8} style={{ minWidth: 0 }}>
          <div
            style={{
              minWidth: 0,
              paddingLeft: 0,
              paddingTop: 0,
            }}
          >
            <p
              style={{
                margin: "0 auto",
                maxWidth: 520,
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
        {SERVICES.map((card, index) => (
          <Reveal
            key={card.name}
            delay={0.08 + index * 0.05}
            distance={16}
            blurFrom={7}
            style={{ height: "100%" }}
          >
            {(() => {
              const isFlipped = activeCardIndex === index;
              const highlights = (card.items || []).slice(0, 5);
              const allowTwoLineTitle = card.name
                .toLowerCase()
                .startsWith("academic and industry partnership");
              const technicalTags = (card.technicalTags || [])
                .map((tag) => String(tag).trim())
                .filter(Boolean);

              return (
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
                      minHeight: isSmallMobile ? 254 : 296,
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
                        padding: isSmallMobile ? "15px 14px" : "18px 17px 16px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: isSmallMobile ? 8 : 10,
                        transform: "rotateY(0deg) translateZ(1px)",
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        boxShadow: "0 8px 18px rgba(30,26,16,.08)",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: font.serif,
                          fontSize: isSmallMobile ? 42 : 44,
                          lineHeight: 1,
                          color: "rgba(176,120,69,.24)",
                          letterSpacing: "-.01em",
                        }}
                      >
                        {card.id || String(index + 1).padStart(2, "0")}
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
                      style={{
                        position: "absolute",
                        inset: 0,
                        border: "1px solid rgba(30,26,16,.16)",
                        background:
                          "linear-gradient(180deg, rgba(247,242,232,.98) 0%, rgba(239,231,216,.98) 100%)",
                        borderRadius: 14,
                        padding: isSmallMobile ? "15px 14px" : "18px 17px 16px",
                        display: "grid",
                        alignContent: "center",
                        gap: isSmallMobile ? 10 : 11,
                        transform: "rotateY(180deg) translateZ(1px)",
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        boxShadow: "0 10px 22px rgba(30,26,16,.1)",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: "fit-content",
                          justifySelf: "center",
                          padding: "2px 6px",
                          borderRadius: 4,
                          background: "rgba(176,120,69,.14)",
                          fontFamily: font.sans,
                          fontSize: 9,
                          fontWeight: 700,
                          letterSpacing: ".08em",
                          textTransform: "uppercase",
                          color: T.amber,
                        }}
                      >
                        Key points
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
        ))}
      </div>
    </Section>
  );
}
