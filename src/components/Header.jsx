import React, { useState } from 'react'
// import Logo from "../../public/Logo2.png"
import Logo from "../../public/Logo1.png"
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    }
    return (
        <>
            <header className="bg-[#ff5722] p-4 text-center fixed w-full z-10 font-lato ">
                <nav className="flex justify-between  text-white p-2 ">
                    <a href="#home" className="hover:text-gray-300">
                        <div className='text-center text-[black] pt-1.5'>
                            <img src={Logo} alt="logo" className=' h-4 w-28' />
                        </div>
                    </a>

                    {/* Mobile Menu */}
                    <div className="sm:hidden">
                        <GiHamburgerMenu
                            className=" text-black cursor-pointer h-6 w-8"
                            onClick={handleMobileMenuToggle}
                        />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden sm:w-[80%] lg:w-[50%] sm:flex sm:justify-evenly text-[black]">
                        <a href="#clients" className="hover:bg-gray-300">
                            Our Clients
                        </a>
                        <a href="#projects" className="hover:bg-gray-300">
                            Previous Projects
                        </a>
                        <a href="#services" className="hover:bg-gray-300">
                            Our Services
                        </a>
                        <a href="#about" className="hover:bg-gray-300">
                            About Us
                        </a>
                        <a href="#contact" className="hover:bg-gray-300">
                            Contact Us
                        </a>
                    </div>

                    {/* Mobile Menu Links */}
                    {isMobileMenuOpen && (
                        <div className="sm: border-t sm:hidden absolute top-16 left-0 right-0 bg-[#ff5722]  text-white p-2">
                            <a href="#clients" className="block hover:bg-[black] py-2">
                                Our Clients
                            </a>
                            <a href="#projects" className="block hover:bg-[black] py-2">
                                Previous Projects
                            </a>
                            <a href="#services" className="block hover:bg-[black] py-2">
                                Our Services
                            </a>
                            <a href="#about" className="block hover:bg-[black] py-2">
                                About Us
                            </a>
                            <a href="#contact" className="block hover:bg-[black] py-2">
                                Contact Us
                            </a>
                        </div>
                    )}
                </nav>
            </header>
        </>
    )
}

export default Header