import React from 'react'

const AboutUs = () => {
    return (
        <>
            <section class="min-w-[530px] p-4 font-lato flex  flex-col justify-center items-center">
                <h1 className=" font-lato p-3 text-3xl font-bold text-[#ff5722]">About Us</h1>
                <div className=' w-[80%] sm:w-[95%] sm:flex sm:gap-2'>

                    <div className=' sm:p-2 '>
                        <h2 class="text-[#ff5722] text-lg font-bold">Our Vision</h2>

                        <p class="mb-4 text-justify">At Maharashtra Ltd, our vision is to be a pioneer in the construction industry, setting new standards for quality, safety, and customer satisfaction...</p>
                    </div>
                    <div className=' sm:p-2'>

                        <h2 class="text-[#ff5722] text-lg font-bold">Our Mission</h2>
                        <p class="mb-4">Our mission is to consistently deliver exceptional construction solutions that exceed client expectations. We aim to build not just structures but relationships based on trust, transparency, and integrity...</p>
                    </div>
                    {/* <h2 class="text-[#ff5722] text-lg font-bold">Core Values</h2>
                    <ul class="list-disc list-inside mb-4">
                        <li><strong>Excellence:</strong> We are committed to achieving excellence in every aspect of our work, from project planning to execution...</li>
                        <li><strong>Integrity:</strong> We conduct our business with the utmost integrity, honesty, and transparency...</li>
                        <li><strong>Innovation:</strong> Embracing innovation is at the heart of our approach...</li>
                        <li><strong>Sustainability:</strong> Recognizing the impact of our industry on the environment, we prioritize sustainability...</li>
                    </ul> */}
                    <div className=' sm:p-2'>
                        <h2 class="text-[#ff5722] text-lg font-bold">Our Expertise</h2>
                        <p class="mb-4">Maharashtra Ltd specializes in a diverse range of construction projects, including residential, commercial, and infrastructure developments...</p>
                    </div>
                    <div className=' sm:p-2'>
                        <h2 class="text-[#ff5722] text-lg font-bold">Safety First</h2>
                        <p class="mb-4">The safety of our employees, clients, and the communities in which we work is paramount. We adhere to rigorous safety standards and implement best practices...</p>
                    </div>
                    {/* <h2 class="text-[#ff5722] text-lg font-bold">Get in Touch</h2>
                    <p>Whether you are planning a new project or seeking construction solutions, Maharashtra Ltd is here to partner with you. <a href="#contact" class="text-[#ff5722] font-bold">Contact us</a> to explore how we can bring your vision to life.</p> */}
                </div>
            </section>
        </>
    )
}

export default AboutUs