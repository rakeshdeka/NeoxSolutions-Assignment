import React from 'react';
import 'animate.css';

const Projects = () => {
    const allProjects = [
        {
            name: 'Chat Application',
            gif: 'https://media.giphy.com/media/tAeB6dptxnoli/giphy.gif',
            project_link: 'https://github.com/rakeshdeka/mern-chat-app',
            status: '#complete',
        },
        {
            name: 'Todo Application',
            gif: 'https://media.giphy.com/media/qWx5C3iSfwa6Q/giphy-downsized-large.gif',
            project_link: 'https://github.com/rakeshdeka/todo-app',
            status: '#ongoing',
        },
        {
            name: 'Calculator App',
            gif: 'https://media.giphy.com/media/9vimJbH3osRnq/giphy.gif',
            project_link: 'https://github.com/rakeshdeka/calculatorApp',
            status: '#complete',
        },
        {
            name: 'Ecommerce Application',
            gif: 'https://media.giphy.com/media/iIAYEKtLy0yG7TacbC/giphy.gif',
            project_link: 'https://github.com/rakeshdeka/EcommerceApp-Frontend',
            status: '#ongoing',
        },
    ];

    return (
        <div className='flex flex-wrap justify-center gap-4 font-lato mt-8 '>
            {allProjects.map((project, index) => (
                <div
                    className='bg-[#F5F5F5] border border-[#E0E0E0] rounded-xl overflow-hidden shadow-lg w-[300px] sm:w-[300px] md:w-[400px] lg:w-[400px] xl:w-[400px] mb-6'
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
