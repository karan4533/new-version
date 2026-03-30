import { useState } from "react";
import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Reveal, Pill, Btn, Section, Em } from "../shared";
import { FAQS } from "../../constants/data/faqs";

export function FAQ() {
  const { isMobile, isSmallMobile } = useViewport();
  const [open, setOpen] = useState(null);
  return (
    <Section id="faq">
      <Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              isMobile ? "1fr" : "1fr 1fr",
            gap: isSmallMobile ? 24 : isMobile ? 30 : 64,
            alignItems: "start",
          }}
        >
          <div>
            <Pill>FAQ</Pill>
            <div
              style={{
                fontFamily: font.serif,
                fontSize: "clamp(28px,3.5vw,46px)",
                fontWeight: 700,
                lineHeight: 1.12,
                letterSpacing: "-.02em",
                color: T.ink,
                marginBottom: 16,
              }}
            >
              How We <br />
              <Em>Help.</Em>
            </div>
            <p
              style={{
                fontSize: isSmallMobile ? 13 : 14,
                lineHeight: 1.7,
                color: T.ink60,
                marginBottom: 32,
                fontFamily: font.sans,
              }}
            >
              End-to-end LLM solutions from strategy to implementation
            </p>
            <Btn dark href="#contact">
              talk to us
            </Btn>
          </div>
          <div style={{ borderTop: `1px solid ${T.ink12}` }}>
            {FAQS.map((f, i) => (
              <div key={f.q} style={{ borderBottom: `1px solid ${T.ink12}` }}>
                <button
                  onClick={() =>
                    setOpen(open === i ? null : i)
                  }
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "18px 0",
                    textAlign: "left",
                    fontFamily: font.sans,
                    fontSize: 14,
                    fontWeight: 500,
                    color: T.ink,
                  }}
                >
                  {f.q}
                  <span
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      border: `1px solid ${T.ink12}`,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 14,
                      color: T.ink60,
                      flexShrink: 0,
                      marginLeft: 16,
                      transform:
                        open === i
                          ? "rotate(45deg)"
                          : "none",
                      transition: ".3s",
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  style={{
                    overflow: "hidden",
                    maxHeight: open === i ? 200 : 0,
                    transition: "max-height .4s ease",
                  }}
                >
                  <p
                    style={{
                      padding: "0 0 18px",
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: T.ink60,
                      fontFamily: font.sans,
                    }}
                  >
                    {f.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
