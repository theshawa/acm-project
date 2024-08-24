"use client";

import { useGSAP } from "@gsap/react";
import { useLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { FC, useRef } from "react";
import bgImage from "./bg.png";
export const HeroSection: FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const lenis = useLenis();
  useGSAP(
    () => {
      let mm = gsap.matchMedia();
      mm.add("screen and (min-width: 1024px)", () => {
        gsap
          .timeline()
          .to(".animate-bar", {
            delay: 1.5,
            opacity: 1,
            y: 0,
            duration: 1,
          })
          .to(
            ".animate-content *",
            {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.2,
            },
            "-=0.5"
          );
      });
      mm.add("screen and (max-width: 1023px)", () => {
        gsap
          .timeline()
          .to(".animate-bar", {
            delay: 0.5,
            opacity: 1,
            duration: 0.6,
          })
          .to(".animate-content *", {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.1,
          });
      });
    },
    { scope: container }
  );
  return (
    <section
      ref={container}
      className="flex min-h-[100vh] bg-stone-950 text-stone-50 relative overflow-hidden"
    >
      <Image
        alt="Hero Bg"
        src={bgImage}
        fill
        sizes="100vw"
        quality={100}
        className="object-cover object-center"
        priority
        placeholder="blur"
      />
      <div className="page-space-x flex">
        <div className="flex flex-col my-auto relative animate-content">
          <h1 className="opacity-0 translate-y-[20px]">The Sting</h1>
          <p className="mt-5 text-stone-300 max-w-md opacity-0 translate-y-[20px]">
            He's one of the world's most successful musicians, introduced Guy
            Ritchie to Madonna and has just been made a CBE. He has also written
            his memoirs - and doing it plunged him into depression.
          </p>
          <h2 className="mt-16 font-antonio text-xl md:text-2xl opacity-0 translate-y-[20px]">
            So why does everyone mock him?
          </h2>
          <Link href="#" className="btn mt-5 opacity-0 translate-y-[20px]">
            Discover More
          </Link>

          <button
            onClick={() => {
              lenis?.scrollTo(window.innerHeight * 0.7);
            }}
            className="size-20 flex items-center justify-center group hover:text-stone-400 transition-colors active:scale-90 duration-300 ease-in-out text-stone-500 relative mt-20 text-xs uppercase text-center opacity-0 translate-y-5"
          >
            <div className="absolute w-full h-full rounded-full border group-hover:border-stone-700 transition-colors duration-300 ease-in-out border-dashed border-stone-800 animate-spin-slow"></div>
            <span>
              SCROLL
              <br /> DOWN
            </span>
          </button>
        </div>
        <div className="lg:ml-auto lg:-translate-y-full opacity-0 h-[40vh] animate-bar -left-1/4 lg:left-0 -rotate-45 lg:rotate-0 -bottom-[35%] lg:bottom-0 lg:h-full bg-stone-50/10 absolute lg:relative lg:w-[40vw] lg:max-w-lg w-[200vw]"></div>
      </div>
    </section>
  );
};
