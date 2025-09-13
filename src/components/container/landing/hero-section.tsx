import clsx from "clsx";
import React from "react";
import { GoDotFill } from "react-icons/go";
import { Btn } from "../../ui/buttons/btn";
import Image from "next/image";

export const Hero_Section = () => {
  const countColors =
    "font-bold text-2xl sm:text-[40px] font-sans sm:leading-14";
  const expColor = "sm:text-xl text-xs font-normal font-onest";
  return (
    <section className="flex py-10 sm:py-24.5 flex-col gap-12.5 ">
      <div className="md:px-24.5 px-5 text-text flex flex-col items-start text-left justify-start sm:gap-6 gap-4">
        <span className="flex items-center  w-full  sm:gap-6.5 font-onest gap-4 font-normal text-sm  sm:text-2xl text-text">
          <span>Data Analyst</span>
          <GoDotFill className="text-button-color size-sm" />
          <span>Business Intelligence Strategist</span>
        </span>
        <h1 className="font-sans text-[26px] sm:text-[70px] font-bold leading-10 sm:leading-[100px]">
          Data Analyst passionate about turning raw data into actionable
          business insights.
        </h1>
        <Btn
          href="mailto:emmanuelewa45@gmail.com"
          text="Send me an email"
          className="w-full sm:w-[250px] [&_span]:flex [&_span]:gap-4 [&_span]:items-center"
        >
          Send me an email{" "}
          <Image src={"/mail.svg"} alt="gmail logo" width={20} height={20} />
        </Btn>
      </div>
      <div className="flex w-full  bg-person1 items-center justify-center">
        <div className="flex items-start px-5 md:px-[149px] justify-between w-full py-8 *:flex *:flex-col *:gap-3 *:items-center text-button-color">
          <span>
            <span className={clsx(countColors)}>5+</span>
            <span className={clsx(expColor)}>Years Experience</span>
          </span>{" "}
          <span>
            <span className={clsx(countColors)}>10+</span>
            <span className={clsx(expColor)}>Projects Completed </span>
          </span>{" "}
          <span>
            <span className={clsx(countColors)}>$5M+</span>
            <span className={clsx(expColor)}>Value Generated</span>
          </span>
        </div>
      </div>
    </section>
  );
};
