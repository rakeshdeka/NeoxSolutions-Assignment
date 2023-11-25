import React from 'react'
import Logo from "../assets/Logo2.png"

const Header = () => {
    return (
        <>
            <header className="bg-gray-200 p-4 text-center fixed w-full z-10">
                <nav className="flex justify-around bg-[#ff5722] text-white p-2">

                    <a href="#home" className="hover:text-gray-300 ">LOGO</a>
                    <a href="#clients" className="hover:text-gray-300">Our Clients</a>
                    <a href="#projects" className="hover:text-gray-300">Previous Projects</a>
                    <a href="#services" className="hover:text-gray-300">Our Services</a>
                    <a href="#about" className="hover:text-gray-300">About Us</a>
                    <a href="#contact" className="hover:text-gray-300">Contact Us</a>

                </nav>
            </header>
        </>
    )
}

export default Header