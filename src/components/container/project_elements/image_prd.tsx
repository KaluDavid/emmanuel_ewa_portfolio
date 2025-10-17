import { Project } from "@/lib/types";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const Image_Prd = ({ prd }: { prd: Project }) => {
  return (
    <Link href={`/projects/${prd.id}`} className="w-full block">
      <fieldset
        className={clsx(
          "w-full  rounded-[6px] sm:rounded-[20px] md:px-[54px] px-4.5 py-6 sm:py-[76px]",
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
          <div>
            <Image
              src={`${prd.img}`}
              alt="Projects"
              width={972}
              height={625}
              className={clsx(
                "w-full object-contain h-full border-[3px] border-[#696969] rounded-[10px]"
              )}
            />
          </div>
        </motion.span>
      </fieldset>
    </Link>
  );
};
