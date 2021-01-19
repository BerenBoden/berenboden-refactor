import React from 'react'
import ProjectCards from '../../components/project/Projects'
import showcaseImg from '../../images/banner-bg.png';

const Projects = () => {
    return (
        <div>
            <div>
                <div className="">
                    <h1 className="text-center absolute z-10 mt-32 font-bold text-3xl capitalize text-black underline top-0 banner-head">Latest Projects</h1>
                </div>
                <img className="object-cover w-screen relative top-0 z-0 h-64 md:shadow-2xl mb-24" src={showcaseImg} alt=""/>
            </div>
            <ProjectCards />
        </div>
    )
}

export default Projects