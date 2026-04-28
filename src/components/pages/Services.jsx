import { useEffect, useRef, useState } from "react";
import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Section, Reveal } from "../shared";
import { SERVICES } from "../../constants/data/services";
import { FiActivity, FiCompass, FiCpu, FiSettings, FiShield, FiUsers } from "react-icons/fi";

export function Services() {
  const { isMobile, isTablet, isSmallMobile, isLargeDesktop } = useViewport();
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
  const lastPointerTypeRef = useRef("mouse");

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

  const isTouchLikePointer = (pointerType) => pointerType === "touch" || pointerType === "pen";

  const toggleCardForTouch = (index, forceToggle = false) => {
    if (supportsHoverFlip && !forceToggle) return;
    setActiveCardIndex((current) => (current === index ? null : index));
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
              What We Do
            </p>
            <h2
              style={{
                margin: "0 auto",
                fontFamily: font.serif,
                fontWeight: 500,
                lineHeight: 1.08,
                letterSpacing: "-.02em",
                color: "#0a0805",
                fontSize: isSmallMobile ? 28 : isMobile ? 34 : isTablet ? 40 : isLargeDesktop ? 64 : 50,
                whiteSpace: "normal",
                maxWidth: isSmallMobile ? "100%" : 1060,
                overflowWrap: "anywhere",
              }}
            >
              Six Ways We Turn AI Ambition Into Production Reality.
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
                fontSize: isSmallMobile ? 13 : isMobile ? 14 : isLargeDesktop ? 17 : 15,
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
                  onPointerDown={(event) => {
                    lastPointerTypeRef.current = event.pointerType || "mouse";
                  }}
                  onMouseEnter={() => {
                    if (!supportsHoverFlip) return;
                    setActiveCardIndex(index);
                  }}
                  onMouseLeave={() => {
                    if (!supportsHoverFlip) return;
                    setActiveCardIndex((current) => (current === index ? null : current));
                  }}
                  onFocus={() => {
                    if (!supportsHoverFlip || isTouchLikePointer(lastPointerTypeRef.current)) return;
                    setActiveCardIndex(index);
                  }}
                  onBlur={() => {
                    if (!supportsHoverFlip || isTouchLikePointer(lastPointerTypeRef.current)) return;
                    setActiveCardIndex((current) => (current === index ? null : current));
                  }}
                  onClick={() => {
                    const isTouchLikeInteraction = isTouchLikePointer(lastPointerTypeRef.current);
                    toggleCardForTouch(index, isTouchLikeInteraction);
                  }}
                  onKeyDown={(event) => {
                    if (event.target !== event.currentTarget) return;
                    if (event.key !== "Enter" && event.key !== " ") return;
                    event.preventDefault();
                    lastPointerTypeRef.current = "keyboard";
                    setActiveCardIndex((current) => (current === index ? null : index));
                  }}
                  tabIndex={0}
                  aria-pressed={isFlipped}
                  aria-label={`${card.name} service card`}
                  style={{
                    position: "relative",
                    width: "100%",
                    minHeight: isSmallMobile ? 238 : isMobile ? 232 : isTablet ? 248 : 268,
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
                      padding: isSmallMobile ? "16px 14px 42px" : isMobile ? "16px 14px 40px" : "18px 16px 42px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: isSmallMobile ? 11 : 12,
                      transform: "rotateY(0deg) translateZ(1px)",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      boxShadow: "0 8px 18px rgba(30,26,16,.08)",
                    }}
                  >
                    <span
                      style={{
                        width: isSmallMobile ? 46 : isMobile ? 46 : isTablet ? 52 : 56,
                        height: isSmallMobile ? 46 : isMobile ? 46 : isTablet ? 52 : 56,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: T.amber,
                        marginBottom: isSmallMobile ? 1 : 2,
                      }}
                    >
                      <ServiceTopicIcon size={isSmallMobile ? 28 : isMobile ? 28 : isTablet ? 31 : 34} />
                    </span>

                    <h3
                      style={{
                        margin: 0,
                        fontFamily: font.serif,
                        fontWeight: 600,
                        color: T.ink,
                        fontSize: isSmallMobile ? 22 : isMobile ? 22 : isTablet ? 19 : isLargeDesktop ? 24 : 20,
                        lineHeight: 1.18,
                        letterSpacing: "-.01em",
                        width: "100%",
                        maxWidth: "100%",
                        minHeight: allowTwoLineTitle
                          ? (isSmallMobile ? 54 : isMobile ? 54 : isTablet ? 50 : 54)
                          : (isSmallMobile ? 46 : isMobile ? 46 : isTablet ? 40 : 44),
                        whiteSpace: "normal",
                        display: "block",
                        overflowWrap: "anywhere",
                      }}
                    >
                      {card.name}
                    </h3>

                    {card.desc && (
                      <p
                        style={{
                          margin: 0,
                          width: "100%",
                          fontFamily: font.sans,
                          fontSize: isSmallMobile ? 15.5 : isMobile ? 15.5 : 13,
                          fontWeight: 500,
                          lineHeight: 1.55,
                          letterSpacing: "0.01em",
                          color: "rgba(30,26,16,.82)",
                          minHeight: isSmallMobile ? 86 : isMobile ? 84 : 72,
                          overflowWrap: "anywhere",
                          marginTop: 2,
                        }}
                      >
                        {card.desc}
                      </p>
                    )}

                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        setActiveCardIndex(index);
                      }}
                      onKeyDown={(event) => {
                        event.stopPropagation();
                      }}
                      aria-label={`Learn more about ${card.name}`}
                      style={{
                        position: "absolute",
                        right: isSmallMobile ? 10 : 12,
                        bottom: isSmallMobile ? 10 : 12,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        padding: isSmallMobile ? "5px 10px" : "6px 11px",
                        borderRadius: 999,
                        border: "1px solid rgba(176,120,69,.36)",
                        background: "linear-gradient(180deg, rgba(176,120,69,.14) 0%, rgba(176,120,69,.08) 100%)",
                        color: "rgba(30,26,16,.86)",
                        fontFamily: font.sans,
                        fontSize: isSmallMobile ? 10 : 11,
                        fontWeight: 700,
                        letterSpacing: ".05em",
                        textTransform: "uppercase",
                        cursor: "pointer",
                        zIndex: 2,
                      }}
                    >
                      Learn more
                      <span aria-hidden="true" style={{ fontSize: 11, lineHeight: 1 }}>
                        ↗
                      </span>
                    </button>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      border: "1px solid rgba(30,26,16,.24)",
                      background:
                        "linear-gradient(180deg, rgba(30,26,16,.94) 0%, rgba(40,35,24,.92) 100%)",
                      borderRadius: 14,
                      padding: isSmallMobile ? "15px 13px 36px" : isMobile ? "16px 14px 38px" : "18px 16px 40px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: isSmallMobile ? 8 : 9,
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      boxShadow: "0 10px 22px rgba(0,0,0,.3)",
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
                        fontSize: isSmallMobile ? 18 : isMobile ? 19 : isTablet ? 20 : isLargeDesktop ? 26 : 22,
                        lineHeight: 1.12,
                        letterSpacing: "-.01em",
                        width: "100%",
                        maxWidth: "100%",
                        whiteSpace: "normal",
                        overflowWrap: "anywhere",
                        display: "none",
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
                        width: "100%",
                      }}
                    >
                      {highlights.map((item) => (
                        <li
                          key={`${card.name}-${item}`}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 8,
                            color: "rgba(255,255,255,.88)",
                            fontFamily: font.sans,
                            fontSize: isSmallMobile ? 13 : 14,
                            lineHeight: 1.52,
                          }}
                        >
                          <span aria-hidden="true" style={{ color: T.amber, fontSize: 14 }}>
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

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