"use client";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion";
import { project } from "@/lib/projects";
import Link from "next/link";

export function Project_Carousel() {
  return (
    <section className=" flex w-full py-10 sm:py-[100px] flex-col border-b border-b-grey-30 px-5 md:px-24.5 items-start justify-start">
      <Carousel className="w-full gap-10 sm:gap-12 flex flex-col p-0 ">
        <div className="flex w-full justify-between items-center ">
          <h2 className="font-san text-header font-bold sm:text-[40px] text-xl xs:text-[26px] sm:leading-14">
            Selected Projects
          </h2>
          <div className="flex items-center relative sm:justify-center mr-13 sm:w-10 w-0">
            <CarouselPrevious className=" sm:size-12" />
            <CarouselNext className="sm:size-12 " />
          </div>
        </div>

        <CarouselContent>
          {project.map((prd, id) => (
            <CarouselItem key={id} className="w-full ">
              <div className="flex  flex-col items-start gap-12">
                <Link href={`/projects/${prd.id}`}>
                  <fieldset
                    className={clsx(
                      "w-full rounded-[6px] sm:rounded-[20px] md:px-[54px] px-4.5 py-6 sm:py-[76px]",
                      prd.color
                    )}
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                      className="block"
                    >
                      <Image
                        src={prd.img}
                        alt="Projects"
                        width={972}
                        height={625}
                        className="w-full object-contain"
                      />
                    </motion.span>
                  </fieldset>
                </Link>
                <div className="flex md:flex-row flex-col md:px-5 items-start text-button-color justify-between w-full gap-3 sm:gap-8 text-left">
                  <div className="flex flex-col gap-6">
                    <h2 className=" font-sans font-bold text-2xl sm:text-[32px] sm:leading-11.5 ">
                      {prd.title}
                    </h2>
                    <p className="text-header text-base sm:leading-7 leading-6 sm:text-xl font-normal font-onest">
                      {prd.description}
                    </p>
                  </div>

                  <p className="font-onest text-sm sm:text-xl font-normal whitespace-nowrap">
                    {prd.tools}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
