"use client";
import Link from "next/link";
import { Social_Media } from "./social-media";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];
export const Nav = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  const pathname = usePathname();
  return (
    <nav
      className={clsx(
        "md:items-center items-start justify-start md:justify-center gap-12 pl-4 md:flex-row flex-col flex  sm:text-base font-sans text-2xl sm:font-normal max-sm:w-full",
        className
      )}
    >
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            onClick={onClick}
            key={link.name}
            href={link.href}
            className={clsx(
              isActive
                ? "text-button-color border-b-2 flex items-center justify-center w-24 max-sm:pb-1 sm:w-[55px] border-b-button-color"
                : "text-header",
              "hover:text-button-color transition-colors"
            )}
          >
            {link.name}
          </Link>
        );
      })}
      <Link
        href={
          "https://docs.google.com/document/d/1vRXrJuoMyvjPapHuKd2S2V92kZx8NlExjn2TPkci_kI/edit?usp=drive_link"
        }
        onClick={onClick}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-button-color transition-colors"
      >
        Resume
      </Link>
      <Social_Media onClick={onClick} />
    </nav>
  );
};
