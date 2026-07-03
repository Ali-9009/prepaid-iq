import {
    CheckSquare,
    User,
    Phone,
    Users,
    FileText,
    Mail,
    Send,
    ArrowRight,
    ChevronDown,
    Network,
} from "lucide-react";

export default function Contact() {
    const services = [
        "POS Solution for Dealers",
        "Distribution Channel Management",
        "Mobile Operators & MNVO Distribution",
        "API Integration",
        "Payment Processing",
    ];

    return (
        <section className="relative overflow-hidden bg-[#130009] py-16 md:py-24">
            <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-(--primary-color)/20 blur-3xl" />
            <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />

            <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
                {/* Left Content */}
                <div data-aos="fade-right">
                    <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-(--primary-color)/30 bg-white/5 px-5 py-3 text-sm font-semibold text-(--primary-color)">
                        <Network size={18} />
                        Technology Service Provider
                    </div>

                    <h1 className="text-3xl font-bold leading-18 text-white md:text-7xl">
                        Welcome to{" "}
                        <span className="text-(--primary-color)">PrepaidiQ</span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-(--text-color) md:text-lg">
                        PrepaidiQ is the leading technology solutions provider (TSP) in the
                        global prepaid wireless and digital payments industries. We provide
                        carrier activation, electronic payment processing, mobile top-up,
                        distribution channel management technology.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        {services.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-(--primary-color)/40 hover:bg-white/10"
                            >
                                <CheckSquare
                                    size={18}
                                    className="text-(--primary-color)"
                                />
                                <span className="text-sm font-medium text-white">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Form */}
                <div
                    data-aos="fade-left"
                    className="relative rounded-[36px] border border-(--primary-color)/30 bg-white/5 p-6 shadow-[0_0_60px_rgba(236,0,126,0.18)] backdrop-blur-xl md:p-10"
                >
                    <div className="absolute -top-8 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border border-(--primary-color)/40 bg-[#220010] text-(--primary-color) shadow-[0_0_30px_rgba(236,0,126,0.35)]">
                        <Send size={28} />
                    </div>

                    <div className="pt-6 text-center">
                        <h2 className="text-3xl font-bold text-white md:text-4xl">
                            Get in touch
                        </h2>
                        <p className="mt-2 font-semibold text-(--primary-color)">
                            We're available 10:00 AM - 6:00 PM EST
                        </p>
                    </div>

                    <form className="mt-8 space-y-4">
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-(--primary-color)" size={20} />
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 pl-12 pr-4 text-white outline-none transition placeholder:text-white/50 focus:border-(--primary-color)"
                            />
                        </div>

                        <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-(--primary-color)" size={20} />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 pl-12 pr-4 text-white outline-none transition placeholder:text-white/50 focus:border-(--primary-color)"
                            />
                        </div>

                        <div className="relative">
                            <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-(--primary-color)" size={20} />
                            <select
                                defaultValue=""
                                className="h-14 w-full appearance-none rounded-2xl border border-white/10 bg-[#1b0611] pl-12 pr-12 text-white outline-none transition focus:border-(--primary-color)"
                            >
                                <option value="" disabled>
                                    How did you hear about us?
                                </option>
                                <option>Online</option>
                                <option>Tradeshow</option>
                                <option>Another dealer</option>
                                <option>Existing customer</option>
                                <option>Social media</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-(--primary-color)" size={20} />
                        </div>

                        <div className="relative">
                            <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-(--primary-color)" size={20} />
                            <input
                                type="text"
                                placeholder="Short Description"
                                className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 pl-12 pr-4 text-white outline-none transition placeholder:text-white/50 focus:border-(--primary-color)"
                            />
                        </div>

                        <div className="relative">
                            <Mail className="absolute left-4 top-5 text-(--primary-color)" size={20} />
                            <textarea
                                placeholder="Your Message"
                                rows="4"
                                className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-4 pl-12 text-white outline-none transition placeholder:text-white/50 focus:border-(--primary-color)"
                            />
                        </div>

                        <button
                            type="submit"
                            className="mx-auto flex items-center justify-center gap-3 rounded-full bg-(--primary-color) px-10 py-4 font-bold text-white transition hover:scale-105 hover:shadow-[0_0_30px_rgba(236,0,126,0.45)]"
                        >
                            SUBMIT FORM
                            <ArrowRight size={20} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}