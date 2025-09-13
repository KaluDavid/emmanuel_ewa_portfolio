import { Btn } from "@/components/ui/buttons/btn";
import { Filled_Btn } from "@/components/ui/buttons/filled-btn";
import clsx from "clsx";
import React from "react";

export const Emmanuel = ({ className }: { className?: string }) => {
  return (
    <div className={clsx("flex flex-col gap-6 text-left", className)}>
      <span className="flex flex-col gap-4 sm:gap-6">
        {" "}
        <h2 className="sm:text-[40px] text-[26px] font-semibold font-sans">
          I am Ugobo Emmanuel, a Data Analyst and a Business Intelligence
          Strategist.
        </h2>
        <article className="font-normal text-base sm:text-xl font-onest">
          I love transforming raw data into strategic insights that help
          businesses optimize their operations, improve efficiency, and drive
          growth.
        </article>
      </span>

      <div className="flex items-center sm:flex-row flex-col gap-6 sm:gap-8  w-full">
        <Filled_Btn
          className="w-full"
          href="mailto:emmanuelewa45@gmail.com"
          text="Discuss a project"
        />
        <Btn
          href={
            "https://docs.google.com/document/d/1vRXrJuoMyvjPapHuKd2S2V92kZx8NlExjn2TPkci_kI/edit?usp=drive_link"
          }
          text="View my CV"
          className="w-full"
        />
      </div>
    </div>
  );
};
