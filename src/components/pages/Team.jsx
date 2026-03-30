import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Section } from "../shared";
import { TEAM } from "../../constants/data/team";

export function Team() {
  const { isMobile, isTablet, isSmallMobile } = useViewport();

  return (
    <Section id="team">
      <p
        style={{
          margin: "0 0 10px",
          textAlign: "center",
          fontFamily: font.sans,
          fontSize: 11,
          letterSpacing: ".09em",
          color: T.ink40,
          textTransform: "uppercase",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          border: `1px solid ${T.ink12}`,
          borderRadius: 999,
          padding: "6px 12px",
          background: "rgba(255,255,255,.42)",
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        Meet the Team
      </p>

      <h2
        style={{
          margin: "0 0 14px",
          textAlign: "center",
          fontFamily: font.serif,
          color: T.ink,
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: "-.02em",
          fontSize: isSmallMobile ? 30 : isMobile ? 38 : 50,
        }}
      >
        Enterprise AI
        <br />
        <span style={{ color: T.amber, fontStyle: "italic", fontWeight: 700 }}>expertise</span>{" "}
        in every profile.
      </h2>

      <p
        style={{
          margin: "0 auto 24px",
          textAlign: "center",
          maxWidth: 860,
          fontFamily: font.sans,
          fontSize: isSmallMobile ? 13 : isMobile ? 14 : 15,
          lineHeight: 1.6,
          color: T.ink60,
        }}
      >
        No layers of management. You work directly with the specialists who understand your business and build your AI systems from first principles to production.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : isTablet
              ? "repeat(2,minmax(0,1fr))"
              : "repeat(3,minmax(0,1fr))",
          gap: isSmallMobile ? 12 : 18,
          maxWidth: 1060,
          margin: "0 auto",
        }}
      >
        {TEAM.map((member) => (
          <article
            key={member.name}
            style={{
              border: `1px solid ${T.ink12}`,
              borderRadius: 24,
              overflow: "hidden",
              background: "rgba(255,255,255,.56)",
              position: "relative",
              aspectRatio: "3 / 4",
            }}
          >
            <img
              src={member.photo}
              alt={member.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                inset: 0,
              }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(10,8,5,0) 50%, rgba(10,8,5,.72) 82%, rgba(10,8,5,.84) 100%)",
              }}
            />

            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 2,
                padding: isSmallMobile ? "16px 14px 18px" : "18px 16px 20px",
              }}
            >
              <h3
                style={{
                  margin: "0 0 3px",
                  fontFamily: font.serif,
                  fontSize: isSmallMobile ? 20 : 26,
                  fontWeight: 600,
                  color: T.w,
                  lineHeight: 1.16,
                  letterSpacing: "-.01em",
                }}
              >
                {member.name}
              </h3>

              <p
                style={{
                  margin: "0 0 8px",
                  fontFamily: font.sans,
                  fontSize: isSmallMobile ? 11 : 12,
                  color: "rgba(255,255,255,.74)",
                  lineHeight: 1.4,
                }}
              >
                {member.role.trim()}
              </p>

              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                  display: "grid",
                  gap: 2,
                }}
              >
                {member.bullets.map((bullet) => (
                  <li
                    key={`${member.name}-${bullet}`}
                    style={{
                      fontFamily: font.sans,
                      fontSize: isSmallMobile ? 11 : 12,
                      color: "rgba(255,255,255,.56)",
                      lineHeight: 1.5,
                    }}
                  >
                    • {bullet.trim()}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
