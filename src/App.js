import logo from "./dictionary-img.jpg";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="dictionary" />
        </main>
        <footer className="App-footer">
          This project was built by Jessica Boll and is{" "}
          <a
            href="https://github.com/ItsmeJessMarie/dictionary-project"
            target="_blank"
            rel="noreferrer noopener"
          >
            open sourced on Github
          </a>{" "}
          and{" "}
          <a
            href="https://jb-dictionary-project.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
