import { useReveal } from "../../hooks/useReveal";

export function Reveal({ children, delay = 0 }) {
  const [ref, isVisible] = useReveal();
  const ease = "cubic-bezier(0.22,1,0.36,1)";

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateY(0) scale(1)"
          : "translateY(22px) scale(0.985)",
        transition: `opacity .72s ${ease} ${delay}s, transform .72s ${ease} ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
