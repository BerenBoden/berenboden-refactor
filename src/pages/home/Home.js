import React from "react";
import ShowcaseTop from "../../components/showcase/ShowcaseTop";
import CertCards from "../../components/cards/CertCards";
import Projects from "../../components/project/Projects";
import Hoc from "../../components/hoc/Hoc";
import Form from "../../components/form/Form";

const Home = () => {
  return (
    <Hoc>
      <ShowcaseTop />
      <Projects />
      <div className="flex justify-center">
        <button className="bg-blue-600 p-3 rounded-md m-4 text-white shadow-xl hover:bg-blue-300 hover:text-black transition duration-100 ease-in-out"><a target="_blank" rel="noreferrer" href="https://github.com/BerenBoden?tab=repositories">View More...</a></button>
      </div>
      <CertCards />
      <Form />
    </Hoc>
  );
};

export default Home;
