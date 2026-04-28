import { useEffect, useState } from "react";
import { T, font } from "../../constants/designTokens";
import { CALENDLY_DISCOVERY_CALL_URL } from "../../constants/links";
import { useViewport } from "../../hooks/useViewport";
import companyLogo from "../../assets/logo-optimized.webp";

export function Nav({
  onLogoClick,
  onHomeClick,
  onAboutClick,
  onServicesClick,
  onCaseStudiesClick,
  onLeadershipClick,
  onContactClick,
}) {
  const { width, isTablet, isSmallMobile } = useViewport();
  const [isDark, setIsDark] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e) => setIsDark(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDesktop = !isTablet;
  const isCompactDesktop = isDesktop && width < 1260;

  useEffect(() => {
    if (isDesktop && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [isDesktop, mobileMenuOpen]);

  useEffect(() => {
    if (isDesktop || !mobileMenuOpen) return;

    const closeMenu = () => setMobileMenuOpen(false);

    window.addEventListener("scroll", closeMenu, { passive: true });
    window.addEventListener("orientationchange", closeMenu, { passive: true });

    return () => {
      window.removeEventListener("scroll", closeMenu);
      window.removeEventListener("orientationchange", closeMenu);
    };
  }, [isDesktop, mobileMenuOpen]);

  const links = [
    { label: "Home", onClick: onHomeClick },
    { label: "About", href: "#about", onClick: onAboutClick },
    { label: "Services", href: "#services", onClick: onServicesClick },
    { label: "Case Studies", href: "#case-studies", onClick: onCaseStudiesClick },
    { label: "Leadership", href: "#team", onClick: onLeadershipClick },
    { label: "Contact", onClick: onContactClick },
    { label: "Book a Discovery Call", href: CALENDLY_DISCOVERY_CALL_URL, isCta: true, isExternal: true },
  ];

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: isDesktop ? 12 : isSmallMobile ? 8 : 10,
          zIndex: isDesktop ? 1200 : 2200,
          display: isDesktop ? "flex" : "grid",
          alignItems: "center",
          justifyContent: isDesktop ? "space-between" : "stretch",
          gridTemplateColumns: isDesktop ? undefined : "minmax(0, 1fr) auto",
          columnGap: isDesktop ? undefined : isSmallMobile ? 8 : 12,
          flexWrap: "nowrap",
          rowGap: 0,
          width: isDesktop
            ? isCompactDesktop
              ? "min(1240px, calc(100% - 24px))"
              : "min(1240px, calc(100% - 44px))"
            : "calc(100% - 14px)",
          margin: "0 auto",
          marginTop: isDesktop ? 0 : isSmallMobile ? 8 : 10,
          border: isDesktop ? "1px solid rgba(30,26,16,.07)" : "1px solid rgba(30,26,16,.14)",
          borderRadius: 999,
          background: "#EEE9E0",
          backgroundClip: "padding-box",
          backdropFilter: "none",
          boxShadow: isDesktop
            ? "0 2px 8px rgba(20,16,8,.05)"
            : "0 8px 16px rgba(22,17,10,.06)",
          isolation: "isolate",
          overflow: "visible",
          height: isDesktop ? (isCompactDesktop ? 70 : 74) : "auto",
          padding: isDesktop
            ? isCompactDesktop
              ? "0 16px"
              : "0 26px"
            : isSmallMobile
              ? "8px 14px"
              : "12px 18px",
          fontFamily: font.sans,
          transition:
            "padding 0.25s, height 0.25s, background 0.25s, box-shadow 0.25s, border-color 0.25s",
        }}
      >
        <button
          type="button"
          onClick={onLogoClick}
          style={{
            border: "none",
            background: "transparent",
            display: "inline-flex",
            alignItems: "center",
            gap: isDesktop ? (isCompactDesktop ? 8 : 10) : isSmallMobile ? 9 : 13,
            cursor: "pointer",
            color: T.ink,
            padding: isDesktop ? "7px 10px" : 0,
            order: isDesktop ? 1 : 0,
            flex: "0 0 auto",
            width: isDesktop ? "auto" : "100%",
            minWidth: 0,
            textAlign: "left",
            borderRadius: 14,
            transform: "translateY(0px)",
            transition: "background 0.2s, transform 0.15s, box-shadow 0.2s",
            boxShadow: "none",
          }}
          aria-label="Go to home"
        >
          <img
            src={companyLogo}
            alt="Heuristic Labs"
            style={{
              width: isSmallMobile ? 32 : 38,
              maxWidth: "100%",
              height: "auto",
              maxHeight: isSmallMobile ? 32 : 38,
              aspectRatio: "1 / 1",
              objectFit: "contain",
              filter: isDark ? "brightness(0) saturate(100%) invert(1)" : "brightness(0) saturate(100%)",
              flexShrink: 0,
              display: "block",
              transform: "scale(1)",
              transition: "transform 0.2s",
            }}
          />
          <span
            style={{
              fontFamily: font.serif,
              fontSize: isDesktop ? (isCompactDesktop ? 18 : 21) : isSmallMobile ? 17 : 19,
              fontWeight: 700,
              color: T.ink,
              letterSpacing: "0em",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              minWidth: 0,
              maxWidth: isDesktop ? (isCompactDesktop ? 184 : "none") : isSmallMobile ? 178 : 220,
              lineHeight: 1,
              transition: "letter-spacing 0.2s",
            }}
          >
            Heuristic Labs
          </span>
        </button>

        {isDesktop ? (
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: isCompactDesktop ? 16 : 30,
              listStyle: "none",
              margin: "0 0 0 auto",
              padding: 0,
              order: 2,
            }}
          >
            {links.map((link) => (
              <li key={link.label} style={{ position: "relative" }}>
                {link.onClick ? (
                  <button
                    type="button"
                    onClick={link.onClick}
                    style={{
                      border: "none",
                      background: link.isCta ? T.ink : "transparent",
                      color: link.isCta ? T.w : "rgba(30,26,16,.74)",
                      fontFamily: font.sans,
                      fontSize: isCompactDesktop ? 13 : 14,
                      fontWeight: link.isCta ? 700 : 600,
                      letterSpacing: ".015em",
                      textDecoration: "none",
                      cursor: "pointer",
                      borderRadius: link.isCta ? 999 : 10,
                      padding: link.isCta
                        ? isCompactDesktop
                          ? "7px 11px"
                          : "8px 14px"
                        : isCompactDesktop
                          ? "6px 2px"
                          : "6px 4px",
                      whiteSpace: "nowrap",
                      transition: "color 0.2s, background 0.2s",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: link.hasCaret ? 8 : 0,
                    }}
                  >
                    {link.hasCaret ? (
                      <>
                        <span>{link.label}</span>
                        <span
                          aria-hidden="true"
                          style={{
                            width: 7,
                            height: 7,
                            borderRight: "1.6px solid rgba(30,26,16,.72)",
                            borderBottom: "1.6px solid rgba(30,26,16,.72)",
                            transform: "rotate(45deg) translateY(-1px)",
                            transition: "transform 0.2s",
                          }}
                        />
                      </>
                    ) : (
                      link.label
                    )}
                  </button>
                ) : (
                  <a
                    href={link.href}
                    target={link.isExternal ? "_blank" : undefined}
                    rel={link.isExternal ? "noreferrer" : undefined}
                    style={{
                      color: link.isCta ? T.w : "rgba(30,26,16,.74)",
                      textDecoration: "none",
                      fontFamily: font.sans,
                      fontSize: isCompactDesktop ? 13 : 14,
                      fontWeight: link.isCta ? 700 : 600,
                      letterSpacing: ".015em",
                      borderRadius: link.isCta ? 999 : 10,
                      padding: link.isCta
                        ? isCompactDesktop
                          ? "7px 11px"
                          : "8px 14px"
                        : isCompactDesktop
                          ? "6px 2px"
                          : "6px 4px",
                      whiteSpace: "nowrap",
                      transition: "color 0.2s, background 0.2s",
                      display: "inline-flex",
                      alignItems: "center",
                      background: link.isCta ? T.ink : "transparent",
                    }}
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <button
            type="button"
            onClick={() => setMobileMenuOpen((value) => !value)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
            style={{
              height: 40,
              width: 40,
              borderRadius: 12,
              border: "none",
              background: "transparent",
              color: T.amber,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              justifySelf: "end",
              order: 1,
              marginLeft: 0,
              padding: 0,
            }}
          >
            <span
              aria-hidden="true"
              style={{
                position: "relative",
                width: 18,
                height: 12,
                display: "inline-block",
              }}
            >
              {[0, 1, 2].map((barIndex) => {
                const transforms = mobileMenuOpen
                  ? [
                      "translateY(5px) rotate(45deg)",
                      "scaleX(0)",
                      "translateY(-5px) rotate(-45deg)",
                    ]
                  : ["none", "none", "none"];

                const tops = [0, 5, 10];

                return (
                  <span
                    key={barIndex}
                    style={{
                      position: "absolute",
                      left: 0,
                      top: tops[barIndex],
                      width: "100%",
                      height: 2,
                      borderRadius: 99,
                      background: T.amber,
                      transform: transforms[barIndex],
                      transition: "transform .24s ease, opacity .2s ease",
                      opacity: mobileMenuOpen && barIndex === 1 ? 0 : 1,
                      transformOrigin: "center",
                    }}
                  />
                );
              })}
            </span>
          </button>
        )}

        {isTablet && mobileMenuOpen && (
          <div
            style={{
              position: "absolute",
              top: `calc(100% + ${isSmallMobile ? 8 : 10}px)`,
              left: 0,
              right: 0,
              zIndex: 2201,
              border: "1px solid rgba(30,26,16,.14)",
              background: "#f0ece4",
              borderRadius: 16,
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              maxHeight: isSmallMobile ? "min(62vh, 360px)" : "min(68vh, 440px)",
              overflowY: "auto",
              overscrollBehavior: "contain",
              WebkitOverflowScrolling: "touch",
              boxShadow: "0 12px 26px rgba(22,17,10,.12)",
            }}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href || "#home"}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noreferrer" : undefined}
                onClick={(event) => {
                  if (typeof link.onClick === "function") {
                    event.preventDefault();
                    link.onClick();
                  }
                  setMobileMenuOpen(false);
                }}
                style={{
                  border: "none",
                  borderRadius: 10,
                  background: link.isCta ? T.ink : "transparent",
                  color: link.isCta ? T.w : T.ink,
                  textDecoration: "none",
                  fontFamily: font.sans,
                  fontSize: 14,
                  fontWeight: 700,
                  padding: "11px 12px",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
