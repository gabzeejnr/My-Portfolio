import { Code2 } from "lucide-react";
import SkillProgress from "./SkillProgress";
import type { Skills as Skill } from "../../types";

interface SkillsProps {
    skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
    const frontendSkills = skills.filter(
        (skill) => skill.type === "frontend"
    );

    return (
        <div className="h-full overflow-y-auto p-5 sm:p-7">
            <header className="mb-6 space-y-2">
                <div className="flex items-center gap-2 text-text-secondary">
                    <Code2 size={18} />
                    <span className="text-xs">Personalization / Skills</span>
                </div>

                <h1 className="text-2xl font-semibold">Frontend development</h1>

                <p className="text-sm text-text-secondary">Technologies and tools used to build user interfaces.</p>
            </header>

            <section className="rounded-xl border border-border bg-surface p-5">
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <h2 className="font-semibold">Frontend technologies</h2>
                        <p className="mt-1 text-xs text-text-secondary">My current skill set</p>
                    </div>

                    <span className="rounded-lg bg-surface-hover px-3 py-1.5 text-xs">{frontendSkills.length} skills</span>
                </div>

                <div className="space-y-6">
                    {frontendSkills.map((skill, index) => (
                        <SkillProgress key={skill.id} title={skill.title} percentage={skill.percentage} delay={index * 120} />
                    ))}
                </div>
            </section>
        </div>
    );
}