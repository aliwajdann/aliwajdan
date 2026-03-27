export function shouldReduceMotion(): boolean {
  if (typeof window === "undefined") {
    return true;
  }

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const isMobileViewport = window.matchMedia("(max-width: 768px)").matches;
  const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

  return prefersReducedMotion || isMobileViewport || isCoarsePointer;
}
