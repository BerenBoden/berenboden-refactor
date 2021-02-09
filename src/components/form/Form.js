import React, { useState } from "react";
import emailjs from "emailjs-com";
import Modal from "react-modal";
import Layout from "../layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const element = <FontAwesomeIcon icon={faTimesCircle} />;

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3rwjz9i",
        "template_3c9bbkl",
        e.target,
        "user_UbO2fdiEpLffF0OdcXUY3"
      )
      .then(
        (result) => {
          setModalIsOpen(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  const modalStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "100px 200px",
    },
  };
  return (
    <Layout>
      <Modal
        style={modalStyle}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <div>
          <h2 className="text-center font-bold text-xl text-green-500">
            Email sent successfully!
          </h2>
          <p className="text-center">
            Thank you for getting in touch!
            <br /> I typically respond within 12 hours. <br />
            Please check your email for confirmation.
          </p>
          <button
            className="absolute top-0 left-0 mt-1 ml-1 font-bold text-red-600 hover:text-red-900 transition duration-100 ease-in-out"
            onClick={() => setModalIsOpen(false)}
          >
            {element}
          </button>
        </div>
      </Modal>
      <div className="flex mt-24">
        <div className="lg:flex justify-center w-full">
          <div className="flex lg:mr-24">
            <div>
              <div className="flex my-4">
                <div className="flex">
                  <svg
                    className="h-12 w-12 mx-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                  >
                    <g>
                      <g>
                        <g>
                          <path
                            d="M298.667,25.6h-85.333c-4.71,0-8.533,3.823-8.533,8.533c0,4.71,3.823,8.533,8.533,8.533h85.333    c4.71,0,8.533-3.823,8.533-8.533C307.2,29.423,303.377,25.6,298.667,25.6z"
                            data-original="#000000"
                            className="active-path"
                            data-old_color="#000000"
                            fill="#43B7FF"
                          ></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            d="M358.4,25.6h-8.533c-4.71,0-8.533,3.823-8.533,8.533c0,4.71,3.823,8.533,8.533,8.533h8.533    c4.71,0,8.533-3.823,8.533-8.533C366.933,29.423,363.11,25.6,358.4,25.6z"
                            data-original="#000000"
                            className="active-path"
                            data-old_color="#000000"
                            fill="#43B7FF"
                          ></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            d="M266.598,435.2H245.41c-12.979,0-23.543,10.564-23.543,23.543v4.122c0,12.979,10.564,23.535,23.535,23.535h21.188    c12.979,0,23.543-10.556,23.543-23.535v-4.122C290.133,445.764,279.569,435.2,266.598,435.2z M273.067,462.865    c0,3.567-2.901,6.468-6.468,6.468H245.41c-3.575,0-6.477-2.901-6.477-6.468v-4.122c0-3.575,2.901-6.477,6.477-6.477h21.18    c3.576,0,6.477,2.901,6.477,6.477V462.865z"
                            data-original="#000000"
                            className="active-path"
                            data-old_color="#000000"
                            fill="#43B7FF"
                          ></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            d="M370.227,0H141.781c-17.007,0-30.848,13.841-30.848,30.848v450.304c0,17.007,13.841,30.848,30.848,30.848h228.437    c17.007,0,30.848-13.841,30.848-30.839V30.848C401.067,13.841,387.226,0,370.227,0z M384,481.152    c0,7.595-6.178,13.781-13.773,13.781H141.781c-7.603,0-13.781-6.187-13.781-13.773V30.848c0-7.595,6.178-13.781,13.781-13.781    h228.437c7.603,0,13.781,6.187,13.781,13.781V481.152z"
                            data-original="#000000"
                            className="active-path"
                            data-old_color="#000000"
                            fill="#43B7FF"
                          ></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            d="M392.533,51.2H119.467c-4.71,0-8.533,3.823-8.533,8.533v358.4c0,4.71,3.823,8.533,8.533,8.533h273.067    c4.71,0,8.533-3.823,8.533-8.533v-358.4C401.067,55.023,397.244,51.2,392.533,51.2z M384,409.6H128V68.267h256V409.6z"
                            data-original="#000000"
                            className="active-path"
                            data-old_color="#000000"
                            fill="#43B7FF"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <div className="border-r-2 border-blue-200 h-16" />
                  <div className="border-r border-blue-300 h-16" />
                </div>
                <div className="ml-4">
                  <h1 className="font-bold text-xl">Phone:</h1>
                  <p className="md:text-sm text-xs">(64+) 0212089217</p>
                </div>
              </div>
              <div className="flex my-4">
                <div className="flex">
                  <svg
                    className="h-12 w-12 mx-4"
                    aria-hidden="true"
                    id="second-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                  >
                    <g>
                      <g>
                        <g>
                          <path
                            d="M506.955,1.314c-3.119-1.78-6.955-1.75-10.045,0.078L313.656,109.756c-4.754,2.811-6.329,8.943-3.518,13.697    c2.81,4.753,8.942,6.328,13.697,3.518l131.482-77.749L210.411,303.335L88.603,266.069l158.965-94    c4.754-2.812,6.329-8.944,3.518-13.698c-2.81-4.753-8.943-6.33-13.697-3.518L58.91,260.392c-3.41,2.017-5.309,5.856-4.84,9.791    s3.216,7.221,7.004,8.38l145.469,44.504L270.72,439.88c0.067,0.121,0.136,0.223,0.207,0.314c1.071,1.786,2.676,3.245,4.678,4.087    c1.253,0.527,2.57,0.784,3.878,0.784c2.563,0,5.086-0.986,6.991-2.849l73.794-72.12l138.806,42.466    c0.96,0.293,1.945,0.438,2.925,0.438c2.116,0,4.206-0.672,5.948-1.961C510.496,409.153,512,406.17,512,403V10    C512,6.409,510.074,3.093,506.955,1.314z M271.265,329.23c-1.158,1.673-1.779,3.659-1.779,5.694v61.171l-43.823-79.765    l193.921-201.21L271.265,329.23z M289.486,411.309v-62.867l48.99,14.988L289.486,411.309z M492,389.483l-196.499-60.116    L492,45.704V389.483z"
                            data-original="#000000"
                            className="active-path"
                            data-old_color="#000000"
                            fill="#43B7FF"
                          ></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            d="M164.423,347.577c-3.906-3.905-10.236-3.905-14.143,0l-93.352,93.352c-3.905,3.905-3.905,10.237,0,14.143    C58.882,457.024,61.441,458,64,458s5.118-0.976,7.071-2.929l93.352-93.352C168.328,357.815,168.328,351.483,164.423,347.577z"
                            data-original="#000000"
                            className="active-path"
                            data-old_color="#000000"
                            fill="#43B7FF"
                          ></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            d="M40.071,471.928c-3.906-3.903-10.236-3.903-14.142,0.001l-23,23c-3.905,3.905-3.905,10.237,0,14.143    C4.882,511.024,7.441,512,10,512s5.118-0.977,7.071-2.929l23-23C43.976,482.166,43.976,475.834,40.071,471.928z"
                            data-original="#000000"
                            className="active-path"
                            data-old_color="#000000"
                            fill="#43B7FF"
                          ></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            d="M142.649,494.34c-1.859-1.86-4.439-2.93-7.069-2.93c-2.641,0-5.21,1.07-7.07,2.93c-1.86,1.86-2.93,4.43-2.93,7.07    c0,2.63,1.069,5.21,2.93,7.07c1.86,1.86,4.44,2.93,7.07,2.93s5.21-1.07,7.069-2.93c1.86-1.86,2.931-4.44,2.931-7.07    C145.58,498.77,144.51,496.2,142.649,494.34z"
                            data-original="#000000"
                            className="active-path"
                            data-old_color="#000000"
                            fill="#43B7FF"
                          ></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            d="M217.051,419.935c-3.903-3.905-10.233-3.905-14.142,0l-49.446,49.445c-3.905,3.905-3.905,10.237,0,14.142    c1.953,1.953,4.512,2.929,7.071,2.929s5.118-0.977,7.071-2.929l49.446-49.445C220.956,430.172,220.956,423.84,217.051,419.935z"
                            data-original="#000000"
                            className="active-path"
                            data-old_color="#000000"
                            fill="#43B7FF"
                          ></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            d="M387.704,416.139c-3.906-3.904-10.236-3.904-14.142,0l-49.58,49.58c-3.905,3.905-3.905,10.237,0,14.143    c1.953,1.952,4.512,2.929,7.071,2.929s5.118-0.977,7.071-2.929l49.58-49.58C391.609,426.377,391.609,420.045,387.704,416.139z"
                            data-original="#000000"
                            className="active-path"
                            data-old_color="#000000"
                            fill="#43B7FF"
                          ></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            d="M283.5,136.31c-1.86-1.86-4.44-2.93-7.07-2.93s-5.21,1.07-7.07,2.93c-1.859,1.86-2.93,4.44-2.93,7.08    c0,2.63,1.07,5.2,2.93,7.06c1.86,1.87,4.44,2.93,7.07,2.93s5.21-1.06,7.07-2.93c1.859-1.86,2.93-4.43,2.93-7.06    C286.43,140.75,285.36,138.17,283.5,136.31z"
                            data-original="#000000"
                            className="active-path"
                            data-old_color="#000000"
                            fill="#43B7FF"
                          ></path>
                        </g>
                      </g>
                    </g>{" "}
                  </svg>
                  <div className="border-r-2 border-blue-200 h-16" />
                  <div className="border-r border-blue-300 h-16" />
                </div>
                <div className="ml-4">
                  <h1 className="font-bold text-xl">Email:</h1>
                  <p className="md:text-sm text-xs">beren.boden@gmail.com</p>
                </div>
              </div>
              <svg
                version="1.1"
                id="e0b35d3b-637f-4cd2-a9fd-b6e76c92ec56"
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                viewBox="0 0 912.9 680.2"
              >
                <path
                  className="st0"
                  fill="#3f3d56"
                  d="M102 641.3h556.1v2.4H102z"
                />
                <path
                  className="st1"
                  fill="#ffb9b9"
                  d="M396.9 316.4s-11.8 53.1 11.8 43.7 9.4-46 9.4-46l-21.2 2.3zM617.6 334.1s28.3 34.2 10.6 41.3-27.1-31.9-24.8-35.4 14.2-5.9 14.2-5.9z"
                />
                <circle
                  className="st1"
                  fill="#ffb9b9"
                  cx="550.3"
                  cy="56.7"
                  r="35.4"
                />
                <path
                  className="st1"
                  fill="#ffb9b9"
                  d="M523.8 70.3l-4.7 36.6 38.9 14.2 8.3-41.4z"
                />
                <path
                  className="st2"
                  fill="#cfcce0"
                  d="M545.6 106.3s-20-9.9-24.2-17.9l-8.9 8.5s-63.7-5.9-73.2 26-1.2 147.5-1.2 147.5-13 51.9-9.4 53.1 47.2 22.4 108.6 10.6c0 0 27.1-4.7 31.9-1.2s-2.4-56.6-2.4-56.6 47.3-106.3 39-119.3-44.8-40.1-44.8-40.1l2.4-13c-.1 0-16.6 7.1-17.8 2.4z"
                />
                <path
                  className="st2"
                  fill="#cfcce0"
                  d="M448.8 114.6s-21.2 10.6-24.8 27.1c-3.5 16.5-36.6 153.4-33 161.7s2.4 18.9 2.4 18.9l30.7-3.5s-5.9-8.3-2.4-11.8 7.1-15.3 4.7-20.1-4.7 3.5 8.3-11.8 42.5-155.8 14.1-160.5zM598.7 154.7s10 .6 12.4 17.1 6.5 118.6 6.5 118.6 15.3 33 9.4 37.8-2.4 11.8-2.4 11.8l-21.2 5.9-46-72 41.3-119.2z"
                />
                <path
                  className="st3"
                  fill="#2f2e41"
                  d="M432.3 318.7s-7.1 1.2-7.1 27.1-13 106.2-4.7 119.2 9.4 129.8 9.4 129.8 22.4 9.4 41.3-21.2l2.4-16.5 4.7-80.3 18.9-100.3 26 110.9s-3.5 133.4 9.4 133.4 37.8-10.6 37.8-10.6 5.9-11.8 3.5-17.7-4.7-4.7-2.4-9.4 5.9-127.5 5.9-127.5-4.7-126.3-10.6-129.8-134.5-7.1-134.5-7.1z"
                />
                <path d="M432.3 590.2l-18.9 20.1s-34.2 31.9-4.7 33 46-18.9 46-21.2 1.2-10.6 9.4-10.6 28.3-20.1 23.6-28.3-18.9-11.8-18.9-11.8l-36.5 18.8zM533.8 616.1s-14.2 28.3-5.9 34.2 10.6 8.3 10.6 8.3 7.1-1.2 5.9 9.4 42.5 16.5 44.8 8.3 1.2-24.8-3.5-29.5-18.9-37.8-18.9-37.8-15.3-17.6-33 7.1z" />
                <path
                  className="st3"
                  fill="#878860"
                  d="M586.1 28.3l6.7-.9s-9.3-17.1-27.3-20.2l6.3-4.3s-11-7.8-25.1 2.2c-7.4 5.3-16.1 11.5-22.5 19.4l-6.5-1.6 1.3 6.6-11 3.7 10 1.3c-1.4 3.1-2.3 6.5-2.7 9.9-.4 3.4.6 6.8 2.6 9.5 0 0 11.3-13.8 11.9-16.2l-1.5 6.1s7.4-4 8.3-7.6l2.3 5.1 3.3-6.3L561 46.7l-2-6.3 12.3 4.9-3.3-7.9s12.4 11.4 11.3 18.2c-1.1 6.8 1.6 14.2 1.6 14.2s19-28.5 5.2-41.5z"
                />
                <path
                  className="st0"
                  fill="#3f3d56"
                  d="M723.9 429.5h189v2.3h-189z"
                />
                <path
                  transform="rotate(-21.14 247.2915512 225.12537121)"
                  className="st4"
                  fill="#f2f2f2"
                  d="M231.8 210.2h30.9V240h-30.9z"
                />
                <path
                  className="st0"
                  fill="#3f3d56"
                  d="M261.9 231.3L231.5 243l-11.3-29.3 30.3-11.7 11.4 29.3zm-29.4 9.7l27.3-10.6-10.2-26.4-27.3 10.6 10.2 26.4z"
                />
                <path
                  transform="rotate(-18.968 767.04293782 535.16281613)"
                  className="st4"
                  fill="#f2f2f2"
                  d="M752 519.7h29.8v30.9H752z"
                />
                <path
                  className="st0"
                  fill="#3f3d56"
                  d="M760.2 549.5l-10.6-30.8 29.7-10.2 10.6 30.8-29.7 10.2zm-8.5-29.7l9.5 27.7 26.7-9.2-9.5-27.7-26.7 9.2z"
                />
                <path
                  className="st3"
                  fill="#2f2e41"
                  d="M818 417.9l-189.9-68.2 33.9-94.4 118.3-29 71.7 97.2z"
                />
                <path
                  className="st4"
                  fill="#f2f2f2"
                  d="M795 399.2l-141.9-54.1c36.8-49.4 53.3-84.2 53.3-139l141.9 54.1c-32.9 46.9-46.7 82.1-53.3 139z"
                />
                <path
                  transform="rotate(-69.133 768.7970109 255.34804754)"
                  className="st0"
                  fill="#3f3d56"
                  d="M767 216h3.7v78.7H767z"
                />
                <path
                  transform="rotate(-69.133 763.58188696 269.02902272)"
                  className="st0"
                  fill="#3f3d56"
                  d="M761.7 229.7h3.7v78.7h-3.7z"
                />
                <path
                  transform="rotate(-69.133 758.36671301 282.71007046)"
                  className="st0"
                  fill="#3f3d56"
                  d="M756.5 243.4h3.7v78.7h-3.7z"
                />
                <path
                  transform="rotate(-69.133 753.15153906 296.3911182)"
                  className="st0"
                  fill="#3f3d56"
                  d="M751.3 257h3.7v78.7h-3.7z"
                />
                <path
                  transform="rotate(-69.133 747.93643768 310.07221595)"
                  className="st0"
                  fill="#3f3d56"
                  d="M746.1 270.7h3.7v78.7h-3.7z"
                />
                <path
                  transform="rotate(-69.133 742.72126374 323.7532637)"
                  className="st0"
                  fill="#3f3d56"
                  d="M740.9 284.4h3.7v78.7h-3.7z"
                />
                <path
                  transform="rotate(-69.133 737.50601722 337.43426143)"
                  className="st0"
                  fill="#3f3d56"
                  d="M735.7 298.1h3.7v78.7h-3.7z"
                />
                <path
                  transform="rotate(-69.133 732.29091584 351.11535918)"
                  className="st0"
                  fill="#3f3d56"
                  d="M730.5 311.8h3.7v78.7h-3.7z"
                />
                <path
                  className="st0"
                  fill="#3f3d56"
                  d="M813.7 430.1l-190-68.2L662 255.3l80.2 75.2 109.8-7z"
                />
                <path
                  className="st5"
                  fill="#6c63ff"
                  d="M717.1 396.5l-94.7-34 23.1-64.2 1.9.7-22.4 62.3 92.8 33.4z"
                />
                <path
                  transform="matrix(.338 -.9411 .9411 .338 132.5132 845.9553)"
                  className="st5"
                  fill="#6c63ff"
                  d="M661.7 314h11.8v29.5h-11.8z"
                />
                <path
                  className="st0"
                  fill="#3f3d56"
                  d="M369.5 642.1l-148.6-.1 1.1-83.4 73.9 33.2 74.8-31.1z"
                />
                <path
                  transform="rotate(-89.19883 243.50656283 608.4393519)"
                  className="st5"
                  fill="#6c63ff"
                  d="M239.2 597.6h8.7v21.7h-8.7z"
                />
                <path
                  className="st5"
                  fill="#6c63ff"
                  d="M371.2 560.5L296 598.8l-74.4-38.3v-2.2h149.6z"
                />
                <ellipse
                  transform="rotate(-69.133 779.79734303 235.7624459)"
                  className="st5"
                  fill="#6c63ff"
                  cx="779.8"
                  cy="235.8"
                  rx="9"
                  ry="25"
                />
                <path
                  className="st5"
                  fill="#6c63ff"
                  d="M823.6 102.6c-20-6.2-41.3 5-47.6 25s10.8 93.4 10.8 93.4 55.6-50.8 61.8-70.8c6.2-20.1-5-41.4-25-47.6zM806.9 156c-9.5-3-14.8-13-11.8-22.5s13-14.8 22.5-11.8 14.8 13 11.8 22.5c-2.9 9.5-13 14.8-22.5 11.8z"
                />
              </svg>
            </div>
          </div>
          <form onSubmit={sendEmail} className="w-full">
            <div className="bg-gray-300 z-0 rounded-md px-6 py-6 shadow-xl">
              <h1 className="uppercase text-2xl text-left font-bold">
                <span className="text-blue-400">Get</span> in touch...
              </h1>
              <div className="my-2">
                <label className="text-sm" htmlFor="name">
                  Name
                </label>
                <input
                  required
                  className="w-full py-4 px-2 rounded-sm shadow-xl text-sm"
                  id="name"
                  name="from_name"
                  placeholder="Your name..."
                />
              </div>
              <div className="my-2">
                <label className="text-sm" htmlFor="email">
                  Email
                </label>
                <input
                  required
                  className="w-full py-4 px-2 rounded-sm shadow-xl text-sm"
                  name="user_email"
                  type="email"
                  placeholder="Your email..."
                />
              </div>
              <div className="my-2">
                <label className="text-sm" htmlFor="business">
                  Business
                </label>
                <input
                  className="w-full py-4 px-2 rounded-sm shadow-xl text-sm"
                  name="user_business"
                  placeholder="Your business..."
                />
              </div>
              <div className="my-2">
                <label className="text-sm" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="w-full py-4 px-2 rounded-sm shadow-xl text-sm"
                  name="user_phone"
                  placeholder="Your phone..."
                />
              </div>
              <div className="my-2">
                <label className="text-sm" htmlFor="message">
                  Message
                </label>
                <textarea
                  required
                  rows="10"
                  className="w-full py-4 px-2 rounded-sm shadow-xl text-sm"
                  name="message"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 py-4 rounded-sm text-white shadow-xl hover:bg-blue-300 hover:text-black transition duration-100 ease-in-out"
              >
                Send Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Form;
