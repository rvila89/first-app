import logo from './logo.svg';
import './App.css';
import Person from './components/Person';
import { PersonProvider } from './context/PersonContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Bienvenidos a nuestra primera app en React
        </p>
      </header>
      <PersonProvider>
        <Person />
      </PersonProvider>
    </div>
  );
}

export default App;
