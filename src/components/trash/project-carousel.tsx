"use client";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import clsx from "clsx";
import { project } from "@/lib/projects";
import { Image_Prd } from "../container/project_elements/image_prd";
import { Prd_Content } from "../container/project_elements/prd_content";

export function Project_Carousel() {
  return (
    <section className=" flex w-full py-10 sm:py-[100px] flex-col border-b border-b-grey-30 px-5 md:px-24.5 items-start justify-start">
      <Carousel className="w-full gap-8 sm:gap-12 flex flex-col p-0 ">
        <div className="flex w-full justify-between items-center ">
          <h2 className="font-san text-header font-bold sm:text-[40px] text-xl xs:text-[26px] sm:leading-14">
            Selected Projects
          </h2>
          <div className="flex items-center relative sm:justify-center sm:w-10 w-0">
            <CarouselPrevious className=" sm:size-12 sm:-left-30 -left-22" />
            <CarouselNext className="sm:size-12 sm-left-5 -left-10" />
          </div>
        </div>

        <CarouselContent className="items-start ">
          {project.map((prd, id) => (
            <CarouselItem key={id} className={clsx(" self-start    ")}>
              <div className="flex  flex-col items-start sm:gap-12 gap-8 min-h-0">
                {prd.img && <Image_Prd prd={prd} />}
                <Prd_Content prd={prd} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
