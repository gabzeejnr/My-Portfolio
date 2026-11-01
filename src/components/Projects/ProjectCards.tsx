import { statusLabels, statusStyles } from "../../libs";
import type { Project } from "../../types";


export default function ProjectCard({ project, onSelect }: { project: Project, onSelect: (project: Project) => void }) {
    return (
        <button type="button" onClick={() => onSelect(project)}
            className="group w-full overflow-hidden rounded-xl border border-border bg-surface text-left transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-window focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
        >
            <div className="aspect-16/10 overflow-hidden bg-surface-hover">
                <img src={project.image} alt={`${project.title} project screenshot`} loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
                />
            </div>

            <div className="space-y-3 p-4">
                <div className="flex items-center justify-between gap-2">
                    <h3 className="truncate text-sm font-semibold text-text-primary">{project.title}</h3>

                    <span className={`shrink-0 rounded-full px-2 py-1 text-[10px] font-medium ${statusStyles[project.status]}`}>
                        {statusLabels[project.status]}
                    </span>
                </div>

                <p className="line-clamp-2 min-h-9 text-xs leading-relaxed text-text-secondary">{project.description}</p>

                <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((technology) => (
                        <span key={technology} className="rounded-md bg-surface-hover px-2 py-1 text-[10px] text-text-secondary">
                            {technology}
                        </span>
                    ))}

                    {project.technologies.length > 4 && (
                        <span className="rounded-md bg-surface-hover px-2 py-1 text-[10px] text-text-secondary">
                            +{project.technologies.length - 4}
                        </span>
                    )}
                </div>
            </div>
        </button>
    )
}