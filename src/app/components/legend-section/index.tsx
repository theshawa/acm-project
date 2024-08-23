"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import coverImage from "./cover.png";
export const LegendSection: FC = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    gsap.to(".legend-section .scroll-appear-text *", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: { trigger: ".legend-section", start: "top 80%" },
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".legend-section .scroll-appear-box",
          start: "top 80%",
        },
      })
      .to(".legend-section .scroll-appear-box", {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
      })
      .to(
        ".legend-section .scroll-appear-box *",
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
        },
        "-=0.5"
      );
    mm.add("screen and (min-width: 1024px)", () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".legend-section .scroll-appear-box",
            start: "top 80%",
          },
        })
        .to(".legend-image", {
          opacity: 1,
          duration: 1,
        })
        .to(".legend-image", {
          y: -100,
          duration: 1,
          scrollTrigger: {
            trigger: ".legend-section .scroll-appear-box",
            start: "top 80%",
            scrub: 1,
          },
        });
    });
    mm.add("screen and (max-width: 1023px)", () => {
      gsap.to(".legend-image", {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".legend-section .scroll-appear-box",
          start: "top 80%",
        },
      });
    });
  });
  return (
    <section className="page-space-x pt-20 md:pt-32 legend-section">
      <div className="flex flex-col lg:flex-row relative z-10">
        <div className="flex flex-col scroll-appear-text">
          <h1 className="opacity-0 translate-y-5">The Legend</h1>
          <p className="mt-5 max-w-md opacity-0 translate-y-5">
            Gordon Sumner, better known as Sting, was born in Newcastle upon
            Tyne, England, on October 2, 1951. He is best known for his singing
            career, both with the 1980s band The Police and as a solo artist.
            Sting is also a distinguished songwriter and actor, as well as an
            active philanthropist in causes from environmentalism to human
            rights.
          </p>
          <Link href="#" className="btn mt-8 md:mt-10 opacity-0 translate-y-5">
            Learn More
          </Link>
        </div>
        <div className="flex flex-col ml-auto mr-auto md:mr-0 px-5 md:px-10 py-16 md:py-20 bg-stone-200/90 backdrop-blur-sm mt-16 lg:mt-[20vh] lg:max-w-lg  scroll-appear-box opacity-0 translate-y-20">
          <h1 className="opacity-0 translate-y-5">
            Acting and Scoring in Films
          </h1>
          <p className="mt-5 max-w-md opacity-0 translate-y-5">
            Gordon Sumner, better known as Sting, was born in Newcastle upon
            Tyne, England, on October 2, 1951. He is best known for his singing
            career, both with the 1980s band The Police and as a solo artist.
            Sting is also a distinguished songwriter and actor, as well as an
            active philanthropist in causes from environmentalism to human
            rights.
          </p>
          <Link href="#" className="btn mt-8 md:mt-10 opacity-0 translate-y-5">
            Learn More
          </Link>
        </div>
      </div>
      <Image
        src={coverImage}
        alt="Cover Image"
        width={750}
        height={750}
        quality={100}
        className="w-full md:w-[60vw] opacity-0 legend-image xl:w-[40vw] h-auto object-cover object-center lg:ml-auto lg:mr-[20vw] mt-10 lg:mt-0 relative md:-top-[30vh] xl:-top-[40vh]"
        placeholder="blur"
      />
    </section>
  );
};
