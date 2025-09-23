import Link from "next/link";
import React from "react";

export const Prd_Content = ({ prd }: { prd: any }) => {
  return (
    <div className="flex md:flex-row flex-col md:px-5 items-start text-button-color justify-between w-full gap-3 sm:gap-8 text-left">
      <div className="flex flex-col gap-6">
        <h2 className=" font-sans font-bold text-2xl sm:text-[32px] sm:leading-11.5 ">
          {prd.title}
        </h2>
        <p className="text-header text-base sm:leading-7 leading-6 sm:text-xl font-normal font-onest">
          {prd.description}
        </p>

        <Link
          href={`/projects/${prd.id}`}
          className="font-sans w-fit font-bold text-xl underline sm:leading-11.5"
        >
          VIEW PROJECT
        </Link>
      </div>

      <p className="font-onest text-sm sm:text-xl font-normal whitespace-nowrap">
        {prd.tools}
      </p>
    </div>
  );
};
