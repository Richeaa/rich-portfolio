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
                        confirmButtonColor: "#3085d6",
                    });
                    e.target.reset();
                },
                () => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Failed to send message. Please try again!",
                        confirmButtonColor: "#d33",
                    });
                }
            )
            .finally(() => {
                setIsSending(false); 
            });
    };
    

    return (
        <section id="contact" className="container mx-auto my-12 p-4 lg:mt-36 mt-16 md:py-12 flex flex-col justify-center">
            <h1 className="md:text-5xl text-4xl font-extrabold text-center text-sky-200 pt-6 mb-12" data-aos="fade-up">
                Contact
            </h1>

            <div className="flex flex-wrap lg:flex-nowrap items-stretch px-3 md:px-0"> 
                <div className="w-full lg:w-1/3 flex flex-col justify-center" data-aos="fade-right"
                data-aos-delay="200">
                <TrueFocus 
                    sentence="Let's Work Together!"
                    manualMode={false}
                    blurAmount={5}
                    borderColor="cyan"
                    animationDuration={1.5}
                    pauseBetweenAnimations={1}
                />

                </div>

                <div className="w-full lg:w-2/3 pl-0 lg:pl-6" data-aos="fade-left"
                    data-aos-delay="300">
                    <form 
                        onSubmit={sendEmail}
                        className="h-full p-6 rounded-lg border border-gray-700 bg-gray-900/60 bg-opacity-50 flex flex-col"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input 
                                type="text" 
                                name="user_name"
                                placeholder="Your Name" 
                                className="border border-gray-700 bg-transparent text-white p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                required
                            />
                            <input 
                                type="email" 
                                name="user_email"
                                placeholder="Your Email" 
                                className="border border-gray-700 bg-transparent text-white p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                required
                            />
                        </div>
                        <input 
                            type="text" 
                            name="subject"
                            placeholder="Subject" 
                            className="border border-gray-700 bg-transparent text-white p-3 rounded w-full mt-8 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            required
                        />
                        <textarea 
                            name="message"
                            placeholder="Message" 
                            className="border border-gray-700 bg-transparent text-white p-3 rounded w-full mt-8 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        ></textarea>
                        <button 
                            type="submit"
                            className={`mt-6 bg-blue-700/90 text-white px-6 py-3 rounded-full w-full md:w-auto hover:bg-blue-700 transition self-end ${isSending ? "opacity-50 cursor-not-allowed" : ""}`}
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