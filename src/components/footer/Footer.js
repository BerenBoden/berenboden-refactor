import React from 'react'
import footer from '../../images/footer-bg.png'
import Logo from '../../images/logo.png'
import './Footer.css';
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faStackOverflow} from '@fortawesome/free-brands-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    const element = <FontAwesomeIcon icon={faGithub} />
    const element2 = <FontAwesomeIcon icon={faYoutube} />
    const element3 = <FontAwesomeIcon icon={faLinkedin} />
    const element4 = <FontAwesomeIcon icon={faStackOverflow} />
    const element5 = <FontAwesomeIcon icon={faHome} />
    const element6 = <FontAwesomeIcon icon={faFolder} />
    const element7 = <FontAwesomeIcon icon={faBriefcase} />
    return (
            <div className="relative flex items-center bottom-0 z-0 mt-12">
                <div className="absolute md:flex flex-wrap px-4 w-full justify-between z-10 text-white">
                    <div className="lg:w-1/4 w-1/2 lg:justify-center flex">
                        <div >
                            <img className="w-48 pb-4" src={Logo} alt="logo" />
                            <p>New Zealand, Taranaki</p>
                            <p className="hover:text-red-400 transition"><a href="mailto:beren.boden@gmail.com">Email: beren.boden@gmail.com</a></p>
                            <p>Phone: 64+ 212089217</p>
                        </div>
                    </div>
                    <div className="lg:w-1/4 pr-12 my-2 md:w-1/2">
                        <div >
                            <h1 className="font-bold text-left">Quick Links -</h1>
                            <hr className="my-2 border-blue-400"/>
                            <ul>
                                <NavLink to="/" className="m-0 p-0"><li className="cursor-pointer hover:text-red-400 transition">{element5}&nbsp;&nbsp;Home</li></NavLink>
                                <NavLink to="/services" className="m-0 p-0"><li className="cursor-pointer hover:text-red-400 transition">{element6}&nbsp;&nbsp;Projects</li></NavLink>
                                <NavLink to="/portfolio" className="m-0 p-0"><li className="cursor-pointer hover:text-red-400 transition">{element7}&nbsp;&nbsp;Contact</li></NavLink>
                            </ul>
                        </div>
                    </div>
                    <div className="lg:w-1/4 pr-12 my-2 md:w-1/2">
                        <h1 className="font-bold text-left">Follow me on</h1>
                        <hr className="my-2 border-blue-400"/>
                        <ul>
                            <NavLink to="https://github.com/BerenBoden" className="m-0 p-0"><li className="cursor-pointer hover:text-red-400 transition">{element}&nbsp;&nbsp;Github</li></NavLink>
                            <NavLink to="https://www.youtube.com/channel/UCoNZkBNKW6bI-luin6TdhpA?view_as=subscriber" className="m-0 p-0"><li className="cursor-pointer hover:text-red-400 transition">{element2}&nbsp;&nbsp;YouTube</li></NavLink>
                            <NavLink to="https://www.linkedin.com/in/beren-boden-5766ba1a0/" className="m-0 p-0"><li className="cursor-pointer hover:text-red-400 transition">{element3}&nbsp;&nbsp;LinkedIn</li></NavLink>
                            <NavLink to="https://stackoverflow.com/users/12826492/berenboden" className="m-0 p-0"><li className="cursor-pointer hover:text-red-400 transition">{element4}&nbsp;&nbsp;StackOverflow</li></NavLink>
                        </ul>
                    </div>
                    <div className="lg:w-1/4 pr-12 my-2 md:w-1/2">
                        <h1 className="font-bold text-left">Availabillity -</h1>
                        <hr className="my-2 border-blue-400"/>
                        <p>I am available for any type of work.
Please get in touch with me so we can
discuss this further.</p>
                    </div>
                </div>
                <img className=" object-cover w-screen z-0 footer" src={footer} alt="" />
            </div>
    )
}

export default Footer
