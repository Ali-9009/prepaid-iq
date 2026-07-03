// import { X, Send, User, Phone, Users, FileText, ChevronDown } from "lucide-react";

// export default function ScheduleModal({ open, onClose }) {
//     if (!open) return null;

//     return (
//         <div
//             onClick={onClose}
//             className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
//         >
//             <div
//                 onClick={(e) => e.stopPropagation()}
//                 data-aos="zoom-in"
//                 className="relative w-full max-w-2xl rounded-[32px] border border-(--primary-color)/30 bg-[#17030d] shadow-[0_0_60px_rgba(236,0,126,0.25)]"
//             >
//                 <button
//                     onClick={onClose}
//                     className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-(--primary-color)"
//                 >
//                     <X size={22} />
//                 </button>

//                 <div className="border-b border-white/10 px-6 py-8 text-center md:px-8">
//                     <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-(--primary-color)/20 text-(--primary-color)">
//                         <Send size={30} />
//                     </div>

//                     <h2 className="text-3xl font-bold text-white md:text-4xl">
//                         Schedule a Conversation
//                     </h2>

//                     <p className="mt-2 text-(--text-color)">
//                         We'd love to learn more about your business.
//                     </p>
//                 </div>

//                 <form className="space-y-4 p-6 md:p-8">
//                     <div className="relative">
//                         <User className="absolute left-4 top-1/2 -translate-y-1/2 text-(--primary-color)" size={20} />
//                         <input
//                             type="text"
//                             placeholder="Full Name"
//                             className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 pl-12 pr-4 text-white outline-none focus:border-(--primary-color)"
//                         />
//                     </div>

//                     <div className="relative">
//                         <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-(--primary-color)" size={20} />
//                         <input
//                             type="tel"
//                             placeholder="Phone Number"
//                             className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 pl-12 pr-4 text-white outline-none focus:border-(--primary-color)"
//                         />
//                     </div>

//                     <div className="relative">
//                         <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-(--primary-color)" size={20} />
//                         <select
//                             defaultValue=""
//                             className="h-14 w-full appearance-none rounded-2xl border border-white/10 bg-[#210712] pl-12 pr-12 text-white outline-none focus:border-(--primary-color)"
//                         >
//                             <option value="" disabled>How did you hear about us?</option>
//                             <option>Online</option>
//                             <option>Tradeshow</option>
//                             <option>Another dealer</option>
//                             <option>Existing customer</option>
//                             <option>Social Media</option>
//                         </select>
//                         <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-(--primary-color)" size={20} />
//                     </div>

//                     <div className="relative">
//                         <FileText className="absolute left-4 top-5 text-(--primary-color)" size={20} />
//                         <textarea
//                             rows={4}
//                             placeholder="Tell us about your project..."
//                             className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-white outline-none focus:border-(--primary-color)"
//                         />
//                     </div>

//                     <button
//                         type="submit"
//                         className="w-full rounded-2xl bg-(--primary-color) py-4 font-bold text-white transition hover:scale-[1.02]"
//                     >
//                         Submit Request
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }



import { useEffect } from "react";
import { createPortal } from "react-dom";
import {
    X,
    Send,
    User,
    Phone,
    Users,
    FileText,
    Mail,
    ChevronDown,
    ArrowRight,
} from "lucide-react";

export default function ScheduleModal({ open, onClose }) {
    useEffect(() => {
        if (!open) return;

        document.body.style.overflow = "hidden";

        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleEsc);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleEsc);
        };
    }, [open, onClose]);

    if (!open) return null;

    return createPortal(
        <div
            onClick={onClose}
            className="fixed inset-0 z-99 flex min-h-dvh items-center justify-center bg-black/25 p-4 backdrop-blur-md"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-(--primary-color)/30 bg-[#17030d] shadow-[0_0_70px_rgba(219,0,107,0.25)]"
            >
                <button
                    onClick={onClose}
                    className="absolute right-6 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-(--primary-color)"
                >
                    <X size={22} />
                </button>

                <div className="border-b border-white/10 px-6 py-7 text-center">
                    <h2 className="text-2xl font-semibold text-white md:text-4xl">
                        Schedule a Conversation
                    </h2>

                    <p className="mt-2 text-sm text-(--text-color)">
                        We'd love to learn more about your business.
                    </p>
                </div>

                <form className="space-y-4 p-5 md:p-7">
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-(--primary-color)" size={20} />
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="h-13 w-full rounded-2xl border border-white/10 bg-white/5 pl-12 pr-4 text-sm text-white outline-none placeholder:text-white/50 focus:border-(--primary-color)"
                        />
                    </div>

                    <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-(--primary-color)" size={20} />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="h-13 w-full rounded-2xl border border-white/10 bg-white/5 pl-12 pr-4 text-sm text-white outline-none placeholder:text-white/50 focus:border-(--primary-color)"
                        />
                    </div>

                    <div className="relative">
                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-(--primary-color)" size={20} />
                        <select
                            defaultValue=""
                            className="h-13 w-full appearance-none rounded-2xl border border-white/10 bg-[#210712] pl-12 pr-12 text-sm text-white outline-none focus:border-(--primary-color)"
                        >
                            <option value="" disabled>
                                How did you hear about us?
                            </option>
                            <option>Online</option>
                            <option>Tradeshow</option>
                            <option>Another dealer</option>
                            <option>Existing customer</option>
                            <option>Social Media</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-(--primary-color)" size={20} />
                    </div>

                    <div className="relative">
                        <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-(--primary-color)" size={20} />
                        <input
                            type="text"
                            placeholder="Short Description"
                            className="h-13 w-full rounded-2xl border border-white/10 bg-white/5 pl-12 pr-4 text-sm text-white outline-none placeholder:text-white/50 focus:border-(--primary-color)"
                        />
                    </div>

                    <div className="relative">
                        <Mail className="absolute left-4 top-5 text-(--primary-color)" size={20} />
                        <textarea
                            rows={3}
                            placeholder="Your Message"
                            className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-sm text-white outline-none placeholder:text-white/50 focus:border-(--primary-color)"
                        />
                    </div>

                    <button
                        type="submit"
                        className="flex w-full items-center justify-center gap-3 rounded-2xl bg-(--primary-color) py-4 text-sm font-bold text-white transition hover:scale-[1.02]"
                    >
                        SUBMIT FORM
                        <ArrowRight size={19} />
                    </button>
                </form>
            </div>
        </div>,
        document.body
    );
}