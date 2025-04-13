export type Fields = {
  projects: Project[];
};

export type Project = {
  id: number;
  title: string;
  description: string;
  date: string;
  sourceLink: string;
  demoLink: string;
  technologies: string[];
};
