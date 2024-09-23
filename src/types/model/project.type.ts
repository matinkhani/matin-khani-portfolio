export type ProjectT = {
  id: number;
  title: string;
  description: string;
  techStacks: TechStackT[];
  link: string;
};

export type TechStackT = {
  id: number;
  name: string;
  projectId: number; // Foreign key linking to the project
  project?: ProjectT; // Optional to avoid circular reference issues
};
