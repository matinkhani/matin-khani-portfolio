import { ExperienceT } from "@/types/model/experience.type";

export const Experiences: ExperienceT[] = [
  {
    id: Math.random().toString(),
    title: "HiWEB",
    description:
      "As a frontend developer at HiWEB, I redesigned and developed the Farda Insurance admin panel, created the HiWEB Optical Fiber panel for secure modem management, built the Farda Insurance Investors panel for stock and payment management, and resolved critical bugs in the Farda Insurance user panel.",
    startTime: "Mar 2024",
    endTime: "Present",
  },
  {
    id: Math.random().toString(),
    title: "Makeen Acamdey",
    description:
      "During my internship at Makeen Academy, I learned how to develop Single Page Applications (SPA) using ReactJS, optimized performance with TypeScript, and gained the essential skill of learning how to learn.",
    startTime: "Apr 2023",
    endTime: "Sep 2023",
  },
];
