import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footerEl">
          <p>© 2022 Kristyn D. ❤️ Website Productions</p>
          <ul className="footer-list">
            <li>
              <a href="https://github.com/MinnieAkuma199" target="blank">
                <AiFillGithub size={20} />
              </a>
              Kris
              <a
                href="https://www.linkedin.com/in/kristyn-del-campo-banrevy-8060b2197/"
                target="blank"
              >
                <AiFillLinkedin size={20} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
