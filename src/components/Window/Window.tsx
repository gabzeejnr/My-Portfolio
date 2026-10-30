import { Minus, Square, X } from "lucide-react";
import type { WindowProps } from "../../types";
import styles from "./Window.module.scss";


export default function Window({ icon, title, onMaximize, onMinimize, onClose, children }: WindowProps) {

    const controlBtn = "grid place-items-center w-11.5 text-text-primary transition-[background_150ms_ease]";

    return (
        <section className={`${styles.windowContainer} flex flex-col overflow-hidden border border-border rounded-[10px] bg-surface-glass text-text-primary shadow-[shadow-window] backdrop-blur-xs`}>
            <header className="flex items-center justify-between bg-surface border-b border-border min-h-10 pl-3.5 select-none">
                <div className="flex items-center gap-2.25 text-[12px] font-medium">
                    {icon}
                    <span>{title}</span>
                </div>

                <div className="flex self-stretch">
                    <button onClick={onMinimize} aria-label="Minimize"
                        className={`${controlBtn} hover:bg-surface-hover`}>
                        <Minus size={14} />
                    </button>
                    <button onClick={onMaximize} aria-label="Maximize"
                        className={`${controlBtn} hover:bg-surface-hover`}>
                        <Square size={14} />
                    </button>
                    <button onClick={onClose} aria-label="Close" className={`${controlBtn} hover:bg-[#C42B1C] hover:text-white`}>
                        <X size={14} />
                    </button>
                </div>
            </header>
            <div className="flex-1 min-h-0 overflow-auto">
                {children}
            </div>
        </section>
    )
}