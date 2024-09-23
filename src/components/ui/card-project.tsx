import { ProjectT, TechStackT } from "@/types/model/project.type";
import Link from "next/link";
import React, { FC } from "react";

type Props = {
  project: ProjectT;
  index: number;
};

const CardProject: FC<Props> = ({ project, index }) => {
  return (
    <div
      key={project.id}
      className="flex w-[88%] flex-col gap-7 border bg-Primary-Black px-7 py-12 md:py-5"
    >
      <p className="text-Heading-H4-ExtraBold text-Primary-White">
        0{index + 1}
      </p>
      <p className="text-Heading-H5-ExtraBold text-Primary-White">
        {project.title}
      </p>
      <p className="text-Paragraph-P2-Regular text-Zinc-300">
        {project.description}
      </p>
      <div className="flex flex-wrap items-center gap-x-2">
        <p className="text-Paragraph-P2-Regular text-Zinc-300">Tech Stacks:</p>
        {project.techStacks &&
          project.techStacks.map((tech: TechStackT) => (
            <p
              key={tech.id}
              className="text-Paragraph-P2-Regular text-Zinc-300"
            >
              {tech.name},
            </p>
          ))}
      </div>
      {project.link && (
        <Link
          className="text-Paragraph-P2-Regular text-Zinc-300 underline"
          href={project.link}
        >
          Link to Project
        </Link>
      )}
    </div>
  );
};

export default CardProject;
