import "./navbar.css";

import { Link as ScrollLink, Element } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <h1>kin.dev</h1>
        <ul>
          <li>
            <ScrollLink
              to="Home"
              spy={true}
              smooth={true}
              offset={-70} // Adjust this offset as needed
              duration={500}
            >
              {" "}
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="About"
              spy={true}
              smooth={true}
              offset={-70} // Adjust this offset as needed
              duration={500}
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="Project"
              spy={true}
              smooth={true}
              offset={-70} // Adjust this offset as needed
              duration={500}
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="Footer"
              spy={true}
              smooth={true}
              offset={-70} // Adjust this offset as needed
              duration={500}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
        <div class="bar">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
