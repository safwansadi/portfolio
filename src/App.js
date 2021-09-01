import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Components/Navigation";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Projects />
      <Skills></Skills>
      <Footer></Footer>
    </div>
  );
}

export default App;
