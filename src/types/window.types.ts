interface WindowProps {
    title: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
    onClose?: () => void;
    onMinimize?: () => void;
    onMaximize?: () => void
}


export type { WindowProps }