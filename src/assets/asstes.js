import {
  FaCode,
  FaDesktop,
  FaMicrochip,
  FaMobile,
  FaReact,
  FaRProject,
  FaSchool,
} from "react-icons/fa6";
import profileImg from "../assets/profile.jpg";
import { FaProjectDiagram } from "react-icons/fa";

export const assets = {
  profileImg,
};

export const navMenu = ["Home", "Work", "Skills", "About", "Contact"];

export const skillsData = [
  {
    icon: FaMicrochip,
    title: "Backend",
    technologies: [
      "Node.js",
      "Express.js",
      "Rest Apis",
      "JWt Authentication",
      "WebSockets",
    ],
  },
  {
    icon: FaReact,
    title: "Frontend",
    technologies: ["React", "Html", "Css", "Tailwindcss"],
  },
  {
    icon: FaDesktop,
    title: "Databases",
    technologies: ["MySQL", "MongoDB"],
  },
  {
    icon: FaCode,
    title: "Languages",
    technologies: ["java", "C++", "Javascript", "Python"],
  },
  {
    icon: FaMobile,
    title: "Tools",
    technologies: ["Git", "Github", "Render", "Postman"],
  },
];

export const projectData = [
  {
    title: "WanderLust",
    description:
      "A full-stack travel listing web app built using JavaScript, Node.js, and Express.",
    image:
      "https://res-console.cloudinary.com/da0wqrzmd/thumbnails/v1/image/upload/v1769845973/U2NyZWVuc2hvdF8yMDI1LTA4LTE5XzE2MTc0Nl9naGlneDI=/drilldown",
    tech: ["JavaScript", "Tailwindcss", "Node.js", "Express"],
  },
  {
    title: "Weather Web App",
    description:
      "A React-based weather application that fetches real-time data using a Weather API.",
    image:
      "https://res-console.cloudinary.com/da0wqrzmd/thumbnails/v1/image/upload/v1769846146/U2NyZWVuc2hvdF8yMDI2LTAxLTMxXzEzMjUyMF96OGtkeGY=/drilldown",
    tech: ["React", "Tailwindcss", "Node.js", "Express"],
  },
];

export const profileData = [
  {
    icon: FaCode,
    title: "Language",
    technologies: ["JavaScript", "React", "Tailwind CSS"],
  },
  {
    icon: FaSchool,
    title: "Education",
    technologies: ["B.Tech in Compuer Science"],
  },
  {
    icon: FaProjectDiagram,
    title: "Projects",
    technologies: ["Built more than 5+"],
  },
];
