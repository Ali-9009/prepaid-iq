import { useEffect, useRef, useState } from "react";

const stats = [
    { value: 10, suffix: "M+", label: "Transactions" },
    { value: 500, suffix: "+", label: "Retail Locations" },
    { value: 99.9, suffix: "%", label: "Platform Uptime" },
    { value: 24, suffix: "/7", label: "Available" },
];

function Counter({ value, suffix }) {
    const [count, setCount] = useState(0);
    const counterRef = useRef(null);

    useEffect(() => {
        const element = counterRef.current;
        let started = false;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started) {
                    started = true;

                    let start = 0;
                    const duration = 1800;
                    const increment = value / (duration / 16);

                    const timer = setInterval(() => {
                        start += increment;

                        if (start >= value) {
                            setCount(value);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, 16);
                }
            },
            { threshold: 0.4 }
        );

        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, [value]);

    return (
        <h3 ref={counterRef} className="text-4xl font-bold text-(--primary-color) sm:text-5xl">
            {count}
            <span className="">{suffix}</span>
        </h3>
    );
}

export default function CounterSection() {
    return (
        <section className="relative overflow-hidden py-8 md:py-12">

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-[0_0_35px_rgba(236,72,153,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                        >
                            <Counter value={item.value} suffix={item.suffix} />

                            <p className="mt-3 text-md font-medium text-(--text-color)">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}