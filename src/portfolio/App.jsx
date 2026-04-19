import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import SoftSkills from "./components/SoftSkills";
import TechnicalSkills from "./components/TechnicalSkills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <TechnicalSkills />
      <SoftSkills />
      <Certifications />
      <Projects />
      <Contact />
    </>
  );
}

export default App;