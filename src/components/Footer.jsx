import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="bg-[#ff5722] p-4 text-center w-full flex justify-center flex-col items-center">
                <div>
                    <p>Email: your.email@example.com</p>
                    <p>Phone: +123 456 7890</p>
                </div>
                <div className='flex gap-3'>
                    <a href="https://github.com/rakeshdeka">
                        <FaGithub className='text-[#333] text-[2rem]' />
                    </a>

                    <a href="https://www.linkedin.com/in/irakeshdeka/">
                        <FaLinkedin className='text-[#0077B5] text-[2rem]' />
                    </a>


                </div>
            </footer>
        </>
    )
}

export default Footer