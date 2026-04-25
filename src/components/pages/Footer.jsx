import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import companyLogo from "../../assets/logo-optimized.webp";

export function Footer() {
  const { width, isMobile, isTablet, isSmallMobile } = useViewport();
  const useNarrowTabletGrid = isTablet && !isMobile && width < 900;

  const serviceLinks = [
    ["Custom Agents", "#services"],
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

  const officeAddress =
    "Elnet Software City, TS 140 Block 2 & 9, Rajiv Gandhi Salai, Tharamani, Chennai, TN-600113";
  const officeMapLink =
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`;

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
                display: "inline-flex",
                alignItems: "center",
                gap: isSmallMobile ? 8 : 10,
              }}
            >
              <img
                src={companyLogo}
                alt="Heuristic Labs logo"
                style={{
                  width: isSmallMobile ? 34 : 40,
                  height: isSmallMobile ? 34 : 40,
                  objectFit: "contain",
                  filter: "brightness(0.78)",
                  display: "block",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: font.serif,
                  fontSize: isSmallMobile ? 20 : 22,
                  fontWeight: 600,
                  color: T.w,
                  letterSpacing: ".01em",
                }}
              >
                Heuristic Labs
              </span>
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
            <p style={{ margin: "0 0 12px", fontSize: 13, color: "rgba(255,255,255,.56)" }}>
              www.HeuristicLabs.ai
            </p>
            <a
              href={officeMapLink}
              target="_blank"
              rel="noreferrer"
              aria-label="Open office location in Google Maps"
              style={{
                margin: "0 0 4px",
                fontSize: 13,
                lineHeight: 1.5,
                color: "rgba(255,255,255,.56)",
                maxWidth: 300,
                display: "flex",
                alignItems: "flex-start",
                gap: 6,
                textDecoration: "none",
              }}
            >
              <span
                aria-hidden="true"
                style={{ display: "inline-flex", marginTop: 2, flexShrink: 0 }}
              >
                <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                  <path d="M12 2a7 7 0 0 0-7 7c0 5.3 5.9 11.7 6.2 12a1 1 0 0 0 1.5 0c.3-.3 6.3-6.7 6.3-12a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
                </svg>
              </span>
              <span>
                {officeAddress}
              </span>
            </a>
            <p style={{ margin: 0, marginLeft: 18, fontSize: 13, color: "rgba(255,255,255,.56)" }}>
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
