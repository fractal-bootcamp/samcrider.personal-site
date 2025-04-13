import { Project } from "./types";

export const useTimeLineData = () => {
  const projects: Project[] = [
    {
      date: "April, 2025",
      title: "Margarita Tech",
      description:
        "Create your own honorary degree from the world's finest institution, Margarita Tech. Celebrate your expertise and accomplishments!",
      sourceLink: "https://github.com/SamuelRCrider/honorary-degrees",
      demoLink: "https://margaritatech.netlify.app/",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      id: 4,
    },
    {
      date: "April, 2025",
      title: "CSP Go",
      description:
        "The Context Security Protocol (CSP) is an SDK that provides a security wrapper around Large Language Model interactions, helping organizations leverage AI capabilities while maintaining compliance with privacy regulations.",
      sourceLink: "https://github.com/SamuelRCrider/csp_go",
      demoLink: "",
      technologies: ["Go"],
      id: 3,
    },
    {
      date: "August, 2024",
      title: "Chiks",
      description:
        "An open source boilerplate tool with 1,500+ downloads. Chiks helps developers quickly set up modern web projects with features like Docker integration, database setup, and customizable UI frameworks.",
      sourceLink: "https://github.com/SamuelRCrider/chiks",
      demoLink: "",
      technologies: ["Go"],
      id: 2,
    },
    {
      date: "December, 2023",
      title: "Text to Audio",
      description:
        "This app speaks text aloud and then produces an audio recording of it for your convenience",
      sourceLink: "https://github.com/SamuelRCrider/text2audio",
      demoLink: "https://text2audiobysam.netlify.app/",
      technologies: ["React", "Node.js"],
      id: 1,
    },
    {
      date: "September, 2023",
      title: "Job Finder",
      description:
        "I wrote this Python script to email me a list of hot startups and jobs every day. It runs in a CronJob.",
      sourceLink: "https://github.com/SamuelRCrider/Job-Finder",
      demoLink: "",
      technologies: ["Python", "CronJob"],
      id: 0,
    },
  ];

  return { projects };
};
