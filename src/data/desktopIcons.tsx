import { Folder } from "lucide-react";
import {
    House,
    UserRound,
    FolderKanban,
    Code2,
    Mail,
} from "lucide-react";
import type { DesktopIcon } from "../types";
import About from "../components/About/About";

const windowIcons: DesktopIcon[] = [
    {
        id: "about",
        title: "About",
        icon: Folder,
        fill: "amber-400"
    }
];



const desktopIcons: DesktopIcon[] = [
    {
        id: "home",
        title: "Home",
        icon: House,
    },
    {
        id: "about",
        title: "About",
        icon: UserRound,
        component: <About />
    },
    {
        id: "projects",
        title: "Projects",
        icon: FolderKanban,
    },
    {
        id: "skills",
        title: "Skills",
        icon: Code2,
    },
    {
        id: "contact",
        title: "Contact",
        icon: Mail,
    },
];

export { desktopIcons, windowIcons }