import { T, font } from "../../constants/designTokens";
import { CALENDLY_DISCOVERY_CALL_URL } from "../../constants/links";
import { useViewport } from "../../hooks/useViewport";
import { Reveal } from "../shared";
import { FaCalendarAlt, FaEnvelope, FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";

export function Contact() {
  const { isMobile, isTablet, isSmallMobile } = useViewport();
  const LINKEDIN_URL = "https://www.linkedin.com/company/heuristic-labs-ai/";

  const getRowStyle = ({ hasAction, isLast }) => ({
    display: "grid",
    gridTemplateColumns: isMobile
      ? "auto minmax(0,1fr)"
      : hasAction
        ? "auto minmax(0,1fr) auto"
        : "auto minmax(0,1fr)",
    alignItems: isMobile ? "start" : "center",
    gap: isMobile ? (isSmallMobile ? "14px 12px" : "14px 16px") : "10px 18px",
    padding: isSmallMobile ? "24px 16px" : isMobile ? "26px 22px" : "24px 22px",
    borderBottom: isLast ? "none" : `1px solid ${T.ink12}`,
  });

  const actionBtnStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: isMobile ? "space-between" : "center",
    gap: 12,
    minWidth: isMobile ? 0 : 188,
    width: isMobile ? "100%" : "auto",
    padding: isSmallMobile ? "10px 14px" : "11px 16px",
    borderRadius: 9,
    textDecoration: "none",
    fontFamily: font.sans,
    fontSize: isSmallMobile ? 12 : 13,
    fontWeight: 600,
    letterSpacing: ".01em",
    lineHeight: 1.4,
    whiteSpace: isMobile ? "normal" : "nowrap",
    textAlign: isMobile ? "left" : "center",
  };

  const actionBtnPlacement = isMobile
    ? {
        gridColumn: "1 / -1",
        marginTop: isSmallMobile ? 10 : 12,
      }
    : undefined;

  const iconWrapStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: isMobile ? (isSmallMobile ? 30 : 34) : 36,
    height: isMobile ? (isSmallMobile ? 30 : 34) : 36,
    color: T.teal,
    fontSize: isSmallMobile ? 16 : isMobile ? 17 : 18,
  };

  const rowTitleStyle = {
    margin: 0,
    fontFamily: font.serif,
    fontWeight: 600,
    fontSize: isSmallMobile ? 15 : 16,
    lineHeight: 1.2,
    color: T.ink,
    overflowWrap: "anywhere",
  };

  const rowTextStyle = {
    margin: "6px 0 0",
    fontFamily: font.sans,
    fontSize: isSmallMobile ? 13 : 14,
    lineHeight: isMobile ? 1.62 : 1.55,
    color: T.ink60,
    overflowWrap: "anywhere",
  };

  const contactRows = [
    {
      key: "email",
      icon: <FaEnvelope aria-hidden="true" />,
      title: "Prefer email?",
      text: (
        <>
          Send us a message at{" "}
          <a
            href="mailto:connect@heuristiclabs.ai"
            style={{ color: T.teal, textDecoration: "none", fontWeight: 700 }}
          >
            connect@heuristiclabs.ai
          </a>
        </>
      ),
      action: {
        href: "mailto:connect@heuristiclabs.ai",
        label: "Send an email",
        primary: false,
      },
    },
    {
      key: "meeting",
      icon: <FaCalendarAlt aria-hidden="true" />,
      title: "Rather talk directly?",
      text: "Schedule a free 30-minute consultation",
      action: {
        href: CALENDLY_DISCOVERY_CALL_URL,
        label: "Book a meeting",
        primary: true,
        external: true,
      },
    },
    {
      key: "linkedin",
      icon: <FaLinkedinIn aria-hidden="true" />,
      title: "Stay connected",
      text: "Follow us on LinkedIn for the latest insights",
      action: {
        href: LINKEDIN_URL,
        label: "Connect with us",
        primary: false,
        external: true,
      },
    },
    {
      key: "location",
      icon: <FaMapMarkerAlt aria-hidden="true" />,
      title: "Visit us",
      text: "Elnet Software City, TS 140 Block 2 & 9, Rajiv Gandhi Salai, Tharamani, Chennai, TN-600113",
    },
  ];

  return (
    <section
      id="contact"
      style={{
        background: T.bg2,
        padding: isSmallMobile ? "52px 0" : isMobile ? "64px 0" : isTablet ? "76px 0" : "88px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: `0 ${isSmallMobile ? 18 : isMobile ? 24 : isTablet ? 40 : 56}px`,
        }}
      >
        <Reveal distance={12} blurFrom={7}>
          <div style={{ textAlign: "center", marginBottom: isSmallMobile ? 24 : isMobile ? 28 : 34 }}>
            <p
              style={{
                margin: "0 0 16px",
                fontFamily: font.sans,
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                display: "inline-block",
                padding: "6px 12px",
                borderRadius: 999,
                background: T.ink07,
                color: "#B07845",
              }}
            >
              Contact
            </p>

            <h2
              style={{
                margin: 0,
                fontFamily: font.serif,
                fontWeight: 700,
                fontSize: isSmallMobile ? 42 : isMobile ? 52 : 64,
                lineHeight: 0.98,
                letterSpacing: "-.02em",
                color: T.ink,
              }}
            >
              Let&apos;s Work Togethe
            </h2>

            <div
              style={{
                width: isSmallMobile ? 96 : 118,
                height: 1,
                margin: "12px auto 0",
                background: T.ink12,
              }}
            />
          </div>
        </Reveal>

        <Reveal delay={0.08} distance={18} blurFrom={10}>
          <div
            style={{
              maxWidth: 980,
              margin: "0 auto",
              border: `1px solid ${T.ink12}`,
              borderRadius: 18,
              background: "rgba(232,227,217,.76)",
              boxShadow: "0 14px 30px rgba(30,26,16,.08)",
              overflow: "hidden",
            }}
          >
            {contactRows.map((row, index) => {
              const hasAction = !!row.action;
              const isLast = index === contactRows.length - 1;
              const btnStyle = row.action?.primary
                ? {
                    border: "1px solid transparent",
                    background: T.ink,
                    color: T.w,
                  }
                : {
                    border: `1px solid ${T.ink12}`,
                    background: "rgba(221,216,206,.72)",
                    color: T.ink,
                  };

              return (
                <Reveal key={row.key} delay={0.14 + index * 0.06} distance={12} blurFrom={6}>
                  <div style={getRowStyle({ hasAction, isLast })}>
                    <div style={iconWrapStyle}>{row.icon}</div>

                    <div>
                      <h3 style={rowTitleStyle}>{row.title}</h3>
                      <p style={rowTextStyle}>{row.text}</p>
                    </div>

                    {row.action ? (
                      <a
                        href={row.action.href}
                        target={row.action.external ? "_blank" : undefined}
                        rel={row.action.external ? "noreferrer" : undefined}
                        style={{
                          ...actionBtnStyle,
                          ...actionBtnPlacement,
                          ...btnStyle,
                        }}
                      >
                        {row.action.label} <span style={{ opacity: 0.95, fontSize: 16, lineHeight: 1 }}>→</span>
                      </a>
                    ) : null}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
