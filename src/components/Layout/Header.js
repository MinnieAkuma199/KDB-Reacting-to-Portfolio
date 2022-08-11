import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import logo from "../images/Logo.png";

export default function Header() {
  return (
    <nav>
      <div className="menu">
        {/* <a className="home" href="/">
          <img className="container" src={logo} alt="Logo" />
        </a> */}
        <a href="/about">About </a>
        <br />
        <a href="/portfolio"> Projects </a>
        <br />
        <a href="/contact"> Contact Me </a>
        <br />
        <a href="/resume"> Resume</a>
      </div>
      <div>
        <ul className="footer-list">
          <li>
            <a href="mailto:kristyndcb@gmail.com" target="blank">
              <AiOutlineMail size={20} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

// Bootstrap navbar that does not show in mobile view...
// import React from "react";
// // import { Link } from "react-router-dom";
// import { Nav, Navbar, Container } from "react-bootstrap";

// const Header = () => {
//   return (
//     <>
//       <Container>
//         <Navbar className="mt-0 p-2 my-nav" variant="dark">
//           <Container>
//             <Nav className="ms-auto">
// <a href="/about">About </a>|<a href="/portfolio"> Projects </a>|
// <a href="/contact"> Contact Me </a>|<a href="/resume"> Resume</a>
//             </Nav>
//           </Container>
//         </Navbar>
//       </Container>
//     </>
//   );
// };

// export default Header;
