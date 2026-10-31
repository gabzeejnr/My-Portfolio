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
}

export type { ProjectCardProps, Skills }