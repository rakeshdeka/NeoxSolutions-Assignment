import React from 'react'

const Projects = () => {
    const allProjects = [
        {
            name: "project1",
            gif: "https://media.giphy.com/media/tAeB6dptxnoli/giphy.gif"
        },
        {
            name: "project2",
            gif: "https://media.giphy.com/media/qWx5C3iSfwa6Q/giphy-downsized-large.gif"
        },
        {
            name: "project3",
            gif: "https://media.giphy.com/media/9vimJbH3osRnq/giphy.gif"
        },
        {
            name: "project4",
            gif: "https://media.giphy.com/media/iIAYEKtLy0yG7TacbC/giphy.gif"
        },
    ]
    return (
        <>
            <div className='flex flex-wrap justify-center gap-3 font-lato '>
                {allProjects.map((project, index) => (
                    <div className=' bg-[#FFB8A2] shadow-xl rounded-xl  flex justify-center items-center h-[300px] w-[300px]' key={index}>
                        <div className='w-[90%] h-[90%] flex gap-2 flex-col'>
                            <div className='object-cover rounded-xl border border-black w-full h-[70%]'>
                                <img className=' rounded-xl h-full w-full' src={project?.gif} alt="" />
                            </div>
                            <div className=' w-full h-[20%] w-full flex justify-center'>
                                <button className=' rounded-lg bg-[#ff5722] h-[60%] m-2 pr-2 pl-2 '>
                                    <p>Checkout</p>

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