import React from 'react'
import Projects from './Cards/Projects'
const PrevProjects = () => {
    return (
        <>
            <section id="projects" className=" min-w-[530px]">
                <h1 className=" text-[#ff5722] p-3 font-lato text-3xl font-bold mt-4 text-center">Previous Projects</h1>
                <Projects />

            </section>
        </>
    )
}

export default PrevProjects