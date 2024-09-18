import React from "react";
import { SkillsT } from "@/types/model/skills.type";
import CardSkills from "@/components/ui/card-skills";

async function getSkills() {
  try {
    let res = await fetch("http://localhost:3000/api/skills");
    let data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch skills");
  }
}

const SkillsView = async () => {
  const skills = await getSkills();

  return (
    <div className="mt-10">
      <div className="flex h-72 w-full items-center justify-center">
        <span className="text-DisplayText(M)-Regular text-Primary-Black">
          My
        </span>
        <span className="ml-2 text-DisplayText(M)-ExtraBold text-Primary-Black">
          Skills
        </span>
      </div>

      <div className="mt-4 flex w-full flex-wrap justify-center gap-5">
        {skills.res &&
          skills.res.map((skill: SkillsT) => (
            <CardSkills title={skill.title} key={skill.id} />
          ))}
      </div>
    </div>
  );
};

export default SkillsView;
