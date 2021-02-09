import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

const Ul = styled.ul`
    display: flex;
    list-style: none;
    li {
        margin: 0 10px;
        a {
            color: #fff;
            text-decoration: none;
            text-transform: uppercase;
            transition: 0.2s ease-in-out;
            &:hover {
                color: #e45e5e;
            }
        }
    }
    @media only screen and (max-width: 768px) {
        z-index: 10;
        position: fixed;
        right: 0;
        height: 80vh;
        top: 80px;
        background-color: rgba(0,0,0, 0.95);
        backdrop-filter: blur(15px);
        flex-direction: column;
        align-items: center;
        width: 100%;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        transition: transform 0.3s ease-in-out;
        flex-flow: column nowrap;
        right: 0;
        li {
            margin: auto;
        }
    }
`

const RightNav = ({open}) => {
    const element = <FontAwesomeIcon icon={faHome} />
    const element2 = <FontAwesomeIcon icon={faFolder} />
    const element3 = <FontAwesomeIcon icon={faBriefcase} />
    return (
        <Ul open={open}>
            <li>
                <a href="/"><i className="fa fa-home" aria-hidden="true"></i>{element}&nbsp;&nbsp;Home</a>
            </li>
            <li>
                <a href="/projects"><i className="fa fa-folder" aria-hidden="true"></i>{element2}&nbsp;&nbsp;Projects</a>
            </li>
            <li>
                <a href="/contact"><i className="fa fa-briefcase" aria-hidden="true"></i>{element3}&nbsp;&nbsp;About</a>
            </li>
        </Ul>
    )
}

export default RightNav