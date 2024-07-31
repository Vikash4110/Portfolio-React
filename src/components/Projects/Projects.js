import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ptuwebsite from "../../Assets/Projects/ptuwebsite.png";
import childmindwell from "../../Assets/Projects/childmindwell.png";
import convertify from "../../Assets/Projects/convertify.png";
import School from "../../Assets/school.png";
import Sprint from "../../Assets/sprint.png";
import Devbharal from "../../Assets/Projects/devbharal.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ptuwebsite}
              isBlog={false}
              title="PTU Study Zone"
              description=" We strive to enhance the educational experience by understanding student needs, curating valuable educational content, and crafting a user-friendly platform. Our features include access to comprehensive notes, previous year question papers (PYQs), syllabus information, recommended books, and curated YouTube channels. Empowering students with the resources they need to excel, we facilitate seamless learning and foster a culture of academic excellence. "
              ghLink="https://github.com/Vikash4110/PTU_STUDY_ZONE"
              demoLink="https://ptustudyzone.netlify.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DevBharal}
              isBlog={false}
              title="DevBharal"
              description="DevBharal is a dynamic web application designed to streamline the development experience. It features secure user authentication with JWT and bcrypt, project management capabilities, and a fully responsive design. The interactive UI is built using React.js, Tailwind CSS, AOS animations, and Framer Motion. The robust backend, developed with Node.js and Express.js, stores data in MongoDB Atlas, with extensive API testing done using Postman. "
              ghLink="https://github.com/Vikash4110/"
              demoLink="https://devbharal.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={childmindwell}
              isBlog={false}
              title="ChildMindWell"
              description="We empower caregivers with tools to nurture children's mental wellness through screenings, personalized guidance, insightful articles, and an inclusive community. Our features include screenings to identify areas of concern, guidance tailored to individual needs, informative articles to deepen understanding, comprehensive dashboards for tracking progress, diverse channels for engagement, and interactive sessions for meaningful interaction. "
              ghLink="https://github.com/Vikash4110/ChildMindWell"
              demoLink="https://childmindwell.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={convertify}
              isBlog={false}
              title="Convertify"
              description="Users can seamlessly convert various file formats with ease, from images to documents and beyond, thanks to this innovative platform. Its intuitive interface and robust functionality cater to users of all backgrounds, streamlining their workflows and enhancing productivity. Explore a new realm of efficiency and simplicity in file transformation, setting new standards for digital innovation."
              ghLink="https://github.com/Vikash4110/Convertify"
              demoLink="https://convertifyy.netlify.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sprint}
              isBlog={false}
              title="Sprint Digital"
              description="During my internship at HopinMinds, my friend Sahil Jamwal and I were tasked with developing a comprehensive and fully responsive website. This project was designed to push our skills and knowledge, allowing us to apply and integrate a wide range of technologies and concepts in web development."
              ghLink="https://github.com/Vikash4110/sprint_react_main_project"
              demoLink="https://sprint-react-main-project-nine.vercel.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={School}
              isBlog={false}
              title="Springdale Public School"
              description="This project is a responsive website for Springdale Public School, designed and developed as part of an assignment from the company I applied for. The website showcases various sections including Academics, Admissions, Contact Us, and more. The project was completed within 6 hours of continuous hard work."
              ghLink="https://github.com/Vikash4110/madrocketTechnologiesSchool"
              demoLink="https://madrocket-technologies-school.vercel.app"              
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
