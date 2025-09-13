import Image from "next/image";
import React from "react";
import { Emmanuel } from "./emmanuel";

export const About_Section = () => {
  return (
    <section className="border-y-[0.6px] py-10 px-5 sm:py-[100px] gap-[99px]  flex  lg:flex-row flex-col  items-center sm:justify-between justify-center md:px-24.5 border-y-grey-30 text-text">
      <Emmanuel />
      <fieldset className="w-full items-center  justify-center flex relative">
        <Image
          src="/profile.png"
          width={400.78}
          height={408.45}
          alt="profile Image"
          className="w-full"
          loading="lazy"
        />
        <div className="absolute bottom-15 sm:bottom-13 w-full md:left-5 md:bottom-30 lg:bottom-13 xs:left-5 left-0 sm:w-[500px] sm:left-22 md:w-full py-2 md:px-4 bg-background border border-button-color text-center -rotate-[15.51deg] font-semibold font-onest text-sm sm:text-base">
          Currently making huge impact at Maseliz
        </div>
      </fieldset>
    </section>
  );
};
