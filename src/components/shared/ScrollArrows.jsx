import { useEffect, useState } from "react";
import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";

const SECTION_ORDER = [
  "home",
  "about",
  "services",
  "case-studies",
  "team",
  "research-updates",
  "faq",
  "contact",
  "footer",
];

export function ScrollArrows() {
  const { isMobile, isSmallMobile } = useViewport();
  const [scrollState, setScrollState] = useState({
    hasScrollablePage: false,
    nextDirection: "down",
  });

  const getOrderedTargets = () =>
    SECTION_ORDER.map((id) => document.getElementById(id))
      .filter(Boolean)
      .map((element) => ({
        element,
        top: element.getBoundingClientRect().top + window.scrollY,
      }))
      .sort((a, b) => a.top - b.top);

  useEffect(() => {
    const getScrollMetrics = () => {
      const scroller = document.scrollingElement || document.documentElement;
      const top = scroller ? scroller.scrollTop : window.scrollY || 0;
      const maxScroll = scroller
        ? Math.max(scroller.scrollHeight - scroller.clientHeight, 0)
        : Math.max(document.documentElement.scrollHeight - window.innerHeight, 0);
      return { top, maxScroll };
    };

    const updateScrollState = () => {
      const { top, maxScroll } = getScrollMetrics();
      const bottomThreshold = 56;
      const isNearBottom = maxScroll - top <= bottomThreshold;
      const nextDirection = isNearBottom ? "up" : "down";

      setScrollState({
        hasScrollablePage: maxScroll > bottomThreshold,
        nextDirection,
      });
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  if (!scrollState.hasScrollablePage) return null;

  const handleScroll = () => {
    if (scrollState.nextDirection === "up") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const currentTop = (document.scrollingElement || document.documentElement).scrollTop;
    const sectionAdvanceOffset = isSmallMobile ? 90 : isMobile ? 98 : 112;
    const nextTarget = getOrderedTargets().find(
      (target) => target.top > currentTop + sectionAdvanceOffset,
    );

    if (nextTarget) {
      nextTarget.element.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
  };

  const controlSize = isSmallMobile ? 44 : isMobile ? 46 : 50;

  const buttonStyle = {
    width: controlSize,
    height: controlSize,
    borderRadius: 999,
    border: "1px solid rgba(30,26,16,.2)",
    background: "rgba(255,255,255,.9)",
    color: T.ink,
    cursor: "pointer",
    fontFamily: font.sans,
    fontSize: isSmallMobile ? 17 : 19,
    fontWeight: 700,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 14px 26px rgba(18,14,8,.2)",
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
    transition: "all .2s ease",
  };

  return (
    <div
      style={{
        position: "fixed",
        right: isSmallMobile ? 12 : isMobile ? 14 : 22,
        bottom: isSmallMobile ? 14 : isMobile ? 18 : 22,
        zIndex: 260,
      }}
    >
      <button
        type="button"
        aria-label={scrollState.nextDirection === "up" ? "Scroll to top" : "Scroll down"}
        onClick={handleScroll}
        style={buttonStyle}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d={
              scrollState.nextDirection === "up"
                ? "M3.5 9.5L8 5L12.5 9.5"
                : "M3.5 6.5L8 11L12.5 6.5"
            }
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
