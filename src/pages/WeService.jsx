import { Plane, ShoppingCart, ArrowUpRight, Sparkles } from "lucide-react";
import Button from "../components/PrimaryBtn";

export default function WeService() {
    return (
        <>
            <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--primary-color)_0%,transparent_35%)] opacity-25" />
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <div className="flex justify-center lg:justify-start">
                        <img
                            src="/assets/serve-1.png"
                            alt="home"
                            className=""
                        />
                    </div>

                    <div className="text-center md:text-left" data-aos="fade-left">
                        <h2 className="primary-heading text-white!">
                            Who We Service
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-(--text-color) sm:text-base md:mx-0">
                            At PrepaidiQ, we are a cutting-edge Technology Service Provider (TSP) dedicated to delivering comprehensive digital solutions. Our expertise lies in seamlessly integrating with various carriers to enhance your business operations. We specialize in eliminating front-end errors in carrier activation, refills, international top-ups, and more, ensuring your services run smoothly and efficiently.
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
                            Wireless Stores
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-(--text-color) sm:text-base md:mx-0">
                            Maximize the efficiency of your operations with our streamlined solutions for activations and refills. Our reliable technology helps you manage inventory better and serve customers faster, leading to increased customer satisfaction and repeat business.
                        </p>

                        <h2 className="primary-heading text-white! mt-4">
                            Convenience Stores
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-(--text-color) sm:text-base md:mx-0">
                            Turn your convenience store into a digital hub. Offer customers a wide range of digital services including mobile refills, international top-ups, and more. With PrepaidiQ, increase foot traffic and average spend per visit effortlessly.
                        </p>

                    </div>

                    <div className="flex justify-center lg:justify-start">
                        <img
                            src="/assets/serve-2.png"
                            alt="home"
                            className=""
                        />
                    </div>

                </div>
            </section>

            <section className="relative overflow-hidden py-16 md:py-24">
                {/* Background Blur */}
                <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-(--primary-color)/20 blur-3xl" />
                <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4">
                    <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
                        {/* Left Side */}
                        <div className="flex h-full">
                            <div className="flex w-full flex-col justify-center rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:border-(--primary-color)/40 md:p-10">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-(--primary-color)/15 text-(--primary-color)">
                                    <Sparkles size={30} />
                                </div>

                                <h2 className="mt-8 text-4xl font-bold text-white md:text-5xl">
                                    Master Agents
                                </h2>

                                <p className="mt-6 text-base leading-8 text-(--text-color)">
                                    Are you looking to boost your revenue through digital products?
                                    If you operate in any of the following sectors, PrepaidiQ is your
                                    go-to partner for expansion and success.
                                </p>

                                <div className="mt-10">
                                    <button className="inline-flex items-center gap-2 rounded-full bg-(--primary-color) px-7 py-3 font-semibold text-white transition hover:scale-105">
                                        Become a Partner
                                        <ArrowUpRight size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="flex h-full flex-col gap-8">
                            {/* Airport */}
                            <div className="group flex-1 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-(--primary-color)/40">
                                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-(--primary-color)/15 text-(--primary-color)">
                                        <Plane size={30} />
                                    </div>

                                    <div>
                                        <h3 className="text-3xl font-bold text-white">
                                            Airports
                                        </h3>

                                        <p className="mt-4 text-base leading-8 text-(--text-color)">
                                            Enhance the traveler experience by offering easy access to
                                            digital products and services right from the terminal.
                                            Whether it's last-minute mobile top-ups or essential digital
                                            goods, we make sure you're equipped to serve every need.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Ecommerce */}
                            <div className="group flex-1 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-(--primary-color)/40">
                                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-(--primary-color)/15 text-(--primary-color)">
                                        <ShoppingCart size={30} />
                                    </div>

                                    <div>
                                        <h3 className="text-3xl font-bold text-white">
                                            E-commerce
                                        </h3>

                                        <p className="mt-4 text-base leading-8 text-(--text-color)">
                                            Leverage our digital solutions to enhance your online sales.
                                            We integrate smoothly with your existing platforms, enabling
                                            you to offer additional products such as digital top-ups,
                                            activation services, and electronic vouchers with ease.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--primary-color)_0%,transparent_35%)] opacity-25" />
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <div className="flex justify-center lg:justify-start">
                        <img
                            src="/assets/serve-3.png"
                            alt="home"
                            className=""
                        />
                    </div>

                    <div className="text-center md:text-left" data-aos="fade-left">
                        <h2 className="primary-heading text-white!">
                            Travel Connections
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-(--text-color) sm:text-base md:mx-0">
                            From booking agencies to transport services, our solutions help you provide added value to your customers. Offer seamless digital products that cater to the needs of travelers, adding a profitable layer to your business model.
                        </p>

                        <h2 className="primary-heading text-white! mt-4">
                            Payment Processors
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-(--text-color) sm:text-base md:mx-0">
                            Collaborate with us to facilitate smoother transactions. Our technology ensures that digital product sales are processed efficiently, reducing errors and enhancing user satisfaction.
                        </p>

                    </div>

                </div>
            </section>
        </>
    )
}
