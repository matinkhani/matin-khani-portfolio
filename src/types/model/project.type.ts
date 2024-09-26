export type ProjectT = {
  id: string;
  title: string;
  description: string;
  techStacks: TechStackT[];
  link: string;
};

export type TechStackT = {
  id: string;
  name: string;
  // project?: ProjectT; // Optional to avoid circular reference issues
};
