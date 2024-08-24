"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FC, useRef } from "react";
import slide1Img from "./s1.png";
import slide2Img from "./s2.png";
import slide3Img from "./s3.png";
import slide4Img from "./s4.png";
import slide5Img from "./s5.png";
import slide6Img from "./s6.png";

import { Slide } from "./slide";
export const PersonalLifeSection: FC = () => {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.to(".scroll-appear *", {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: "h1",
          start: "top 80%",
        },
      });
    },
    { scope: container }
  );
  return (
    <section
      ref={container}
      className="py-[10vh] md:py-[16vh] mt-20 md:mt-32 bg-stone-950 text-stone-50 rounded-t-xl"
    >
      <div className="flex flex-col lg:flex-row page-space-x">
        <div className="flex flex-col w-full lg:max-w-[40vw] lg:sticky lg:top-[16vh] h-max mx-auto lg:mx-0 scroll-appear">
          <h1 className="opacity-0 translate-y-5">Personal Life</h1>
          <p className="mt-10 text-stone-300 opacity-0 translate-y-5">
            In addition to his musical career, Sting has been active in human
            rights and other social issues. He and his wife, Trudie Styler, have
            been married since 1992. The couple has four children. Sting also
            has two other children from his first marriage.
            <br />
            <br />
            In addition to his musical career, Sting has been active in human
            rights and other social issues. He and his wife, Trudie Styler, have
            been married since 1992. The couple has four children. Sting also
            has two other children from his first marriage.
            <br />
            <br />
            In addition to his musical career, Sting has been active in human
            rights and other social issues. He and his wife, Trudie Styler, have
            been married since 1992. The couple has four children. Sting also
            has two other children from his first marriage.
          </p>
        </div>
        <div className="flex flex-col space-y-10 lg:max-w-[40vw] ml-auto mr-auto lg:mr-0 max-w-lg w-full mt-20 lg:mt-0 lg:pt-[50vh]">
          <Slide image={slide1Img} />
          <Slide image={slide2Img} />
          <Slide image={slide3Img} />
          <Slide image={slide4Img} />
          <Slide image={slide5Img} />
          <Slide image={slide6Img} />
        </div>
      </div>
    </section>
  );
};
