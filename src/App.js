import logo from './logo.svg';
import avatar from '../public/img/avatar1.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={avatar} className="logo_avatar" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
