import CardProject from "@/components/ui/card-project";
import { ProjectT, TechStackT } from "@/types/model/project.type";
import React from "react";

async function getProjects(): Promise<ProjectT[]> {
  try {
    const res = await fetch("http://localhost:3000/api/projects", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch projects");
    }
    const data = await res.json();
    return data.res;
  } catch (error) {
    throw new Error("Failed to fetch projects");
  }
}

const ProjectsView = async () => {
  const projects = await getProjects();

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
          {projects &&
            projects.map((prj: ProjectT, index: number) => (
              <CardProject index={index} project={prj} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsView;
