import { T, S } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";

export const Section = ({ children, bg, id, paddingTop, paddingBottom, minHeight }) => {
  const { isSmallMobile, isMobile, isTablet } = useViewport();
  const defaultSectionPadding = isSmallMobile ? `${S.xl}px` : isMobile ? `${S.xxl}px` : `${S.xxl + S.sm}px`;
  const sidePadding = isSmallMobile ? S.md : isMobile ? S.lg : isTablet ? S.xl : S.xxl;

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
          maxWidth: 1200,
          minWidth: 0,
          margin: "0 auto",
          padding: `0 ${sidePadding}px`,
        }}
      >
        {children}
      </div>
    </section>
  );
};
