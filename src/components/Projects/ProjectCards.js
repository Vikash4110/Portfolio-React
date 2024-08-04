import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Tech Stack Section */}
        <div className="tech-stack" style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
          {props.techStack.map((tech, index) => (
            <img
              key={index}
              src={tech}
              alt={`tech-stack-${index}`}
              style={{ height: "25px", width: "auto", margin: "3px 5px", objectFit: "contain" }} // Adjusted height
            />
          ))}
        </div>

        {/* Horizontal Line */}
        <hr style={{ margin: "10px 0" }} />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="primary" href={props.ghLink} target="_blank" style={{ marginRight: "10px" }}>
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
          {!props.isBlog && props.demoLink && (
            <Button variant="primary" href={props.demoLink} target="_blank">
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
