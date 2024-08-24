"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { FC, ReactNode, useEffect, useRef } from "react";

export const SmoothScrolling: FC<{ children: ReactNode }> = ({ children }) => {
  const lenisRef = useRef<any>();
  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });
  return (
    <ReactLenis root options={{ lerp: 0.1 }} ref={lenisRef} autoRaf={false}>
      {children}
    </ReactLenis>
  );
};
