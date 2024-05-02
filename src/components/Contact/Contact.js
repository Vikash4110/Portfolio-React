import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import ContactCard from './ContactCard';
import laptopImg from '../../Assets/about.png';

function Contact() {
  return (
    <div className="about-section bg-gray-900">
      <Particle />
      <Container>
        <Row className="justify-center">
          <Col md={7} className="text-center py-10">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">
              Know Who <span className="text-purple-500">I'M</span>
            </h1>
          </Col>
          <Col md={5} className="py-10">
            <img
              src={laptopImg}
              alt="about"
              className="mx-auto md:mx-0 max-w-full h-auto animate__animated animate__pulse"
              style={{ transition: 'transform 0.5s ease-in-out' }}
            />
          </Col>
        </Row>
        <div className="contact flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-10 text-white">
          <div className="contact-text text-center md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-serif mb-4">Contact <span className="text-blue-500">Us</span></h2>
            <h4 className="text-xl font-mono mb-2">Connect with us!</h4>

            <div className="contact-list flex flex-col md:flex-row justify-center md:gap-10 mt-4">
              <div className="flex items-center mb-2 md:mb-0">
                <i className="bx bxs-send text-3xl mr-2"></i>
                <span className="font-bold">bharal224@gmail.com</span>
              </div>
              <div className="flex items-center">
                <i className="bx bx-phone text-3xl mr-2"></i>
                <span className="font-bold">7973117120</span>
              </div>
            </div>
            <div className="contact-icons flex justify-center gap-4 mt-6">
              <a href="https://m.facebook.com/vikash.bharal?ref=bookmarks" className="text-blue-500"><i className="bx bxl-facebook-circle text-4xl"></i></a>
              <a href="https://www.instagram.com/its_me_vikash18/" className="text-pink-500"><i className="bx bxl-instagram text-4xl"></i></a>
              <a href="www.linkedin.com/in/vikash-bharal-5a2a49238" className="text-blue-700"><i className="bx bxl-linkedin text-4xl"></i></a>
              <a href="https://geteternalknowledge.blogspot.com" className="text-orange-500"><i className="bx bxl-blogger text-4xl"></i></a>
            </div>
          </div>

          <div className="contact-form w-full md:w-1/2">
            <form id="contact-form" action="https://formspree.io/f/xjvqjyaq" method="POST" className="flex flex-col gap-4">
              <input type="text" placeholder="Enter Your Name" required className="px-4 py-3 rounded-md bg-gray-800 text-gray-100 focus:outline-none focus:ring focus:border-blue-500" />
              <input type="email" name="email" placeholder="Enter Your Email" required className="px-4 py-3 rounded-md bg-gray-800 text-gray-100 focus:outline-none focus:ring focus:border-blue-500" />
              <input type="text" placeholder="Enter Your Subject" required className="px-4 py-3 rounded-md bg-gray-800 text-gray-100 focus:outline-none focus:ring focus:border-blue-500" />
              <textarea name="message" id="message" cols="30" rows="5" placeholder="Enter Your Message" required className="px-4 py-3 rounded-md bg-gray-800 text-gray-100 focus:outline-none focus:ring focus:border-blue-500"></textarea>
              <input type="submit" value="Submit" className="bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-blue-600 cursor-pointer" />
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
