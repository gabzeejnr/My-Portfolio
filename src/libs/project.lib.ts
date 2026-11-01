import type { Project } from "../types";

const statusLabels: Record<Project["status"], string> = {
    deployed: "Deployed",
    "in-development": "In development",
    archived: "Archived",
};

const statusStyles: Record<Project["status"], string> = {
    deployed: "bg-emerald-500/10 text-emerald-500",
    "in-development": "bg-amber-500/10 text-amber-500",
    archived: "bg-surface-hover text-text-secondary",
};



export { statusLabels, statusStyles }