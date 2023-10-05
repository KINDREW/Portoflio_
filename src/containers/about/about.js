import "./about.css";
import round from "../img/Group 10.svg";
import React, { useRef, useEffect } from "react";

const About = () => {
  const options = {
    threshold: 0,
  };

  const targetRef = useRef();

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
    <div className="about">
      <div className="lef">
        <h2>About me</h2>
        <h3>A dedicated front-end developer based in takoradi,Ghana</h3>
        <p>
          As a junior Front-End Developer, I possess an impressive arsenal of
          skills in HTML,CSS, Javascript,React Tailwind. Iexcel indesigning and
          maintianing responsive webstes that pffer a smooth user experience. My
          experise lies in crafting dynamiuc,engaging interdaces through writing
          clean and optimized code and utilizing cutting edge development tools
          and techniques. Iam also atema player who thrives in ccollaborating
          with cross-functional teams to produce outstanding web and mobile
          applications
        </p>
      </div>
      <div className="r" ref={targetRef}>
        <div className="mid">
          <div className="z">
            <p>
              <h1 className="heade">Education</h1>
              <h2>University of Ghana,Legon</h2>
              <h3>Bsc. Computer Engineering</h3>
              <h4>2017-2021</h4>
            </p>
          </div>
          <div className="z">
            <p>
              <h2>Mfantsipim School</h2>
              <h3>General Science</h3>
              <h4>2014-2017</h4>
            </p>
          </div>
        </div>
        <div className="rig">
          <div className="z">
            <p>
              <h1 className="heade">Experience</h1>
              <h2>Web Development Tutor</h2>
              <h3>iCode GH,Takoradi,Ghana</h3>
              <h4>2023 - Present</h4>
            </p>
          </div>
          <div className="z">
            <p>
              <h2>Freelance Web Developer</h2>

              <h4>2022 - Present</h4>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
