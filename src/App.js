import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            This project was built by Jessica Boll and is{" "}
            <a
              href="https://github.com/ItsmeJessMarie/dictionary-project"
              target="_blank"
              rel="noreferrer noopener"
            >
              open sourced on Github
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
