import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined
  );

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    // Avoid setting state synchronously within the effect body.
    const computeAndSet = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    const onChange = () => {
      computeAndSet();
    };

    mql.addEventListener("change", onChange);
    queueMicrotask(computeAndSet);

    return () => mql.removeEventListener("change", onChange);
  }, []);


  return !!isMobile;
}
