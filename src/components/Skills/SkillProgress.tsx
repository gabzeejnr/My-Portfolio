import { useEffect, useState } from "react";

interface SkillProgressProps {
    title: string;
    percentage: number;
    delay?: number;
}

export default function SkillProgress({
    title,
    percentage,
    delay = 0,
}: SkillProgressProps) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timeout = window.setTimeout(() => {
            setProgress(Math.min(100, Math.max(0, percentage)));
        }, 1000 + delay);

        return () => window.clearTimeout(timeout);
    }, [percentage, delay]);

    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{title}</span>
                <span className="text-xs text-text-secondary tabular-nums">
                    {percentage}%
                </span>
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-surface-hover">
                <div
                    className="h-full rounded-full bg-accent transition-[width] duration-1000 ease-out motion-reduce:transition-none"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
}