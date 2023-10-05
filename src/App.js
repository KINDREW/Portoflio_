import "./App.css";
import Navbar from "./components/navbar/navbar";
import About from "./containers/about/about";
import Black from "./containers/black/black";
import Footer from "./containers/footer/footer";
import Home from "./containers/home/home";
import Projects from "./containers/projects/projects";
import { Element } from "react-scroll";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Element name="Home">
        <Home />
      </Element>
      <Element name="About">
        <About />
      </Element>
      <Element name="Project">
        <Projects />
      </Element>
      <Element name="Footer">
        <Footer />
      </Element>

      <Black />
    </div>
  );
}

export default App;
