"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Tailwind</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Enroute "Rockstars" Bootcamp Certificate {"(May-Jul, 2021)"}</li>
        <li>Enroute "Rockstars" Bootcamp Certificate {"(Oct-Dec, 2021)"}</li>
        <li>Seneca College, Computer Programming Diploma {"(Aug, 2023)"}</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Software Developer Engineer in Test - JWPlayer,{" "}
          {"(12/2021 - 04/2023)"}
        </li>
        <li>Web Developer - Freelance, {"(08/2023 - current)"}</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="rounded-lg hidden sm:block h-[300] w-[200] lg:h-[500] lg:w-[400]"
          src={"/images/about-me.jpg"}
          height={500}
          width={400}
          alt="About me - image"
        />
        <div className="mt-4 md:mt-0 text text-left flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text=base lg:text=lg">
            I will think later on what to put in here
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutSection };
