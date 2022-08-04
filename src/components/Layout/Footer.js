import React, { useState } from "react";
import MiniContact from "../card/MiniContact";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  const linkedInUrl =
    "https://www.linkedin.com/in/kristyn-del-campo-banrevy-8060b2197/";
  const githubUrl = "https://github.com/minnieakuma199";
  const [openContact, setOpen] = useState(false);
  const onBtnClick = (event) => {
    const temState = !openContact;
    setOpen(temState);
  };
  const closeCard = (event) => {
    setOpen(false);
  };
  return (
    <>
      <footer>
        <div className="footerEl">
          <p>©The DU Event Listeners 2022</p>
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
    // <footer>
    //   <div className="social-link">
    //     <a href={linkedInUrl} target="_blank" rel="noreferrer">
    //       LinkedIn
    //     </a>
    //     <a href={githubUrl} target="_blank" rel="noreferrer">
    //       GitHub
    //     </a>
    //   </div>
    //   {/* <p>© 2022 Kristyn D. ❤️ Website Productions</p> */}
    //   {/* <div className="mini-contact-frame">
    //     <a onClick={onBtnClick}>Get in Touch🌱</a>
    //     {openContact && <MiniContact closeCard={closeCard} />}
    //   </div> */}
    // </footer>
  );
}
