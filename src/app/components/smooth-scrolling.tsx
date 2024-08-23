"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { FC, ReactNode } from "react";

export const SmoothScrolling: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ReactLenis root options={{ lerp: 0.1 }}>
      {children}
    </ReactLenis>
  );
};
