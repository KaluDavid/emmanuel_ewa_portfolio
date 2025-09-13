"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import clsx from "clsx";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useState } from "react";

const testimonial = [
  {
    id: 1,
    img: "/person1.png",
    name: "Mrs. Stella Assiak",
    color: "bg-person1",
    role: "Operations Manager, Joza Global LTD",
    testimony:
      "Emmanuel didn't just deliver reports, he helped us see our operations clearly for the first time. His dashboards became essential to our decision-making process.",
  },
  {
    id: 2,
    img: "/person2.png",
    name: "Oku Ekpenyong",
    color: "bg-person2",
    role: "General Manager, Joza Global LTD",
    testimony:
      "His attention to detail is unmatched. Emmanuel caught inefficiencies we didn’t know existed and backed every recommendation with solid data.",
  },
  {
    id: 3,
    img: "/person3.png",
    name: "Joefrey Unogwa",
    color: "bg-person1",
    role: "Finance Manager, Mazelis Enterprises",
    testimony:
      "Emmanuel brings a calm, confident energy to complex problems. He explains data in a way non-technical teams can understand and act on fast.",
  },
  {
    id: 4,
    img: "/person4.png",
    name: "Ekpenyong Effiom",
    color: "bg-person4",
    role: "Head of Logistics, LafargeHolcim",
    testimony:
      "I could always count on Emmanuel to deliver clean, reliable data, no matter how complex the task. He made our audits smoother and our logistics smarter. His communication and consistency set a great example for the rest of the team.",
  },
  {
    id: 5,
    img: "/person5.png",
    name: "Samuel Archibong",
    color: "bg-person5",

    role: "Safety Lead, MDS Logistics",
    testimony:
      "Working with Emmanuel made my job easier. He understood exactly what data we needed and always delivered it with accuracy and insight.",
  },
];
export const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setSelectedIndex(api.scrollSnapList().length);

    api.on("select", () => {
      setSelectedIndex(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <section className=" py-10 sm:py-[100px] flex flex-col items-center sm:gap-18 gap-4  w-auto">
      <Carousel
        setApi={setApi}
        plugins={[Autoplay({ delay: 10000 })]}
        className="sm:w-[80%] w-[40%]  xs:w-[65%]"
      >
        <CarouselContent>
          {testimonial.map((test, id) => (
            <CarouselItem key={id}>
              <div className="flex w-full flex-col gap-0 items-center justify-center text-center">
                <div
                  className={clsx(
                    "sm:rounded-lg rounded-[3px] sm:py-[54px] px-6 py-10 md:px-11 w-full font-sans font-normal text-base sm:text-[30px] sm:leading-11 text-header",
                    test.color
                  )}
                >
                  <article>{test.testimony}</article>
                </div>
                <div className="flex sm:-mt-8 -mt-4 flex-col gap-2 sm:gap-3 items-center">
                  <Image
                    src={test.img}
                    alt={test.name}
                    width={80}
                    height={80}
                    className="sm:w-[80px] w-[56px]"
                  />
                  <h3 className="font-bold text-base sm:text-[28px] sm:leading-8.5">
                    {test.name}
                  </h3>
                  <span className="text-grey-60 text-sm sm:text-lg font-onest">
                    {test.role}
                  </span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* DOTS */}
      <div className="flex justify-center gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={clsx(
              "size-2 rounded-full cursor-pointer transition-colors",
              index === selectedIndex ? "bg-button-color" : "bg-gray-300"
            )}
          />
        ))}
      </div>
    </section>
  );
};
