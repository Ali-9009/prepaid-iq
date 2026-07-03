import { Code2, ShieldCheck, Users, BadgeCheck } from "lucide-react";

const items = [
    {
        icon: Users,
        text: "HIGH-CLASS SPECIALISTS",
    },
    {
        icon: BadgeCheck,
        text: "EXTENSIVE EXPERIENCE",
    },
    {
        icon: ShieldCheck,
        text: "ROCK SOLID GUARANTEE",
    },
    {
        icon: Code2,
        text: "ENTERPRISE SOFTWARE DEVELOPMENT",
    },
];

export default function SoftwareDev() {
    return (
        <section className="relative overflow-hidden py-16 md:py-24">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--primary-color)_0%,transparent_35%)] opacity-25" />

            <div className="relative mx-auto max-w-7xl px-4">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="border border-pink-500 text-pink-500 rounded-full px-5 py-2 text-xs font-semibold bg-pink-700/30  uppercase tracking-widest">
                        Technology Service Provider
                    </span>

                    <h2 className="mt-5 primary-heading text-white!">
                        Premier Custom Software Development Company
                    </h2>
                </div>

                <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {items.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="group rounded-3xl border border-white/10 bg-white/10 p-6 text-center shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-(--primary-color) hover:bg-(--primary-color)/10"
                            >
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-(--primary-color)/20 text-(--primary-color) transition group-hover:scale-110">
                                    <Icon size={28} />
                                </div>

                                <h3 className="mt-6 text-sm font-semibold tracking-wide text-white">
                                    {item.text}
                                </h3>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
