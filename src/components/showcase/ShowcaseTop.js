import React from 'react'
import showcaseImg from '../../images/showcase-img.svg'
import Layout from '../layout/Layout'
import Animation from '../animation/Animation'
import Hoc from '../hoc/Hoc'
import cv from '../../assets/berenboden-cv.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import './ShowcaseTop.css';

const ShowcaseHome = () => {
    const element = <FontAwesomeIcon className="text-sm" icon={faArrowCircleRight} />
    return (
        <Hoc>
            <Layout>
                <div className="xl:flex relative xl:mt-48 lg:mt-32 mt-24 z-10 text-white h-full mb-48">
                    <div className="xl:w-1/2"><h1 className="underline lg:text-4xl text-2xl lg:leading-10 font-bold">Web Development & Cyber Security</h1>
                        <p className="mt-6">Computer science and I.T enthusiast.
                        Self taught, full stack web developer.
                        I'm interested in cyber security as a hobby, but I'm
                        currently working towards a career in web development.
                        </p>
                        <button className="btn font-bold mt-6">
                            <a href={cv} target="_blank" rel="noreferrer" download ><span className="flex items-center"><p>Download My C.V&nbsp;&nbsp;</p><p>{element}</p></span></a>
                        </button>
                    </div>
                    <div className="xl:w-1/2 xl:p-0 pt-12"><Animation /></div>
                </div>
            </Layout>
            <img className="absolute object-cover w-screen h-screen top-0 z-0" src={showcaseImg} alt=""/>
        </Hoc>
    )
}

export default ShowcaseHome