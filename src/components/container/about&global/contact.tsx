import React from "react";
import { GoDotFill } from "react-icons/go";

const contact = [
  {
    name: "Contact me",
    mail: "Emmanuelewa45@gmail.com",
    phone: "+234 916 452 6381",
  },
];
export const Contact = () => {
  // const listing = Array.from({ length: 1 }, () => contact).flat();
  return (
    <div className="flex w-full  bg-person1 items-end justify-end overflow-hidden">
      <div className="flex items-end -mr-[65rem] justify-end w-full sm:py-11 py-8 text-button-color whitespace-nowrap gap-10 lg:animate-scroll-slow animate-scroll-slower">
        {contact.map((con, index) => (
          <span
            key={`1-${index}`}
            className="flex items-center  gap-6.5 font-san font-bold sm:text-3xl"
          >
            <span>{con.name}</span>
            <GoDotFill className="text-button-color text-xl" />
            <span>{con.mail}</span>
            <GoDotFill className="text-button-color text-xl  " />
            <span>{con.phone}</span>
          </span>
        ))}{" "}
        {/* {listing.map((con, index) => (
          <span
            key={`2-${index}`}
            className="flex items-center gap-6.5 font-san font-bold sm:text-3xl"
          >
            <GoDotFill className="text-button-color text-xl  " />
            <span>{con.name}</span>
            <GoDotFill className="text-button-color text-xl" />
            <span>{con.mail}</span>
            <GoDotFill className="text-button-color text-xl  " />
            <span>{con.phone}</span>
          </span>
        ))} */}
      </div>
    </div>
  );
};
