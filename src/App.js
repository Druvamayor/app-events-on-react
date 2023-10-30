import logo from './logo.svg';
import './App.css';
import Component from './Component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className='color-title'>
          OnChange Event /OnClick Event on React.
        </h3>
      </header>
      <content className="App-content">
      <Component />
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check more portfolio >        
        </a>
      </content>
    </div>
  );
}

export default App;
