import { T, font } from "../../constants/designTokens";
import { Em } from "./Typography";
import { useViewport } from "../../hooks/useViewport";

export const SecHeader = ({ pill, title, desc, light, pillSize, pillColor }) => {
  const { isMobile, isSmallMobile } = useViewport();
  return (
    <div style={{ marginBottom: 32, textAlign: "center" }}>
      <span
        style={{
          display: "inline-block",
          padding: "6px 12px",
          borderRadius: 100,
          background: light ? "rgba(255,255,255,.18)" : T.ink07,
          fontSize: pillSize ?? 11,
          fontWeight: 600,
          color: pillColor ?? (light ? T.w60 : T.ink60),
          letterSpacing: ".08em",
          textTransform: "uppercase",
          fontFamily: font.sans,
          marginBottom: 16,
        }}
      >
        {pill}
      </span>
      <h2
        style={{
          fontFamily: font.serif,
          fontSize: "clamp(28px, 3.5vw, 46px)",
          fontWeight: 700,
          lineHeight: 1.12,
          letterSpacing: "-.02em",
          color: light ? T.w : T.ink,
          margin: "0 0 16px",
        }}
      >
        {title}
      </h2>
      <p
        style={{
          fontFamily: font.sans,
          fontSize: isSmallMobile ? 13 : isMobile ? 14 : 15,
          lineHeight: 1.75,
          color: light ? T.w60 : T.ink60,
          maxWidth: 840,
          margin: "0 auto",
        }}
      >
        {desc}
      </p>
    </div>
  );
};
