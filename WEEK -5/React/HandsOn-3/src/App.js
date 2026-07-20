import logo from './logo.svg';
import './App.css';
import {CalculateScore} from './Components/CalculateScore.js'

function App() {
  return (
    <div>
      <CalculateScore Name = {"Sakinala Ushasri"}
      School = {"VIT University"}
      Total = {934}
      Goal = {10}/>
    </div>
  );
}

export default App;
