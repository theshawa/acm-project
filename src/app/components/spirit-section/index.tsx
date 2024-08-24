"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { FC, useRef } from "react";
import coverImage from "./cover.png";

export const SpiritSection: FC = () => {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".scroll-appear-box",
            start: "top 80%",
          },
        })
        .to(".scroll-appear-box", {
          opacity: 1,
          y: 0,
          duration: 1,
        })
        .to(
          ".scroll-appear-box *",
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.3,
          },
          "-=0.5"
        );
      mm.add("screen and (min-width: 1024px)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".scroll-appear-box",
              start: "top 80%",
            },
          })
          .to(".animate-image", {
            opacity: 1,
            duration: 1,
          })
          .to(".animate-image", {
            y: -100,
            duration: 1,
            scrollTrigger: {
              trigger: ".animate-image",
              start: "top 80%",
              scrub: 1,
            },
          });
      });
      mm.add("screen and (max-width: 1023px)", () => {
        gsap.to(".animate-image", {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".animate-image",
            start: "top 80%",
          },
        });
      });
    },
    { scope: container }
  );
  return (
    <section
      ref={container}
      className="page-space-x pt-20 md:pt-32 flex flex-col items-center text-center"
    >
      <div className="flex flex-col items-center w-full max-w-xl bg-stone-200/90 backdrop-blur-sm px-5 md:px-20 py-10 md:py-20 relative z-10 scroll-appear-box opacity-0 translate-y-5">
        <svg
          width="53"
          height="34"
          viewBox="0 0 53 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-0 translate-y-5"
        >
          <path
            d="M0 33.375V15.3125L6.375 0H19.5625L15.4375 14.75H23.375V33.375H0ZM29.3125 33.375V15.3125L35.6875 0H48.875L44.75 14.75H52.6875V33.375H29.3125Z"
            fill="#0C0A09"
          />
        </svg>
        <h1 className="mt-4 opacity-0 translate-y-5">The Spirit</h1>
        <p className="mt-8 opacity-0 translate-y-5">
          I don't know what it is. But it's something I need to connect with on
          a regular basis and the roots for me are music and my relationships. I
          don't know what it is. I only have a limited brain. I'm just a human
          being.
          <br />
          <br />
          Learn to enjoy every minute of your life. Be happy now. Don't wait for
          something outside of yourself to make you happy in the future. Think
          how really precious is the time you have to spend, whether it's at
          work or with your family. Every minute should be enjoyed and savored.
        </p>
      </div>
      <Image
        src={coverImage}
        alt="Cover Image"
        className="object-cover mt-10 md:mt-0 md:-top-[20vh] relative animate-image"
        width={1020}
        height={726}
        quality={100}
        placeholder="blur"
      />
    </section>
  );
};
