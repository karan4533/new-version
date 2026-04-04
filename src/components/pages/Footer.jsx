import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";

export function Footer() {
  const { width, isMobile, isTablet, isSmallMobile } = useViewport();
  const useNarrowTabletGrid = isTablet && !isMobile && width < 900;

  const serviceLinks = [
    ["Custom AI Solutions", "#services"],
    ["GenAI for Industry", "#services"],
    ["AI Governance", "#services"],
    ["AI Strategy", "#services"],
    ["R&D as a Service", "#services"],
  ];

  const companyLinks = [
    ["About", "#about"],
    ["Case Studies", "#case-studies"],
    ["Team", "#team"],
    ["Contact", "#contact"],
  ];

  const industryLinks = [
    ["Manufacturing", "#industry-footprint"],
    ["Legal Tech", "#industry-footprint"],
    ["Healthcare", "#industry-footprint"],
    ["E-Commerce", "#industry-footprint"],
    ["Enterprise", "#industry-footprint"],
  ];

  const columnHeading = {
    margin: "0 0 14px",
    fontFamily: font.sans,
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: ".11em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,.42)",
  };

  const linkStyle = {
    color: "rgba(255,255,255,.6)",
    textDecoration: "none",
    fontFamily: font.sans,
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1.5,
    display: "inline-block",
    transition: "color .2s, transform .2s",
  };

  return (
    <footer
      id="footer"
      style={{
        position: "relative",
        background: T.footer,
        color: T.w,
        padding: isSmallMobile
          ? "40px 16px 28px"
          : isMobile
            ? "52px 24px 30px"
            : isTablet
              ? "58px 32px 34px"
              : "64px 48px 40px",
        fontFamily: font.sans,
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : useNarrowTabletGrid
                ? "repeat(2,minmax(0,1fr))"
              : isTablet
                ? "1.35fr 1fr 1fr"
                : "1.6fr 1fr 1fr 1fr",
            gap: isSmallMobile ? 20 : isMobile ? 28 : 48,
            borderBottom: "1px solid rgba(255,255,255,.14)",
            paddingBottom: isSmallMobile ? 30 : 48,
          }}
        >
          <div>
            <div
              style={{
                margin: "0 0 10px",
                fontFamily: font.serif,
                fontSize: isSmallMobile ? 20 : 22,
                fontWeight: 600,
                color: T.w,
                letterSpacing: ".01em",
              }}
            >
              Heuristic Labs
            </div>
            <p
              style={{
                margin: "0 0 10px",
                fontFamily: font.sans,
                fontSize: 13,
                lineHeight: 1.72,
                color: "rgba(255,255,255,.4)",
                maxWidth: 300,
              }}
            >
              Applied AI Lab for GenAI Transformation
            </p>

            <p style={{ margin: "0 0 4px", fontSize: 13, color: "rgba(255,255,255,.56)" }}>
              +91 97399 86763
            </p>
            <p style={{ margin: "0 0 4px", fontSize: 13, color: "rgba(255,255,255,.56)" }}>
              www.HeuristicLabs.ai
            </p>
            <p style={{ margin: 0, fontSize: 13, color: "rgba(255,255,255,.56)" }}>
              Chennai, India
            </p>
          </div>

          <div style={{ padding: "4px 0" }}>
            <p style={columnHeading}>Services</p>
            <div style={{ display: "grid", gap: 10 }}>
              {serviceLinks.map(([label, href]) => (
                <a key={label} href={href} style={linkStyle}>
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div style={{ padding: "4px 0" }}>
            <p style={columnHeading}>Company</p>
            <div style={{ display: "grid", gap: 10 }}>
              {companyLinks.map(([label, href]) => (
                <a key={label} href={href} style={linkStyle}>
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div style={{ padding: "4px 0" }}>
            <p style={columnHeading}>Industries</p>
            <div style={{ display: "grid", gap: 10 }}>
              {industryLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  style={linkStyle}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            paddingTop: isSmallMobile ? 20 : 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 8 : 0,
            color: "rgba(255,255,255,.22)",
            fontFamily: font.sans,
            fontSize: isSmallMobile ? 11 : 12,
          }}
        >
          <span>© 2026 Heuristic Labs. All rights reserved.</span>
    
        </div>
      </div>
    </footer>
  );
}
