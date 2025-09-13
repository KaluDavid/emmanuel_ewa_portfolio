import React from "react";
import { Social_Media } from "../ui/social-media";
import { Form_Card } from "./landing/form-card";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className=" pb-10  sm:pb-15 flex items-center border-t  *:px-5 sm:*:px-24.5 border-t-grey-30 flex-col w-full gap-24">
        <section className="flex lg:flex-row flex-col py-10 sm:py-[100px] items-start sm:gap-10 gap-6 justify-between w-full lg:gap-0  border-b border-b-grey-30">
          <div className="flex flex-col gap-4 sm:gap-6 w-full lg:w-[500px] items-start text-header">
            <h2 className="font-bold text-[26px] sm:text-[34px] sm:leading-11.5 font-sans">
              Let&#39;s Work Smarter Together
            </h2>
            <article className="font-onest text-base sm:text-lg ">
              Every business is unique, and so are its data challenges.
              Let&#39;s discuss how I can create a tailored solution for your
              specific needs. <br />
              Let&#39;s connect and turn insights into impact.
            </article>

            <div className="flex flex-col gap-2.5 font-semibold font-onest text-lg text-button-color sm:text-2xl">
              <Link href={"mailto:emmanuelewa45@gmail.com"} target="_blank">
                Emmanuelewa45@gmail.com
              </Link>
              <span>+234 916 452 6381</span>
            </div>
          </div>

          <Form_Card />
        </section>
        <section className="  w-full">
          <div className="text-white  md:flex-row flex-col font-onest font-medium text-lg sm:text-2xl w-full px-[17px] md:px-[100px] py-8 sm:py-14 bg-grey-90 rounded-xl flex sm:items-center max-sm:gap-6 justify-between">
            <span>
              © {new Date().getFullYear()} Ugobo Emmanuel. All rights reserved.
            </span>
            <Social_Media className="*:text-white" />
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
