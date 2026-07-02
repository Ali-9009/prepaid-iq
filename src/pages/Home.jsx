import MarqueeModule from "react-fast-marquee";
import Button from "../components/PrimaryBtn";

import {
    WalletCards,
    Network,
    Code2,
    Smartphone,
    CreditCard,
} from "lucide-react";
import Counter from "../components/Counter";

const topImages = [
    // "/assets/carrier-1.png",
    "/assets/carrier-2.png",
    "/assets/carrier-3.png",
    "/assets/carrier-4.png",
    "/assets/carrier-5.png",
];

const tags = [
    {
        text: "POS Solution for Dealers",
        icon: WalletCards,
        className: "lg:translate-x-8",
    },
    {
        text: "Distribution Channel Management",
        icon: Network,
        className: "lg:-translate-x-10",
    },
    {
        text: "API Integration",
        icon: Code2,
        className: "lg:translate-x-16",
    },
    {
        text: "Mobile Operators & MVNO Distribution",
        icon: Smartphone,
        className: "lg:-translate-x-2",
    },
    {
        text: "Payment Processing",
        icon: CreditCard,
        className: "lg:translate-x-28",
    },
];


export default function Home() {
    const Marquee = MarqueeModule.default || MarqueeModule;
    return (
        <>

            <section className="relative max-w-7xl mx-auto overflow-hidden pt-20 md:pt-28">
                {/* Background Glow */}
                <div className="absolute left-62 top-60 h-80 w-80 rounded-full bg-pink-600/20 blur-[140px]" />
                <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-pink-600/20 blur-[140px]" />

                {/* Left Star */}
                <img
                    src="/assets/star-ele.png"
                    alt=""
                    className="absolute left-6 md:left-40 top-110 w-8 md:w-12"
                />

                {/* Right Spiral */}
                <img
                    src="/assets/arrow-ele.png"
                    alt=""
                    className="absolute right-4 md:right-20 top-10 w-24 md:w-44 hidden lg:block"
                />

                {/* Dots */}
                <img
                    src="/assets/dots.png"
                    alt=""
                    className="absolute left-4 md:left-10 top-64 w-16 md:w-28 opacity-70"
                />

                <div className="container mx-auto px-5">

                    {/* Small Badge */}
                    <div className="flex justify-center">
                        <span className="border border-pink-500 text-pink-500 rounded-full px-5 py-2 text-xs font-semibold bg-pink-700/30  uppercase tracking-widest">
                            Transaction Service Provider
                        </span>
                    </div>

                    {/* Heading */}
                    <div className="max-w-5xl mx-auto text-center mt-8">
                        <h2 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                            Retail Solution for
                            <br />
                            Telecom Carriers
                        </h2>

                        <p className="m-6 text-(--text-color) text-base md:text-lg leading-8 max-w-4xl mx-auto">
                            Simplify your telecom retail operations with Prepaid iQ. A complete
                            solution for all your wireless needs. These tools are designed to
                            streamline your business processes and provide a seamless, enriching
                            experience for both you and your customers.
                        </p>

                        <div className="flex justify-center">
                            <Button text="Schedule a Conversation" />
                        </div>
                    </div>

                    {/* Dashboard Image */}
                    <div className="relative mt-16 md:mt-20">
                        <div className="rounded-[18px] md:rounded-[28px] overflow-hidden border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,.45)]">

                            {/* Replace this image */}
                            <img
                                src="/assets/dashboard.png"
                                alt="Dashboard"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className="w-full overflow-hidden py-8 md:py-12">
                <Marquee
                    speed={40}
                    gradient={false}
                    pauseOnHover={true}
                    autoFill={true}
                >
                    {topImages.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt=""
                            className="h-12 md:h-14 w-auto object-contain mx-10 shrink-0"
                        />
                    ))}
                </Marquee>
            </div>

            <section className="relative overflow-hidden py-8 md:py-12">
                {/* glow effects */}
                <div className="absolute left-62 top-35 h-60 w-60 rounded-full bg-pink-600/20 blur-[140px]" />

                <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
                    {/* left content */}
                    <div className="text-center lg:text-left">
                        <h2 className="primary-heading text-white!">
                            Welcome to Prepaid iQ
                        </h2>

                        <p className="mt-5 max-w-xl text-sm leading-7 text-(--text-color) sm:text-base lg:mx-0 mx-auto">
                            Prepaid iQ is a technology service provider TSP offering an array of digital solution. Seamlessly integrating with different carriers . Avoiding front-end errors with processing carrier activation, refills , international top up and much more.
                        </p>
                    </div>

                    {/* right floating tags */}
                    <div className="flex flex-col items-center gap-4 sm:gap-5">
                        {tags.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={index}
                                    className={`group flex w-full max-w-sm items-center gap-3 rounded-lg border border-pink-500/40 bg-white/5 px-4 py-3 text-white shadow-[0_0_30px_rgba(236,72,153,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-pink-400 hover:bg-white/10 sm:w-fit ${item.className}`}
                                >
                                    <span className="flex h-10 w-10 items-center justify-center rounded-md border border-pink-500/40 bg-pink-500/10 text-(--primary-color)">
                                        <Icon size={26} />
                                    </span>

                                    <span className="text-xs font-medium sm:text-sm">
                                        {item.text}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Counter />

            <section className="relative overflow-hidden bg-[url('/assets/bg.png')] bg-cover bg-center bg-no-repeat pt-8 md:pt-12">

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid items-center gap-14 lg:grid-cols-2">

                        <div className="text-center lg:text-left">
                            <h2 className="primary-heading text-white!">
                                Self-KioskiQ?
                            </h2>

                            <p className="m-5 max-w-xl text-sm leading-7 text-(--text-color) sm:text-base lg:mx-0 mx-auto">
                                Self-kiosk ordering enables customers to independently activate, topup, refill via a kiosk terminal, bypassing the need for assistance from a store attendant. This streamlines operations for businesses, allowing staff to allocate their time to other duties like attending to customers and enhancing the overall in-store experience.
                            </p>
                            <Button text="Schedule a Conversation" />
                        </div>

                        <div className=" flex justify-center">
                            <div className="relative">
                                <img
                                    src="/assets/product.png"
                                    alt="Self KioskiQ"
                                    className="relative w-full max-w-md"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="/assets/sec-1.png"
                            alt="home"
                            className=""
                        />
                    </div>

                    <div className="text-center md:text-left">
                        <h2 className="primary-heading text-white!">
                            Digital Hub for brick and mortar
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-(--text-color) sm:text-base md:mx-0">
                            Turn your brick and mortar location into a digital hub. Offer customers a
                            wide range of digital services, such as Telecom Carrier Activations, mobile
                            refills, international top-ups, and more. With PrepaidiQ, increase foot
                            traffic and improve the customer experience effortlessly.
                        </p>

                        <div className="mt-7 flex justify-center md:justify-start">
                            <Button text="Schedule a Conversation" />
                        </div>
                    </div>

                </div>
            </section>

        </>
    );
}