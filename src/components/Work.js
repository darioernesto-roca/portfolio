import { Fragment, useContext, useState } from "react";
import NavContext from "../context/navContext";
import {
  ImgSideBar,
  SliderSideBar,
  VideoSideBar,
  YoutubeSideBar,
} from "./WorkSideBar";

const workData = [
  {
    img: "img/projects/project-1.jpg",
    name: "Ivo Pabón Psicoterapia",
    format: "img",
    project: "WEBSITE",
    client: "Ivo Pabón",
    duration: "1 MONTH",
    technologies: ["HTML", "JAVASCRIPT, NODE.JS, CSS, SASS"],
    budget: "1550 USD",
    previewLink: "https://ivopabonpsicoterapia.onrender.com/",
  },
  {
    img: "img/projects/project-2.jpg",
    name: "Application Météo (Français)",
    format: "youtube",
    project: "Personal",
    client: "Personal Project",
    duration: "3 days",
    technologies: ["HTML", "JAVASCRIPT", "NODE.JS", "CSS"],
    budget: "1550 USD",
    previewLink: "https://weatherhive.netlify.app/",
  },
  {
    img: "img/projects/project-3.jpg",
    name: "WeatherHive",
    format: "img",
    project: "WEBSITE",
    client: "Personal Project",
    duration: "3 days",
    technologies: ["HTML", "JAVASCRIPT", "NODE.JS", "CSS"],
    budget: "1550 USD",
    previewLink: "https://weatherhive.netlify.app/",
  },
  {
    img: "img/projects/project-4.jpg",
    name: "Once Once - Ropa para bebés",
    format: "img",
    project: "WEBSITE",
    client: "Once Once",
    duration: "3 MONTHS",
    technologies: ["HTML", "JAVASCRIPT", "NODE.JS", "CSS"],
    budget: "1550 USD",
    previewLink: "https://www.onceonceropaparabebes.com/",
  },
  {
    img: "img/projects/project-5.jpg",
    name: "Revitalyze Aesthetics",
    format: "img",
    project: "TEAM BUILT WEBSITE | MIDDLEWAY MARKETING",
    client: "Revitalyze Aesthetics",
    duration: "3 weeks",
    technologies: ["WORDPRESS", "CSS", "HTML", "JAVASCRIPT"],
    budget: "1550 USD",
    previewLink: "https://revitalyzeaesthetics.com/",
  },
  {
    img: "img/projects/project-8.jpg",
    name: "Mohamed Hay Psicología",
    format: "img",
    project: "WEBSITE",
    client: "Mohamed Hay",
    duration: "2 weeks",
    technologies: ["HTML", "JAVASCRIPT", "NODE.JS", "CSS"],
    budget: "1550 USD",
    previewLink: "https://mohamedhayconsultorio.onrender.com/",
  },
  {
    img: "img/projects/project-7.jpg",
    name: "Radiant Beauty and Wellness Medical Spa",
    format: "img",
    project: "TEAM BUILT WEBSITE | MIDDLEWAY MARKETING",
    client: "Radiant Beauty and Wellness Medical Spa",
    duration: "2 weeks",
    technologies: ["WORDPRESS", "CSS", "HTML", "JAVASCRIPT"],
    budget: "1550 USD",
    previewLink: "https://radiant-beauty-wellness.middlewaytest.com/",
  },
  {
    img: "img/projects/project-8.jpg",
    name: "Mohamed Hay Psicología",
    format: "img",
    project: "WEBSITE",
    client: "Mohamed Hay ",
    duration: "3 weeks",
    technologies: ["HTML", "JAVASCRIPT", "NODE.JS", "CSS"],
    budget: "1550 USD",
    previewLink: "https://mohamedhayconsultorio.onrender.com/",
  },
  {
    img: "img/projects/project-9.jpg",
    name: "Ontario Plant Market",
    format: "img",
    project: "WEBSITE",
    client: "Personal Project",
    duration: "1 week",
    technologies: ["Webflow", "HTML", "CSS"],
    budget: "1550 USD",
    previewLink: "https://example.com/project9",
  },
];

