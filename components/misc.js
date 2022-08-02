import React from "react";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Data from "./data.json";

const CardStyle = {
    border: "1px solid black",
    padding: "20px",
    margin: "20px",
    width: "200px",
    height: "300px"
};

const Card = ({ project }) => {
    const [isFlipped, setIsFlipped] = useState(false);
  // console.log(project);
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        style={CardStyle}
        onMouseEnter={() => setIsFlipped((prev) => !prev)}
        className="CardFront"
      >
        <div>
          This is the fron of the card
          <h3>{project.title}</h3>
          <img width="200" src={project.gif} alt="" />
          <ul>
            <li>{project.html}</li>
            <li>{project.css}</li>
            <li>{project.javascript}</li>
            <li>{project.react}</li>
          </ul>
        </div>
      </div>
      <div
        style={CardStyle}
        onMouseLeave={() => setIsFlipped((prev) => !prev)}
        className="CardBack"
      >
        This is the back of the card.
      </div>
    </ReactCardFlip>
  );
};

const Projects = () => {
  return (
    <div style={{ margin: "auto", width: "50%" }} className="Projects">
      {Data.map((item, index) => (
        <Card project={item} key={`card-${index}`} />
      ))}
    </div>
  );
};

export default Projects;