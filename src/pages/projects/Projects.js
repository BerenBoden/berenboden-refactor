import React from 'react'
import ProjectCards from '../../components/project/Projects'
import showcaseImg from '../../images/banner-bg.png';

const Projects = () => {
    return (
        <div> 
            <div>
                <div className="flex justify-center">
                    <div className="absolute z-10">
                        <div className="text-center mt-32 font-bold md:text-3xl text-2xl capitalize text-white underline top-0 banner-head">Latest Projects</div>
                    </div>
                </div>
                <img className="object-cover absolute w-screen relative top-0 z-0 h-64 md:shadow-2xl mb-24" src={showcaseImg} alt=""/>
            </div>
            <ProjectCards />
        </div>
    )
}

export default Projects