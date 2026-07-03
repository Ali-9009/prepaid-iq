import { useState } from "react";

export default function SchedulePopup({ trigger }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div onClick={() => setOpen(true)}>
                {trigger}
            </div>

            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
                    <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">

                        <button
                            onClick={() => setOpen(false)}
                            className="absolute right-4 top-4 text-2xl text-gray-500 hover:text-black"
                        >
                            ×
                        </button>

                        <h2 className="mb-6 text-2xl font-bold">
                            Schedule a Conversation
                        </h2>

                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full rounded-lg border p-3 outline-none focus:border-black"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full rounded-lg border p-3 outline-none focus:border-black"
                            />

                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full rounded-lg border p-3 outline-none focus:border-black"
                            />

                            <textarea
                                rows={4}
                                placeholder="Message"
                                className="w-full rounded-lg border p-3 outline-none focus:border-black"
                            />

                            <button
                                type="submit"
                                className="w-full rounded-lg bg-black py-3 text-white"
                            >
                                Send Request
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}