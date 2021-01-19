import React from 'react';
import Logo from '../../images/logo.png';
import styled from 'styled-components';
import Menu from './Menu';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
    z-index: 100;
    top: 0;
    position: fixed;
    width: 100%;
    font-size: 1.2rem;
    height: 80px;
    background: rgba(0, 0, 0,0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 3px 2px 3px rgba(0,0,0,0.4);
    backdrop-filter: blur(5px);
    img {
        width: 220px;
        cursor: pointer;
    }
`

const Navigation = () => {
    return (
        <Nav className="lg:px-48 md:px-24 px-6">
            <Link to="/">
                <img src={Logo} alt="logo" />
            </Link>
            <Menu />
        </Nav>
    )
}

export default Navigation