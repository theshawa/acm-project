import Image, { StaticImageData } from "next/image";
import { FC } from "react";

export const Slide: FC<{ image: StaticImageData }> = ({ image }) => {
  return (
    <Image
      src={image}
      alt="Slide Image"
      className="object-cover"
      width={490}
      height={533}
      quality={100}
      placeholder="blur"
    ></Image>
  );
};
