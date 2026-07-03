import {
    CreditCard,
    ShieldCheck,
    WalletCards,
    BanknoteArrowDown,
} from "lucide-react";
import {
    Network,
    Headset,
} from "lucide-react";
import Button from '../components/PrimaryBtn'

const features = [
    {
        icon: CreditCard,
        title: "Payment Integration",
        description:
            "Automate your checkout flow, reduce human error, and reconcile with ease. Connect your workstations directly to the terminal with integrated payments.",
    },
    {
        icon: ShieldCheck,
        title: "Secure Payments",
        description:
            "Securely process payments with certified terminals and end-to-end encryption that protects cardholder data.",
    },
    {
        icon: WalletCards,
        title: "Multiple Ways to Pay",
        description:
            "Offer your customers multiple payment options by accepting tap, chip, swipe, and all digital wallets including Apple Pay, Google Pay, and Samsung Pay.",
    },
    {
        icon: BanknoteArrowDown,
        title: "Next-Day Funding",
        description:
            "Maximize your cash flow and see money in your account that much faster. With most processors holding your money for 48-72 hours, PrepaidiQ Integrated Payment Processing lets you access your funds the next business day.",
    },
];

const features1 = [
    {
        icon: Network,
        title: "Experience the connectivity of full integration",
        description:
            "Streamline your check-out process, reduce errors, and simplify reconciliation with our fully integrated payment solution. Our connected workstations and payment terminals ensure consistent transactional data across the board, making payment processing effortless.",
        aos: "fade-right",
    },
    {
        icon: ShieldCheck,
        title: "The power of security with none of the complexities",
        description:
            "Experience the power of security without the complexities. Our end-to-end encryption, firmware updates, and certifications ensure secure transactions while reducing PCI scope by 90%, saving you from potential non-compliance fees.",
        aos: "fade-left",
    },
    {
        icon: Headset,
        title: "Quick resolution through one point of contact",
        description:
            "Enjoy the convenience of a single point of contact for all your payment needs. From setting up new payment methods to resolving technical issues, iQmetrix is here to provide comprehensive support, eliminating the hassle of dealing with multiple vendors.",
        aos: "fade-right",
    },
];

export default function PaymentPro() {
    return (
        <>
            <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--primary-color)_0%,transparent_35%)] opacity-25" />
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <div className="flex justify-center lg:justify-start">
                        <img
                            src="/assets/pay-1.png"
                            alt="home"
                            className="rounded-2xl"
                        />
                    </div>

                    <div className="text-center md:text-left" data-aos="fade-left">
                        <h2 className="primary-heading text-white!">
                            Fast, Secure, Integrated Transactions
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-(--text-color) sm:text-base md:mx-0">
                            PrepaidiQ Merchant Services (MSP) is full-service payment processing that enables an integrated experience with automated reconciliation, transparent reporting, and faster checkouts for customers. Our payments experts are there for you when you need superior onboarding, customer service, and support.
                        </p>

                        <div className="mt-7 flex justify-center md:justify-start">
                            <Button text="Schedule a Conversation" />
                        </div>
                    </div>

                </div>
            </section>

            <section className="relative overflow-hidden py-8 md:py-12">
                <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-(--primary-color)/15 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4">
                    {/* Heading */}
                    <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
                        <span className="rounded-full border border-(--primary-color)/30 bg-(--primary-color)/10 px-5 py-2 text-sm font-semibold text-(--primary-color)">
                            Features
                        </span>

                        <h2 className="mt-5 primary-heading text-white!">
                            PrepaidiQ Integrated Payment Processing
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-(--text-color)">
                            Everything you need to securely process payments, improve your
                            checkout experience, and accelerate your business cash flow.
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative mx-auto mt-20 max-w-5xl">
                        {/* Center Line */}
                        <div className="absolute left-7 top-0 hidden h-full w-px overflow-hidden lg:block">
                            <div className="h-full w-full bg-linear-to-b from-transparent via-(--primary-color) to-transparent animate-pulse" />
                        </div>

                        <div className="space-y-10">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;

                                return (
                                    <div
                                        key={index}
                                        data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                                        className="group relative flex flex-col gap-6 lg:flex-row lg:items-start"
                                    >
                                        {/* Icon */}
                                        <div className="z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-(--primary-color)/20 bg-[#18000B] text-(--primary-color)">
                                            <Icon size={28} />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-(--primary-color)/40 hover:bg-(--primary-color)/10">
                                            <h3 className="text-2xl font-semibold text-white">
                                                {feature.title}
                                            </h3>

                                            <p className="mt-4 leading-8 text-(--text-color)">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden py-16 md:py-24">
                <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-(--primary-color)/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4">
                    {/* Heading */}
                    <div
                        className="mx-auto mb-16 max-w-3xl text-center"
                        data-aos="fade-up"
                    >
                        <span className="rounded-full border border-(--primary-color)/30 bg-(--primary-color)/10 px-5 py-2 text-sm font-semibold text-(--primary-color)">
                            Why Choose PrepaidiQ
                        </span>

                        <h2 className="mt-5 primary-heading text-white!">
                            Everything Works Better Together
                        </h2>
                    </div>

                    <div className="space-y-10">
                        {features1.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={index}
                                    data-aos={item.aos}
                                    className={`grid items-center gap-8 lg:grid-cols-2 ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                                        }`}
                                >
                                    {/* Icon Box */}
                                    <div className="flex justify-center">
                                        <div className="relative">
                                            <div className="absolute inset-0 rounded-full bg-(--primary-color)/20 blur-2xl" />

                                            <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-(--primary-color)/30 bg-white/5 backdrop-blur-xl">
                                                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-(--primary-color)/15 text-(--primary-color)">
                                                    <Icon size={52} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition duration-300 hover:border-(--primary-color)/40 hover:bg-white/10">
                                        <h3 className="text-2xl font-semibold text-white">
                                            {item.title}
                                        </h3>

                                        <p className="mt-5 leading-8 text-(--text-color)">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
