import React from 'react'

const OurServices = () => {
    const allServivces = [
        {
            name: "Buildings",
            desc: "From concept to completion, we specialize in constructing innovative and sustainable buildings. Our team is dedicated to delivering high-quality structures that meet the unique needs and aesthetic preferences of our clients."
        },
        {
            name: "Bridges & Flyovers",
            desc: "Bridging the future with precision and durability, our expertise in constructing bridges and flyovers is unmatched. We blend engineering excellence with aesthetic design, providing solutions that stand the test of time."
        },
        {
            name: "Civil Construction",
            desc: "In the realm of civil construction, we offer a comprehensive suite of services. From site development to infrastructure projects, our team combines technical expertise with a commitment to excellence, delivering projects that meet and exceed client expectations."
        },
        {
            name: "Highways & Roads",
            desc: "Paving the way for connectivity and mobility, we are at the forefront of highway and road construction. Our commitment to quality ensures durable and smooth surfaces that enhance transportation infrastructure"
        },

    ]

    return (
        <>
            <div className=' flex flex-wrap justify-center gap-3'>
                {allServivces.map((service, index) => (
                    <div className=' p-3 bg-[#FFB8A2] shadow-xl rounded-xl h-[300px] w-[400px] sm:h-[300px] sm:w-[300px]' key={index}>

                        <div className=''>
                            <h1 className='p-2 font-lato text-lg font-bold text-justify'>{service?.name}</h1>
                        </div>
                        <div><p className='p-2'>{service?.desc}</p>  </div>
                    </div>
                ))}

            </div>


        </>
    )
}

export default OurServices