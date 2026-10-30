import type { DesktopIcon } from "../../types";

export default function DesktopIcon({ id, icon: Icon, title, fill }: DesktopIcon) {
    return (
        <div id={id} title={title} className="p-1 size-15 cursor-pointer rounded-sm flex flex-col items-center justify-center hover:bg-white/20"
            aria-label={title}
        >
            <Icon size={35} className={`fill-${fill} text-${fill}`} />
            <span className="text-xs select-none">{title}</span>
        </div>
    )
}