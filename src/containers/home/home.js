import "./home.css";
import {
  FaLinkedin,
  FaGithub,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
} from "react-icons/fa";
import img from "./x.png";

const Home = () => {
  return (
    <div className="home">
      <div className="middle">
        <div class="middleleft">
          <h1>Front-End React Developer</h1>
          <p>
            Hi, I'm Andrew Afful. A passionate Front-end and React Developer
            based in Takoradi,Ghana
            <br />
            <div className="icons">
              <a href="https://www.linkedin.com/in/akafful" target="_blank">
                <FaLinkedin size={"30px"} />
              </a>

              <a href="https://github.com/KINDREW" target="_blank">
                <FaGithub size={"30px"} />
              </a>
            </div>
          </p>
        </div>
        <div>
          <div className="middleright">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
      <div className="bottom">
        <p>Tech Stack | </p>
        <div>
          <FaHtml5
            className="html"
            size={"40px"}
            style={{ color: "orangered" }}
          />

          <FaCss3
            className="html"
            size={"40px"}
            style={{ color: "rgb(8, 110, 144)" }}
          />
          <FaJs
            className="html"
            size={"40px"}
            style={{ color: "rgb(255, 255, 41)" }}
          />
          <FaReact
            className="html"
            size={"40px"}
            style={{ color: "lightblue" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
