import React from "react";

const experienceContent = [
  {
    year: "   2022 - Present",
    position: " Web Developer",
    compnayName: "Ovex Technolgies Pvt Ltd",
    details: `Currently working as a Web Developer at one of the leading software company in Pakistan`,
  },
  {
    year: "2022 - 2022",
    position: "Jr. Software Engineer",
    compnayName: "CSD Head Ofice Rawalpindi",
    details: `Completed Official Website of the Department, plus participated in the different projects such as point of sales, etc`,
  },
  {
    year: "2021 - 2022",
    position: "Web Developer",
    compnayName: "NXG-IMPACTS",
    details: `Started internship and that lead to a job of Web developer during the degree`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
