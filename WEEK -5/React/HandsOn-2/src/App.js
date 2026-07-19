import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';

function App() {
  return (
    <div className = "conatiner">
      <Home/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
