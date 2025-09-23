import { notFound } from "next/navigation";
import { project } from "@/lib/projects";
import Image from "next/image";
import clsx from "clsx";
import {
  PrdHead,
  PrdCard,
  Go_Back,
} from "@/components/container/project_elements/project_elements";

interface Props {
  params: { id: string };
}

export default function ProjectPage({ params }: Props) {
  const projects = project.find((p) => p.id === params.id);

  if (!projects) return notFound();

  return (
    <section className="flex flex-col gap-10 sm:gap-18 pb-10 sm:pb-25 sm:pt-20 pt-5">
      <div className="flex flex-col gap-10 sm:gap-18 px-5 lg:px-24.5">
        <h2 className=" flex flex-col gap-4 font-sans font-bold text-[26px] sm:text-5xl">
          <Go_Back />
          {projects.title}
        </h2>
        {projects.img && (
          <fieldset
            className={clsx(
              "w-full sm:rounded-[20px] rounded-[6px] px-4.5 py-6 md:px-[54px] sm:py-[76px]",
              projects.color
            )}
          >
            <Image
              src={projects.img}
              alt="Projects"
              width={972}
              height={625}
              className="w-full border-[3px] border-[#696969] rounded-[10px] object-contain"
            />
          </fieldset>
        )}

        <div className="flex w-full md:flex-row flex-col gap-10 whitespace-nowrap sm:gap-70 justify-between">
          <div className="flex w-full justify-between sm:gap-0 ">
            <PrdHead head="Year" text={projects.year} />
            <PrdHead head="Role" text={projects.role} />
          </div>
          <PrdHead head="Tool" text={projects.tools} />
        </div>
      </div>

      {/* PROBLEM OVERIEW */}
      <section className="sm:pt-20 pt-10 pb-10 px-5 lg:px-25 flex flex-col border-y border-y-grey-30 gap-12 [&_p]:font-semibold">
        <PrdHead head="Problem Overview" text={projects.project_overview} />

        <div className="flex flex-col gap-6 text-lg">
          <h2 className="font-sans font-bold text-[26px] sm:text-[32px] sm:leading-11.5">
            My Process
          </h2>
          <div>
            <p>Data Source</p>
            <ul className="font-normal *:list-disc ml-10">
              <li>{projects.process[0].d1}</li>
              <li>{projects.process[0].d2}</li>
              {projects.process[0].d3 && (
                <>
                  <li>{projects.process[0].d3}</li>
                  <li>{projects.process[0].d4}</li>
                </>
              )}
            </ul>
          </div>
          <div>
            <p>Cleaning & Transformation</p>
            <span>{projects.process[1].cleaning}</span>
          </div>
          <div>
            <p>Tool Stack</p>
            <ul className="font-normal *:list-disc ml-10">
              <li>{projects.process[2].tool_stack1}</li>
              {projects?.process[2].tool_stack2 && (
                <li>{projects?.process[2].tool_stack2}</li>
              )}
            </ul>
          </div>
          <div>
            <p>Visualization Designed</p>
            <span>{projects.process[3].visualization}</span>
          </div>
          <div>
            <p>Stakeholder Collaboration</p>
            <span>{projects.process[4].stakeholder}</span>
          </div>
        </div>
      </section>

      <section className=" lg:px-25 px-5  w-full flex flex-col gap-6.5 sm:gap-12">
        <h2 className="font-sans font-bold sm:text-[32px] sm:leading-11.5 text-[26px]">
          Results & Impact
        </h2>

        <div className="flex w-full md:flex-row flex-col justify-between sm:gap-0 gap-5">
          <PrdCard
            bg={`${projects.results[0].color}`}
            head={`${projects.results[0].first.num} `}
            text={`${projects.results[0].first.title}`}
            text2={`${projects.results[0].first.description}`}
          />{" "}
          <PrdCard
            bg={`${projects.results[0].color}`}
            head={`${projects.results[0].second.num} `}
            text={`${projects.results[0].second.title}`}
            text2={`${projects.results[0].second.description}`}
          />{" "}
          <PrdCard
            bg={`${projects.results[0].color}`}
            head={`${projects.results[0].third.num} `}
            text={`${projects.results[0].third.title}`}
            text2={`${projects.results[0].third.description}`}
          />
        </div>

        <div className="text-lg flex flex-col gap-5 max-sm:pt-8">
          <h2 className="font-sans font-bold text-[26px] sm:text-[32px] sm:leading-11.5">
            Key Takeaways
          </h2>
          <ul className="font-normal *:list-disc ml-10 max-sm:gap-10">
            <li>{projects.take_aways.f1}</li>
            <li>{projects.take_aways.f2}</li>
            <li>{projects.take_aways.f3}</li>
            <li>{projects.take_aways.f4}</li>
          </ul>
        </div>
      </section>
    </section>
  );
}

// generateStaticParams pre-renders the known project pages at build time
export function generateStaticParams() {
  return project.map((p) => ({ id: p.id }));
}
