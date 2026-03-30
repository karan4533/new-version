import { T } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";

export const Section = ({ children, bg, id }) => {
  const { isSmallMobile, isMobile, isTablet } = useViewport();
  return (
    <section
      id={id}
      style={{
        background: bg || T.bg,
        scrollMarginTop: isSmallMobile ? 52 : isMobile ? 56 : 60,
        padding: isSmallMobile ? "40px 0" : isMobile ? "48px 0" : "56px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: `0 ${isSmallMobile ? 16 : isMobile ? 24 : isTablet ? 36 : 48}px`,
        }}
      >
        {children}
      </div>
    </section>
  );
};
