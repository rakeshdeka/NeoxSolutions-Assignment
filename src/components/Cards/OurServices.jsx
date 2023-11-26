import React from 'react';

const OurServices = () => {
    const allServices = [
        {
            name: "Buildings",
            desc: "From concept to completion, we specialize in constructing innovative and sustainable buildings. Our team is dedicated to delivering high-quality structures that meet the unique needs and aesthetic preferences of our clients.",
            image: 'https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with the actual image file path or URL
        },
        {
            name: "Bridges & Flyovers",
            desc: "Bridging the future with precision and durability, our expertise in constructing bridges and flyovers is unmatched. We blend engineering excellence with aesthetic design, providing solutions that stand the test of time.",
            image: 'https://images.pexels.com/photos/19125922/pexels-photo-19125922/free-photo-of-people-on-a-steel-bridge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with the actual image file path or URL
        },
        {
            name: "Civil Construction",
            desc: "In the realm of civil construction, we offer a comprehensive suite of services. From site development to infrastructure projects, our team combines technical expertise with a commitment to excellence, delivering projects that meet and exceed client expectations.",
            image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with the actual image file path or URL
        },
        {
            name: "Highways & Roads",
            desc: "Paving the way for connectivity and mobility, we are at the forefront of highway and road construction. Our commitment to quality ensures durable and smooth surfaces that enhance transportation infrastructure",
            image: 'https://images.pexels.com/photos/56832/road-asphalt-space-sky-56832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with the actual image file path or URL
        },
    ];

    return (
        <div className='flex flex-wrap justify-center gap-3 mt-8'>
            {allServices.map((service, index) => (
                <div className='p-4 bg-[#FFB8A2] shadow-xl rounded-xl w-[80%] sm:w-1/2 lg:w-1/3' key={index}>
                    <div>
                        <img
                            src={service.image}
                            alt={service.name}
                            className='mb-4 w-full h-40 object-cover rounded-md'
                        />
                    </div>
                    <div>
                        <h1 className='font-lato text-lg font-bold'>{service?.name}</h1>
                    </div>
                    <div>
                        <p className='text-sm'>{service?.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OurServices;
