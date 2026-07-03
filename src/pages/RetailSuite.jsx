import { UsersRound, Workflow, TabletSmartphone } from "lucide-react";
import Button from '../components/PrimaryBtn'
import ScheduleModal from "../components/ScheduleModal";
import { useState } from "react";

const items = [
    {
        icon: UsersRound,
        title: "Make the staff experience easy",
        text: "Give your staff an edge in making the sale. By integrating our POS into your ecosystem, reps no longer have to learn multiple systems to make customer transactions. This reduces errors that add costs to your operations. Our POS can help reps focus on the customer rather than on the technology.",
    },
    {
        icon: Workflow,
        title: "Seamless integration of your sales flows",
        text: "Seamlessly integrate your bill payment and activation flows into our POS using your own or third party apps. This saves precious time during transaction processing and makes it easier for your team to operate the system quickly and smoothly.",
    },
    {
        icon: TabletSmartphone,
        title: "Tablets don’t get in the way",
        text: "Our solutions are indifferent with regard to OS platforms. They come with full functionalities on a tablet. The tablet lets the rep move freely in the store, engaging customers. Virtually any tablet will work with our solutions. This extends the current useful life of your technology.",
    },
];

export default function RetailSuite() {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--primary-color)_0%,transparent_35%)] opacity-25" />
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <div className="flex justify-center lg:justify-start">
                        <img
                            src="/assets/retail-1.png"
                            alt="home"
                            className="rounded-2xl"
                        />
                    </div>

                    <div className="z-9 text-center lg:text-left" data-aos="fade-left">
                        <h2 className="primary-heading text-white!">
                            Streamline operations for your direct retail stores
                        </h2>

                        <p className="mx-auto my-5 text-sm leading-7 text-(--text-color) sm:text-base md:mx-0">
                            Free your staff from the register with our POS system, enabling more personal & engaging sales. This environment enables faster transaction processing for multi-carrier Activation & refills.
                        </p>

                        <div className="flex lg:justify-start justify-center">
                            <Button
                                text="Schedule a Conversation"
                                onClick={() => setOpenModal(true)}
                            />
                        </div>

                        <ScheduleModal
                            open={openModal}
                            onClose={() => setOpenModal(false)}
                        />
                    </div>

                </div>
            </section>

            <section className="relative overflow-hidden py-16 md:py-24">
                <div className="absolute left-1/2 top-25 h-72 w-72 -translate-x-1/2 rounded-full bg-(--primary-color)/20 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4">
                    <div className="grid gap-6 lg:grid-cols-3">
                        {items.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={index}
                                    className={`group rounded-4xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-(--primary-color)/50 hover:bg-white/10 md:p-8 ${index === 1 ? "lg:translate-y-10" : ""
                                        }`}
                                >
                                    <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-(--primary-color)/15 text-(--primary-color) transition group-hover:scale-110">
                                        <Icon size={30} />
                                    </div>

                                    <h3 className="text-2xl font-bold leading-tight text-white">
                                        {item.title}
                                    </h3>

                                    <p className="mt-5 text-sm leading-7 text-(--text-color) sm:text-base">
                                        {item.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--primary-color)_0%,transparent_35%)] opacity-25" />
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <div className="text-center lg:text-left" data-aos="fade-left">
                        <h2 className="primary-heading text-white!">
                            The Flexible Kiosk Solution
                        </h2>

                        <p className="mx-auto mt-5 text-sm leading-7 text-(--text-color) sm:text-base md:mx-0">
                            With a large 21.5-inch IPS screen, the SK700 provides brilliant viewing experience and makes your brand stand out. This device integrates seamlessly with the needs of your business with an all-day battery life.
                        </p>

                        <p className="mx-auto my-5 text-sm leading-7 text-(--text-color) sm:text-base md:mx-0">
                            Unlike the other products in the series, it doesn't have a payment module. It is designed to be paired with PAX IM30 to offer the same seamless payment experience.
                        </p>
                        <div className="flex lg:justify-start justify-center">
                            <Button
                                text="Schedule a Conversation"
                                onClick={() => setOpenModal(true)}
                            />
                        </div>

                        <ScheduleModal
                            open={openModal}
                            onClose={() => setOpenModal(false)}
                        />
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="/assets/retail-2.png"
                            alt="home"
                            className=""
                        />
                    </div>

                </div>
            </section>
        </>
    )
}
