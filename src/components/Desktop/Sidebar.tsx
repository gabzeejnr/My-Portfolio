import { useRef, useState } from "react";
import { desktopIcons } from "../../data";
import type { DesktopIcon } from "../../types";


export default function Sidebar({ icons = desktopIcons, onSelect }: { icons?: DesktopIcon[], onSelect?: (item: DesktopIcon) => void }) {
    const [activeId, setActiveId] = useState("home");
    const isHovered = useRef<boolean>(false);

    return <aside aria-label="Desktop navigation" className="fixed z-50 rounded-full border border-border
            bg-surface-glass p-1.5 shadow-window backdrop-blur-xs top-3 left-1/2 -translate-x-1/2 w-fit max-w-[calc(100%-24px)]
            lg:top-1/2 lg:left-4 lg:-translate-y-1/2 lg:translate-x-0 lg:p-2"
    >
        <nav>
            <ul className="flex gap-1 overflow-x-auto scrollbar-none lg:flex-col lg:overflow-visible">
                {icons.map(item => {
                    const isActive = activeId === item.id;
                    const Icon = item.icon;
                    return <li key={item.id} className="shrink-0">
                        <button type="button" title={item.title} aria-label={item.title} aria-current={isActive ? "page" : undefined}
                            onMouseEnter={() => isHovered.current = true} onMouseLeave={() => isHovered.current = false}
                            onClick={() => { setActiveId(item.id); onSelect?.(item) }}
                            className={` group relative grid h-11 w-11 place-items-center rounded-xl cursor-pointer transition-colors duration-200
                                        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${isActive
                                    ? "bg-accent/20 text-accent"
                                    : "text-text-secondary hover:bg-surface-hover hover:text-text-primary"
                                }
                                    `}
                        >
                            <Icon size={21} strokeWidth={1.8} className="text-text-primary" />

                            {isActive && <span className="absolute -left-2 top-1/2 h-5 w-1 -translate-y-1/2 rounded-full bg-accent hidden lg:block" />}
                        </button>
                    </li>
                })}
            </ul>
        </nav>
    </aside>
}