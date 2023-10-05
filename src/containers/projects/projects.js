import "./projects.css";
import gpt from "../img/sc.PNG";
import { FaGithub, FaLeaf, FaThLarge } from "react-icons/fa";
import { useRef, useEffect } from "react";

const Projects = () => {
  const targetRef = useRef();

  const options = { threshold: 0.5 };

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
      <div className="port">
        <div className="sc" ref={targetRef}>
          <img src={gpt} alt="" />
        </div>
        <div className=" content" ref={targetRef}>
          <h2>Gpt-3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
            iste nostrum atque, minus recusandae fuga veniam.
          </p>
          <div>
            <span>React</span>
            <span>SCss</span>
          </div>
          <div>
            <span className="k">
              Code <FaGithub />
            </span>
            <span className="k2">
              Live demo <FaThLarge />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
