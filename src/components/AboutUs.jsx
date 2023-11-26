import React from 'react';

const AboutUs = () => {
    return (
        <section id='about' className="w-full pt-20 font-lato flex flex-col justify-center items-center">
            <div className='w-[90%] flex justify-center items-center flex-col'>
                <h1 className=" mb-6 font-lato p-3 text-3xl font-bold text-[#ff5722]">About Us</h1>
                <div className='w-[80%] sm:w-[95%] sm:flex sm:gap-6'>
                    <div className='sm:w-1/2 sm:p-4'>
                        <h2 className="text-[#ff5722] text-lg font-bold mb-2">Our Vision</h2>
                        <p className="text-justify">At Maharashtra Ltd, our vision is to be a pioneer in the construction industry, setting new standards for quality, safety, and customer satisfaction...</p>
                    </div>
                    <div className='sm:w-1/2 sm:p-4'>
                        <h2 className="text-[#ff5722] text-lg font-bold mb-2">Our Mission</h2>
                        <p className="mb-4">Our mission is to consistently deliver exceptional construction solutions that exceed client expectations. We aim to build not just structures but relationships based on trust, transparency, and integrity...</p>
                    </div>
                    <div className='sm:w-1/2 sm:p-4'>
                        <h2 className="text-[#ff5722] text-lg font-bold mb-2">Our Expertise</h2>
                        <p className="mb-4">Maharashtra Ltd specializes in a diverse range of construction projects, including residential, commercial, and infrastructure developments...</p>
                    </div>
                    <div className='sm:w-1/2 sm:p-4'>
                        <h2 className="text-[#ff5722] text-lg font-bold mb-2">Safety First</h2>
                        <p className="mb-4">The safety of our employees, clients, and the communities in which we work is paramount. We adhere to rigorous safety standards and implement best practices...</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
