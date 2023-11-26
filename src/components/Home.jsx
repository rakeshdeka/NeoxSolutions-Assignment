import React from 'react'
import 'animate.css';


const Home = () => {
    return (
        <>
            <section
                id="home"
                className="w-full flex flex-col justify-center items-center p-4 text-center h-[700px] bg-[#00000031] object-cover"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className=''>
                    <h1 className="animate__animated animate__fadeInDownBig text-xl sm:text-7xl font-bold text-[#ff5722] font-lato ">
                        WELCOME TO MAHARASHTRA LTD.
                    </h1>

                    <p className="text-white mt-2 font-semibold text-md sm:text-xl font-merriweather animate__animated animate__fadeInUp">
                        Dream It. Build It. We Make It Happen...
                    </p>
                </div>
            </section>

        </>
    )
}

export default Home