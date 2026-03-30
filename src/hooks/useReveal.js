import { useEffect, useRef, useState } from "react";

const shouldReduceMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function useReveal() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(() => shouldReduceMotion());

  useEffect(() => {
    const node = ref.current;
    const prefersReducedMotion = shouldReduceMotion();

    if (!node || prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.unobserve(entry.target);
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}
