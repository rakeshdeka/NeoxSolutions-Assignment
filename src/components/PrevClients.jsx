import React from 'react'
import Clients from './Cards/Clients'


const PrevClients = () => {
    return (
        <>
            <section id="clients" className="h-60 bg-[#ffff0050]">
                <h1 className="text-3xl font-bold mt-4 text-center">Our Clients</h1>
                <Clients />

            </section>
        </>
    )
}

export default PrevClients