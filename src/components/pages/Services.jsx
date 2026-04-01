import { useState } from "react";
import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Section } from "../shared";
import { Reveal } from "../shared";
import { SERVICES } from "../../constants/data/services";

export function Services() {
  const { isMobile, isTablet, isSmallMobile } = useViewport();
  const interactiveCardsEnabled = !isMobile;
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  const toggleCardForTouch = (index) => {
    if (interactiveCardsEnabled) return;
    setActiveCardIndex((current) => (current === index ? null : index));
  };

  return (
    <Section id="services">
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

              return (
                <div style={{ perspective: "1200px", height: "100%" }}>
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
                    tabIndex={interactiveCardsEnabled ? 0 : -1}
                    aria-label={`${card.name} service card`}
                    style={{
                      position: "relative",
                      minHeight: isSmallMobile ? 246 : 286,
                      height: "100%",
                      transformStyle: "preserve-3d",
                      transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                      transition: "transform .55s cubic-bezier(0.22,1,0.36,1)",
                      outline: "none",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        border: `1px solid ${T.ink12}`,
                        background: "rgba(255,255,255,.74)",
                        borderRadius: 10,
                        padding: isSmallMobile ? "12px" : "14px 14px 12px",
                        display: "grid",
                        alignContent: "start",
                        gap: 7,
                        backfaceVisibility: "hidden",
                        boxShadow: "0 4px 12px rgba(30,26,16,.05)",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: font.serif,
                          fontSize: isSmallMobile ? 44 : 46,
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
                          fontSize: 8,
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
                          fontSize: isSmallMobile ? 18 : 19,
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
                          fontSize: isSmallMobile ? 11 : 12,
                          lineHeight: 1.45,
                          minHeight: isSmallMobile ? 48 : 52,
                        }}
                      >
                        {card.desc}
                      </p>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          flexWrap: "wrap",
                          gap: 5,
                          marginTop: 2,
                        }}
                      >
                        {[card.technicalTags.join(" | "), card.seoTags.join(" | ")].map((chip) => (
                          <span
                            key={`${card.name}-${chip}`}
                            style={{
                              display: "inline-block",
                              border: `1px solid ${T.ink12}`,
                              borderRadius: 3,
                              padding: "1px 5px",
                              fontFamily: font.sans,
                              fontSize: 7,
                              fontWeight: 600,
                              color: T.ink40,
                              letterSpacing: ".04em",
                              textTransform: "uppercase",
                              background: "rgba(255,255,255,.7)",
                            }}
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        border: "1px solid rgba(176,120,69,.52)",
                        background:
                          "linear-gradient(180deg, rgba(139,106,32,.96) 0%, rgba(122,92,22,.96) 100%)",
                        borderRadius: 10,
                        padding: isSmallMobile ? "12px" : "14px 14px 12px",
                        display: "grid",
                        alignContent: "start",
                        gap: 8,
                        transform: "rotateY(180deg)",
                        backfaceVisibility: "hidden",
                        boxShadow: "0 18px 34px rgba(30,26,16,.16)",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: "fit-content",
                          padding: "2px 6px",
                          borderRadius: 4,
                          background: "rgba(255,255,255,.16)",
                          fontFamily: font.sans,
                          fontSize: 8,
                          fontWeight: 700,
                          letterSpacing: ".08em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,.88)",
                        }}
                      >
                        Key points
                      </span>
                      <h3
                        style={{
                          margin: 0,
                          fontFamily: font.serif,
                          fontWeight: 600,
                          color: "#fffdf8",
                          fontSize: isSmallMobile ? 18 : 19,
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
                              color: "rgba(255,255,255,.95)",
                              fontFamily: font.sans,
                              fontSize: 11,
                              lineHeight: 1.4,
                            }}
                          >
                            <span
                              aria-hidden="true"
                              style={{ color: "rgba(255,224,149,.96)", fontSize: 13 }}
                            >
                              +
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
