import React from 'react'

const ContactUs = () => {
    return (
        <>
            <section id="contact" className=" min-w-[530px]">
                <h1 className="p-3 text-3xl font-bold text-center text-[#ff5722] font-lato">Contact Us</h1>
                <div className="max-w-md mx-auto mt-4 mb-3">
                    <form action="#" method="post">
                        <input type="text" name="name" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded mb-4" required />
                        <input type="email" name="email" placeholder="Your Email" className="w-full p-2 border border-gray-300 rounded mb-4" required />
                        <textarea name="message" placeholder="Your Message" className="w-full p-2 border border-gray-300 rounded mb-4" required></textarea>
                        <button type="submit" className="bg-[#ff5722] font-lato text-white p-2 rounded">Send Message</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default ContactUs