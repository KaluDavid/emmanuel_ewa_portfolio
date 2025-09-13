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
  const listing = Array.from({ length: 3 }, () => contact).flat();
  return (
    <div className="flex w-full  bg-person1 items-center overflow-hidden">
      <div className="flex items-center px-[149px] justify-center w-full sm:py-11 py-8 text-button-color whitespace-nowrap gap-10 animate-scroll-slow">
        {listing.map((con, index) => (
          <span
            key={`1-${index}`}
            className="flex items-center gap-6.5 font-san font-bold sm:text-3xl"
          >
            <GoDotFill className="text-button-color text-xl  " />
            <span>{con.name}</span>
            <GoDotFill className="text-button-color text-xl" />
            <span>{con.mail}</span>
            <GoDotFill className="text-button-color text-xl  " />
            <span>{con.phone}</span>
          </span>
        ))}{" "}
        {listing.map((con, index) => (
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
        ))}
      </div>
    </div>
  );
};
