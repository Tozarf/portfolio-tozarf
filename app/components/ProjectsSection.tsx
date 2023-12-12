"use client";
import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectTag } from "./ProjectTag";

const PROJECTS_DATA = [
  //TODO: UPDATE every object with github url and preview url. Add elements gitUrl and prevUrl.
  {
    id: 1,
    title: "Project title 1",
    description: "Project description",
    image: "/images/projects/project-img.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Project title 2",
    description: "Project description",
    image: "/images/projects/project-img.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "Project title 3",
    description: "Project description",
    image: "/images/projects/project-img.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "Project title 4",
    description: "Project description",
    image: "/images/projects/project-img.jpg",
    tag: ["All", "Mobile"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };
  const filteredProjects = PROJECTS_DATA.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <>
      <h2 className="text-center text-2xl sm:text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 py-3 sm:py-6 text-white">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, idx) => (
          <ProjectCard
            key={idx}
            imgUrl={project.image}
            title={project.title}
            description={project.description}
            gitUrl="/" //TODO: Replace with real links from PROJECTS_DATA
            prevUrl="/"
          />
        ))}
      </div>
    </>
  );
};

export { ProjectsSection };
