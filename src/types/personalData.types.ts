type ProjectStatus = "deployed" | "in-development" | "archived";

interface Skills {
    id: string;
    title: string;
    percentage: number;
    type: "frontend" | "backend"
}

interface Project {
    id: string;
    title: string;
    description: string;
    overview?: string;
    image: string;
    previewUrl?: string;
    projectUrl?: string;
    github?: string;
    features?: string[];
    challenge?: string[];
    technologies: string[];
    status: ProjectStatus;
}

export type { Project, Skills }