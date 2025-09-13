import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { CiLinkedin, CiMail } from "react-icons/ci";

export const Social_Media = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <ul
      className={clsx(
        "sm:*:text-[26px] *:text-4xl *:text-grey-80 flex items-center gap-8  *:cursor-pointer *:hover:text-button-color  *:transition-colors",
        className
      )}
    >
      <Link
        href="https://www.linkedin.com/in/emmanuel-ewa-1a3b5a194"
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        <CiLinkedin />
      </Link>
      <Link
        href="mailto:emmanuelewa45@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        <CiMail />
      </Link>
    </ul>
  );
};
