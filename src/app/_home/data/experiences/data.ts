import { ExperienceT } from "@/types/model/experience.type";

export const Experiences: ExperienceT[] = [
  {
    id: Math.random().toString(),
    title: "Iran Jack",
    description: `As a Frontend Developer at Iran Jack, I contributed to the development of OptiGarment, a specialized software designed to optimized clothing production.
      Improved code readability, maintainability, and overall project performance by restructure the project architecture into a hybrid feature-based and modular-based structure, applying DRY (Don’t Repeat Yourself) principles to eliminate code duplication.
      Created reusable and accessible UI components using Material UI framework.
      Collaborated with a team of frontend developers, backend developers, ui ux designers, product managers and etc.`,
    startTime: "Nov 2024",
    endTime: "Present",
    companyDescription:
      "Iran Jack is the official representative of Jack Sewing Machine Co. in China for Iran.",
  },
  {
    id: Math.random().toString(),
    title: "HiWEB",
    description: `Redesigned and developed the Farda Insurance admin panel , improving usability and performance.
Developed the HiWEB Optical Fiber panel, enhancing workflow efficiency for large-scale installations.
Created the Farda Insurance Investors panel.
Collaborated on fixing bugs and optimizing the Farda Insurance user panel.
`,
    startTime: "Feb 2024",
    endTime: "Oct 2024",
    companyDescription:
      "HiWEB is providing communication services in more than 450 cities all around Iran",
  },
];
