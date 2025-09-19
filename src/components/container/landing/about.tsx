import Image from "next/image";
import React from "react";
import { Emmanuel } from "./emmanuel";

export const About_Section = () => {
  return (
    <section className="border-y-[0.6px] w-full py-10 px-5 sm:py-[100px] lg:gap-[99px] gap-9 gap flex  lg:flex-row flex-col  items-center sm:justify-between justify-center lg:px-24.5 border-y-grey-30 text-text">
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
        <div className="absolute bottom-15 sm:bottom-13 overflow-x-hidden  w-[105%] md:left-5 md:bottom-30 lg:bottom-13 left-0 sm:w-[500px] sm:left-22 md:w-full py-2  bg-background border border-button-color items-end justify-end flex -rotate-[15.51deg] font-semibold font-onest text-sm sm:text-base ">
          <span className=" items-end justify-end float-end animate-scrolling -mr-80 flex w-full  ">
            {" "}
            Currently making huge impact at Maseliz
          </span>
        </div>
      </fieldset>
    </section>
  );
};
