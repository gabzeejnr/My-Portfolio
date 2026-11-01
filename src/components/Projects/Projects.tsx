import { projects } from "../../data";
import ProjectCard from "./ProjectCards";
import type { Project } from "../../types";


export default function Projects({ onSelectProject }: { onSelectProject: (project: Project) => void }) {
    return (
        <div className="h-full overflow-y-auto p-5 sm:p-7 scrollbar-thin">
            <header className="mb-6 space-y-1">
                <h1 className="text-2xl font-semibold text-text-primary">Projects</h1>

                <p className="text-sm text-text-secondary">Select a project to explore its details, features, and technical implementation.</p>
            </header>

            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
                {projects.map((project) => <ProjectCard key={project.id} project={project} onSelect={onSelectProject} />)}
            </section>
        </div>
    )
}