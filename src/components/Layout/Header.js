import React from "react";
// import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Container>
        <Navbar className="mt-0 p-2 my-nav" variant="dark">
          <Container>
            <Nav className="ms-auto">
              <a href="/about">About </a>|<a href="/portfolio"> Projects </a>|
              <a href="/contact"> Contact Me </a>|<a href="/resume"> Resume</a>
            </Nav>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};

export default Header;
