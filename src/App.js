import logo from './logo.svg';
import logo2 from './logo2.svg';
import './App.css';

const AppLink = () => {
  return(
    <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
 )
}

const Logo = () =>  <img id="logo" src={logo} className="App-logo" alt="logo" />
function App() {
  const handleOnClick = (svg) => {
    const logo = document.getElementById("logo");
    logo.src = svg;
  }
  return (
    <div className="App">

      <header className="App-header">

        <Logo />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <AppLink />

        <button onClick={ () => handleOnClick(logo) }> blue </button>
        <button onClick={() => handleOnClick(logo2)}> pink </button>
        
      </header>

    </div>
  );
}

export default App;
