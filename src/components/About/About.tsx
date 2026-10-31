import { BriefcaseBusiness, Code2, FolderKanban, GraduationCap } from "lucide-react";
import ProfileImage from "./ProfileImage";
import { name, projects, skills } from "../../data";
import { InfoCard, ProjectCard, SectionHeading } from "./AboutCards";
import SkillProgress from "../Skills/SkillProgress";

export default function About() {
    return (
        <div className="h-full overflow-y-auto p-5 sm:p-7 scrollbar-thin">
            <section className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <ProfileImage />

                <div className="space-y-1">
                    <h1 className="text-2xl font-semibold text-text-primary">{name}</h1>
                    <p className="text-sm text-text-secondary">Student Developer | Frontend & Backend Development</p>
                </div>
            </section>

            <section className="mt-8 space-y-3">
                <SectionHeading title="Developer profile" />

                <div className="grid gap-3 sm:grid-cols-2">
                    <InfoCard icon={Code2} title="Development" description="Frontend and Backend" />
                    <InfoCard icon={GraduationCap} title="Learning" description="Continuously developing technical skills" />
                    <InfoCard icon={BriefcaseBusiness} title="Approach" description="Learning through building real projects" />
                    <InfoCard icon={FolderKanban} title="Projects" description="Personal and collaborative development" />
                </div>
            </section>

            <section className="mt-8 space-y-3">
                <SectionHeading title="Currently building" />

                <div className="grid gap-3 sm:grid-cols-2">
                    {projects.slice(0, 2).map(project => <ProjectCard key={project.description} {...project} />)}
                </div>
            </section>

            <section className="mt-8 space-y-3">
                <SectionHeading title="My skill-set" />

                <div className="grid gap-3 sm:grid-cols-2">
                    {skills.toSorted((a, b) => b.percentage - a.percentage).map(skill => <SkillProgress key={skill.id} {...skill} />)}
                </div>
            </section>
        </div>
    )
}