import { Project } from "./types";

export const useTimeLineData = () => {
  // may need to add a sort function
  const projects: Project[] = [
    {
      timelineTitle: "September, 2023",
      projectTitle: "Job Finder",
      projectDescription:
        "I wrote this Python script to email me a list of hot startups and jobs every day. It runs in a CronJob.",
      projectLink: "https://github.com/SamuelRCrider/Job-Finder",
      projectImage: "/Text-To-Audio.png",
      id: 0,
    },
    {
      timelineTitle: "December, 2023",
      projectTitle: "Text to Audio",
      projectDescription:
        "This app speaks text aloud and then produces an audio recording of it for your convenience",
      projectLink: "https://text2audiobysam.netlify.app/",
      projectImage: "/Text-To-Audio.png",
      id: 1,
    },
    {
      timelineTitle: "June 3, 2024",
      projectTitle: "Storybook",
      projectDescription:
        "I built out this storybook in one day, it showcases several components with varying functionality",
      projectLink:
        "https://criderstorybook.netlify.app/?path=/docs/displayitems-post--docs",
      projectImage: "/storybook.png",
      id: 2,
    },
    {
      timelineTitle: "June 6, 2024",
      projectTitle: "Prisma w/ Postgres",
      projectDescription:
        "Here I was familiarizing myself with prisma and postgres. This work took me one hour.",
      projectLink:
        "https://github.com/fractal-bootcamp/samcrider.database-boilerplate",
      projectImage: "/databasePractice.png",
      id: 3,
    },
    {
      timelineTitle: "June 10, 2024",
      projectTitle: "Total Survey",
      projectDescription:
        "Total Survey is an anonymous app that allows users to create, take, and view the results of surveys",
      projectLink: "https://totalsurvey.netlify.app/",
      projectImage: "/totalSurvey.png",
      id: 4,
    },
  ];

  return { projects };
};
