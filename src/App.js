import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Components/Navigation";
import Projects from "./Components/Projects";
import Profile from "./Components/Profile";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
      <Navigation />
      
      <Projects/>
      <Skills></Skills>
      
    </div>
  );
}

export default App;
