import React from "react";
import { SkillsT } from "@/types/model/skills.type";
import CardSkills from "@/components/ui/card-skills";
import { HoverEffect } from "@/components/ui/card-hover-effect";

async function getSkills() {
  try {
    let res = await fetch("http://localhost:3000/api/skills");
    let data = await res.json();
    return data.res;
  } catch (error) {
    throw new Error("Failed to fetch skills");
  }
}

const SkillsView = async () => {
  const skills = await getSkills();

  return (
    <div id="skills" className="mt-10">
      <div className="flex h-72 w-full items-center justify-center">
        <span className="text-DisplayText(M)-Regular text-Primary-Black">
          My
        </span>
        <span className="ml-2 text-DisplayText(M)-ExtraBold text-Primary-Black">
          Skills
        </span>
      </div>

      <div className="mt-4 flex w-full flex-wrap justify-start gap-5">
        <HoverEffect items={skills} />
      </div>
    </div>
  );
};

export default SkillsView;
