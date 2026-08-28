import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import TrueFocus from '../assets/Attribute/TrueFocus'

const Contact = () => {
    const [isSending, setIsSending] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs
            .sendForm(
                "service_od2n3h8",
                "template_6o3jzes",
                e.target,
                "NGfC3vbvhAgXCxJHO"
            )
            .then(
                () => {
                    Swal.fire({
                        icon: "success",
                        title: "Success!",
                        text: "Your message has been sent successfully.",
                        confirmButtonColor: "#0a84ff",
                        background: "#111826",
                        color: "#e5eaf3",
                    });
                    e.target.reset();
                },
                () => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Failed to send message. Please try again!",
                        confirmButtonColor: "#d33",
                        background: "#111826",
                        color: "#e5eaf3",
                    });
                }
            )
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <section id="contact" className="container mx-auto px-4 md:px-6 py-20 md:py-28">
            <div className="text-center mb-14" data-aos="fade-up">
                <p className="text-brand-400 text-xs font-mono tracking-wider uppercase mb-3">
                    Get in Touch
                </p>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                    Contact Me
                </h2>
                <div className="w-12 h-1 bg-brand-500 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 md:gap-5">
                <div
                    className="bento-card bg-noise lg:col-span-2 p-8 flex flex-col justify-center"
                    data-aos="fade-right"
                >
                    <div className="relative z-10">
                        <TrueFocus
                            sentence="Let's Work Together!"
                            manualMode={false}
                            blurAmount={5}
                            borderColor="#0a84ff"
                            glowColor="rgba(10, 132, 255, 0.6)"
                            animationDuration={1.5}
                            pauseBetweenAnimations={1}
                        />
                    </div>
                </div>

                <div
                    className="bento-card lg:col-span-4 p-6 md:p-8"
                    data-aos="fade-left"
                >
                    <form
                        onSubmit={sendEmail}
                        className="relative z-10 flex flex-col"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="user_name"
                                placeholder="Your Name"
                                className="border border-surface-border bg-surface-800/60 text-white placeholder:text-slate-500 p-3.5 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-brand-500 transition-shadow"
                                required
                            />
                            <input
                                type="email"
                                name="user_email"
                                placeholder="Your Email"
                                className="border border-surface-border bg-surface-800/60 text-white placeholder:text-slate-500 p-3.5 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-brand-500 transition-shadow"
                                required
                            />
                        </div>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className="border border-surface-border bg-surface-800/60 text-white placeholder:text-slate-500 p-3.5 rounded-xl w-full mt-4 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-shadow"
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            className="border border-surface-border bg-surface-800/60 text-white placeholder:text-slate-500 p-3.5 rounded-xl w-full mt-4 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-brand-500 transition-shadow"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className={`mt-5 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 py-3.5 rounded-full w-full md:w-auto self-end transition-colors duration-200 shadow-glow-brand ${
                                isSending ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                            disabled={isSending}
                        >
                            {isSending ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
