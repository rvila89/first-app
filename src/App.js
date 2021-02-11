import logo from './logo.svg';
import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Bienvenidos a nuestra primera app en React
        </p>
      </header>
      <Person />
    </div>
  );
}

export default App;