const Work = () => {
  const { nav } = useContext(NavContext);
  const [active, setActive] = useState(null);
  return (
    <Fragment>
      <section id="work" className={`${nav === "work" ? "active" : ""}`}>
        <div
          className={`portfolio-container ${
            active ? "slide-out overflow-hidden" : ""
          }`}
        >
          {/* Main Heading Starts */}
          <div className="container page-title text-center">
            <h2 className="text-center">
              my <span>portfolio</span>
            </h2>
            <span className="title-head-subtitle">
              a few recent design and coding projects. Want to see more? Email
              me.
            </span>
          </div>
          {/* Main Heading Ends */}
          <div className="portfolio-section">
            <div className="container cd-container">
              <div>
                {/* Portfolio Items Starts */}
                <ul className="row" id="portfolio-items">
                  {workData.map((work, i) => (
                    <li className="col-12 col-md-6 col-lg-4" key={i}>
                      <a
                        href="#"
                        data-type="project-1"
                        onClick={() => setActive(i + 1)}
                      >
                        <img
                          src={work.img}
                          alt={work.name}
                          className="img-fluid"
                        />
                        <div>
                          <span>{work.name}</span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
                {/* Portfolio Items Ends */}
              </div>
            </div>
          </div>
          {/* PORTFOLIO OVERLAY STARTS */}
          <div className="portfolio-overlay" onClick={() => setActive(null)} />
          {/* PORTFOLIO OVERLAY ENDS */}
        </div>
        {workData.map((work, i) => (
          <div
            key={i}
            className={`project-info-container project-1 ${
              active === i + 1 ? "slide-in" : ""
            }`}
          >
            {/* Main Content Starts */}
            <div className="project-info-main-content">
              {work.format == "img" ? (
                <ImgSideBar img={work.img} />
              ) : work.format == "youtube" ? (
                <YoutubeSideBar playing={active} />
              ) : work.format == "slider" ? (
                <SliderSideBar />
              ) : (
                <VideoSideBar playing={active} />
              )}
            </div>
            {/* Main Content Ends */}
            {/* Project Details Starts */}
            <div className="projects-info row">
              <div className="col-12 col-sm-6 p-none">
                <h3 className="font-weight-600 uppercase">{work.name}</h3>
                <ul className="project-details">
                  <li>
                    <i className="fa fa-file-text-o" />
                    <span className="font-weight-400 project-label">
                      {" "}
                      Project{" "}
                    </span>
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.project}
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-user-o" />
                    <span className="font-weight-400 project-label">
                      {" "}
                      Client{" "}
                    </span>
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.client}
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-hourglass-o" />
                    <span className="font-weight-400 project-label">
                      {" "}
                      Duration{" "}
                    </span>
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.duration}
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-code" />{" "}
                    <span className="font-weight-400 project-label">
                      {" "}
                      Technologies
                    </span>{" "}
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.technologies.map((technologie, i) => (
                        <Fragment key={i}>{technologie} + </Fragment>
                      ))}
                    </span>
                  </li>
                  {/* <li>
                    <i className="fa fa-money" />{" "}
                    <span className="font-weight-400 project-label">
                      {" "}
                      Budget
                    </span>{" "}
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.budget}
                    </span>
                  </li> */}
                </ul>
                <a href={work.previewLink} className="btn" target="_blank" rel="noreferrer">
                  <span>
                    <i className="fa fa-external-link" />
                    preview
                  </span>
                </a>
              </div>
              <div className="col-6 p-none text-right">
                <a
                  href="#"
                  className="btn btn-secondary close-project"
                  onClick={() => setActive(null)}
                >
                  <span>
                    <i className="fa fa-close" />
                    Close
                  </span>
                </a>
              </div>
            </div>
            {/* Project Details Ends */}
          </div>
        ))}
      </section>
      {active && (
        <span
          className={`back-mobile ${active ? "is-visible" : ""}`}
          onClick={() => setActive(null)}
        >
          <i className="fa fa-arrow-left" />
        </span>
      )}
    </Fragment>
  );
};
export default Work;
