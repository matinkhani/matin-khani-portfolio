import CardExperience from "@/components/ui/card-experience";
import { ExperienceT } from "@/types/model/experience.type";
import React from "react";
import { Experiences } from "../../data/experiences/data";
// import prisma from "@/lib/db";

const ExperiencesView = async () => {
  // const experience = await prisma.experience.findMany();

  return (
    <div
      id="experience"
      className="mt-10 flex w-screen justify-center bg-Primary-Black pb-10"
    >
      <div className="max-w-1440">
        <div className="flex h-72 w-full items-center justify-center">
          <span className="text-DisplayText(M)-Regular text-Primary-White">
            My
          </span>
          <span className="ml-2 text-DisplayText(M)-ExtraBold text-Primary-White">
            Experience
          </span>
        </div>

        <div className="mt-4 flex w-full flex-col items-center gap-5">
          {Experiences.map((exp: ExperienceT, index: number) => (
            <CardExperience
              title={exp.title}
              description={exp.description}
              startTime={exp.startTime}
              endTime={exp.endTime}
              index={index}
              key={exp.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencesView;
