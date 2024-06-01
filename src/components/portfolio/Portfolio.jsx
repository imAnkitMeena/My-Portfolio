import "./portfolio.css";

import IMG1 from "../../assets/pr3.jpg";
import IMG4 from "../../assets/pr2.png";
import IMG2 from "../../assets/pr1.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Temperature Converter Website ",
      img: IMG1,
      description:
        "An educational website is a huge interactive platform to present various information about Product.",
      technologies: "Html | CSS | Javascript ",
      link: "",
      github: "https://github.com/imAnkitMeena",
    },
    {
      id: 2,
      title: "Netflix Clone",
      img: IMG4,
      description:
        "A personal website assembled for a lawyer. Firebase is the basis of the website assembled as a User Interface",
      technologies: "HTML | CSS | JavaScript |",
      link: "https://fh-huquq-com.vercel.app/",
      github: "https://github.com/Rasif-Taghizada/fh-huquq.com",
    },
    {
      id: 3,
      title: "Ecommarce Website with React Js",
      img: IMG2,
      description: "A booking website for doctor's appointments at the hospital. The website is mainly functionally developed with JavaScript",
      technologies: "HTML | CSS | JavaScript | React JS ",
      link: "",
      github: "",
    }, 
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
