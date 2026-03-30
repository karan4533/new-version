import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { SERVICES } from "../../constants/data/services";

export function Footer() {
  const { isMobile, isTablet, isSmallMobile } = useViewport();

  const navigateLinks = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Service", "#services"],
    ["Case Studies", "#case-studies"],
    ["Research Updates", "#research-updates"],
    ["Contact", "#contact"],
  ];

  const serviceLinks = SERVICES.map((service) => [service.name, "#services"]);

  const connectLinks = [
    ["Talk to us", "#contact"],
    ["Email Us", "mailto:connect@heuristiclabs.ai"],
    ["LinkedIn", "https://www.linkedin.com/company/heuristic-labs-ai/posts/?feedView=all"],
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
                margin: 0,
                fontFamily: font.sans,
                fontSize: 13,
                lineHeight: 1.72,
                color: "rgba(255,255,255,.4)",
                maxWidth: 300,
              }}
            >
              Your Applied AI Lab - turning AI ambition into secure, scalable, production-ready systems.
              Unlocking value in weeks.
            </p>
          </div>

          <div style={{ padding: "4px 0" }}>
            <p style={columnHeading}>Navigate</p>
            <div style={{ display: "grid", gap: 10 }}>
              {navigateLinks.map(([label, href]) => (
                <a key={label} href={href} style={linkStyle}>
                  {label}
                </a>
              ))}
            </div>
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
            <p style={columnHeading}>Connect</p>
            <div style={{ display: "grid", gap: 10 }}>
              {connectLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
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
          <span>© 2026 Heuristic Labs (Frux Consulting LLP). All rights reserved.</span>
          <span>www.heuristiclabs.ai</span>
        </div>
      </div>
    </footer>
  );
}
