import React, { ReactNode } from "react";
import { Button } from "../button";
import clsx from "clsx";
import Link from "next/link";

export const Btn = ({
  text,
  className,
  children,
  href,
}: {
  text: string;
  className?: string;
  children?: ReactNode;
  href: string;
}) => {
  return (
    <Link
      href={`${href}`}
      target="_blank"
      rel="noopener noreferrer"
      className="sm:w-[208px] w-full flex items-center"
    >
      <Button
        className={clsx(
          "group w-full relative inline-flex items-center justify-center overflow-hidden rounded-[6px]  h-[48px] cursor-pointer border border-button- color bg-white px-7 font-onest text-button-color hover:text-white hover:bg-button-color",
          className
        )}
      >
        <span className="absolute h-0 w-0 bg-button-color transition-all duration-200 ease-out group-hover:h-full group-hover:w-full"></span>
        <span className="relative">{children ? text && children : text}</span>
      </Button>
    </Link>
  );
};
