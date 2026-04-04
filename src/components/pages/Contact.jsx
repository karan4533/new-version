import { T, font } from "../../constants/designTokens";
import { CALENDLY_DISCOVERY_CALL_URL } from "../../constants/links";
import { useViewport } from "../../hooks/useViewport";
import { Reveal } from "../shared";

export function Contact() {
  const { isMobile, isTablet, isSmallMobile } = useViewport();

  const rowStyle = {
    display: "grid",
    gridTemplateColumns: isMobile ? "auto minmax(0,1fr)" : "auto minmax(0,1fr) auto",
    alignItems: isMobile ? "start" : "center",
    gap: isMobile ? "12px 14px" : "10px 18px",
    padding: isSmallMobile ? "20px 16px" : "24px 22px",
    borderBottom: `1px solid ${T.ink12}`,
  };

  const actionBtnStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: isMobile ? "space-between" : "center",
    gap: 12,
    minWidth: isMobile ? 0 : 188,
    width: isMobile ? "100%" : "auto",
    padding: "11px 16px",
    borderRadius: 9,
    textDecoration: "none",
    fontFamily: font.sans,
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: ".01em",
    lineHeight: 1.35,
    whiteSpace: isMobile ? "normal" : "nowrap",
    textAlign: isMobile ? "left" : "center",
  };

  const actionBtnPlacement = isMobile
    ? {
        gridColumn: "1 / -1",
        marginTop: 8,
      }
    : undefined;

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
          padding: `0 ${isSmallMobile ? 18 : isMobile ? 28 : isTablet ? 40 : 56}px`,
        }}
      >
        <Reveal distance={12} blurFrom={7}>
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
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isTablet ? "1fr" : "minmax(0,0.86fr) minmax(0,1.14fr)",
            gap: isSmallMobile ? 24 : isMobile ? 30 : 40,
            alignItems: "start",
          }}
        >
          <Reveal distance={16} blurFrom={9}>
            <div>
              <h2
                style={{
                  margin: "0 0 22px",
                  fontFamily: font.serif,
                  fontWeight: 700,
                  fontSize: isSmallMobile ? 42 : isMobile ? 52 : 64,
                  lineHeight: 0.98,
                  letterSpacing: "-.02em",
                  color: T.ink,
                }}
              >
                Let&apos;s work
                <br />
                together.
              </h2>

              <p
                style={{
                  margin: "0 0 16px",
                  maxWidth: 460,
                  fontFamily: font.sans,
                  fontSize: isSmallMobile ? 13 : 14,
                  lineHeight: 1.7,
                  color: T.ink60,
                }}
              >
                Whether you have a defined use case or are still mapping the AI opportunity,
                let&apos;s start a conversation.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto minmax(0,1fr)",
                  alignItems: "start",
                  gap: "14px 14px",
                  maxWidth: 420,
                  padding: isSmallMobile ? "18px 0 0" : "14px 0 0",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 24, height: 24 }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="3" y="6" width="18" height="12" rx="2.5" stroke={T.amber} strokeWidth="2" />
                    <path d="M4.5 8.5L12 13.2L19.5 8.5" stroke={T.amber} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: font.sans,
                      fontSize: 11,
                      letterSpacing: ".06em",
                      color: T.ink40,
                    }}
                  >
                    Phone
                  </p>
                  <p
                    style={{
                      margin: "2px 0 0",
                      fontFamily: font.sans,
                      fontSize: 15,
                      fontWeight: 600,
                      lineHeight: 1.5,
                      color: T.ink,
                    }}
                  >
                    +91 97399 86763
                  </p>
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 24, height: 24 }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="8" stroke={T.amber} strokeWidth="2" />
                    <path d="M4 12H20" stroke={T.amber} strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 4C14.2 6.3 15.3 9 15.3 12C15.3 15 14.2 17.7 12 20" stroke={T.amber} strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 4C9.8 6.3 8.7 9 8.7 12C8.7 15 9.8 17.7 12 20" stroke={T.amber} strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: font.sans,
                      fontSize: 11,
                      letterSpacing: ".06em",
                      color: T.ink40,
                    }}
                  >
                    Website
                  </p>
                  <p
                    style={{
                      margin: "2px 0 0",
                      fontFamily: font.sans,
                      fontSize: 15,
                      fontWeight: 600,
                      lineHeight: 1.5,
                      color: T.ink,
                    }}
                  >
                    www.HeuristicLabs.ai
                  </p>
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 24, height: 24 }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="4" y="5" width="16" height="15" rx="2.5" stroke={T.amber} strokeWidth="2" />
                    <path d="M8 3.5V7" stroke={T.amber} strokeWidth="2" strokeLinecap="round" />
                    <path d="M16 3.5V7" stroke={T.amber} strokeWidth="2" strokeLinecap="round" />
                    <path d="M4 9.5H20" stroke={T.amber} strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: font.sans,
                      fontSize: 11,
                      letterSpacing: ".06em",
                      color: T.ink40,
                    }}
                  >
                    Email
                  </p>
                  <p
                    style={{
                      margin: "2px 0 0",
                      fontFamily: font.sans,
                      fontSize: 15,
                      fontWeight: 600,
                      lineHeight: 1.5,
                      color: T.ink,
                    }}
                  >
                    connect@heuristiclabs.ai
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} distance={18} blurFrom={10}>
            <div
              style={{
                border: `1px solid ${T.ink12}`,
                borderRadius: 18,
                background: "rgba(232,227,217,.76)",
                boxShadow: "0 14px 30px rgba(30,26,16,.08)",
                overflow: "hidden",
              }}
            >
              <Reveal delay={0.14} distance={12} blurFrom={6}>
                <div style={rowStyle}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36 }}>
                    <span style={{ color: T.teal, fontSize: 20 }}>◫</span>
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontFamily: font.serif, fontWeight: 600, fontSize: 16, lineHeight: 1.2, color: T.ink }}>
                      Schedule a Discovery Call
                    </h3>
                    <p style={{ margin: "6px 0 0", fontFamily: font.sans, fontSize: 14, lineHeight: 1.55, color: T.ink60 }}>
                      Best for use-case scoping, architecture direction, and delivery planning.
                    </p>
                  </div>
                  <a
                    href={CALENDLY_DISCOVERY_CALL_URL}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      ...actionBtnStyle,
                      ...actionBtnPlacement,
                      border: "1px solid transparent",
                      background: T.ink,
                      color: T.w,
                    }}
                  >
                    Schedule a Discovery Call <span style={{ opacity: 0.95, fontSize: 16, lineHeight: 1 }}>→</span>
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.2} distance={12} blurFrom={6}>
                <div style={rowStyle}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36 }}>
                    <span style={{ color: T.teal, fontSize: 20 }}>✉</span>
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontFamily: font.serif, fontWeight: 600, fontSize: 16, lineHeight: 1.2, color: T.ink }}>
                      Prefer email?
                    </h3>
                    <p style={{ margin: "6px 0 0", fontFamily: font.sans, fontSize: 14, lineHeight: 1.55, color: T.ink60 }}>
                      Send us a message at <a href="mailto:connect@heuristiclabs.ai" style={{ color: T.teal, textDecoration: "none", fontWeight: 700 }}>connect@heuristiclabs.ai</a>
                    </p>
                  </div>
                  <a
                    href="mailto:connect@heuristiclabs.ai"
                    style={{
                      ...actionBtnStyle,
                      ...actionBtnPlacement,
                      border: `1px solid ${T.ink12}`,
                      background: "rgba(221,216,206,.72)",
                      color: T.ink,
                    }}
                  >
                    Send an email <span style={{ opacity: 0.95, fontSize: 16, lineHeight: 1 }}>→</span>
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.26} distance={12} blurFrom={6}>
                <div
                  style={{
                    ...rowStyle,
                    borderBottom: "none",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36 }}>
                    <span style={{ color: T.teal, fontSize: 20 }}>☎</span>
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontFamily: font.serif, fontWeight: 600, fontSize: 16, lineHeight: 1.2, color: T.ink }}>
                      Need a quick call?
                    </h3>
                    <p style={{ margin: "6px 0 0", fontFamily: font.sans, fontSize: 14, lineHeight: 1.55, color: T.ink60 }}>
                      Reach us directly at +91 97399 86763
                    </p>
                  </div>
                  <a
                    href="tel:+919739986763"
                    style={{
                      ...actionBtnStyle,
                      ...actionBtnPlacement,
                      border: `1px solid ${T.ink12}`,
                      background: "rgba(221,216,206,.72)",
                      color: T.ink,
                    }}
                  >
                    Call now <span style={{ opacity: 0.95, fontSize: 16, lineHeight: 1 }}>→</span>
                  </a>
                </div>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
