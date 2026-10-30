import type { LucideIcon } from "lucide-react";

export interface InfoCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}


function SectionHeading({ title }: { title: string }) {
    return <h2 className="text-base font-semibold text-text-primary">{title}</h2>
}


function InfoCard({ icon: Icon, title, description }: InfoCardProps) {
    return (
        <article className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4 transition-colors hover:bg-surface-hover">
            <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-surface-hover text-accent">
                <Icon size={19} />
            </div>

            <div className="min-w-0 space-y-1">
                <h3 className="text-sm font-medium text-text-primary">{title}</h3>
                <p className="text-xs leading-relaxed text-text-secondary">{description}</p>
            </div>
        </article>
    )
}

function ProjectCard({ title, description }: { title: string, description: string; }) {
    return (
        <article className="rounded-xl border border-border bg-surface p-4 transition-colors hover:bg-surface-hover">
            <h3 className="font-medium text-text-primary">{title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-text-secondary">{description}</p>
        </article>
    )
}


export { SectionHeading, InfoCard, ProjectCard }