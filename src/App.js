import "./App.css";
import Navbar from "./components/navbar/navbar";
import About from "./containers/about/about";
import Black from "./containers/black/black";
import Footer from "./containers/footer/footer";
import Home from "./containers/home/home";
import Projects from "./containers/projects/projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Footer />
      <Black />
    </div>
  );
}

export default App;
