import RandomVerseButton from "./components/RandomVerseButton";
import SearchVerseButton from "./components/SearchVerseButton";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Bible Verse Generator</h1>
      <RandomVerseButton />
      <SearchVerseButton />
    </div>
  );
}

export default App;