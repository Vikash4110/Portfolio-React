import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import Mypic from "../../Assets/mypic.jpg";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
  As a passionate software developer, I've immersed myself in the world of programming and continuously strive for excellence. Fluent in languages like <i><b className="purple">C++, JavaScript, and Python</b></i>, I have a keen interest in crafting innovative <i><b className="purple">Web Technologies and Products</b></i> and exploring the realms of <i><b className="purple">AI/ML</b></i>.
  <br />
  <br />
  My journey is fueled by a deep-seated curiosity to build impactful solutions that resonate with users. Leveraging tools like <b className="purple">Node.js</b> and modern JavaScript libraries and frameworks such as <i><b className="purple">React.js</b></i>, I bring ideas to life, one line of code at a time.
  <br />
  <br />
  Join me as I embark on this exciting journey of innovation and creativity, where every challenge is an opportunity to learn and grow.
</p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={Mypic} className="img-fluid" id="mypic" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Vikash4110"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/bharal_vikash?s=08"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vikash-bharal-5a2a49238/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/its_me_vikash18/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
