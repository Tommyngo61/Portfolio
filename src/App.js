import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro.js";
import AboutMe from "./components/AboutMe/aboutme.js";
import Works from "./components/Works/works.js";
import Contact from "./components/Contact/contact.js";
import Footer from "./components/Footer/footer.js";

function App() {
  return (
    <div className="App">
      <Navbar className="navbar"></Navbar>
      <Intro/>
      <AboutMe/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
