import logo from "./logo.svg";
import Search from "./Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Search />
        <footer>
          Open-source code on,{" "}
          <a
            href="https://github.com/Andee-R/react-weather-app"
            target="_blank"
            rel="noreferrer">
            Github
          </a>{" "}
          hosted on{" "}
          <a href="" target="_blank" rel="noreferrer">
            Netlify
          </a>{" "}
        </footer>
      </header>
    </div>
  );
}

export default App;
