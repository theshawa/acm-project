import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { FC } from "react";
import coverImage from "./cover.jpg";
export const Disk: FC = () => {
  useGSAP(() => {
    gsap.to(".disk", {
      rotate: 360,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: { trigger: ".album-section", start: "top 80%", scrub: 1 },
    });
  });
  return (
    <div className="rounded-full w-[120vw] sm:-right-[20%] sm:ml-auto disk md:w-[70vw] aspect-square relative overflow-hidden flex items-center justify-center">
      <Image
        alt="Cover Image"
        src={coverImage}
        quality={100}
        placeholder="blur"
        fill
        sizes="50vw"
        className="object-cover"
      />
      <div className="w-[40%] aspect-square rounded-full bg-stone-50/20 backdrop-blur-sm border-2 border-stone-100/20 absolute"></div>
      <div className="w-[15%] aspect-square rounded-full bg-stone-800/80 backdrop-blur-sm border-4 border-stone-900/20 absolute"></div>
    </div>
  );
};
