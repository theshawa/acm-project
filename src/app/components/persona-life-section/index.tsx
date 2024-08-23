"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FC } from "react";
import slide1Img from "./s1.png";
import slide2Img from "./s2.png";
import { Slide } from "./slide";
export const PersonalLifeSection: FC = () => {
  useGSAP(() => {
    gsap.to(".personal-life-section .scroll-appear *", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".personal-life-section h1",
        start: "top 80%",
      },
    });
  });
  return (
    <section className="py-[10vh] lg:py-[20vh] mt-20 md:mt-32 bg-stone-950 text-stone-50 rounded-t-xl personal-life-section">
      <div className="flex flex-col lg:flex-row page-space-x">
        <div className="flex flex-col w-full lg:max-w-[30vw] lg:sticky top-[20vh] h-max max-w-lg mx-auto lg:mx-0 scroll-appear">
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
          <Slide image={slide1Img} />
          <Slide image={slide2Img} />
          <Slide image={slide1Img} />
          <Slide image={slide2Img} />
        </div>
      </div>
    </section>
  );
};
