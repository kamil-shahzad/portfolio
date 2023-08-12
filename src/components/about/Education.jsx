import React from "react";
import { SassColor } from "sass";

const educationContent = [
  {
    year: "2015",
    degree: "ENGINEERING DEGREE",
    institute: "NUML University",
    details: `Completed degree with the CGPA of 3.1`,
  },
  {
    year: "2012",
    degree: "FSC Degree",
    institute: "FG Inter College",
    details: `Complete the degree with pre-engineering subjects`,
  },
  {
    year: "2009",
    degree: "Martriculation DEGREE ",
    institute: "ARMY PUBLIC SCHOOL",
    details: `Completed school with computer science subjects`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-graduation-cap"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase" >
            {val.degree}<br/>
            <span className="place open-sans-font yello">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
