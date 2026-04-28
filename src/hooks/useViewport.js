import { useState, useEffect } from "react";

const buildViewportState = (width) => ({
  width,
  isUltraMobile: width < 300,
  isSmallMobile: width < 480,
  isMobile: width < 768,
  isTablet: width < 1025,
  isDesktop: width >= 1025,
  isLargeDesktop: width >= 1440,
});

const getViewportWidth = () => {
  if (typeof window === "undefined") return 1024;

  const viewportWidth = window.visualViewport?.width;
  const width = Number.isFinite(viewportWidth) ? viewportWidth : window.innerWidth;

  return Math.round(width);
};

export function useViewport() {
  const [state, setState] = useState(() => buildViewportState(getViewportWidth()));

  useEffect(() => {
    let frameId = null;

    const updateViewport = () => {
      const width = getViewportWidth();

      setState((current) => {
        if (current.width === width) return current;
        return buildViewportState(width);
      });
    };

    const scheduleUpdate = () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        updateViewport();
      });
    };

    // Sync once at mount and once shortly after for mobile viewport settling.
    scheduleUpdate();
    const delayedSyncId = window.setTimeout(scheduleUpdate, 120);

    window.addEventListener("resize", scheduleUpdate, { passive: true });
    window.addEventListener("orientationchange", scheduleUpdate, { passive: true });
    window.addEventListener("pageshow", scheduleUpdate, { passive: true });

    const visualViewport = window.visualViewport;
    if (visualViewport) {
      visualViewport.addEventListener("resize", scheduleUpdate, { passive: true });
    }

    document.fonts?.ready
      ?.then(() => scheduleUpdate())
      .catch(() => {
        // Ignore font-loading failures; viewport sync still happens via events.
      });

    return () => {
      window.clearTimeout(delayedSyncId);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("orientationchange", scheduleUpdate);
      window.removeEventListener("pageshow", scheduleUpdate);

      if (visualViewport) {
        visualViewport.removeEventListener("resize", scheduleUpdate);
      }
    };
  }, []);

  return state;
}
