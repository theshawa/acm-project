import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { FC, useRef } from "react";
import coverImage from "./cover.jpg";
export const Disk: FC = () => {
  const disk = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.fromTo(
        disk.current,
        {
          rotate: 60,
        },
        {
          rotate: 0,
          duration: 1,
          scrollTrigger: {
            trigger: disk.current,
            start: "top 80%",
            scrub: 1,
          },
        }
      );
    },
    { scope: disk }
  );
  return (
    <div
      ref={disk}
      className="rounded-full w-[120vw] sm:-right-[20%] sm:ml-auto disk md:w-[70vw] aspect-square relative overflow-hidden flex items-center justify-center"
    >
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
