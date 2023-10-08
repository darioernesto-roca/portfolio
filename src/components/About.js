import { useContext } from "react";
import NavContext from "../context/navContext";
const About = () => {
  const { nav } = useContext(NavContext);
  return (
    <section id="about" className={`${nav === "about" ? "active" : ""}`}>
      {/* Main Heading Starts */}
      <div className="container page-title text-center">
        <h2 className="text-center">
          about <span>me</span>
        </h2>
        <span className="title-head-subtitle">
        I love learning new languages, writing books, and developing new applications with programming code,<br></br>because each of them is a way for me to communicate and connect with the world🌏.
        </span>
      </div>
      {/* Main Heading Ends */}
      <div className="container infos">
        <div className="row personal-info">
          {/* Personal Infos Starts */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="image-container">
              <img
                className="img-fluid d-block"
                src="img/dark-about.jpg"
                alt=""
              />
            </div>
            <p className="d-block d-md-none">
              {`I'm`} A Full Stack Web developer from Colombia,
            passionate by developing Web applications,
            using both front-end and back-end technologies.
            </p>
          </div>
          <div className="row col-xl-6 col-lg-6 col-md-12">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-1">
                <li>
                  <h6>
                    <span className="font-weight-600">First Name</span>
                    Dario Ernesto
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Last Name</span>
                    Roca
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Birthdate</span>14 june
                    1986
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Nationality</span>
                    Colombian
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Experience</span>3 years
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Address</span>
                    Colombia
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-2">
                <li>
                  <h6>
                    <span className="font-weight-600">Languages</span>
                    Spanish (Native), English (C1), French (B2), Hebrew (A2).
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Phone</span>
                    <span><a href="tel:+573004277281" className="about-link">+57 3004277281</a></span>
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Email</span>
                    <span><a href="mailto:darioernesto.roca@gmail.com" className="about-link">darioernesto.roca@gmail.com</a></span>
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">X (Twitter)</span>
                    <span><a href="https://twitter.com/DarioErnestoRo1" className="about-link" target="_blank" rel="noreferrer">DarioErnestoRo1</a></span>
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">LinkedIn</span>
                    <span><a href="https://www.linkedin.com/in/dario-ernesto-roca/" className="about-link" target="_blank" rel="noreferrer">/Dario-Ernesto-Roca</a></span>
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-12 resume-btn-container">
              <a href="https://drive.google.com/file/d/11npXr-o0jm8LPbwOSqhIs_843GytwObr/view?usp=drive_link" className="btn btn-resume" target="_blank" rel="noreferrer">
                <span>
                  <i className="fa fa-download" />
                  download my cv
                </span>
              </a>
            </div>
          </div>
          {/* Personal Infos Ends */}
        </div>
      </div>
      {/* Download CV Starts */}
      <div className="container col-12 mx-auto text-center">
        <hr className="about-section" />
      </div>
      {/* Download CV Ends */}
      {/* Resume Starts */}
      <div className="resume-container">
        <div className="container">
          <div className="row">
            {/* Experience Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h2 className="font-weight-600 uppercase title-section">
                experience
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        June 2023 - Present
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        web Developer
                        <span className="separator" />
                        <span className="font-weight-700">Middle Way Marketing</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                      Perform maintenance and management of the company's hosting service, handle SQL databases, and manage the server. Create, design, and develop new web pages for new clients using agile methodologies and technologies such as Figma, HTML5, CSS3, JavaScript, PHP, and WordPress. Maintain and update published websites.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        March 2022 - March 2023
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        web Developer
                        <span className="separator" />
                        <span className="font-weight-700">Freelance</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                      Layout a toy store e-commerce website using HTML5 and CSS3. The website's style is applied using the CSS preprocessor SASS. The server is built using Node.js as the JavaScript language runtime environment, using Express.js for the web application REST API structure and EJS as the template engine. It is integrated with a NoSQL database (MongoDB).
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        March 2014 - March 2017
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Webmaster
                        <span className="separator" />
                        <span className="font-weight-700">Vive Caribe Digital Magazine</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                      Perform maintenance on the magazine's website using the WordPress content management system and the Elementor style editor, as well as HTML5 and CSS3 code. Led the "Identity Images" project that promoted the cultural dissemination of Colombian Caribbean through technological tools and was presented to the Ministry of Culture, obtaining approval and reach. After its execution, more than 140,000 people accessed the digital content, which allowed the magazine's contributions to increase by 60% in two years.

                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Experience Ends */}
            {/* Education Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6 skills-container">
              <h2 className="font-weight-600 uppercase title-section">
                Education
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2023
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Git & Github: Control and share your code
                        <span className="separator" />
                        <span className="font-weight-700">
                          Oracle + Alura Latam
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                      I have learned how to create and manage repositories, make effective commits, work with branches, and merge changes efficiently. I also gained a solid understanding of the importance of pull requests in GitHub, along with the ability to collaboratively review and approve changes. In addition, I delved into more advanced concepts, including tags, gitignore, reverting changes, and integrating GIT/GitHub into continuous development (CI/CD) workflows.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2023
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        React.js Developer
                        <span className="separator" />
                        <span className="font-weight-700">
                          IT Education
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                      I learned concepts for developing dynamic and interactive web applications, allowing me to create reusable UI components and effectively manage application states. I also delved into topics like conditional rendering, understanding the component lifecycle, applying CSS styles to React components, React Router DOM and the integration of React with Redux.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2022 - 2023
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Full Stack Software Developer
                        <span className="separator" />
                        <span className="font-weight-700">
                          IT Education | PROtalento
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                      Use of Front End and Back End technologies: HTML5, CSS3, JavaScript, Git, Github, MongoDB, Node.js, Express.js, Handlebars.js, EJS.js, Mongoose, Cloudinary, npm, Render, SASS, Scrum
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2003 - 2009
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Industrial Microbiology
                        <span className="separator" />
                        <span className="font-weight-700">
                          Pontificia Universidad Javeriana
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                      Focused on quality assurance, food safety, production processes, and regulations related to food microbiology.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Education Ends */}
          </div>
          {/* Skills Starts */}
          <div className="row">
            {/* Skill Bar Starts */}
            <div className="col-12">
              <h2 className="font-weight-600 uppercase title-section skills-title">
                skills
              </h2>
            </div>
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">html</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={80}
                  style={{ width: "80%" }}
                />
                <span className="percent" style={{ right: "calc(20% - 21px)" }}>
                  80%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">javascript</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={70}
                  style={{ width: "70%" }}
                />
                <span className="percent" style={{ right: "calc(30% - 21px)" }}>
                  70%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">css</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={75}
                  style={{ width: "75%" }}
                />
                <span className="percent" style={{ right: "calc(25% - 21px)" }}>
                  75%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Node.js</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={65}
                  style={{ width: "65%" }}
                />
                <span className="percent" style={{ right: "calc(35% - 21px)" }}>
                  65%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">wordpress</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={90}
                  style={{ width: "90%" }}
                />
                <span className="percent" style={{ right: "calc(10% - 21px)" }}>
                  90%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">React.js</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={60}
                  style={{ width: "60%" }}
                />
                <span className="percent" style={{ right: "calc(40% - 21px)" }}>
                  60%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Figma</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={60}
                  style={{ width: "60%" }}
                />
                <span className="percent" style={{ right: "calc(40% - 21px)" }}>
                  60%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Framer</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={60}
                  style={{ width: "60%" }}
                />
                <span className="percent" style={{ right: "calc(40% - 21px)" }}>
                  60%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">photoshop</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={75}
                  style={{ width: "75%" }}
                />
                <span className="percent" style={{ right: "calc(25% - 21px)" }}>
                  75%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
          </div>
          {/* Skills Starts */}
        </div>
        {/* Resume Ends */}
      </div>
    </section>
  );
};
export default About;
