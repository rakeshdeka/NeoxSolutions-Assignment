import React from 'react';
import 'animate.css';
import calculator from "../../assets/calculator.gif"
import ecomm from "../../assets/ecomm.gif"
import todo from "../../assets/todo.gif"
import chatapp from "../../assets/chatapp.png"


const Projects = () => {
    const allProjects = [

        {
            name: 'Todo Application',
            gif: todo,
            project_link: 'https://github.com/rakeshdeka/todo-app',
            status: '#ongoing',
        },
        {
            name: 'Chat Application',
            gif: chatapp,
            project_link: 'https://github.com/rakeshdeka/mern-chat-app',
            status: '#complete',
        },
        {
            name: 'Calculator App',
            gif: calculator,
            project_link: 'https://github.com/rakeshdeka/calculatorApp',
            status: '#complete',
        },
        {
            name: 'Ecommerce Application',
            gif: ecomm,
            project_link: 'https://github.com/rakeshdeka/EcommerceApp-Frontend',
            status: '#ongoing',
        },
    ];

    return (
        <div className='flex flex-wrap justify-center gap-4 font-lato mt-8 '>
            {allProjects.map((project, index) => (
                <div
                    className='bg-[#F5F5F5] border border-[#E0E0E0] rounded-xl overflow-hidden shadow-lg w-[80%] sm:w-1/2 lg:w-1/3 mb-6'
                    key={index}
                >
                    <img className='w-full h-[200px] object-cover' src={project?.gif} alt='' />
                    <div className='px-6 py-4'>
                        <div className='font-bold text-xl mb-2'>{project?.name}</div>
                        <div className='flex items-center mb-2'>
                            <div className='bg-[#00800044] h-8 p-2 rounded-lg shadow-md flex items-center'>
                                <p className='text-green-600 text-sm'>{project.status}</p>
                            </div>
                        </div>

                        <button className=' bg-[#ff5722] text-white py-2 px-4 rounded-full transition-transform transform hover:scale-105 active:scale-95 animate__animated animate__headShake'> <a href={project?.project_link}>Checkout</a> </button>

                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
