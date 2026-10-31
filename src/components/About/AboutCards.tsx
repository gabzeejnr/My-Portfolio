import { useEffect, useId, useState } from "react";
import { hostOf } from "../../utils";
import { ExternalLink, Eye, X } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface InfoCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    previewUrl?: string;
    projectUrl?: string;
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

function ProjectCard({ title, description, image, previewUrl, projectUrl }: ProjectCardProps) {
    const [open, setOpen] = useState(false);
    const [everOpened, setEverOpened] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const windowId = useId();
    const host = hostOf(previewUrl);
    const show = () => {
        if (!previewUrl) return;
        setEverOpened(true);
        setOpen(true);
    }
    const hide = () => setOpen(false)

    useEffect(() => {
        setLoaded(false);
    }, [previewUrl]);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false) }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    return (
        <article onPointerEnter={(e) => { if (e.pointerType === "mouse") show() }} onPointerLeave={(e) => { if (e.pointerType === "mouse") hide() }}
            className="group relative aspect-4/3 overflow-hidden rounded-lg border border-border bg-surface"
        >
            <img src={image} alt={`${title} screenshot`}
                className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] motion-reduce:transition-none"
            />

            <div className={`absolute inset-x-0 bottom-0 bg-linear-to-t from-black via-black/70 to-transparent px-5 pb-5 pt-16 text-white transition-opacity duration-500 motion-reduce:transition-none ${open
                ? "pointer-events-none opacity-0"
                : "opacity-100"}`
            }>
                <h3 className="font-display text-3xl font-sans font-semibold leading-none">{title}</h3>
                <p className="mt-2 max-w-[38ch] text-sm leading-relaxed text-white/70">{description}</p>

                {previewUrl && (
                    <button type="button" onClick={show} aria-expanded={open} aria-controls={windowId}
                        className="mt-4 inline-flex items-center gap-2 rounded text-sm text-white/80 underline-offset-4 transition hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                        <Eye size={14} aria-hidden />
                        Preview
                    </button>
                )}
            </div>

            {previewUrl && (
                <div id={windowId} aria-hidden={!open}
                    className={`absolute inset-0 z-10 flex flex-col bg-neutral-950 transition-[transform,visibility] duration-500 ease-out motion-reduce:transition-none ${open
                        ? "visible translate-y-0"
                        : "invisible translate-y-full"
                        }`
                    }
                >
                    <div className="flex items-center gap-3 border-b border-white/10 bg-neutral-900 px-3 py-2 text-white">
                        <span aria-hidden className={`size-1.5 shrink-0 rounded-full ${loaded ? "bg-emerald-400" : "animate-pulse bg-amber-300"}`} />
                        <span className="min-w-0 flex-1 truncate text-xs text-white/70">{loaded ? host : `Loading ${host}…`}</span>

                        {projectUrl && (
                            <a href={projectUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title} in a new tab`}
                                className="rounded p-1 text-white/70 transition hover:text-white focus-visible:outline-2 focus-visible:outline-accent"
                            >
                                <ExternalLink size={14} />
                            </a>
                        )}

                        <button type="button" onClick={hide} aria-label="Close preview"
                            className="rounded p-1 text-white/70 transition hover:text-white focus-visible:outline-2 focus-visible:outline-accent"
                        >
                            <X size={14} />
                        </button>
                    </div>

                    {everOpened && (
                        <iframe src={previewUrl} title={`${title} live preview`} onLoad={() => setLoaded(true)}
                            sandbox="allow-scripts allow-forms allow-popups" className="min-h-0 w-full flex-1 border-0 bg-white"
                        />
                    )}
                </div>
            )}
        </article>
    )
}


export { SectionHeading, InfoCard, ProjectCard }