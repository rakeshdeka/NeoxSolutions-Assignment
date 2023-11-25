import React from 'react'


const Home = () => {
    return (
        <>
            <section id="home" className="min-w-[530px] flex flex-col justify-center items-center p-4 text-center h-[700px] bg-[#00000031] " style={{ minWidth: '540px', backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
                <h1 className="text-7xl font-bold text-[#ff5722] font-lato">WELCOME TO MAHARASHTRA LTD..</h1>
                <p className="mt-2 text-white font-semibold text-3xl font-merriweather">Dream It. Build It. We Make It Happen...</p>
            </section>
        </>
    )
}

export default Home