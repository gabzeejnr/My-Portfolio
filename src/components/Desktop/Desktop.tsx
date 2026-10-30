import { useState } from "react";
import { desktopIcons, windowIcons } from "../../data";
import Window from "../Window/Window";
import Taskbar from "./Taskbar";
import styles from "./Desktop.module.scss";
import DesktopIcon from "./DesktopIcon";
import Sidebar from "./Sidebar";
import type { DesktopIcon as DesktopIconType } from "../../types";

export default function Desktop() {
    const [activeApp, setActiveApp] = useState<DesktopIconType>(desktopIcons[0])

    return (
        <main className={`${styles.desktopBackground} relative h-dvh flex flex-col bg-desktop`}>
            <Sidebar icons={desktopIcons} onSelect={setActiveApp} />

            <div className={`${styles.iconGrid} h-full lg:pl-20`}>
                {windowIcons.map(icon => (
                    <DesktopIcon key={icon.id} {...icon} />
                ))}
            </div>
            <div className="absolute top-20 md:top-0 left-1/2 -translate-x-1/2 md:-translate-x-50 md:right-0 w-fit">
                <Window title={activeApp.title} icon={<activeApp.icon size={16} />}
                    onClose={() => setActiveApp(desktopIcons[0])} onMinimize={() => setActiveApp(desktopIcons[0])}
                    onMaximize={() => { }}
                >{activeApp.component}</Window>
            </div>
            <Taskbar />
        </main>
    )
}