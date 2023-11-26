import React, { useState } from 'react';
import Logo from '../../public/Logo1.svg';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <header className="bg-[#ff5722] p-4 text-center w-full fixed z-10 font-lato">
                <nav className="flex justify-between text-white p-2">
                    <a href="#home" className="hover:text-gray-300 pt-3.5">
                        <div className="text-center text-[black]">
                            <img src={Logo} alt="logo" className="h-4 w-30 sm:w-34" />
                        </div>
                    </a>

                    {/* Mobile Menu */}
                    <div className="sm:hidden">
                        <GiHamburgerMenu
                            className="text-black cursor-pointer h-8 w-8"
                            onClick={handleMobileMenuToggle}
                        />
                    </div>

                    {/* Desktop Menu */}
                    <div className=" hidden sm:w-[80%] lg:w-[50%] sm:flex sm:justify-evenly text-[black]">
                        {menuItems.map((item) => (
                            <a
                                key={item.id}
                                href={item.link}
                                className="hover:bg-gray-300 py-2 px-4 rounded transition duration-300 "
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Links */}
                    {isMobileMenuOpen && (
                        <div className="border-t sm:hidden absolute top-20 left-0 right-0 bg-[#ff5722]  p-2">
                            {menuItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={item.link}
                                    className="block hover:bg-gray-300 py-2 text-black "
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    )}
                </nav>
            </header>
        </>
    );
};

const menuItems = [
    { id: 1, label: 'Clients', link: '#clients' },
    { id: 2, label: 'Projects', link: '#projects' },
    { id: 3, label: 'Services', link: '#services' },
    { id: 4, label: 'About', link: '#about' },
    { id: 5, label: 'Contact', link: '#contact' },
];

export default Header;
