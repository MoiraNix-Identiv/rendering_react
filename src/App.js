import './App.css';
import BWButton from './components/buttons/BWButton';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="http://identiv.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <BWButton>Test OR</BWButton>
      </header>
    </div>
  );
}

