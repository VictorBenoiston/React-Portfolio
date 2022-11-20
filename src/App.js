import NavBar from "./components/NavBar/NavBar.component";
import Home from "./components/Home/Home.component";
import SocialLinks from "./components/SocialLinks/SocialLinks.component";
import About from "./components/About/About.component";
import Portfolio from "./components/Portfolio/Portfolio.component";
import Skills from "./components/Skills/Skills.component";
import Contact from "./components/Contact/Contact.component";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <SocialLinks />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
