import Desktop from "./components/Desktop/Desktop";
import ProjectWindow from "./components/Window/ProjectWindow/ProjectWindow";
import "./utils";
import "./App.css";
import { projects } from "./data";

export default function App() {

    return (
        <>
            <Desktop />
            <div className="absolute right-10 top-10">
                <ProjectWindow project={projects[0]} />
            </div>
        </>
    )
}