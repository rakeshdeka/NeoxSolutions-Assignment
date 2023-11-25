import React from 'react'

const Clients = () => {

    const allClients = [
        {
            name: "client1",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
        },
        {
            name: "client2",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/ZOHO.svg/2560px-ZOHO.svg.png"
        },
        {
            name: "client3",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
        },
        {
            name: "client5",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Intuit_Logo.svg/2560px-Intuit_Logo.svg.png"
        },
        {
            name: "client5",
            logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/CRED-LOGO2.png"
        },

    ]



    return (

        <>
            <div className=' flex flex-wrap justify-center gap-3 p-4'>
                {allClients.map((client, index) => (

                    <div className=' h-20 w-60' key={index}>
                        <img src={client.logo} alt="logo" className='h-full w-full' />
                    </div>


                ))}



            </div>
        </>

    )
}

export default Clients