import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";

export function Contact() {
  const { isMobile, isTablet, isSmallMobile } = useViewport();

  const rowStyle = {
    display: "grid",
    gridTemplateColumns: isSmallMobile ? "1fr" : "auto minmax(0,1fr) auto",
    alignItems: "center",
    gap: "6px 14px",
    padding: "20px 18px",
    borderBottom: `1px solid ${T.ink12}`,
  };

  const actionBtnStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    minWidth: 170,
    padding: "10px 14px",
    borderRadius: 9,
    textDecoration: "none",
    fontFamily: font.sans,
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: ".01em",
    whiteSpace: "nowrap",
  };

  return (
    <section
      id="contact"
      style={{
        background: T.bg2,
        padding: isSmallMobile ? "36px 0" : isMobile ? "50px 0" : "64px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1040,
          margin: "0 auto",
          padding: `0 ${isSmallMobile ? 16 : isMobile ? 24 : isTablet ? 32 : 48}px`,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isTablet ? "1fr" : "minmax(0,0.86fr) minmax(0,1.14fr)",
            gap: isSmallMobile ? 16 : isMobile ? 20 : 28,
            alignItems: "start",
          }}
        >
          <div>
            <h2
              style={{
                margin: "0 0 18px",
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

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto minmax(0,1fr)",
                alignItems: "start",
                gap: "10px 12px",
                maxWidth: 420,
                padding: isSmallMobile ? "14px 0 0" : "8px 0 0",
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
                  Address
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

              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 24, height: 24 }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 21C15.9 17.1 18.2 14.6 18.2 11.8C18.2 8.4 15.5 5.7 12.1 5.7C8.7 5.7 6 8.4 6 11.8C6 14.6 8.3 17.1 12 21Z" stroke={T.amber} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12.1" cy="11.7" r="2.2" stroke={T.amber} strokeWidth="2" />
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
                  As
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
                  Chennai, India
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
                  Plan a call
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
                  Book a 30-min consultation
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              border: `1px solid ${T.ink12}`,
              borderRadius: 16,
              background: "rgba(232,227,217,.76)",
              boxShadow: "0 14px 30px rgba(30,26,16,.08)",
              overflow: "hidden",
            }}
          >
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
              <a href="mailto:connect@heuristiclabs.ai" style={{ ...actionBtnStyle, border: `1px solid ${T.ink12}`, background: "rgba(221,216,206,.72)", color: T.ink }}>
                Send an email <span style={{ opacity: 0.95, fontSize: 16, lineHeight: 1 }}>→</span>
              </a>
            </div>

            <div style={rowStyle}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36 }}>
                <span style={{ color: T.teal, fontSize: 20 }}>◫</span>
              </div>
              <div>
                <h3 style={{ margin: 0, fontFamily: font.serif, fontWeight: 600, fontSize: 16, lineHeight: 1.2, color: T.ink }}>
                  Rather talk directly?
                </h3>
                <p style={{ margin: "6px 0 0", fontFamily: font.sans, fontSize: 14, lineHeight: 1.55, color: T.ink60 }}>
                  Schedule a free 30-minute consultation
                </p>
              </div>
              <a href="#" style={{ ...actionBtnStyle, border: "1px solid transparent", background: T.ink, color: T.w }}>
                Book a meeting <span style={{ opacity: 0.95, fontSize: 16, lineHeight: 1 }}>→</span>
              </a>
            </div>

            <div
              style={{
                ...rowStyle,
                borderBottom: "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36 }}>
                <span style={{ color: T.teal, fontSize: 20 }}>in</span>
              </div>
              <div>
                <h3 style={{ margin: 0, fontFamily: font.serif, fontWeight: 600, fontSize: 16, lineHeight: 1.2, color: T.ink }}>
                  Stay connected
                </h3>
                <p style={{ margin: "6px 0 0", fontFamily: font.sans, fontSize: 14, lineHeight: 1.55, color: T.ink60 }}>
                  Follow us on LinkedIn for the latest insights
                </p>
              </div>
              <a href="https://www.linkedin.com/company/heuristic-labs-ai/" target="_blank" rel="noopener noreferrer" style={{ ...actionBtnStyle, border: `1px solid ${T.ink12}`, background: "rgba(221,216,206,.72)", color: T.ink }}>
                Connect with us <span style={{ opacity: 0.95, fontSize: 16, lineHeight: 1 }}>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
