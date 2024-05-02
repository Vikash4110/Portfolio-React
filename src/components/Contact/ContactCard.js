import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function ContactCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>

       Hi Everyone, I am <span className="purple">Vikash Bharal </span>, a dedicated <span className="purple">full-stack developer </span> driven by the ambition to propel my career forward and engage in impactful<span className="purple"> projects  </span>that benefit the wider community. <br/>
        Here, I showcase my expertise and unwavering passion for <span className="purple"> Web development  </span>. Let's collaboratively craft digital solutions and forge a path towards a brighter future together!
          <br/>
            {/* Apart from coding, some other activities that I love to do! */}
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            "Embrace the bugs, they lead to Breakthroughs!"{" "}
          </p>
          <footer className="blockquote-footer">Vikash Bharal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ContactCard;
