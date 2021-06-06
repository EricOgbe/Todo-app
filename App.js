import logo from './logo.svg';
import './App.css';
import Todoframe from './Todoframe.js'
var background = {backgroundImage: `url("/mountain.jpg")`}
function App() {
  return (
    <div className="App" style={background}>
      <header className="App-header">
       <Todoframe />
      </header>
    </div>
  );
}

export default App;
