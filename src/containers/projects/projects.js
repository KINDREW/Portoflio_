import "./projects.css";
import gpt from "../img/sc.PNG";
import { FaGithub, FaLeaf, FaThLarge } from "react-icons/fa";
import { useRef, useEffect } from "react";
import one from "./2.png";
import two from "./1.PNG";
import three from "./3.PNG";

const Projects = () => {
  const targetRef = useRef();

  const options = { threshold: 0 };

  useEffect(() => {
    const slideOnScroll = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          console.log(entry);
          entry.target.classList.add("appear");
        }
      });
    },
    options);

    if (targetRef.current) {
      slideOnScroll.observe(targetRef.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (targetRef.current) {
        slideOnScroll.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <div className="projects">
      <h2 className="l">Portfolio</h2>
      <h5 className="l2">
        Each project is a unique peace of development
        <FaLeaf style={{ color: "green", marginLeft: "10px" }} />
      </h5>
      <div className="lop" ref={targetRef}>
        <div className="port">
          <div className="sc">
            <img src={one} alt="" />
          </div>
          <div className=" content">
            <h2>Restaurant App</h2>
            <p>
              Welcome to the Restaurant Landing Page project! This web
              application represents a restaurant and showcases its offerings.
            </p>
            <div>
              <span>React</span>
              <span>CSS</span>
            </div>
            <div>
              <a
                href="https://github.com/KINDREW/restaurant_application"
                target="_blank"
              >
                <span className="k">
                  Code <FaGithub />
                </span>
              </a>
              <a
                href="https://restaurant-application-topaz.vercel.app/"
                target="_blank"
              >
                <span className="k2">
                  Live demo <FaThLarge />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="port">
          <div className="sc">
            <img src={two} alt="" />
          </div>
          <div className=" content">
            <h2>Toyomo Industrial Suplies</h2>
            <p>
              Welcome to the Toyomo Industrial Supplies Landing Page project!
              This web application represents Toyomo Industrial Supplies, a
              supply chain company based in Ghana.
            </p>
            <div>
              <span>React</span>
              <span>CSS</span>
            </div>
            <div>
              <a
                href="https://github.com/KINDREW/tomoyo-industries"
                target="_blank"
              >
                <span className="k">
                  Code <FaGithub />
                </span>
              </a>
              <a href="https://tomoyo-industries.vercel.app/" target="_blank">
                <span className="k2">
                  Live demo <FaThLarge />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="port">
          <div className="sc">
            <img src={gpt} alt="" />
          </div>
          <div className=" content">
            <h2>Gpt-3</h2>
            <p>
              "Welcome to the GPT-3 Landing Page project! This landing page is
              built using React.js to showcase the capabilities of the GPT-3
              language model.
            </p>
            <div>
              <span>React</span>
              <span>CSS</span>
            </div>
            <div>
              <a href="https://github.com/KINDREW/GPT-3" target="_blank">
                <span className="k">
                  Code <FaGithub />
                </span>
              </a>
              <a href="https://gpt-3-seven-nu.vercel.app/" target="_blank">
                <span className="k2">
                  Live demo <FaThLarge />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
