import logo from './logo.svg';
import './App.css';
import Person from './components/Person';
import { PersonProvider } from './context/PersonContext';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>
            Bienvenidos a nuestra primera app en React
          </p>
        </header>
        <Switch>
          <Route path="/">
            <PersonProvider>
              <Person />
            </PersonProvider>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
