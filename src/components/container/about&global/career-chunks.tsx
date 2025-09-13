import React from "react";

export const Career_Chunks = ({
  head,
  role,
}: {
  head: string;
  role: string;
}) => {
  return (
    <div className="flex flex-col text-left gap-4 sm:text-3xl">
      <p className=" font-sans font-semibold max-sm:text-[22px]">{head}</p>
      <p className="font-onest font-normal max-sm:text-lg">{role}</p>
    </div>
  );
};
