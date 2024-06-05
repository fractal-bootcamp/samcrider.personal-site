import { Project } from "./types";

export const useTimeLineData = () => {
  // may need to add a sort function
  const projects: Project[] = [
    {
      timelineTitle: "December, 2023",
      projectTitle: "Text to Audio",
      projectDescription:
        "This app speaks text aloud and then produces an audio recording of it for your convenience",
      projectLink: "https://text2audiobysam.netlify.app/",
      projectImage: "/Text-To-Audio.png",
      id: 0,
    },
    {
      timelineTitle: "June 3, 2024",
      projectTitle: "Storybook",
      projectDescription:
        "I built out this storybook in one day, it showcases several components with varying functionality",
      projectLink:
        "https://criderstorybook.netlify.app/?path=/docs/displayitems-post--docs",
      projectImage: "/storybook.png",
      id: 1,
    },
    {
      timelineTitle: "First Project",
      projectTitle: "Text to Audio",
      projectDescription:
        "This app speaks text aloud and then produces an audio recording of it for your convenience",
      projectLink: "https://text2audiobysam.netlify.app/",
      projectImage: "/Text-To-Audio.png",
      id: 2,
    },
    {
      timelineTitle: "First Project",
      projectTitle: "Text to Audio",
      projectDescription:
        "This app speaks text aloud and then produces an audio recording of it for your convenience",
      projectLink: "https://text2audiobysam.netlify.app/",
      projectImage: "/Text-To-Audio.png",
      id: 3,
    },
    {
      timelineTitle: "First Project",
      projectTitle: "Text to Audio",
      projectDescription:
        "This app speaks text aloud and then produces an audio recording of it for your convenience",
      projectLink: "https://text2audiobysam.netlify.app/",
      projectImage: "/Text-To-Audio.png",
      id: 4,
    },
  ];

  return { projects };
};
