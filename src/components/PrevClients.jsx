import React from 'react'
import Clients from './Cards/Clients'


const PrevClients = () => {
    return (
        <>
            <section id="clients" className="  min-w-[530px]">
                <h1 className=" text-[#ff5722] p-2 text-3xl font-bold mt-4 text-center font-lato">Our Clients</h1>
                <Clients />

            </section>
        </>
    )
}

export default PrevClients