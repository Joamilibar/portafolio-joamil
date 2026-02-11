import { useState, useEffect } from "react";
import avatar from "./assets/img/avatar.svg";
import fondo from "./assets/img/fondo.png";
import Projects from "./components/Projects";
import Tecnologies from "./components/Tecnologies";
import Contact from "./components/Contact";
import "./index.css";
import "./App.css";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">
          <a href="#home" className="navbar-logo" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}>
            <span className="logo-text">JI</span>
            <span className="logo-full">Joamil</span>
          </a>

          <ul className="navbar-menu">
            <li>
              <a
                href="#about"
                className={activeSection === "about" ? "active" : ""}
                onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}
              >
                Sobre Mí
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={activeSection === "skills" ? "active" : ""}
                onClick={(e) => { e.preventDefault(); scrollToSection("skills"); }}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={activeSection === "projects" ? "active" : ""}
                onClick={(e) => { e.preventDefault(); scrollToSection("projects"); }}
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeSection === "contact" ? "active" : ""}
                onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
              >
                Contacto
              </a>
            </li>
          </ul>

          <a
            href="https://www.linkedin.com/in/joamil-ibarra"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary navbar-cta"
          >
            Contáctame
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <img src={fondo} alt="Background" className="hero-bg-image" />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <div className="hero-badge animate-fade-in-up">
            <span className="badge-dot"></span>
            Disponible para nuevos proyectos
          </div>

          <div className="hero-avatar animate-fade-in-up delay-1">
            <img src={avatar} alt="Joamil Ibarra" className="avatar-image animate-float" />
            <div className="avatar-glow"></div>
          </div>

          <h1 className="hero-title animate-fade-in-up delay-2">
            Hola, soy <span className="gradient-text">Joamil Ibarra</span>
          </h1>

          <h2 className="hero-subtitle animate-fade-in-up delay-3">
            Full Stack Developer
          </h2>

          <p className="hero-description animate-fade-in-up delay-4">
            Transformando ideas en aplicaciones web robustas y escalables.
            <br />
            Especializado en React, Node.js y MongoDB.
          </p>

          <div className="hero-cta animate-fade-in-up delay-5">
            <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection("projects"); }}>
              Ver Proyectos
            </a>
            <a href="#contact" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>
              Contáctame
            </a>
          </div>

          <div className="hero-stats animate-fade-in-up delay-5">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Proyectos</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">8+</span>
              <span className="stat-label">Tecnologías</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Dedicación</span>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span>Scroll</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">Sobre Mí</h2>
          <p className="section-subtitle">
            Conoce un poco más sobre mi trayectoria y pasión por el desarrollo
          </p>

          <div className="about-content">
            <div className="about-card glass">
              <div className="about-icon">👨‍💻</div>
              <h3>¿Quién soy?</h3>
              <p>
                Soy un <strong>Full Stack Developer</strong> con background en IT y enfoque en el stack MERN.
                Me apasiona crear soluciones digitales que resuelvan problemas reales y generen impacto positivo.
              </p>
            </div>

            <div className="about-card glass">
              <div className="about-icon">🚀</div>
              <h3>Mi Enfoque</h3>
              <p>
                Soy una persona <strong>proactiva</strong>, flexible a los cambios, en constante autodesarrollo.
                Tengo iniciativa y curiosidad por aprender constantemente. Apasionado por la automatización
                de procesos y la resolución de problemas.
              </p>
            </div>

            <div className="about-card glass">
              <div className="about-icon">🤝</div>
              <h3>Trabajo en Equipo</h3>
              <p>
                Gran espíritu colaborativo y capacidad para trabajar en equipo.
                Habilidades analíticas fuertes y orientado a resultados.
                <strong> Ansioso por continuar creciendo profesionalmente.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <h2 className="section-title">Tecnologías</h2>
          <p className="section-subtitle">
            Las herramientas y tecnologías que utilizo para crear experiencias digitales increíbles
          </p>
          <Tecnologies />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <h2 className="section-title">Proyectos</h2>
          <p className="section-subtitle">
            Una selección de mis trabajos más recientes y significativos
          </p>
          <Projects />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Contacto</h2>
          <p className="section-subtitle">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
          <Contact />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <span className="logo-text">JI</span>
              <p>Creando experiencias digitales excepcionales</p>
            </div>

            <div className="footer-links">
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}>Inicio</a>
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}>Sobre Mí</a>
              <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection("projects"); }}>Proyectos</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>Contacto</a>
            </div>

            <div className="footer-social">
              <a href="https://www.linkedin.com/in/joamil-ibarra" target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
              <a href="https://github.com/Joamilibar" target="_blank" rel="noopener noreferrer" className="social-link">
                GitHub
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Joamil Ibarra. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
