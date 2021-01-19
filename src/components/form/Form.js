import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import Modal from 'react-modal';
import Layout from '../layout/Layout'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Form = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const element = <FontAwesomeIcon icon={faTimesCircle} />

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_3rwjz9i', 'template_3c9bbkl', e.target, 'user_UbO2fdiEpLffF0OdcXUY3')
          .then((result) => {
              setModalIsOpen(true)
              
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }

    const modalStyle = {
        content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)',
            padding: '100px 200px',

        }
    }
    return (
        <Layout>
            <Modal style={modalStyle} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <div>
                    <h2 className="text-center font-bold text-xl text-green-500">Email sent successfully!</h2>
                    <p className="text-center">Thank you for getting in touch!<br /> I typically respond within 12 hours. <br />Please check your email for confirmation.</p>
                    <button className="absolute top-0 left-0 mt-1 ml-1 font-bold text-red-600 hover:text-red-900 transition duration-100 ease-in-out" onClick={() => setModalIsOpen(false)}>{element}</button>
                </div>
            </Modal>
            <form onSubmit={sendEmail}>
                <div className="bg-gray-300 z-0 relative rounded-md xl:px-56 px-6 py-6 mt-24 w-full shadow-xl">
                    <h1 className="uppercase text-2xl text-left font-bold"><span className="text-blue-400">Get</span> in touch...</h1>
                    <div className="my-2">
                        <label className="text-sm" htmlFor="name">Name</label>
                        <input required className="w-full py-4 px-2 rounded-sm shadow-xl text-sm" id="name" name="from_name" placeholder="Your name..." />
                    </div>
                    <div className="my-2">
                        <label className="text-sm" htmlFor="email">Email</label>
                        <input required className="w-full py-4 px-2 rounded-sm shadow-xl text-sm" name="user_email" type="email" placeholder="Your email..." />
                    </div>
                    <div className="my-2">
                        <label className="text-sm" htmlFor="business">Business</label>
                        <input className="w-full py-4 px-2 rounded-sm shadow-xl text-sm" name="user_business" placeholder="Your business..." />
                    </div>
                    <div className="my-2"> 
                        <label className="text-sm" htmlFor="phone">Phone</label>
                        <input className="w-full py-4 px-2 rounded-sm shadow-xl text-sm" name="user_phone" placeholder="Your phone..." />
                    </div>
                    <div className="my-2">
                        <label className="text-sm" htmlFor="message">Message</label>
                        <textarea required rows="10" className="w-full py-4 px-2 rounded-sm shadow-xl text-sm" name="message" placeholder="Your message..."></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 py-4 rounded-sm text-white shadow-xl hover:bg-blue-300 hover:text-black transition duration-100 ease-in-out">
                        Send Email
                    </button>
                </div>
            </form>
        </Layout>
    )
}

export default Form