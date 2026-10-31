interface Skills {
    id: string;
    title: string;
    percentage: number;
    type: "frontend" | "backend"
}

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    previewUrl?: string;
    projectUrl?: string;
    github?: string;
    technologies: string[];
    status: "deployed" | "in development"
}

export type { ProjectCardProps, Skills }