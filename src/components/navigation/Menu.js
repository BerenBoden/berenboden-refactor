import React, {useState} from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';

const BurgerStyle = styled.div`
    cursor: pointer;
    display: none;
    width: 2rem;
    height: 1.8rem;
    top: 24px;
    right: 40px;
    z-index: 20;
    @media (max-width: 768px){
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }
    div {
        width: 2rem;
        height: 0.25rem;
        background-color: #fff;
        transform-origin: 2px;
        border-radius: 10px;
        transition: all 0.1s linear;
        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1};
        }
        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;

const Menu = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <BurgerStyle open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </BurgerStyle>
            <RightNav open={open}/>
        </>
    )
}

export default Menu
