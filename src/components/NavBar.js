import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../Assets/tdb-logo.svg";
import NavIcon1 from "../Assets/nav-icon1.svg";
import NavIcon2 from "../Assets/nav-icon2.svg";
import NavIcon3 from "../Assets/nav-icon3.svg";

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
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={""} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="mavbar-toggler-nav"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeMenu === "home" ? "active navbar-menu" : "navbar-menu"
              }
              onClick={() => onUpdateActiveMenu("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={
                activeMenu === "about" ? "active navbar-menu" : "navbar-menu"
              }
              onClick={() => onUpdateActiveMenu("about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeMenu === "projects" ? "active navbar-menu" : "navbar-menu"
              }
              onClick={() => onUpdateActiveMenu("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeMenu === "skills" ? "active navbar-menu" : "navbar-menu"
              }
              onClick={() => onUpdateActiveMenu("skills")}
            >
              Resume
            </Nav.Link>
            <Nav.Link
              href="#resume"
              className={
                activeMenu === "resume" ? "active navbar-menu" : "navbar-menu"
              }
              onClick={() => onUpdateActiveMenu("resume")}
            >
              Resume
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src={"NavIcon1"} alt="" />
              </a>
              <a href="#">
                <img src={"NavIcon2"} alt="" />
              </a>
              <a href="#">
                <img src={"NavIcon3"} alt="" />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("connect")}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
