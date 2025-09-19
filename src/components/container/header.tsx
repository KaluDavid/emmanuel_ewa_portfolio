"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { Nav } from "../ui/nav";
import { AnimatePresence, motion } from "framer-motion";
import { Filled_Btn } from "../ui/buttons/filled-btn";
import { Btn } from "../ui/buttons/btn";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenu = () => {
    setTimeout(() => {
      setIsOpen((prev) => !prev);
    }, 200);
  };
  return (
    <>
      <header className="sm:py-4 flex fixed bg-white w-full  items-center px-5 py-4 lg:px-24.5 border-b-[0.5px] border-grey-30 z-50 text-header justify-between ">
        <Link href="/">
          <h1 className="flex gap-2 items-center">
            <Image
              src="/Logo.svg"
              alt="logo"
              width={71}
              height={100}
              className="sm:w-full w-15.5"
            />
            <span className="font-oleo font-normal text-base sm:text-[21px]  flex flex-col justify-between">
              <span>Ugobo</span>
              <span>Emmanuel</span>
            </span>
          </h1>
        </Link>

        <Nav className="md:flex hidden" />

        <span className="block md:hidden">
          <div
            onClick={handleMenu}
            className="flex items-center flex-col *:w-[27px] *:sm:w-[35px]  sm:gap-2 cursor-pointer *:h-[2px] *:bg-black gap-2"
          >
            <>
              {isOpen ? (
                <>
                  <span className="  rotate-45  translate-y-1.5 transition-all duration-300"></span>
                  <span className="  -rotate-45 sm:-translate-y-1 -translate-y-1 transition-all duration-300"></span>
                </>
              ) : (
                <>
                  <span className="  transition-all duration-300"></span>
                  <span className="  transition-all duration-300"></span>
                  <span className="  transition-all duration-300"></span>
                </>
              )}
            </>
          </div>
        </span>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{
                opacity: { duration: 0.4 },
                x: { type: "tween", stiffness: 60, damping: 12 },
              }}
              className="flex md:hidden flex-col items-center fixed top-0  px-5 pt-40 pb-20 justify-between h-full bg-white -z-10  w-full left-0"
            >
              <Nav className="" onClick={handleMenu} />

              <div className="flex items-center flex-col gap-6 sm:gap-8 w-full           ">
                <Filled_Btn
                  href="mailto:emmanuelewa45@gmail.com"
                  text="Discuss a project"
                  className="w-full"
                />
                <Btn
                  href={
                    "https://docs.google.com/document/d/1vRXrJuoMyvjPapHuKd2S2V92kZx8NlExjn2TPkci_kI/edit?usp=drive_link"
                  }
                  text="View my CV"
                  className="w-full"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
