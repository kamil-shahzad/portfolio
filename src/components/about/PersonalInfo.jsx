import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Kamil" },
  { meta: "last name", metaInfo: "Shahzad" },
  { meta: "Age", metaInfo: "25 Years" },
  { meta: "Nationality", metaInfo: "Pakistani" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Saddar, Rawalpindi" },
  { meta: "phone", metaInfo: "+92 315 5780434" },
  { meta: "Email", metaInfo: "kamil.shahzad456@gmail.com" },
  { meta: "langages", metaInfo: "English, Urdu, Punjabi" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
