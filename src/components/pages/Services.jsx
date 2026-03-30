import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Section } from "../shared";

export function Services() {
  const { isMobile, isTablet, isSmallMobile } = useViewport();

  const cards = [
    {
      title: "Custom AI Solutions",
      desc: "Custom AI stacks tuned to real workflows and measurable business outcomes.",
      topTag: "3 CMCCS C003",
      chipA: "RISKY DECIS",
      chipB: "PROJECT ANCODOS",
    },
    {
      title: "GenAI for Industrial Automation",
      desc: "Automations for repetitive and complex operations in production pipelines.",
      topTag: "CANWEL C03E",
      chipA: "L CENNE",
      chipB: "ENROC DNODES",
    },
    {
      title: "Data and AI Governance",
      desc: "Guardrails for secure model rollout across enterprise data lifecycles.",
      topTag: "PRODUCT CODE",
      chipA: "EARWALITY",
      chipB: "KGS DODLEY",
    },
    {
      title: "AI Strategic Consulting",
      desc: "Roadmaps that convert AI ambition into prioritized, executable plans.",
      topTag: "5 AMEL ORG6",
      chipA: "COMA HENDCET",
      chipB: "FAUN FPROCES",
    },
    {
      title: "Applied LED and Service",
      desc: "Applied intelligence services designed for continuous delivery and scale.",
      topTag: "EAWICS ENICE",
      chipA: "HIE TECOOS",
      chipB: "SOK OPONC",
    },
    {
      title: "Academic and Industry Partnerships",
      desc: "Collaborations that strengthen capability, research depth, and deployment velocity.",
      topTag: "MULINE A CORE",
      chipA: "FLS CHANGES",
      chipB: "FRESH TOOLING",
    },
  ];

  return (
    <Section id="services">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isTablet ? "1fr" : "minmax(0,.9fr) minmax(0,1.1fr)",
          gap: isSmallMobile ? 14 : 24,
          alignItems: "start",
          marginBottom: isSmallMobile ? 14 : 20,
        }}
      >
        <div>
          <p
            style={{
              margin: "0 0 6px",
              fontFamily: font.sans,
              fontSize: 10,
              letterSpacing: ".16em",
              textTransform: "uppercase",
              color: T.ink40,
            }}
          >
            Inteligone
          </p>
          <h2
            style={{
              margin: 0,
              fontFamily: font.serif,
              fontWeight: 500,
              lineHeight: 1.02,
              letterSpacing: "-.02em",
              color: T.ink,
              fontSize: isSmallMobile ? 46 : isMobile ? 52 : 62,
            }}
          >
            Modular
            <br />
            Intelligence.
          </h2>
        </div>

        <p
          style={{
            margin: isTablet ? 0 : "24px 0 0",
            maxWidth: 520,
            fontFamily: font.sans,
            fontSize: isSmallMobile ? 12 : 13,
            lineHeight: 1.58,
            color: T.ink60,
          }}
        >
          Module centric stacks, inner win layers, and practical execution models that
          bring strategy, automation, and measurable outcomes into one system.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2,minmax(0,1fr))" : "repeat(3,minmax(0,1fr))",
          gap: isSmallMobile ? 10 : 12,
        }}
      >
        {cards.map((card, index) => (
          <article
            key={card.title}
            style={{
              border: `1px solid ${T.ink12}`,
              background: "rgba(255,255,255,.74)",
              borderRadius: 10,
              padding: isSmallMobile ? "12px" : "14px 14px 12px",
              minHeight: isSmallMobile ? 206 : 232,
              display: "grid",
              alignContent: "start",
              gap: 7,
            }}
          >
            <span
              style={{
                fontFamily: font.serif,
                fontSize: isSmallMobile ? 44 : 46,
                lineHeight: 1,
                color: "rgba(176,120,69,.24)",
                letterSpacing: "-.01em",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              style={{
                display: "inline-block",
                width: "fit-content",
                padding: "2px 5px",
                borderRadius: 3,
                background: "rgba(176,120,69,.09)",
                fontFamily: font.sans,
                fontSize: 8,
                letterSpacing: ".06em",
                textTransform: "uppercase",
                color: "rgba(30,26,16,.48)",
              }}
            >
              {card.topTag}
            </span>
            <h3
              style={{
                margin: 0,
                fontFamily: font.serif,
                fontWeight: 600,
                color: T.ink,
                fontSize: isSmallMobile ? 18 : 19,
                lineHeight: 1.1,
                letterSpacing: "-.01em",
                maxWidth: 220,
              }}
            >
              {card.title}
            </h3>
            <p
              style={{
                margin: 0,
                fontFamily: font.sans,
                color: T.ink60,
                fontSize: isSmallMobile ? 11 : 12,
                lineHeight: 1.45,
                minHeight: isSmallMobile ? 48 : 52,
              }}
            >
              {card.desc}
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 5,
                marginTop: 2,
              }}
            >
              {[card.chipA, card.chipB].map((chip) => (
                <span
                  key={`${card.title}-${chip}`}
                  style={{
                    display: "inline-block",
                    border: `1px solid ${T.ink12}`,
                    borderRadius: 3,
                    padding: "1px 5px",
                    fontFamily: font.sans,
                    fontSize: 7,
                    fontWeight: 600,
                    color: T.ink40,
                    letterSpacing: ".04em",
                    textTransform: "uppercase",
                    background: "rgba(255,255,255,.7)",
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
