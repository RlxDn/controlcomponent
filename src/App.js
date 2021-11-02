import './App.css';
import ControlledComponent from './components/ControlledComponent';
import UncontrolledComponent from './components/UncontrolledComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ControlledComponent></ControlledComponent>
        <UncontrolledComponent></UncontrolledComponent>
      </header>
    </div>
  );
}

export default App;
