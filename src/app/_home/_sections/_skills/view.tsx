import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Skills } from "../../data/skills/data";
// import prisma from "@/lib/db";

const SkillsView = async () => {
  // const skills = await prisma.skill.findMany();

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
        <HoverEffect items={Skills} />
      </div>
    </div>
  );
};

export default SkillsView;
