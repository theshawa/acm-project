"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { FC } from "react";
import { Disk } from "./disk";

export const AlbumSection: FC = () => {
  useGSAP(() => {
    gsap.to(".album-section .scroll-appear *", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: { trigger: ".album-section", start: "top 80%" },
    });
  });
  return (
    <section className="pt-20 lg:pt-0 relative overflow-hidden md:-top-[20vh] flex flex-col lg:flex-row album-section">
      <div className="flex flex-col lg:flex-row page-space-x items-center md:items-start xl:items-center">
        <div className="flex flex-col max-w-lg lg:max-w-none lg:w-[30vw] mb-10 md:mb-0 scroll-appear">
          <h1 className="opacity-0 translate-y-5">THE LAST SHIP</h1>
          <h2 className="mt-1 uppercase text-2xl md:text-3xl font-antonio font-bold opacity-0 translate-y-5">
            Broadway Musical
          </h2>
          <p className="mt-5 opacity-0 translate-y-5">
            In 2013, Sting released the album The Last Ship, which drew
            inspiration from his childhood. He spent his early years not far
            from the shipyards of Wallsend, a Newcastle neighborhood. Singer and
            actor Jimmy Nail contributed vocals to the album and he also helped
            Sting develop a musical based on the album.
          </p>
          <Link href="#" className="btn mt-10 opacity-0 translate-y-5">
            Discover More
          </Link>
        </div>
        <Disk />
      </div>
    </section>
  );
};
