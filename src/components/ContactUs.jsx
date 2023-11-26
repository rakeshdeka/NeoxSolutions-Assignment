import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="w-full pt-20 mb-5">
            <h1 className="p-3 mb-6 text-3xl font-bold text-center text-[#ff5722] font-lato">Contact Us</h1>
            <div className="flex justify-center items-center flex-wrap">
                <div className="w-full ml-8 mr-8 sm:w-1/2">

                    <div className="max-w-md mx-auto mt-4 mb-3">
                        <form action="#" method="post">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="w-full p-2 border border-gray-300 rounded mb-4"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="w-full p-2 border border-gray-300 rounded mb-4"
                                required
                            />
                            <input
                                name="message"
                                placeholder="Subject"
                                className="w-full  p-2 border border-gray-300 rounded mb-4"
                                required
                            ></input>

                            <textarea
                                name="message"
                                placeholder="Your Message"
                                className="w-full h-28 p-2 border border-gray-300 rounded mb-4"
                                required
                            ></textarea>
                            <button type="submit" className="bg-[#ff5722] font-lato text-white p-2 rounded transition-transform transform hover:scale-105 active:scale-95">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                <div className="w-[90%] sm:w-[40%]  mt-4 sm:mt-0">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.309631834835!2d91.66039187467392!3d26.15404369228335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a44c762f12a67%3A0x95386a0503457611!2sGauhati%20University!5e0!3m2!1sen!2sin!4v1701018036710!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact;
