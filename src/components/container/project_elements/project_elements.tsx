"use client";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { BsArrowLeftCircle } from "react-icons/bs";

export const PrdHead = ({ head, text }: { head: string; text: string }) => {
  return (
    <div className="flex flex-col gap-3.5">
      <h2 className="font-sans text-[26px] font-bold sm:text-[32px] sm:leading-11.5">
        {head}
      </h2>
      <span className="font-onest sm:leading-7 font-normal sm:text-lg text-base">
        {text}
      </span>
    </div>
  );
};

export const PrdCard = ({
  head,
  text,
  text2,
  bg,
}: {
  head: string;
  text: string;
  text2: string;
  bg: string;
}) => {
  return (
    <div
      className={clsx(
        "flex text-white sm:w-[338px] w-full flex-col rounded-2xl  gap-5 py-8 px-4 [&_span]:font-bold",
        bg
      )}
    >
      <PrdHead head={head} text={text} />
      <p className="font-poppins text-base">{text2}</p>
    </div>
  );
};

export const Go_Back = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex w-[80px] cursor-pointer text-base  items-center gap-4 "
    >
      <BsArrowLeftCircle className="font-extralight text-3xl text-grey-50" />
      <span>Back</span>
    </button>
  );
};
