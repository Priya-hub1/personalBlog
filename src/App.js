import Passions from "./Passions";
import "./App.css";
import Career from "./career";
import About from "./About";


export default function App() {
  return (
    <div className="App">
     <h1 className="head">Welcome to my Blog</h1>
     <About />
     <Passions />
     <Career />
    </div>

  );
}


