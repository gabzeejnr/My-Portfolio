import profileImage from "../assets/images/pm_1736661395510_cmp.jpg";
import cherryvillePreview from "../assets/images/projects/cherryville-preview.png";
import datacarePreview from "../assets/images/projects/datacare-preview.png";
import type { ProjectCardProps, Skills } from "../types";


const name = "Gabriel Dodowei";
const skills: Skills[] = [
    {
        id: "html",
        title: "HTML",
        percentage: 90,
        type: "frontend"
    },
    {
        id: "css",
        title: "CSS",
        percentage: 85,
        type: "frontend"
    },
    {
        id: "javascript",
        title: "Javascript",
        percentage: 85,
        type: "frontend"
    },
    {
        id: "react",
        title: "React",
        percentage: 85,
        type: "frontend"
    },
    {
        id: "scss",
        title: "SCSS",
        percentage: 85,
        type: "frontend"
    },
    {
        id: "tailwindcss",
        title: "Tailwind CSS",
        percentage: 80,
        type: "frontend"
    },
    {
        id: "nextjs",
        title: "NextJs",
        percentage: 70,
        type: "frontend"
    },
    {
        id: "typescript",
        title: "TypeScript",
        percentage: 70,
        type: "frontend"
    },
    {
        id: "nodejs",
        title: "Node.Js",
        percentage: 75,
        type: "backend"
    },
    {
        id: "express",
        title: "ExpressJs",
        percentage: 80,
        type: "backend"
    },
    {
        id: "postgresql",
        title: "PostgreSQL",
        percentage: 30,
        type: "backend"
    }
]

const projects: ProjectCardProps[] = [
    {
        title: "Cherryville",
        description: "Technology and business consultancy platform.",
        image: cherryvillePreview,
        previewUrl: "https://cherryville-ecru.vercel.app",
        projectUrl: "https://cherryville-ecru.vercel.app",
        github: "https://github.com/gabzeejnr/cherryville",
        technologies: ["React", "Typescript", "Express", "PostgreSQL", "Tailwind"],
        status: "deployed"
    },
    {
        title: "DataCare",
        description: "Machine learning-based automated data cleaning and repair system.",
        image: datacarePreview,
        previewUrl: "https://data-cleaning-and-repair-system.vercel.app",
        projectUrl: "https://data-cleaning-and-repair-system.vercel.app",
        github: "https://github.com/gabzeejnr/data-cleaning-and-repair-system",
        technologies: ["React", "Python", "Express", "PostgreSQL", "Tailwind"],
        status: "in development"
    }
]

export { name, projects, skills, profileImage }