// import { Linkedin, Facebook, Twitter, ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Top */}
                <div className="grid gap-12 border-b border-white/10 py-14 md:grid-cols-2 lg:grid-cols-4">

                    {/* Contact */}
                    <div>
                        <h3 className="mb-5 text-white font-semibold text-lg">
                            Contacts
                        </h3>

                        <div className="space-y-3 text-sm">
                            <p className="hover:text-(--primary-color) transition">
                                support@lift.agency
                            </p>

                            <p className="hover:text-(--primary-color) transition">
                                +1 (763) 547-1297
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-5 text-white font-semibold text-lg">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="#" className="hover:text-(--primary-color) transition">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-(--primary-color) transition">
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-(--primary-color) transition">
                                    Services
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-(--primary-color) transition">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Policies */}
                    <div>
                        <h3 className="mb-5 text-white font-semibold text-lg">
                            Policies
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="#" className="hover:text-(--primary-color) transition">
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-(--primary-color) transition">
                                    Refund Policy
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-(--primary-color) transition">
                                    Terms & Conditions
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-(--primary-color) transition">
                                    Cookies
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="mb-5 text-white font-semibold text-lg">
                            Subscribe
                        </h3>

                        <div className="flex overflow-hidden rounded-xl border border-white/10 bg-neutral-900">
                            <input
                                type="email"
                                placeholder="Get product updates"
                                className="flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-gray-500"
                            />

                            <button className="flex h-12 w-14 items-center justify-center bg-pink-600 transition hover:bg-(--primary-color)">
                                <i className="ri-arrow-right-line text-lg text-white"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col items-center justify-between gap-6 py-8 md:flex-row">

                    {/* Logo */}
                    <div>
                        <img
                            src="/assets/logo.png"
                            alt="PrepaidIQ"
                            className="h-10 object-contain"
                        />
                    </div>

                    {/* Copyright */}
                    <p className="text-center text-sm text-gray-500">
                        © 2026 <span className="text-(--primary-color)">PrepaidIQ</span>. All Rights
                        Reserved.
                    </p>

                    {/* Social */}
                    <div className="flex gap-3">

                        <a
                            href="#"
                            className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:border-(--secondary-color) hover:bg-(--primary-color)/30"
                        >
                            <i className="ri-linkedin-fill text-sm transition group-hover:scale-110"></i>
                        </a>

                        <a
                            href="#"
                            className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:border-(--secondary-color) hover:bg-(--primary-color)/30"
                        >
                            <i className="ri-facebook-fill text-sm transition group-hover:scale-110"></i>
                        </a>

                        <a
                            href="#"
                            className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:border-(--secondary-color) hover:bg-(--primary-color)/30"
                        >
                            <i className="ri-twitter-x-fill text-sm transition group-hover:scale-110"></i>
                        </a>

                    </div>
                </div>

            </div>
        </footer>
    );
}