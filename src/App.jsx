import { useState } from "react";
import "./App.css";

const projects = [
  {
    number: "01",
    title: "VFAW",
    category: "Web • Animal Welfare",
    description:
      "A digital platform for Vets for Animal Welfare focused on animal welfare programs, education, campaigns and community engagement.",
    link: "https://vfaw.org.np/"
  },

  {
    number: "02",
    title: "TMVag",
    category: "Digital • Agriculture",
    description:
      "An educational digital project designed to make agricultural and plant-related information easier to access and understand.",
    link: "https://www.tankanath.com.np/"
  },

  {
    number: "03",
    title: "Educational Resources",
    category: "Education • Digital",
    description:
      "Digital learning resources, study materials and educational content organized into accessible online experiences.",
    link: "https://www.tankanath.com.np/"
  }
];

const skills = [
  "React / JSX",
  "HTML & CSS",
  "Responsive Web Design",
  "Graphic Design",
  "Canva",
  "Social Media",
  "Content Creation",
  "Veterinary Communication",
  "GitHub",
  "Vercel"
];

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="website">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >

          <span className="logo-circle">
            B
          </span>

          <span>
            BIBASH<span className="green">.</span>
          </span>

        </a>


        <button
          className={`menu-button ${
            menuOpen ? "active" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open navigation"
        >

          <span></span>
          <span></span>
          <span></span>

        </button>


        <nav
          className={`navigation ${
            menuOpen ? "show" : ""
          }`}
        >

          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#work" onClick={closeMenu}>
            Work
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a
            href="#contact"
            className="contact-nav"
            onClick={closeMenu}
          >
            Contact
          </a>

        </nav>

      </header>


      {/* ================= HERO ================= */}

      <main>

        <section
          id="home"
          className="hero"
        >

          <div className="hero-content">

            <div className="eyebrow">
              VETERINARY • DESIGN • DIGITAL
            </div>


            <h1>

              Hi, I'm{" "}

              <span>
                Bibash.
              </span>

              <br />

              I turn ideas into
              <br />

              <i>
                digital experiences.
              </i>

            </h1>


            <p className="hero-description">

              Veterinary student, designer and
              web creator interested in animal
              welfare, education and meaningful
              digital projects.

            </p>


            <div className="hero-buttons">

              <a
                href="#work"
                className="button button-dark"
              >

                Explore my work

                <span>
                  ↗
                </span>

              </a>


              <a
                href="#about"
                className="button button-light"
              >

                About me

              </a>

            </div>


            <div className="hero-stats">

              <div>
                <strong>
                  01
                </strong>

                <span>
                  Veterinary
                </span>
              </div>


              <div>
                <strong>
                  02
                </strong>

                <span>
                  Design
                </span>
              </div>


              <div>
                <strong>
                  03
                </strong>

                <span>
                  Web
                </span>
              </div>

            </div>

          </div>


          {/* HERO VISUAL */}

          <div className="hero-visual">

            <div className="circle circle-large"></div>

            <div className="circle circle-small"></div>


            <div className="profile-card">

              <div className="profile-photo">

                <div className="initials">
                  BL
                </div>

              </div>


              <div className="profile-details">

                <small>
                  CREATIVE PROFILE
                </small>

                <h3>
                  Bibash Lamichhane
                </h3>

                <p>
                  Veterinary • Creative • Web
                </p>

              </div>

            </div>


            <div className="floating-card floating-top">

              <span>
                ✦
              </span>

              Creating with purpose

            </div>


            <div className="floating-card floating-bottom">

              <span>
                Nepal
              </span>

              Based in Nepal

            </div>

          </div>

        </section>


        {/* ================= ABOUT ================= */}

        <section
          id="about"
          className="section about"
        >

          <div className="section-label">
            01 — ABOUT
          </div>


          <div className="about-grid">

            <div>

              <h2>

                A multidisciplinary

                <br />

                <i>
                  creator.
                </i>

              </h2>

            </div>


            <div className="about-text">

              <p className="large-text">

                I'm a veterinary student who
                enjoys combining science,
                creativity and technology.

              </p>


              <p>

                My interests extend beyond
                veterinary education into
                graphic design, website
                development, digital
                communication and animal
                welfare.

              </p>


              <p>

                I enjoy building digital
                experiences that are simple,
                useful and visually meaningful.

              </p>


              <a
                href="#contact"
                className="text-link"
              >

                Let's connect →

              </a>

            </div>

          </div>

        </section>


        {/* ================= WORK ================= */}

        <section
          id="work"
          className="section work"
        >

          <div className="section-heading">

            <div>

              <div className="section-label">
                02 — SELECTED WORK
              </div>


              <h2>

                Things I've

                <br />

                <i>
                  worked on.
                </i>

              </h2>

            </div>


            <p>

              A selection of digital,
              educational and creative
              projects.

            </p>

          </div>


          <div className="projects">

            {projects.map((project) => (

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project"
                key={project.number}
              >

                <div className="project-visual">

                  <span className="project-number">
                    {project.number}
                  </span>


                  <div className="project-symbol">

                    {project.number === "01"
                      ? "V"
                      : project.number === "02"
                      ? "T"
                      : "B"}

                  </div>

                </div>


                <div className="project-content">

                  <div className="project-category">
                    {project.category}
                  </div>


                  <h3>
                    {project.title}
                  </h3>


                  <p>
                    {project.description}
                  </p>


                  <span className="project-link">
                    View project ↗
                  </span>

                </div>

              </a>

            ))}

          </div>

        </section>


        {/* ================= SKILLS ================= */}

        <section
          id="skills"
          className="section skills"
        >

          <div className="section-label">
            03 — CAPABILITIES
          </div>


          <div className="skills-grid">

            <div>

              <h2>

                What I

                <br />

                <i>
                  do.
                </i>

              </h2>

            </div>


            <div className="skills-list">

              {skills.map(
                (skill, index) => (

                  <div
                    className="skill"
                    key={skill}
                  >

                    <span>
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>


                    <strong>
                      {skill}
                    </strong>


                    <b>
                      ↗
                    </b>

                  </div>

                )
              )}

            </div>

          </div>

        </section>


        {/* ================= QUOTE ================= */}

        <section className="quote">

          <span className="quote-mark">
            “
          </span>


          <p>

            Technology becomes meaningful
            when it helps people, animals
            and ideas move forward.

          </p>

        </section>


        {/* ================= CONTACT ================= */}

        <section
          id="contact"
          className="section contact"
        >

          <div className="section-label">
            04 — CONTACT
          </div>


          <div className="contact-box">

            <div>

              <div className="eyebrow">
                HAVE A PROJECT IN MIND?
              </div>


              <h2>

                Let's create

                <br />

                <i>
                  something useful.
                </i>

              </h2>

            </div>


            <div className="contact-buttons">

              <a
                href="mailto:bibashlamichhanenp@gmail.com"
                className="button button-dark"
              >

                Email me ↗

              </a>


              <a
                href="https://www.tankanath.com.np/"
                target="_blank"
                rel="noreferrer"
                className="button button-light"
              >

                Previous website ↗

              </a>

            </div>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer>

        <div className="footer-left">

          <strong>

            BIBASH
            <span className="green">
              .
            </span>

          </strong>

          <span>
            Portfolio 2026
          </span>

        </div>


        <div>
          Designed & built with purpose.
        </div>

      </footer>

    </div>
  );
}

export default App;
