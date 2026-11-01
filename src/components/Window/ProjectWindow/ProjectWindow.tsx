import Window from "../Window";
import ProjectDetails from "../../Projects/ProjectDetails";
import type { Project } from "../../../types";

export default function ProjectWindow({ project }: { project: Project }) {
    return (
        <Window title={project.title} onClose={() => { }} onMaximize={() => { }} onMinimize={() => { }}>
            <ProjectDetails project={project} />
        </Window>
    )
}