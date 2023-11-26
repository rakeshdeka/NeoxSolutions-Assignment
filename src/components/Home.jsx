import React from 'react'


const Home = () => {
    return (
        <>
            <section id="home" className=" object-cover min-w-[574px] flex flex-col justify-center items-center p-4 text-center h-[700px] bg-[#00000031] " style={{ minWidth: '580px', backgroundImage: 'url("https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>

                <div className='w-[98%]'>
                    <h1 className="text-7xl font-bold text-[#ff5722] font-lato ">WELCOME TO MAHARASHTRA LTD..</h1>

                    <p className="  text-white mt-2 font-semibold text-3xl font-merriweather">Dream It. Build It. We Make It Happen...</p>
                </div>

            </section>
        </>
    )
}

export default Home