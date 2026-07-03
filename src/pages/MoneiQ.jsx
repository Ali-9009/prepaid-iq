import { Landmark, FileText, UserCheck, MailCheck } from "lucide-react";
import {
    Globe,
    ArrowRightLeft,
    CreditCard,
    Wallet,
    MonitorSmartphone,
} from "lucide-react";

const services = [
    {
        icon: Globe,
        title: "Receive Money",
        description: "Receive money from anywhere in the world.",
    },
    {
        icon: ArrowRightLeft,
        title: "Transfers",
        description: "Make national and international transfers.",
    },
    {
        icon: CreditCard,
        title: "Debit Cards",
        description:
            "Get a physical or virtual debit card for purchases.",
    },
    {
        icon: Landmark,
        title: "US Bank Account",
        description:
            "Keep money in dollars in an American bank without being a resident.",
    },
    {
        icon: Wallet,
        title: "Withdraw & Pay",
        description:
            "Withdraw money or pay in the available local currency.",
    },
    {
        icon: MonitorSmartphone,
        title: "24/7 Balance",
        description:
            "Virtual window for balance verification 24/7.",
    },
];

export default function MoneiQ() {
    return (
        <>
            <section className="relative overflow-hidden py-8 md:py-18">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--primary-color)_0%,transparent_35%)] opacity-25" />
                <div className="relative mx-auto max-w-7xl px-4">
                    <div className="grid items-center gap-10 lg:grid-cols-2">
                        <div>
                            <span className="mb-4 inline-flex border border-pink-500 text-pink-500 rounded-full px-5 py-2 text-xs font-semibold bg-pink-700/30  uppercase tracking-widest gap-2">
                                Secure Financial Ecosystem
                            </span>

                            <h2 className="primary-heading text-white!">
                                What is <span className="text-(--primary-color)">MoneiQ?</span>
                            </h2>

                            <p className="mt-6 max-w-2xl text-base leading-8 text-(--text-color) md:text-lg">
                                Monei is a secure financial ecosystem that through multiple
                                channels allows the management of funds in local currency or in US
                                dollars which, in addition, in partnership with multibanco
                                international, allows you to have a bank account in the United
                                states without the need to be a US resident…
                            </p>

                            <div className="mt-8 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
                                <h3 className="text-xl font-semibold text-white">
                                    In order to create your account now...
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-(--text-color)">
                                    you must have:
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur-xl transition hover:-translate-y-2 hover:border-(--primary-color)/60 hover:bg-(--primary-color)/10">
                                <FileText className="mb-5 text-(--primary-color)" size={32} />

                                <p className="text-sm leading-7 text-(--text-color)">
                                    a valid government identification or passport that clearly shows
                                    personal information, issue date and expiration date.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur-xl transition hover:-translate-y-2 hover:border-(--primary-color)/60 hover:bg-(--primary-color)/10">
                                <Landmark className="mb-5 text-(--primary-color)" size={32} />

                                <p className="text-sm leading-7 text-(--text-color)">
                                    Any document that corroborates the residence address, for
                                    example a utility bill, water bill, etc.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur-xl transition hover:-translate-y-2 hover:border-(--primary-color)/60 hover:bg-(--primary-color)/10">
                                <UserCheck className="mb-5 text-(--primary-color)" size={32} />

                                <p className="text-sm leading-7 text-(--text-color)">
                                    The recipient must be over 18 years old The recipient must have
                                    an identity card
                                </p>
                            </div>

                            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur-xl transition hover:-translate-y-2 hover:border-(--primary-color)/60 hover:bg-(--primary-color)/10">
                                <MailCheck className="mb-5 text-(--primary-color)" size={32} />

                                <p className="text-sm leading-7 text-(--text-color)">
                                    Once you have completed the registration process,You will
                                    receive a welcome text message & email where you must follow the
                                    steps to verify your identity.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden py-8 md:py-12">
                <div className="relative mx-auto max-w-7xl px-4">
                    {/* Heading */}
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="mb-4 inline-flex border border-pink-500 text-pink-500 rounded-full px-5 py-2 text-xs font-semibold bg-pink-700/30  uppercase tracking-widest gap-2">
                            MoneiQ Services
                        </span>

                        <h2 className="primary-heading text-white!">
                            Services
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-(--text-color)">
                            MoneiQ users have a web and mobile application that also connects
                            with other applications, which allow them to have total and real
                            control of the funds deposited without intermediaries.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, index) => {
                            const Icon = service.icon;

                            return (
                                <div
                                    key={index}
                                    className="group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-(--primary-color)/50 hover:bg-(--primary-color)/10"
                                >
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-(--primary-color)/15 text-(--primary-color) transition group-hover:scale-110">
                                        <Icon size={28} />
                                    </div>

                                    <h3 className="mt-6 text-xl font-semibold text-white">
                                        {service.title}
                                    </h3>

                                    <p className="mt-3 leading-7 text-(--text-color)">
                                        {service.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
