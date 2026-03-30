import { T, font } from "../../constants/designTokens";

export const Pill = ({ children, dark }) => (
  <span
    style={{
      display: "inline-block",
      padding: "6px 12px",
      borderRadius: 100,
      background: dark ? T.ink12 : T.ink07,
      fontSize: 11,
      fontWeight: 600,
      color: dark ? T.ink : T.ink60,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      fontFamily: font.sans,
      marginBottom: 16,
    }}
  >
    {children}
  </span>
);

export const H1 = ({ children }) => (
  <h1
    style={{
      fontFamily: font.serif,
      fontSize: "clamp(42px, 5vw, 72px)",
      fontWeight: 700,
      lineHeight: 1.08,
      letterSpacing: "-.02em",
      color: T.ink,
      margin: "16px 0 24px",
    }}
  >
    {children}
  </h1>
);

export const H2 = ({ children, light }) => (
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
    {children}
  </h2>
);

export const Em = ({ children, light }) => (
  <span
    style={{
      color: light ? T.amber : T.amber,
      fontStyle: "italic",
      fontWeight: 700,
    }}
  >
    {children}
  </span>
);
