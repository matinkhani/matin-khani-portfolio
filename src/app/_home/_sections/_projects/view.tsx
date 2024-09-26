import CardProject from "@/components/ui/card-project";
import { ProjectT } from "@/types/model/project.type";
import React from "react";
import { Projects } from "../../data/projects/data";
// import prisma from "@/lib/db";

const ProjectsView = async () => {
  // const projects = await prisma.project.findMany({
  //   include: {
  //     techStacks: true,
  //   },
  // });

  return (
    <div
      id="projects"
      className="mt-10 flex w-screen justify-center bg-Primary-Black pb-10"
    >
      <div className="max-w-1440">
        <div className="flex h-72 w-full items-center justify-center">
          <span className="text-DisplayText(M)-Regular text-Primary-White">
            My
          </span>
          <span className="ml-2 text-DisplayText(M)-ExtraBold text-Primary-White">
            Projects
          </span>
        </div>

        <div className="mt-4 flex w-full flex-col items-center gap-10">
          {Projects.map((prj: ProjectT, index: number) => (
            <CardProject key={prj.id} index={index} project={prj} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsView;
