import React from 'react'
import Form from '../../components/form/Form';
import showcaseImg from '../../images/banner-bg.png';

const Contact = () => {
    return (
        <div>
            <h1 className="absolute z-10 text-center mt-32 font-bold text-3xl capitalize text-white underline top-0 banner-head">contact me</h1>
            <img className="object-cover relative w-screen top-0 z-0 h-64 shadow-2xl mb-24" src={showcaseImg} alt=""/>
            <Form />
        </div>
    )
}

export default Contact
