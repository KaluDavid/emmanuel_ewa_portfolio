import About_Hero from "../container/about&global/about_hero";
import { Global_Container } from "../container/about&global/global-container";
import { Career_Chunks } from "../container/about&global/career-chunks";
import { Hr } from "../container/about&global/hr";
import { Contact } from "../container/about&global/contact";

const About_Profile = () => {
  return (
    <main className="flex items-center flex-col justify-center size-full">
      <About_Hero />
      <Global_Container
        className="border-t border-t-grey-30 "
        head="Career Highlights"
      >
        <Career_Chunks
          head="Maseliz Logistics LTD, 2025 - Present"
          role="Data Analyst"
        />
        <Hr />
        <Career_Chunks
          head="Joza Global Logistics, 2022 - 2025"
          role="Business Performance Analyst"
        />
        <Hr />
        <Career_Chunks
          head="Whitesoul Investment Logistics LTD, 2022 - 2022"
          role="Operations Manager"
        />
        <Hr />
        <Career_Chunks
          head="Manufacturers and Delivery Service (MDS), 2020 - 2022"
          role="Supply Chain Analyst"
        />
        <Hr />
        <Career_Chunks
          head="LafargeHolcim, 2019 - 2020"
          role="Logistics Analyst"
        />
      </Global_Container>
      <Contact />
      {/* Education */}
      <Global_Container
        className="border-b border-b-grey-30 [&_span]:max-sm:left-10"
        head="Education"
      >
        <Career_Chunks
          head="University of Calabar"
          role="BSc Business Education and Management"
        />
        <Hr />
        <Career_Chunks head="UCI" role="Data Business Design" />
        <Hr />
        <Career_Chunks
          head="Coursera"
          role="Business Analytics Specialization"
        />
        <Hr />
        <Career_Chunks head="Coursera" role="Data Analytics" />
      </Global_Container>
      <Global_Container
        head="Beyond the Data"
        className="[&_article]:text-left [&_article]:leading-6 [&_article]:sm:leading-12 [&_article]:font-onest [&_article]:font-normal [&_article]:sm:text-3xl [&_article]:text-lg [&_span]:sm:bottom-5 [&_span]:-bottom-5 [&_span]:sm:left-10 [&_span]:left-35"
      >
        <article>
          When I’m not analyzing datasets, you’ll probably find me singing,
          catching a movie with friends at the cinema, or taking a walk.
        </article>
        <article>
          I’m also an active crypto trader—fascinated by market trends, digital
          currencies, and all the stories numbers can tell.
        </article>
        <article>
          I’m drawn to educative books that challenge my thinking and spark
          fresh ideas. I love learning something new with every page.
        </article>
      </Global_Container>
    </main>
  );
};

export default About_Profile;
