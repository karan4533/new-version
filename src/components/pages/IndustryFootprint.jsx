import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Section } from "../shared";
import { Reveal } from "../shared";
import {
  SiAccenture,
  SiAdidas,
  SiAtlassian,
  SiMeta,
  SiSamsung,
  SiUber,
} from "react-icons/si";
import { FaMicrosoft, FaStripe } from "react-icons/fa6";

const companyLogos = [
  { name: "IBM", wordmark: "IBM" },
  { name: "Samsung", Icon: SiSamsung },
  { name: "Meta", Icon: SiMeta },
  { name: "Uber", Icon: SiUber },
  { name: "Ingenico", wordmark: "ingenico" },
  { name: "Accenture", Icon: SiAccenture },
  { name: "Adidas", Icon: SiAdidas },
  { name: "Atlassian", Icon: SiAtlassian },
  { name: "Microsoft", Icon: FaMicrosoft },
  { name: "Stripe", Icon: FaStripe },
];

export function IndustryFootprint() {
  const { isMobile, isSmallMobile } = useViewport();
  const marqueeLogos = [...companyLogos, ...companyLogos];

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
                <div
                  className="industry-marquee-item"
                  key={`${logo.name}-${index}`}
                  aria-label={logo.name}
                  title={logo.name}
                >
                  {logo.Icon ? (
                    <logo.Icon className="industry-marquee-logo" aria-hidden="true" />
                  ) : (
                    <span className="industry-marquee-wordmark">{logo.wordmark || logo.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
