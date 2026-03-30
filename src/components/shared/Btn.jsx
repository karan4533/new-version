import { T, font } from "../../constants/designTokens";

export const Btn = ({ children, dark, onClick, href, style }) => {
  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "9px 20px",
    borderRadius: 100,
    background: dark ? T.ink : undefined,
    color: dark ? T.w : T.ink,
    border: dark ? "none" : `1.5px solid ${T.ink12}`,
    fontSize: 14,
    fontWeight: 600,
    fontFamily: font.sans,
    cursor: "pointer",
    transition: ".2s",
    textDecoration: "none",
    ...style,
  };

  if (href) {
    return (
      <a href={href} style={baseStyle}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} style={baseStyle}>
      {children}
    </button>
  );
};
