import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import companyLogo from "../../assets/logo-optimized.webp";

export function Footer({
  onServicesClick,
  onAboutClick,
  onCaseStudiesClick,
  onTeamClick,
  onContactClick,
  onIndustryClick,
}) {
  const { width, isMobile, isTablet, isSmallMobile } = useViewport();
  const useNarrowTabletGrid = isTablet && !isMobile && width < 900;

  const serviceLinks = [
    ["Custom Agents", "#services", onServicesClick],
    ["Data and AI Governance", "#services", onServicesClick],
    ["AI Strategic Consulting", "#services", onServicesClick],
    ["Applied R&D as a Service", "#services", onServicesClick],
    ["Industrial Automation", "#services", onServicesClick],
    ["AI CoE Enablement", "#services", onServicesClick],
  ];

  const companyLinks = [
    ["About", "#about", onAboutClick],
    ["Case Studies", "#case-studies", onCaseStudiesClick],
    ["Team", "#team", onTeamClick],
    ["Contact", "#contact", onContactClick],
  ];

  const industryLinks = [
    ["Manufacturing", "#industry-footprint", onIndustryClick],
    ["Legal Tech", "#industry-footprint", onIndustryClick],
    ["Healthcare", "#industry-footprint", onIndustryClick],
    ["E-Commerce", "#industry-footprint", onIndustryClick],
    ["Enterprise", "#industry-footprint", onIndustryClick],
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

  const handleSectionNavigate = (event, onClickHandler) => {
    if (!onClickHandler) return;
    event.preventDefault();
    onClickHandler();
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
                  filter: "brightness(0) saturate(100%) invert(1)",
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

            <a
              href="tel:+919739986763"
              aria-label="Call us"
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
                transition: "color .2s",
              }}
              onMouseEnter={(e) => e.target.style.color = "rgba(255,255,255,.8)"}
              onMouseLeave={(e) => e.target.style.color = "rgba(255,255,255,.56)"}
            >
              <span
                aria-hidden="true"
                style={{ display: "inline-flex", marginTop: 2, flexShrink: 0 }}
              >
                <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                  <path d="M17.707 12.293a1 1 0 0 0-1.414 0L15.586 13.414a1 1 0 0 1-1.414 0c-1.973-1.973-4.121-4.121-6.094-6.094a1 1 0 0 1 0-1.414l1.121-1.121a1 1 0 0 0 0-1.414l-2.828-2.829a1 1 0 0 0-1.414 0L2 3a1 1 0 0 0-.293.707v13.586A1 1 0 0 0 2 18l4.586-4.586a1 1 0 0 1 1.414 0l6.094 6.094a1 1 0 0 0 1.414 0l1.121-1.121a1 1 0 0 1 1.414 0l2.828 2.828a1 1 0 0 0 1.414 0l2.121-2.121a1 1 0 0 0 0-1.414l-2.828-2.828Z" />
                </svg>
              </span>
              <span>+91 97399 86763</span>
            </a>

            <a
              href="https://www.HeuristicLabs.ai"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit our website"
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
                transition: "color .2s",
              }}
              onMouseEnter={(e) => e.target.style.color = "rgba(255,255,255,.8)"}
              onMouseLeave={(e) => e.target.style.color = "rgba(255,255,255,.56)"}
            >
              <span
                aria-hidden="true"
                style={{ display: "inline-flex", marginTop: 2, flexShrink: 0 }}
              >
                <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5m-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11m3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5Z" />
                </svg>
              </span>
              <span>www.HeuristicLabs.ai</span>
            </a>

            <a
              href="mailto:info@heuristiclabs.ai"
              aria-label="Email us"
              style={{
                margin: "0 0 12px",
                fontSize: 13,
                lineHeight: 1.5,
                color: "rgba(255,255,255,.56)",
                maxWidth: 300,
                display: "flex",
                alignItems: "flex-start",
                gap: 6,
                textDecoration: "none",
                transition: "color .2s",
              }}
              onMouseEnter={(e) => e.target.style.color = "rgba(255,255,255,.8)"}
              onMouseLeave={(e) => e.target.style.color = "rgba(255,255,255,.56)"}
            >
              <span
                aria-hidden="true"
                style={{ display: "inline-flex", marginTop: 2, flexShrink: 0 }}
              >
                <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </span>
              <span>info@heuristiclabs.ai</span>
            </a>
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
              {serviceLinks.map(([label, href, onClickHandler]) => (
                <a
                  key={label}
                  href={href}
                  style={linkStyle}
                  onClick={(event) => handleSectionNavigate(event, onClickHandler)}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div style={{ padding: "4px 0" }}>
            <p style={columnHeading}>Company</p>
            <div style={{ display: "grid", gap: 10 }}>
              {companyLinks.map(([label, href, onClickHandler]) => (
                <a
                  key={label}
                  href={href}
                  style={linkStyle}
                  onClick={(event) => handleSectionNavigate(event, onClickHandler)}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div style={{ padding: "4px 0" }}>
            <p style={columnHeading}>Industries</p>
            <div style={{ display: "grid", gap: 10 }}>
              {industryLinks.map(([label, href, onClickHandler]) => (
                <a
                  key={label}
                  href={href}
                  style={linkStyle}
                  onClick={(event) => handleSectionNavigate(event, onClickHandler)}
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
