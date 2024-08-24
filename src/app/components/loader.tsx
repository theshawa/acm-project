"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FC } from "react";

export const PageLoader: FC = () => {
  useGSAP(() => {
    gsap
      .timeline()
      .to(".page-loader", {
        opacity: 0,
        duration: 2,
        delay: 0.5,
        display: "none",
      })
      .to(".page-loader", { duration: 0, display: "none" });
  });
  return (
    <div className="w-full h-full fixed left-0 top-0 z-50 bg-stone-950 page-loader flex items-end justify-center text-center p-5">
      <p className="text-xs text-stone-800">
        Developed by Theshawa Dasun for ACM UCSC
      </p>
    </div>
  );
};
