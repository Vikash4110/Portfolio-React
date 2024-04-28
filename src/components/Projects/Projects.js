import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ptuwebsite from "../../Assets/Projects/ptuwebsite.png";
import childmindwell from "../../Assets/Projects/childmindwell.png";
import convertify from "../../Assets/Projects/convertify.png";


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
              imgPath={childmindwell}
              isBlog={false}
              title="ChildMindWell"
              description="We empower caregivers with tools to nurture children's mental wellness through screenings, personalized guidance, insightful articles, and an inclusive community. Our features include screenings to identify areas of concern, guidance tailored to individual needs, informative articles to deepen understanding, comprehensive dashboards for tracking progress, diverse channels for engagement, and interactive sessions for meaningful interaction. "
              ghLink="https://github.com/Vikash4110/ChildMindWell"
              demoLink="https://childmindwell.netlify.app"
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
{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
