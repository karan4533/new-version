import { useReveal } from "../../hooks/useReveal";

export function Reveal({
  children,
  delay = 0,
  duration = 0.72,
  distance = 22,
  scaleFrom = 0.985,
  blurFrom = 8,
  style,
}) {
  const [ref, isVisible] = useReveal();
  const ease = "cubic-bezier(0.22,1,0.36,1)";
  const hiddenTransform = `translateY(${distance}px) scale(${scaleFrom})`;

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) scale(1)" : hiddenTransform,
        filter: isVisible || blurFrom <= 0 ? "blur(0px)" : `blur(${blurFrom}px)`,
        transition: [
          `opacity ${duration}s ${ease} ${delay}s`,
          `transform ${duration}s ${ease} ${delay}s`,
          `filter ${duration}s ${ease} ${delay}s`,
        ].join(", "),
        willChange: "opacity, transform, filter",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
