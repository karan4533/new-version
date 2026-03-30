import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Section } from "../shared";
import { Reveal } from "../shared";

const temporaryLogos = [
  { name: "AJIO", mark: "AJ" },
  { name: "NAUTICA", mark: "NT" },
  { name: "LIFESTYLE", mark: "LS" },
  { name: "MYNTRA", mark: "MY" },
  { name: "FRENCH CONNECTION", mark: "FC" },
  { name: "HAMLEYS", mark: "HM" },
  { name: "GERBER", mark: "GB" },
  { name: "GAP", mark: "GP" },
  { name: "CONNEXION", mark: "CX" },
  { name: "UNLIMITED", mark: "UN" },
];

export function IndustryFootprint() {
  const { isMobile, isSmallMobile } = useViewport();
  const marqueeLogos = [...temporaryLogos, ...temporaryLogos];

  return (
    <Section id="industry-footprint">
      <Reveal distance={14} blurFrom={8}>
        <h2
          style={{
            margin: "0 0 16px",
            textAlign: "center",
            fontFamily: font.serif,
            color: T.ink,
            fontWeight: 500,
            letterSpacing: "-.02em",
            fontSize: isSmallMobile ? 30 : isMobile ? 38 : 48,
          }}
        >
          Industries We Serve.
        </h2>
      </Reveal>

      <Reveal delay={0.06} distance={14} blurFrom={6}>
        <div className="industry-marquee-shell">
          <p
            style={{
              margin: "0 0 12px",
              textAlign: "center",
              fontFamily: font.sans,
              fontSize: isSmallMobile ? 12 : 14,
              letterSpacing: ".04em",
              color: T.ink40,
            }}
          >
            Loved by teams who ship every week
          </p>

          <div className="industry-marquee-mask" role="region" aria-label="Client logos ticker">
            <div className="industry-marquee-track">
              {marqueeLogos.map((logo, index) => (
                <div className="industry-marquee-item" key={`${logo.name}-${index}`}>
                  <span className="industry-marquee-mark" aria-hidden="true">
                    {logo.mark}
                  </span>
                  <span className="industry-marquee-name">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
