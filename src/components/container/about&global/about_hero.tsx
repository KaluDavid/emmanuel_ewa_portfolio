import Image from "next/image";
import React from "react";
import { Emmanuel } from "../landing/emmanuel";

const About_Hero = () => {
  return (
    <section className="flex flex-col items-center px-5 md:px-24.5 py-10 sm:py-[100px] gap-9 sm:gap-[72px]">
      <Image
        src="/about_Profile.png"
        width={500}
        height={510}
        alt="profile Image"
        loading="lazy"
        className="object-contain"
      />
      <Emmanuel className="items-center  *:text-center [&_article]:sm:text-2xl [&_article]:text-base [&_article]:sm:font-medium  [&_article]:font-normal [&_span]:sm:max-w-[969px] w-full [&_h2]:sm:text-[64px] [&_h2]:text-[26px]" />
    </section>
  );
};

export default About_Hero;
