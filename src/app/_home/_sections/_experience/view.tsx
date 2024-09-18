import CardExperience from "@/components/ui/card-experience";
import { ExperienceT } from "@/types/model/experience.type";
import React from "react";

async function getExperiences() {
  try {
    let res = await fetch("http://localhost:3000/api/experience");
    let data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch experiences");
  }
}

const ExperiencesView = async () => {
  const experience = await getExperiences();
  console.log(experience.res);
  console.log("matin");

  return (
    <div className="mt-10 w-screen bg-Primary-Black pb-10">
      <div className="flex h-72 w-full items-center justify-center">
        <span className="text-DisplayText(M)-Regular text-Primary-White">
          My
        </span>
        <span className="ml-2 text-DisplayText(M)-ExtraBold text-Primary-White">
          Experience
        </span>
      </div>

      <div className="mt-4 flex w-full flex-col items-center gap-5">
        {experience.res &&
          experience.res.map((exp: ExperienceT, index: number) => (
            <CardExperience
              title={exp.title}
              description={exp.description}
              startTime={exp.startTime}
              endTime={exp.endTime}
              index={index}
            />
          ))}
      </div>
    </div>
  );
};

export default ExperiencesView;
