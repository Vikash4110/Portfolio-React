import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ptuwebsite from "../../Assets/studyzone.png";
import childmindwell from "../../Assets/Projects/childmindwell.png";
import convertify from "../../Assets/Projects/convertify.png";
import School from "../../Assets/school.png";
import Sprint from "../../Assets/sprint.png";
import Devbharal from "../../Assets/Projects/devbharal.png";
function Projects() {

  const html = "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white";
  const css = "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white";
  const js = "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E";
  const react = "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB";
  const tailwindcss = "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white";
  const bootstrap = "https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white";
  const node = "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white";
  const express = "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB";
  const mongo = "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white";
  const firebase = "https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase";
  const canva = "https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white";
  const restapi = "https://img.shields.io/badge/REST_API-%234F4F4F.svg?style=for-the-badge&logo=rest-api&logoColor=white";
  const postman = "https://img.shields.io/badge/Postman-%234F4F4F.svg?style=for-the-badge&logo=postman&logoColor=red"
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
              techStack={[react,express,mongo,node,tailwindcss,postman,restapi, canva]}
              isBlog={false}
              title="PTU Study Zone"
              description="PTU Study Zone 2.0 is a MERN stack platform for B.Tech CSE students, offering easy access to syllabus, books, PYQs, and YouTube content. It also allows grievance submissions to the HOD panel and includes an admin panel for managing content and users. Built with React, Node.js, and MongoDB, it is fully responsive and deployed on Vercel and Render for a seamless user experience across all devices."
              ghLink=""
              demoLink="https://ptustudyzone.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={School}
              techStack={[html, css,react ,tailwindcss, node,canva,firebase, restapi, postman]}
              isBlog={false}
              title="Springdale Public School"
              description="This project is a responsive website for Springdale Public School, designed and developed as part of an assignment from the company I applied for. The website showcases various sections including Academics, Admissions, Contact Us, and more. The project was completed within 6 hours of continuous hard work."
              ghLink="https://github.com/Vikash4110/madrocketTechnologiesSchool"
              demoLink="https://madrocket-technologies-school.vercel.app"
            />
          </Col>

            
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sprint}
              techStack={[html, css,react ,tailwindcss, node,canva,firebase, restapi, postman]}
              isBlog={false}
              title="Sprint Digital"
              description="During my internship at HopinMinds, my friend Sahil Jamwal and I were tasked with developing a comprehensive and fully responsive website. This project was designed to push our skills and knowledge, allowing us to apply and integrate a wide range of technologies and concepts in web development."
              ghLink="https://github.com/Vikash4110/sprint_react_main_project"
              demoLink="https://sprint-react-main-project-nine.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Devbharal}
              techStack={[html, css,react ,tailwindcss,mongo, node, express,canva,firebase, restapi, postman]}
              isBlog={false}
              title="DevBharal"
              description="DevBharal is a dynamic web application designed to streamline the development experience. It features secure user authentication with JWT and bcrypt, project management capabilities, and a fully responsive design. The interactive UI is built using React.js, Tailwind CSS, AOS animations, and Framer Motion. The robust backend, developed with Node.js and Express.js, stores data in MongoDB Atlas, with extensive API testing done using Postman."
              ghLink="https://github.com/Vikash4110/"
              demoLink="https://devbharal.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={childmindwell}
              techStack={[html, css,react ,tailwindcss, node,canva,firebase, restapi, postman]}
              isBlog={false}
              title="ChildMindWell"
              description="We empower caregivers with tools to nurture children's mental wellness through screenings, personalized guidance, insightful articles, and an inclusive community. Our features include screenings to identify areas of concern, guidance tailored to individual needs, informative articles to deepen understanding, comprehensive dashboards for tracking progress, diverse channels for engagement, and interactive sessions for meaningful interaction."
              ghLink="https://github.com/Vikash4110/ChildMindWell"
              demoLink="https://childmindwell.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={convertify}
              techStack={[html,css,tailwindcss,js,canva,firebase, restapi, postman]}
              isBlog={false}
              title="Convertify"
              description="Users can seamlessly convert various file formats with ease, from images to documents and beyond, thanks to this innovative platform. Its intuitive interface and robust functionality cater to users of all backgrounds, streamlining their workflows and enhancing productivity. Explore a new realm of efficiency and simplicity in file transformation, setting new standards for digital innovation."
              ghLink="https://github.com/Vikash4110/Convertify"
              demoLink="https://convertifyy.netlify.app"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
