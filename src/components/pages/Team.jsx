import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Section } from "../shared";
import { Reveal } from "../shared";
import { TEAM } from "../../constants/data/team";
import { FaLinkedinIn } from "react-icons/fa";

export function Team() {
  const { isMobile, isTablet, isSmallMobile } = useViewport();
  const leadershipTopPadding = isSmallMobile ? "10px" : isMobile ? "14px" : "20px";

  return (
    <Section id="team" paddingTop={leadershipTopPadding}>
      <Reveal distance={12} blurFrom={7}>
        <p
          style={{
            margin: "0 auto 10px",
            textAlign: "center",
            fontFamily: font.sans,
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: ".08em",
            color: "#B07845",
            textTransform: "uppercase",
            display: "inline-block",
            padding: "6px 12px",
            borderRadius: 999,
            background: T.ink07,
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          Leadership Team
        </p>
      </Reveal>

      <Reveal delay={0.06} distance={16} blurFrom={9}>
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
          You&apos;re in experienced hands.
        </h2>
      </Reveal>

      <Reveal delay={0.12} distance={14} blurFrom={6}>
        <>
          <p
            style={{
              margin: "0 auto 12px",
              textAlign: "center",
              maxWidth: 860,
              fontFamily: font.sans,
              fontSize: isSmallMobile ? 13 : isMobile ? 14 : 15,
              lineHeight: 1.6,
              color: T.ink60,
            }}
          >
            Our leadership team brings 40+ years of combined experience in AI, ML, and
            enterprise software from research labs to production systems.
          </p>

          <div
            aria-hidden="true"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: `0 0 ${isSmallMobile ? 18 : 22}px`,
            }}
          >
            <span
              style={{
                width: isSmallMobile ? 88 : 124,
                height: 1,
                background: T.ink12,
              }}
            />
          </div>
        </>
      </Reveal>

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
        {TEAM.map((member, index) => (
          <Reveal
            key={member.name}
            delay={0.16 + index * 0.06}
            distance={18}
            blurFrom={8}
            style={{ height: "100%" }}
          >
            <article
              style={{
                border: `1px solid ${T.ink12}`,
                borderRadius: 24,
                overflow: "hidden",
                background: "rgba(255,255,255,.56)",
                position: "relative",
                width: isMobile ? (isSmallMobile ? "min(100%, 290px)" : "min(100%, 320px)") : "100%",
                margin: isMobile ? "0 auto" : 0,
                aspectRatio: isSmallMobile ? "4 / 5" : "3 / 4",
              }}
            >
              <img
                src={member.photo}
                alt={member.name}
                loading="lazy"
                decoding="async"
                style={{
                  width: "100%",
                  height: "100%",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  display: "block",
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
                    gap: 4,
                  }}
                >
                  {member.bullets.map((bullet) => {
                    const text = bullet.trim();
                    const separatorIndex = text.indexOf(":");
                    const hasLabeledPrefix = separatorIndex > 0;
                    const prefix = hasLabeledPrefix ? text.slice(0, separatorIndex).trim() : "";
                    const suffix = hasLabeledPrefix ? text.slice(separatorIndex + 1).trim() : text;
                    const shouldBoldPrefix = prefix === "Credential" || prefix === "Focus";

                    return (
                      <li
                        key={`${member.name}-${bullet}`}
                        style={{
                          fontFamily: font.sans,
                          fontSize: isSmallMobile ? 11 : 12,
                          color: "rgba(255,255,255,.64)",
                          lineHeight: 1.5,
                        }}
                      >
                        {hasLabeledPrefix ? (
                          <>
                            <span style={{ fontWeight: shouldBoldPrefix ? 700 : 500 }}>{prefix}:</span>{" "}
                            <span>{suffix}</span>
                          </>
                        ) : (
                          text
                        )}
                      </li>
                    );
                  })}
                </ul>

                {!!member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      marginTop: 10,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontFamily: font.sans,
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: ".04em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,.82)",
                      textDecoration: "none",
                    }}
                  >
                    LinkedIn
                    <span
                      aria-hidden="true"
                      style={{
                        width: 16,
                        height: 16,
                        border: "1px solid rgba(255,255,255,.56)",
                        borderRadius: 4,
                        display: "inline-grid",
                        placeItems: "center",
                      }}
                    >
                      <FaLinkedinIn aria-hidden="true" size={9} />
                    </span>
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
