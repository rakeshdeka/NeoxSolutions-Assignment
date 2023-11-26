import React from 'react'

const Projects = () => {
    const allProjects = [
        {
            name: "Chat Application",
            gif: "https://media.giphy.com/media/tAeB6dptxnoli/giphy.gif",
            project_link: "https://github.com/rakeshdeka/mern-chat-app",
            status: "#complete"
        },
        {
            name: "Todo Aplication",
            gif: "https://media.giphy.com/media/qWx5C3iSfwa6Q/giphy-downsized-large.gif",
            project_link: "https://github.com/rakeshdeka/todo-app",
            status: "#ongoing"
        },
        {
            name: "Calculator App",
            gif: "https://media.giphy.com/media/9vimJbH3osRnq/giphy.gif",
            project_link: "https://github.com/rakeshdeka/calculatorApp",
            status: "#complete"
        },
        {
            name: "Ecommerce Application",
            gif: "https://media.giphy.com/media/iIAYEKtLy0yG7TacbC/giphy.gif",
            project_link: "https://github.com/rakeshdeka/EcommerceApp-Frontend",
            status: "#ongoing"

        },
    ]
    return (
        <>
            <div className='flex flex-wrap justify-center gap-3 font-lato '>
                {allProjects.map((project, index) => (
                    <div className=' bg-[#FFB8A2] shadow-xl rounded-xl  flex justify-center items-center h-[450px] w-[400px] sm:h-[300px] sm:w-[300px]' key={index}>
                        <div className='w-[90%] h-[90%] flex gap-2 flex-col'>
                            <div className='object-cover rounded-xl  w-full h-[70%]'>
                                <img className=' rounded-xl h-full w-full' src={project?.gif} alt="" />
                            </div>
                            <div className='h-[10%] w-full flex gap-2'>
                                <div className=''>
                                    <h1>{project?.name}</h1>

                                </div>
                                <div className='bg-[#00800044] h-6 pt-3 pl-2 pr-2 pb-3 sm:pt-5 sm:pl-1 sm:pr-1 rounded-lg shadow-md flex justify-center items-center'>
                                    <p className=' sm:h-10  '>{project.status}</p>
                                </div>
                            </div>
                            <div className=' h-[20%] w-full flex justify-center'>
                                <button className=' rounded-lg bg-[#ff5722] h-[60%] m-2 pr-2 pl-2 shadow-lg '>
                                    <a href={project?.project_link}>Checkout</a>

                                </button>
                            </div>
                        </div>

                    </div>
                ))}

            </div>

        </>



    )
}

export default Projects