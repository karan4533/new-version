import { useEffect, useState } from "react";
import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Section } from "../shared";
import { Reveal } from "../shared";
import { SERVICES } from "../../constants/data/services";

export function Services() {
  const { isMobile, isTablet, isSmallMobile } = useViewport();
  const servicesTopPadding = isSmallMobile ? "10px" : isMobile ? "14px" : "20px";
  const [hasHoverInput, setHasHoverInput] = useState(false);
  const interactiveCardsEnabled = hasHoverInput;
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
    if (interactiveCardsEnabled) return;
    setActiveCardIndex((current) => (current === index ? null : index));
  };

  return (
    <Section id="services" paddingTop={servicesTopPadding}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isTablet ? "1fr" : "minmax(0,.9fr) minmax(0,1.1fr)",
          gap: isSmallMobile ? 14 : isMobile ? 24 : isTablet ? 64 : 90,
          alignItems: "start",
          marginBottom: isSmallMobile ? 28 : isMobile ? 36 : 46,
        }}
      >
        <Reveal distance={18} blurFrom={10} style={{ minWidth: 0 }}>
          <div style={{ minWidth: 0 }}>
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
                margin: 0,
                fontFamily: font.serif,
                fontWeight: 500,
                lineHeight: 1.02,
                letterSpacing: "-.02em",
                color: T.ink,
                fontSize: isSmallMobile ? 46 : isMobile ? 52 : 62,
                maxWidth: 640,
              }}
            >
              <span style={{ display: "block", whiteSpace: isTablet ? "normal" : "nowrap" }}>
                Six ways we turn
              </span>
              <span style={{ display: "block", whiteSpace: isTablet ? "normal" : "nowrap" }}>
                AI ambition into
              </span>
              <span style={{ display: "block", whiteSpace: isTablet ? "normal" : "nowrap" }}>
                production reality.
              </span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.08} distance={16} blurFrom={8} style={{ minWidth: 0 }}>
          <div
            style={{
              minWidth: 0,
              paddingLeft: isTablet ? 0 : 8,
              paddingTop: isTablet ? 0 : 74,
            }}
          >
            <p
              style={{
                margin: 0,
                maxWidth: 520,
                fontFamily: font.sans,
                fontSize: isSmallMobile ? 12 : 13,
                lineHeight: 1.58,
                color: T.ink60,
                overflowWrap: "anywhere",
              }}
            >
              Most enterprises have a strategy. Few have systems that run in production.
              We bridge that gap as your on-demand Applied AI Lab. Every engagement starts
              with business outcomes, not technology.
              <br />
              <br />
              We scope, validate, build, and ship, typically in 4 to 16 weeks depending on
              complexity. No hand-waving. No slide decks that never ship.
            </p>
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
              const technicalTagLine = (card.technicalTags || []).join(" | ").toUpperCase();
              const seoTagLine = (card.seoTags || []).join(" | ").toUpperCase();

              return (
                <div style={{ perspective: "2200px", height: "100%" }}>
                  <article
                    onMouseEnter={() => {
                      if (!interactiveCardsEnabled) return;
                      setActiveCardIndex(index);
                    }}
                    onMouseLeave={() => {
                      if (interactiveCardsEnabled) {
                        setActiveCardIndex(null);
                      }
                    }}
                    onFocus={() => {
                      if (!interactiveCardsEnabled) return;
                      setActiveCardIndex(index);
                    }}
                    onBlur={() => {
                      if (!interactiveCardsEnabled) return;
                      setActiveCardIndex((current) => (current === index ? null : current));
                    }}
                    onClick={() => toggleCardForTouch(index)}
                    onKeyDown={(event) => {
                      if (event.key !== "Enter" && event.key !== " ") return;
                      event.preventDefault();

                      if (interactiveCardsEnabled) {
                        setActiveCardIndex(index);
                        return;
                      }

                      toggleCardForTouch(index);
                    }}
                    tabIndex={0}
                    aria-pressed={isFlipped}
                    aria-label={`${card.name} service card`}
                    style={{
                      position: "relative",
                      minHeight: isSmallMobile ? 254 : 296,
                      height: "100%",
                      transformStyle: "preserve-3d",
                      transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                      transition: "transform .34s ease",
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
                        padding: isSmallMobile ? "13px" : "15px 15px 13px",
                        display: "grid",
                        alignContent: "start",
                        gap: 8,
                        backfaceVisibility: "hidden",
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
                      <span
                        style={{
                          display: "inline-block",
                          width: "fit-content",
                          padding: "2px 5px",
                          borderRadius: 3,
                          background: "rgba(176,120,69,.09)",
                          fontFamily: font.sans,
                          fontSize: 9,
                          letterSpacing: ".06em",
                          textTransform: "uppercase",
                          color: "rgba(30,26,16,.48)",
                        }}
                      >
                        {`Timeline: ${card.timeline}`}
                      </span>
                      <h3
                        style={{
                          margin: 0,
                          fontFamily: font.serif,
                          fontWeight: 600,
                          color: T.ink,
                          fontSize: isSmallMobile ? 19 : 21,
                          lineHeight: 1.1,
                          letterSpacing: "-.01em",
                          maxWidth: 220,
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
                          lineHeight: 1.45,
                          minHeight: isSmallMobile ? 54 : 58,
                        }}
                      >
                        {card.desc}
                      </p>

                      {(technicalTagLine || seoTagLine) && (
                        <div
                          style={{
                            display: "grid",
                            gap: 5,
                            marginTop: isSmallMobile ? 6 : 8,
                          }}
                        >
                          {!!technicalTagLine && (
                            <span
                              style={{
                                display: "inline-block",
                                width: "fit-content",
                                maxWidth: "100%",
                                border: "1px solid rgba(176,120,69,.34)",
                                borderRadius: 6,
                                padding: "3px 8px",
                                fontFamily: font.sans,
                                fontSize: isSmallMobile ? 7 : 8,
                                fontWeight: 700,
                                letterSpacing: ".06em",
                                lineHeight: 1.4,
                                textTransform: "uppercase",
                                color: "rgba(30,26,16,.78)",
                                background:
                                  "linear-gradient(180deg, rgba(176,120,69,.15) 0%, rgba(176,120,69,.08) 100%)",
                                boxShadow: "inset 0 1px 0 rgba(255,255,255,.45)",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                              title={technicalTagLine}
                            >
                              {technicalTagLine}
                            </span>
                          )}

                          {!!seoTagLine && (
                            <span
                              style={{
                                display: "inline-block",
                                width: "fit-content",
                                maxWidth: "100%",
                                border: "1px solid rgba(176,120,69,.34)",
                                borderRadius: 6,
                                padding: "3px 8px",
                                fontFamily: font.sans,
                                fontSize: isSmallMobile ? 7 : 8,
                                fontWeight: 700,
                                letterSpacing: ".06em",
                                lineHeight: 1.4,
                                textTransform: "uppercase",
                                color: "rgba(30,26,16,.78)",
                                background:
                                  "linear-gradient(180deg, rgba(176,120,69,.15) 0%, rgba(176,120,69,.08) 100%)",
                                boxShadow: "inset 0 1px 0 rgba(255,255,255,.45)",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                              title={seoTagLine}
                            >
                              {seoTagLine}
                            </span>
                          )}
                        </div>
                      )}

                    </div>

                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        border: "1px solid rgba(30,26,16,.16)",
                        background:
                          "linear-gradient(180deg, rgba(247,242,232,.98) 0%, rgba(239,231,216,.98) 100%)",
                        borderRadius: 14,
                        padding: isSmallMobile ? "13px" : "15px 15px 13px",
                        display: "grid",
                        alignContent: "center",
                        gap: 9,
                        transform: "rotateY(180deg)",
                        backfaceVisibility: "hidden",
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
                          gap: 6,
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
                              lineHeight: 1.4,
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
