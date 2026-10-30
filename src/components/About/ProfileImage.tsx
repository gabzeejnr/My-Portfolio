import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { name, profileImage } from "../../data";

export default function ProfileImage() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };

        window.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <>
            <button type="button" onClick={() => setIsOpen(true)} aria-label="View full profile image"
                className="size-24 shrink-0 overflow-hidden rounded-2xl border border-border"
            >
                <img src={profileImage} alt={name} className="size-full object-cover transition-transform duration-300 hover:scale-105" />
            </button>

            {isOpen && (
                <div role="dialog" aria-modal="true" aria-label="Profile image preview" onClick={() => setIsOpen(false)}
                    className="fixed inset-0 z-100 grid place-items-center bg-black/75 p-6 backdrop-blur-sm"
                >
                    <button type="button" onClick={() => setIsOpen(false)} aria-label="Close image preview"
                        className="absolute right-6 top-6 grid size-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                    >
                        <X size={20} />
                    </button>

                    <img src={profileImage} alt={name} onClick={(e) => e.stopPropagation()}
                        className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl animate-in zoom-in-95 duration-300"
                    />
                </div>
            )}
        </>
    )
}