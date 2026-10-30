import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

interface DesktopIcon {
    id: string,
    title: string,
    icon: LucideIcon,
    fill?: string,
    component?: ReactNode
}


export type { DesktopIcon }