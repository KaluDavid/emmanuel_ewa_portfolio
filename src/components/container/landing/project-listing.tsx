"use client";
import { useState } from "react";
import clsx from "clsx";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { project } from "@/lib/projects";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Prd_Content } from "../project_elements/prd_content";
import { Image_Prd } from "../project_elements/image_prd";

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -300 : 300, opacity: 0 }),
};

export const Project_Listing = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isActive, setIsActive] = useState("next");
  const [direction, setDirection] = useState<number>(0);
  const reduce = useReducedMotion();
  const currItem = project[currentIndex];
  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % project.length);
    setIsActive("prev");
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? project.length - 1 : prev - 1));
    setIsActive("next");
  };
  return (
    <>
      <section className=" flex w-full py-10 sm:py-[100px] flex-col border-b border-b-grey-30 px-5 md:px-24.5 items-start justify-start">
        <div className="w-full gap-8 sm:gap-12 flex flex-col p-0 ">
          <div className="flex w-full justify-between items-center ">
            <h2 className="font-san text-header font-bold sm:text-[40px] text-xl xs:text-[26px] sm:leading-14">
              Selected Projects
            </h2>
            <div className="flex items-center relative sm:justify-center *:rounded-full *:border sm:*:p-4 sm:*:size-13 *:p-2 *:size-8 gap-3 sm:gap-8 *:cursor-pointer">
              <ArrowLeft
                onClick={handleNext}
                className={clsx(
                  isActive === "prev" ? "opacity-100" : "opacity-50"
                )}
              />
              <ArrowRight
                onClick={handlePrev}
                className={clsx(
                  isActive === "next" ? "opacity-100" : "opacity-50"
                )}
              />
            </div>
          </div>

          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial={reduce ? { opacity: 0 } : "enter"}
              animate="center"
              exit={reduce ? { opacity: 0 } : "exit"}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="sm:gap-12 gap-8 flex flex-col"
            >
              {currItem.img && <Image_Prd prd={currItem} />}
              <Prd_Content prd={currItem} />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};
