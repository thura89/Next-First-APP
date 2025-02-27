import type { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroProps {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
}

export default function Hero(props: HeroProps) {
  return (
    <div className="h-screen relative">
      <div className="absolute -z-10 inset-0">
        <Image
          src={props.imgData}
          alt={props.imgAlt}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className=" absolute inset-0 bg-gradient-to-r from-slate-800" />
      </div>
      <div className=" justify-center align-center flex pt-48">
        <h1 className=" text-white text-6xl">{props.title}</h1>
      </div>
    </div>
  );
}
