import { Dispatch, SetStateAction } from "react";

export type Project = {
  timelineTitle: string;
  projectTitle: string;
  projectDescription: string;
  projectLink: string;
  projectImage: string;
  id: number;
};

export type Fields = {
  projects: Project[];
};
