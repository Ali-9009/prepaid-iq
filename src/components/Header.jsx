import { useEffect, useState } from "react";
import {
    Menu,
    X,
    Search,
    ChevronDown,
    Home,
    Grid3X3,
    Headphones,
    Info,
} from "lucide-react";
import Button from "./PrimaryBtn";

const navLinks = [
    { name: "Home", icon: Home },
    { name: "Services", icon: Grid3X3 },
    { name: "Support", icon: Headphones },
    { name: "About", icon: Info },
];

export default function Header() {

    const [hideTopBar, setHideTopBar] = useState(false);
    const [showMobileSearch, setShowMobileSearch] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setHideTopBar(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-50 border-b border-white/10 bg-[#130009]/70 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
                {/* top bar */}
                <div
                    className={`overflow-hidden bg-(--primary-color) border-b border-white/10 text-xs text-white/70 transition-all duration-500 ease-in-out ${hideTopBar
                        ? "max-h-0 opacity-0 -translate-y-3"
                        : "max-h-10 opacity-100 translate-y-0 py-2"
                        }`}
                >
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 text-white font-semibold">
                        <p>Welcome to PrepaidiQ</p>
                        <p>Retail Solution for Telecom Carriers</p>
                    </div>
                </div>

                <div className="relative mx-auto flex h-16 max-w-7xl md:space-x-8 items-center justify-between px-4">

                    {/* Left */}
                    <button
                        onClick={() => setOpen(true)}
                        className="z-20 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white transition hover:bg-white/20"
                    >
                        <Menu size={22} />
                    </button>

                    {/* Mobile Search */}
                    <div
                        className={`absolute left-16 right-16 transition-all duration-300 md:hidden w-75 ${showMobileSearch
                            ? "opacity-100 scale-100"
                            : "pointer-events-none opacity-0 scale-95"
                            }`}
                    >
                        <div className="relative">
                            <input
                                autoFocus
                                placeholder="Search services..."
                                className="h-11 w-full rounded-xl border border-white/10 bg-white/10 px-4 pr-10 text-sm text-white backdrop-blur-xl outline-none placeholder:text-white/50"
                            />

                            <button
                                onClick={() => setShowMobileSearch(false)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60"
                            >
                                <X size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Logo */}
                    <a
                        href="/"
                        className={`absolute left-1/2 -translate-x-1/2 transition-all duration-300 md:static md:translate-x-0 ${showMobileSearch
                            ? "opacity-0 scale-90 pointer-events-none"
                            : "opacity-100 scale-100"
                            }`}
                    >
                        <img
                            src="/assets/logo.png"
                            alt="PrepaidiQ"
                            className="h-9 w-auto"
                        />
                    </a>

                    {/* Desktop Search */}
                    <div className="relative hidden flex-1 md:block">
                        <input
                            type="text"
                            placeholder="Search Services..."
                            className="h-11 w-full rounded-xl border border-white/10 bg-white/10 px-5 pr-12 text-sm text-white outline-none backdrop-blur-xl placeholder:text-white/45"
                        />

                        <Search
                            size={18}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60"
                        />
                    </div>

                    {/* Mobile Search Icon */}
                    <button
                        onClick={() => setShowMobileSearch(true)}
                        className={`z-20 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white transition hover:bg-white/20 md:hidden ${showMobileSearch ? "opacity-0 pointer-events-none" : ""
                            }`}
                    >
                        <Search size={20} />
                    </button>

                    {/* Desktop Buttons */}
                    <div className="ml-auto hidden items-center gap-3 md:flex">
                        <a
                            href="/login"
                            className="text-sm font-medium text-white/75 hover:text-white"
                        >
                            Log in
                        </a>

                        {/* <a
                            href="/signup"
                            className="rounded-full bg-pink-600 px-5 py-2.5 text-sm font-semibold text-white"
                        >
                            Sign up
                        </a> */}

                        <Button text="Sign up" />
                    </div>
                </div>
            </header>

            {/* overlay */}
            <div
                onClick={() => setOpen(false)}
                className={`fixed inset-0 z-60 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            />

            {/* sidebar */}
            <aside
                className={`fixed left-0 top-0 z-70 h-full w-[85%] max-w-sm border-r border-white/10 bg-[#130009]/90 p-5 text-white shadow-2xl backdrop-blur-2xl transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between">
                    <img src="/assets/logo.png" alt="Prepaid iQ" className="h-10" />

                    <button
                        onClick={() => setOpen(false)}
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition hover:bg-white/20"
                    >
                        <X size={22} />
                    </button>
                </div>

                <div className="mt-8 space-y-3">
                    {navLinks.map((link) => {
                        const Icon = link.icon;

                        return (
                            <a
                                key={link.name}
                                href="#"
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                            >
                                <Icon size={19} className="text-pink-400" />
                                {link.name}
                            </a>
                        );
                    })}
                </div>

                <div className="mt-8 grid gap-3">
                    <a
                        href="/login"
                        className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white"
                    >
                        Log in
                    </a>

                    {/* <a
                        href="/signup"
                        className="rounded-full bg-pink-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-pink-600/30"
                    >
                        Sign up
                    </a> */}
                    <Button text="Sign up" />
                </div>
            </aside>
        </>
    );
}