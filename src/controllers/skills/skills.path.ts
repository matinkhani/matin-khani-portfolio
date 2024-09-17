import { skillsController } from "./skills.controller";

export const SkillsApiUrlsPath: Record<keyof typeof skillsController, string> =
  {
    getSkills: "skills",
  };
