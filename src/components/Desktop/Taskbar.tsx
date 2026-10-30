import { useEffect, useState } from "react";
import {
    AudioLines, Battery, BatteryCharging,
    BatteryFull, BatteryLow, BatteryMedium,
    ChevronUp, Folder, Globe,
    Search, Settings, Wifi,
    WifiOff
} from "lucide-react";
import terminal from "../../assets/svg/windows_terminal.webp";
import styles from "./Desktop.module.scss";

interface BatteryManager extends EventTarget {
    level: number;
    charging: boolean;
}

interface NavigatorWithBattery extends Navigator {
    getBattery(): Promise<BatteryManager>;
}

interface BatteryInfo {
    level: number;
    charging: boolean;
}

export default function Taskbar() {
    const [now, setNow] = useState(() => new Date());
    const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
    const [battery, setBattery] = useState<BatteryInfo | null>(null);
    const BatteryIcon = (battery?.charging
        ? BatteryCharging
        : (battery && battery.level > 66
            ? BatteryFull
            : (battery && battery.level > 33
                ? BatteryMedium
                : battery ? BatteryLow : Battery
            )
        )
    )
    const time = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, }).format(now);
    const date = new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" }).format(now);

    useEffect(() => {
        const interval = setInterval(() => setNow(new Date()), 30_000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const updateOnlineStatus = () => setIsOnline(navigator.onLine);
        window.addEventListener("online", updateOnlineStatus);
        window.addEventListener("offline", updateOnlineStatus);

        return () => {
            window.removeEventListener("online", updateOnlineStatus);
            window.removeEventListener("offline", updateOnlineStatus);
        };
    }, [navigator.onLine]);

    useEffect(() => {
        let batteryManager: BatteryManager | undefined;

        function updateBattery() {
            if (!batteryManager) return;
            setBattery({
                level: Math.round(batteryManager.level * 100),
                charging: batteryManager.charging,
            })
        };

        async function getBatteryInfo() {
            const nav = navigator as NavigatorWithBattery;
            if (typeof nav.getBattery !== "function") return;

            try {
                batteryManager = await nav.getBattery();
                updateBattery();
                batteryManager.addEventListener("levelchange", updateBattery);
                batteryManager.addEventListener("chargingchange", updateBattery);
            } catch (err) {
                console.error("Unable to access battery information:", err);
            }
        }
        getBatteryInfo();

        return () => {
            batteryManager?.removeEventListener("levelchange", updateBattery);
            batteryManager?.removeEventListener("chargingchange", updateBattery);
        }
    }, []);

    return (
        <section className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-[1fr_auto_1fr] items-center border-t border-white/10 bg-[#16080de8] px-3 py-1.5 text-white backdrop-blur-xl sm:px-5">
            <div className="flex min-w-0 items-center gap-3">
                <button type="button" aria-label="Start" className="grid h-10 w-10 shrink-0 place-items-center rounded-lg transition hover:bg-white/10">
                    <span className="grid grid-cols-2 gap-px">
                        {Array.from({ length: 4 }, (_, i) => (
                            <span key={i} className={`${styles.startIcon} `} />
                        ))}
                    </span>
                </button>

                <label className="relative hidden min-w-0 max-w-56 flex-1 sm:block">
                    <Search size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70" />
                    <input type="search" placeholder="Search" aria-label="Search" name="search"
                        className="w-full rounded-full border border-white/10 bg-white/10 py-2 pl-9 pr-3 text-sm outline-none transition placeholder:text-white/60 focus:border-pink-400/60 focus:bg-white/15"
                    />
                </label>
            </div>

            <div className="flex items-center justify-center gap-1 sm:gap-3">
                <button type="button" aria-label="File Explorer"
                    className="grid h-10 w-10 place-items-center rounded-lg transition hover:bg-white/10 sm:h-11 sm:w-11"
                >
                    <Folder size={25} className="fill-amber-400 text-amber-400" />
                </button>

                <button type="button" aria-label="Browser"
                    className="grid h-10 w-10 place-items-center rounded-lg transition hover:bg-white/10 sm:h-11 sm:w-11"
                >
                    <Globe size={27} className="text-sky-400" />
                </button>

                <button type="button" aria-label="Terminal"
                    className="grid h-10 w-10 place-items-center rounded-lg transition hover:bg-white/10 sm:h-11 sm:w-11"
                >
                    <img src={terminal} alt="" className="w-7 object-contain" />
                </button>

                <button type="button" aria-label="Settings"
                    className="grid h-10 w-10 place-items-center rounded-lg transition hover:bg-white/10 sm:h-11 sm:w-11"
                >
                    <Settings size={25} className="text-white/85" />
                </button>
            </div>

            <div className="flex min-w-0 items-center justify-end gap-2 sm:gap-4">
                <div className="hidden items-center gap-3 sm:flex">
                    <button type="button" aria-label="Show hidden icons">
                        <ChevronUp size={17} />
                    </button>
                    {isOnline ? <Wifi size={19} /> : <WifiOff size={19} />}
                    <AudioLines size={19} />
                    {battery ? (
                        <button
                            type="button"
                            title={`${battery.level}% ${battery.charging ? "Charging" : "Not charging"}`}
                            aria-label={`Battery ${battery.level}%, ${battery.charging ? "charging" : "not charging"
                                }`}
                            className="flex items-center gap-1"
                        >
                            <BatteryIcon
                                size={21}
                                className={battery.level <= 15 && !battery.charging
                                    ? "text-red-400"
                                    : "text-white"
                                }
                            />
                        </button>
                    ) : (
                        <Battery size={21} aria-label="Battery status unavailable" />
                    )}
                </div>

                <button type="button" aria-label={`Current time ${time}, date ${date}`}
                    className="flex shrink-0 flex-col items-end rounded-md px-1 py-1 text-[11px] leading-relaxed transition hover:bg-white/10 sm:px-2 sm:text-xs"
                >
                    <span>{time}</span>
                    <span>{date}</span>
                </button>
            </div>
        </section>
    );
}
