import clsx from "clsx";
import React from "react";

export const Global_Container = ({
  head,
  children,
  className,
}: {
  head: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={clsx(
        "flex text-header items-start px-5 py-10 lg:px-24.5 sm:py-[100px] md:flex-row flex-col max-sm:gap-25 justify-between w-full",
        className
      )}
    >
      <div className="flex flex-col gap-2 items-end relative ">
        <h1 className="sm:max-w-[319px] w-full text-[32px] gap-8 sm:text-[56px] font-semibold  font-sans ">
          {head}
        </h1>

        <span className="*:h-0.5 flex-col *:bg-button-color  flex gap-2 absolute sm:-bottom-10 -bottom-5 sm:left-10 left-32">
          <span className="-rotate-[12.42deg] -ml-2 w-[150px] sm:w-[280px]"></span>
          <span className="-rotate-[22.56deg] max-sm:-mt-2 w-[140px] sm:w-[250px]"></span>
        </span>
      </div>

      <div className="flex flex-col items-start justify-between sm:gap-16 gap-7 sm:w-[588px] w-full">
        {children}
      </div>
    </section>
  );
};
