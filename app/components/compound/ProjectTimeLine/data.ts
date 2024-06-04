import { Project } from "./types";

export const useTimeLineData = () => {
  // may need to add a sort function
  const projects: Project[] = [
    {
      timelineTitle: "First Project",
      projectTitle: "Text to Audio",
      projectDescription:
        "This app speaks text aloud and then produces an audio recording of it for your convenience",
      projectLink: "https://text2audiobysam.netlify.app/",
      projectImage: "/Text-To-Audio.png",
      id: 0,
    },
    {
      timelineTitle: "First Project",
      projectTitle: "Text to Audio",
      projectDescription:
        "This app speaks text aloud and then produces an audio recording of it for your convenience",
      projectLink: "https://text2audiobysam.netlify.app/",
      projectImage: "/Text-To-Audio.png",
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
