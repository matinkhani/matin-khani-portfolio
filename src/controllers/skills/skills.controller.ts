import httpServer from "@/core/http-server/http-server";
import { HttpResponseI } from "@/types/http.type";
import { SkillsT } from "@/types/model/skills.type";
import { SkillsApiUrlsPath } from "./skills.path";

export const skillsController = {
  getSkills: async (): Promise<SkillsT | null> => {
    try {
      const response = await httpServer.get<HttpResponseI<SkillsT>>(
        SkillsApiUrlsPath.getSkills,
      );
      return response.data.data;
    } catch (error) {
      console.error("Error fetching skills:", error);
      return null;
    }
  },
};
