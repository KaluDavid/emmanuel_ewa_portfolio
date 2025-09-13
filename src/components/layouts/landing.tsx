import { Project_Carousel } from "../container/landing/project-carousel";
import { Hero_Section } from "@/components/container/landing/hero-section";
import { About_Section } from "@/components/container/landing/about";
import { Testimonials } from "../container/landing/testimonials";

const Landing = () => {
  return (
    <>
      <main className="flex items-center flex-col justify-center size-full">
        <Hero_Section />
        <About_Section />
        <Project_Carousel />
        <Testimonials />
      </main>
    </>
  );
};

export default Landing;
