import { useState } from "react";
import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Reveal, Pill, Btn, Section, Em } from "../shared";
import { FAQS } from "../../constants/data/faqs";

export function FAQ() {
  const { isMobile, isSmallMobile, isLargeDesktop } = useViewport();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = FAQS[activeIndex] || FAQS[0];

  return (
    <Section id="faq">
      <Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
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
                marginBottom: 12,
                fontFamily: font.sans,
              }}
            >
              End-to-end LLM solutions from strategy to implementation
            </p>

            <div
              aria-hidden="true"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                margin: `0 0 ${isSmallMobile ? 16 : 20}px`,
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

            <div style={{ borderTop: `1px solid ${T.ink12}` }}>
              {FAQS.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={item.q}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      borderBottom: `1px solid ${T.ink12}`,
                      cursor: "pointer",
                      padding: isSmallMobile ? "14px 0" : "16px 0",
                      textAlign: "left",
                      fontFamily: font.sans,
                      fontSize: isSmallMobile ? 13 : 14,
                      fontWeight: 500,
                      lineHeight: 1.45,
                      color: isActive ? T.ink : T.ink40,
                      transition: "color .2s",
                    }}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {item.q}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            style={{
              borderTop: `1px solid ${T.ink12}`,
              borderBottom: `1px solid ${T.ink12}`,
              padding: isSmallMobile ? "16px 0 20px" : isMobile ? "18px 0 22px" : "22px 0 26px",
            }}
          >
            <h3
              style={{
                margin: "0 0 12px",
                fontFamily: font.serif,
                fontSize: isSmallMobile ? 26 : isMobile ? 30 : isLargeDesktop ? 44 : 34,
                fontWeight: 600,
                lineHeight: 1.14,
                letterSpacing: "-.01em",
                color: T.ink,
              }}
            >
              {activeItem.q}
            </h3>

            <p
              style={{
                margin: 0,
                padding: "0 0 18px",
                fontSize: 14,
                lineHeight: 1.7,
                color: T.ink60,
                fontFamily: font.sans,
                maxWidth: 760,
              }}
            >
              {activeItem.a}
            </p>

            <Btn dark href="#contact">
              talk to us
            </Btn>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
