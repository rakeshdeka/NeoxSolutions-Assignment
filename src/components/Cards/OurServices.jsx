import React from 'react'

const OurServices = () => {
    const allServivces = [
        {
            name: "service 1"
        },
        {
            name: "service 2"
        },
        {
            name: "service 3"
        },
        {
            name: "service 4"
        },
        // {
        //     name: "service 5"
        // },
    ]

    return (
        <>
            <div className='border flex flex-wrap justify-center gap-3'>
                {allServivces.map((service, index) => (
                    <div className='border border-black h-40 w-40' key={index}>
                        {service?.name}
                    </div>
                ))}

            </div>

        </>
    )
}

export default OurServices