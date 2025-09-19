import clsx from "clsx";
import React from "react";
import { GoDotFill } from "react-icons/go";
import { Btn } from "../../ui/buttons/btn";
import Image from "next/image";

const carousel = [
  { num: "5+", text: "Years of Experience" },
  { num: "10+", text: "Projects Completed" },
  { num: "$5m+", text: "Value Generated" },
];
export const Hero_Section = () => {
  const countColors =
    "font-bold text-2xl sm:text-[40px] font-sans sm:leading-14";
  const expColor = "sm:text-xl text-xs font-normal font-onest";
  return (
    <section className="flex py-10 sm:py-24.5 flex-col gap-12.5 ">
      <div className="lg:px-24.5 px-5 text-text flex flex-col items-start text-left justify-start sm:gap-6 gap-4">
        <span className="flex items-center  w-full  sm:gap-6.5 font-onest gap-4 font-normal text-sm  sm:text-2xl text-text whitespace-nowrap">
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

      <div className="flex w-full  bg-person1 items-end justify-end overflow-hidden">
        <div className="flex items-end -mr-[65rem] justify-end w-full sm:py-11 py-8 text-button-color whitespace-nowrap gap-20 lg:gap-60 lg:animate-scroll-slow animate-scroll-slower">
          {carousel.map((arr, index) => (
            <span
              key={`1-${index}`}
              className="flex items-center  gap-6.5 font-san font-bold sm:text-3xl"
            >
              <span className="flex flex-col items-center text-button-color">
                <span className={clsx(countColors)}>{arr.num}</span>
                <span className={clsx(expColor)}>{arr.text}</span>
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
