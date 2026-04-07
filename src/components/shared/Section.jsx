import { T } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";

export const Section = ({ children, bg, id, paddingTop, paddingBottom, minHeight }) => {
  const { isSmallMobile, isMobile, isTablet } = useViewport();
  const defaultSectionPadding = isSmallMobile ? "40px" : isMobile ? "48px" : "56px";

  return (
    <section
      id={id}
      style={{
        width: "100%",
        maxWidth: "100%",
        background: bg || T.bg,
        minHeight: minHeight || "auto",
        scrollMarginTop: isSmallMobile ? 52 : isMobile ? 56 : 60,
        paddingTop: paddingTop || defaultSectionPadding,
        paddingBottom: paddingBottom || defaultSectionPadding,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1160,
          minWidth: 0,
          margin: "0 auto",
          padding: `0 ${isSmallMobile ? 16 : isMobile ? 24 : isTablet ? 36 : 48}px`,
        }}
      >
        {children}
      </div>
    </section>
  );
};
