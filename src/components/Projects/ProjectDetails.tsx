import {
    ExternalLink,
    CheckCircle2,
    Lightbulb,
    Code2,
    type LucideIcon,
} from "lucide-react";
import { statusLabels, statusStyles } from "../../libs";
import Github from "../../assets/svg/github.svg";
import type { Project } from "../../types";

export default function ProjectDetails({ project }: { project: Project }) {
    return (
        <div className="h-full overflow-y-auto scrollbar-thin">
            <div className="relative aspect-video w-full overflow-hidden bg-surface-hover">
                <img src={project.image} alt={`${project.title} project screenshot`} className="size-full object-cover" />
            </div>

            <div className="space-y-8 p-5 sm:p-7">
                <header className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <h1 className="text-2xl font-semibold text-text-primary">{project.title}</h1>

                        <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[project.status]}`}>
                            {statusLabels[project.status]}
                        </span>
                    </div>

                    <p className="max-w-3xl text-sm leading-relaxed text-text-secondary">{project.description}</p>

                    <div className="flex flex-wrap gap-2 pt-1">
                        {project.technologies.map((technology) => (
                            <span key={technology}
                                className="rounded-lg border border-border bg-surface-hover px-3 py-1.5 text-xs font-medium text-text-secondary"
                            >{technology}</span>
                        ))}
                    </div>
                </header>

                {project.overview && (
                    <section className="space-y-3">
                        <SectionHeading icon={Code2} title="Project overview" />

                        <p className="max-w-3xl text-sm leading-7 text-text-secondary">{project.overview}</p>
                    </section>
                )}

                {!!project.features?.length && (
                    <section className="space-y-3">
                        <SectionHeading icon={CheckCircle2} title="Key features" />

                        <ul className="grid gap-3 sm:grid-cols-2">
                            {project.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3 rounded-lg border border-border bg-surface p-3">
                                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
                                    <span className="text-sm leading-relaxed text-text-secondary">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {!!project.challenge?.length && (
                    <section className="space-y-3">
                        <SectionHeading icon={Lightbulb} title="Challenges & solutions" />

                        <div className="space-y-3">
                            {project.challenge.map((challenge, index) => (
                                <div key={index} className="rounded-lg border border-border bg-surface p-4">
                                    <p className="text-sm leading-relaxed text-text-secondary">{challenge}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {(project.projectUrl || project.github) && (
                    <section className="space-y-3">
                        <SectionHeading icon={ExternalLink} title="Explore project" />

                        <div className="flex flex-wrap gap-3">
                            {project.projectUrl && (
                                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-white transition hover:bg-accent-hover"
                                >
                                    Live project
                                    <ExternalLink size={15} />
                                </a>
                            )}

                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-medium text-text-primary transition hover:bg-surface-hover"
                                >
                                    Source code
                                    <img src={Github} alt="Github SVG" className="size-5" />
                                </a>
                            )}
                        </div>
                    </section>
                )}
            </div>
        </div>
    )
}

function SectionHeading({ icon: Icon, title }: { icon: LucideIcon, title: string }) {
    return (
        <h2 className="flex items-center gap-2 text-base font-semibold text-text-primary">
            <Icon size={18} className="text-accent" />
            {title}
        </h2>
    )
}
