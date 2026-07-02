import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const quickLinks = [
    { name: "MoneiQ", path: "/" },
    { name: "Inventory", path: "/who-we-service" },
    { name: "Software Development", path: "/retail-suite" },
];

const policies = [
    { name: "DMCA", path: "/privacy-policy" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Services", path: "/refund-policy" },
    { name: "Cancellation & Refund Policy", path: "/cookies" },
];

const socials = [
    { name: "LinkedIn", icon: "ri-linkedin-fill", path: "#" },
    { name: "Facebook", icon: "ri-facebook-fill", path: "#" },
    { name: "Twitter X", icon: "ri-twitter-x-fill", path: "#" },
];

function FooterLink({ item }) {
    return (
        <li>
            <Link
                to={item.path}
                className="group inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-(--primary-color)"
            >
                <ArrowRight
                    size={14}
                    className="opacity-0 -ml-4 transition-all duration-300 group-hover:ml-0 group-hover:opacity-100"
                />
                {item.name}
            </Link>
        </li>
    );
}

export default function Footer() {
    return (
        <footer className="bg-[#18000B] border-t border-white/10 text-(--text-color)">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid gap-12 border-b border-white/10 py-14 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-white">Contacts</h3>

                        <div className="space-y-3 text-sm text-gray-400">
                            <a
                                href="mailto:support@prepaidiq.com"
                                className="block transition hover:text-(--primary-color)"
                            >
                                support@prepaidiq.com
                            </a>

                            <a
                                href="tel:+17635471297"
                                className="block transition hover:text-(--primary-color)"
                            >
                                (786) 667-5030
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-white">Resources</h3>

                        <ul className="space-y-3">
                            {quickLinks.map((item) => (
                                <FooterLink key={item.name} item={item} />
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-white">Legal</h3>

                        <ul className="space-y-3">
                            {policies.map((item) => (
                                <FooterLink key={item.name} item={item} />
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-white">Subscribe</h3>

                        <div className="flex overflow-hidden rounded-xl border border-white/10 bg-neutral-900">
                            <input
                                type="email"
                                placeholder="Get product updates"
                                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500"
                            />

                            <button className="flex h-12 w-14 shrink-0 items-center justify-center bg-pink-600 transition hover:bg-(--primary-color)">
                                <ArrowRight size={18} className="text-white" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
                    <img
                        src="/assets/logo.png"
                        alt="PrepaidIQ"
                        className="h-10 object-contain"
                    />

                    <p className="text-center text-sm text-gray-500">
                        © 2026{" "}
                        <span className="text-(--primary-color)">PrepaidIQ</span>. All Rights
                        Reserved.
                    </p>

                    <div className="flex gap-3">
                        {socials.map((item) => (
                            <a
                                key={item.name}
                                href={item.path}
                                aria-label={item.name}
                                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:border-(--secondary-color) hover:bg-(--primary-color)/30"
                            >
                                <i className={`${item.icon} text-sm transition group-hover:scale-110`} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}