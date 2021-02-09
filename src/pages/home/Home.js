import React from "react";
import ShowcaseTop from "../../components/showcase/ShowcaseTop";
import CertCards from "../../components/cards/CertCards";
import Projects from "../../components/project/Projects";
import Hoc from "../../components/hoc/Hoc";
import Form from "../../components/form/Form";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Hoc>
      <ShowcaseTop />
      <Projects />
        <div className="flex justify-center">
        <Link to="/projects"><button className="bg-blue-600 py-3 px-6 rounded-md m-4 text-white shadow-2xl hover:bg-blue-300 hover:text-black transition duration-100 ease-in-out">View More...</button></Link>
        </div>
      <CertCards />
      <Form />
    </Hoc>
  );
};

export default Home;