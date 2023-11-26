import React from 'react'
import google from "../../../public/Google-Logo.wine.svg"
import github from "../../../public/GitHub-Wordmark-Logo.wine.svg"
import intuit from "../../../public/Intuit-Logo.wine.svg"
import uber from "../../../public/Uber-Logo.wine.svg"
import zoho from "../../../public/Zoho_Corporation-Logo.wine.svg"

const Clients = () => {

    const allClients = [
        {
            name: "client1",
            logo: google,
        },
        {
            name: "client2",
            logo: github,
        },
        {
            name: "client3",
            logo: intuit,
        },
        {
            name: "client5",
            logo: uber,
        },
        {
            name: "client5",
            logo: zoho,
        },

    ]



    return (

        <>
            <div className=' flex flex-wrap flex-col sm:flex-row justify-center items-center p-2'>
                {allClients.map((client, index) => (

                    <div className='   h-18 w-[10rem] sm:h-18 sm:w-[16rem] pr-6 pl-6 sm:pr-0 sm:m-0 ' key={index}>
                        <img src={client.logo} alt="logo" className=' h-full w-full' />
                    </div>


                ))}



            </div>
        </>

    )
}

export default Clients