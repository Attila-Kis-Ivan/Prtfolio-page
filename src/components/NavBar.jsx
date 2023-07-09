import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../Assets/images/Logo .svg";
import linkedIn from "../Assets/images/linkedin-in.svg";
import github from "../Assets/images/github.svg";

export const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveMenu = (value) => {
    setActiveMenu(value);
  };

  return (
    // <Router>
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeMenu === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveMenu("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={
                activeMenu === "about" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveMenu("about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeMenu === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveMenu("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeMenu === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveMenu("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#resume"
              className={
                activeMenu === "resume" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveMenu("resume")}
            >
              Resume
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/attila-kis-ivan-68a67bb3/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedIn} alt="linkrdIn" />
              </a>
              <a
                href="https://github.com/Attila-Kis-Ivan"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} id="github" alt="github" />
              </a>
            </div>
            <button className="vvd">
              <span>Let’s Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // </Router>
  );
};
