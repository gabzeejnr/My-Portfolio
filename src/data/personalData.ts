import profileImage from "../assets/images/pm_1736661395510_cmp.jpg";
import type { Skills } from "../types";


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
        percentage:80,
        type: "backend"
    },
    {
        id: "postgresql",
        title: "PostgreSQL",
        percentage: 30,
        type: "backend"
    }
]

export { name, skills, profileImage}