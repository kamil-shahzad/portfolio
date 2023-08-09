import Image1 from "../../assets/img/portfolio/klgstat.PNG";
import Image2 from "../../assets/img/portfolio/project-exo.png";
import Image3 from "../../assets/img/portfolio/uim.png";
import Image4 from "../../assets/img/portfolio/project-4.PNG";
import Image5 from "../../assets/img/portfolio/project-jafab.jpeg";
import Image6 from "../../assets/img/portfolio/klg.PNG";
import Image7 from "../../assets/img/portfolio/aa.png";
import Image8 from "../../assets/img/portfolio/react.jpg";
import Image9 from "../../assets/img/portfolio/login.png";

const PortfolioData = [
  {
    id: 1,
    type: "LANDSCAPING COMPANY",
    image: Image1,
    tag: ["mockup"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        client: "Landscaping Company",
        language: "Google Search Console, Google Analytics",
        preview: "KLG TECHNICAL",
        link: "https://www.klgtechservices.com/",
      },
    ],
  },
  {
    id: 2,
    type: "FRUIT STORE",
    image: Image2,
    tag: ["logo", "video" , "wordpress" , "ecommerce"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Fruit Selling Store",
        client: "exotikal",
        language: "WordPress, Woocomerce",
        preview: "www.videohive.net",
        link: "https://www.staging.ovextech.com/Exotikal",
      },
    ],
  },
  {
    id: 3,
    type: "Gaming Website",
    image: Image3,
    tag: [],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "UIM Armadyl",
        language: " HTML, CSS, Javascript , JQUERY",
        preview: "UIM ARMADYL",
        link: "http://www.uimarmadyl.com",
      },
    ],
  },
  {
    id: 4,
    type: "Plain2chic Ecommerce Store",
    image: Image4,
    tag: ["logo", "video" , "wordpress" , "ecommerce"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Ecommerce Website",
        client: "Plain2chic",
        language: "WordPress Ecomerece",
        preview: "www.videohive.net",
        link: "https://plain2chic.com",
      },
    ],
  },
  {
    id: 5,
    type: "JAFAB FILMS",
    image: Image5,
    tag: ["landingpages" ,"wordpress"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "SWEEDISH FILM STUDIO",
        client: "jafabfilm owner",
        language: "WordPress",
        preview: "www.jafabfilm.se",
        link: "http://jafabfilm.se/",
      },
    ],
  },
  {
    id: 6,
    type: "Services Providers",
    image: Image6,
    tag: ["logo", "mockup" , "wordpress"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Service Provider",
        client: "Mr.Seemab Kahoot",
        language: "WordPress",
        preview: "www.pexels.com",
        link: "https://www.klgtechservices.com",
      },
    ],
  },
  {
    id: 7,
    type: "AA INCOPORATED",
    image: Image7,
    tag: ["logo"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        client: "AA Incoporated",
        language: "HTML, CSS, Javascript",
        preview: "AA Incoporated",
        link: "http://aaincorporated.com",
      },
    ],
  },
  {
    id: 8,
    type: "JOB PORTAL REACT APP",
    image: Image8,
    tag: ["graphic design"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "locally deployed",
        client: "Own",
        language: "HTML, CSS, Javascript , REACT ,SQL",
        preview: "STUDENT APP",
        link: "NILL",
      },
    ],
  },
  {
    id: 9,
    type: "EMPLOYEE MANAGEMENT APP",
    image: Image9,
    tag: ["graphic design", "mockup"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Management System",
        client: "Software Company",
        language: "HTML, CSS, Javascript , React JS",
        link: "https://github.com/kamil-shahzad/managementsystem",
      },
    ],
  },
];

export default PortfolioData;
