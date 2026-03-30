import { useState, useEffect } from "react";

export function useViewport() {
  const [state, setState] = useState({
    width: window.innerWidth,
    isMobile: window.innerWidth < 768,
    isTablet: window.innerWidth < 1024,
    isSmallMobile: window.innerWidth < 480,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setState({
        width,
        isSmallMobile: width < 480,
        isMobile: width < 768,
        isTablet: width < 1024,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return state;
}
