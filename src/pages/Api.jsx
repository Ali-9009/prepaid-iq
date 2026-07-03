import Button from '../components/PrimaryBtn'

import {
    BookOpenText,
    Code2,
    LifeBuoy,
} from "lucide-react";

import {
    SearchCheck,
    ClipboardList,
    ArrowRight,
} from "lucide-react";

const steps = [
    {
        icon: SearchCheck,
        number: "01",
        title: "Discover",
        description:
            "A leader from our team assesses your business challenges, identifies opportunities, and recommends the most suitable engagement model.",
        aos: "fade-up",
    },
    {
        icon: ClipboardList,
        number: "02",
        title: "Define",
        description:
            "Whether it’s full end-to-end delivery of a new app or tapping into our advisory and consulting services to work on a new initiative, one of our PrepaidiQ experts will work with you to define your goals and service needs.",
        aos: "fade-up",
    },
    {
        icon: Code2,
        number: "03",
        title: "Develop",
        description:
            "Once your service is defined, we will create your unique API Token, process, and first drafts; whether your project involves modeling a user journey or defining your brand identity.",
        aos: "fade-up",
    },
];

export default function Api() {
    return (
        <>
            <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--primary-color)_0%,transparent_35%)] opacity-25" />
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <div className="flex justify-center lg:justify-start">
                        <img
                            src="/assets/api-1.png"
                            alt="home"
                            className="rounded-2xl"
                        />
                    </div>

                    <div className="text-center md:text-left" data-aos="fade-left">
                        <h2 className="primary-heading text-white!">
                            Streamline Operations with API Integration Services
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-(--text-color) sm:text-base md:mx-0">
                            Work with PrepaidiQ for seamless API integration solutions by industries leaders. PrepaidiQ offers a full range of API services to enhance your digital infrastructure
                        </p>

                        <div className="mt-7 flex justify-center md:justify-start">
                            <Button text="Schedule a Conversation" />
                        </div>
                    </div>

                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--primary-color)_0%,transparent_35%)] opacity-25" />
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <div className="text-center md:text-left" data-aos="fade-left">
                        <h2 className="primary-heading text-white!">
                            Your app deserves the best in Telecom
                        </h2>

                        <div className="mt-10 space-y-5">
                            <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:items-center md:justify-center">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-(--primary-color)/15 text-(--primary-color)">
                                    <BookOpenText size={28} />
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white">
                                        Developer Docs
                                    </h3>

                                    <p className="mt-2 leading-7 text-(--text-color)">
                                        Continually updated documentation and code samples to make
                                        implementing texting a breeze.
                                    </p>
                                </div>
                            </div>

                          <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:items-center md:justify-center">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-(--primary-color)/15 text-(--primary-color)">
                                    <Code2 size={28} />
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white">
                                        Included Support
                                    </h3>

                                    <p className="mt-2 leading-7 text-(--text-color)">
                                        No upcharge for support. You need help? You got it—with fast response time
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:items-center md:justify-center">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-(--primary-color)/15 text-(--primary-color)">
                                    <LifeBuoy size={28} />
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white">
                                        Advice and Expertise.
                                    </h3>

                                    <p className="mt-2 leading-7 text-(--text-color)">
                                        We live messaging, and we’ll help you build what you need the right way, without a sales pitch
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="/assets/api-2.png"
                            alt="home"
                            className=""
                        />
                    </div>

                </div>
            </section>

            <section className="relative overflow-hidden py-16 md:py-24">
                <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-(--primary-color)/15 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4">
                    {/* Heading */}
                    <div
                        className="mx-auto max-w-3xl text-center"
                        data-aos="fade-up"
                    >
                        <span className="rounded-full border border-(--primary-color)/30 bg-(--primary-color)/10 px-5 py-2 text-sm font-semibold text-(--primary-color)">
                            API Integration
                        </span>

                        <h2 className="mt-5 primary-heading text-white!">
                            How We Deliver API Integration Solutions
                        </h2>
                    </div>

                    {/* Process */}
                    <div className="relative mt-20">
                        {/* Desktop Line */}
                        <div className="absolute left-0 right-0 top-10 hidden h-0.5 bg-linear-to-r from-(--primary-color)/20 via-(--primary-color) to-(--primary-color)/20 lg:block" />

                        <div className="grid gap-10 lg:grid-cols-3">
                            {steps.map((step, index) => {
                                const Icon = step.icon;

                                return (
                                    <div
                                        key={index}
                                        data-aos={step.aos}
                                        className="relative text-center"
                                    >

                                        {/* Icon */}
                                        <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-(--primary-color)/30 bg-[#1a0812] text-(--primary-color)">
                                            <Icon size={34} />
                                        </div>

                                        {/* Card */}
                                        <div className="mt-8 rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-(--primary-color)/50 hover:bg-white/10">
                                            <span className="text-5xl font-bold text-(--primary-color)">
                                                {step.number}
                                            </span>

                                            <h3 className="mt-4 text-xl font-semibold text-white">
                                                {step.title}
                                            </h3>

                                            <p className="mt-5 leading-7 text-(--text-color)">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
