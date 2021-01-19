import React from 'react';
import ShowcaseTop from '../../components/showcase/ShowcaseTop';
import Projects from '../../components/project/Projects';
import Hoc from '../../components/hoc/Hoc';
import Form from '../../components/form/Form';

const Home = () => {
    return (
        <Hoc>
            <ShowcaseTop />
            <Projects />
            <Form />
        </Hoc>
    )
}

export default Home
