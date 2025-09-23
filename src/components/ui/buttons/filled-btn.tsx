import React from "react";
import { Button } from "../button";
import Link from "next/link";
import clsx from "clsx";

export const Filled_Btn = ({
  text,
  href,
  className,
}: {
  text: string;
  href?: string;
  className?: string;
}) => {
  return (
    <Link
      href={`${href}`}
      target="_blank"
      rel="noopener noreferrer"
      className="sm:w-[208px] w-full"
    >
      <Button
        className={clsx(
          "group rounded-[6px] relative inline-flex cursor-pointer items-center justify-center overflow-hidden bg-gradient-to-tr from-blue-700 to-blue-400 px-7 h-[48px] font-onest text-white shadow-sm hover:text-button-color hover:border hover:border-button-color",
          className
        )}
      >
        <span className="absolute h-0 w-0 bg-white transition-all duration-200 ease-out group-hover:h-full group-hover:w-full"></span>
        <span className="relative">{text}</span>
      </Button>
    </Link>
  );
};
