import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import addIcon from "/add.svg";
import addHover from "/addHover.svg";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <div className="noteTaking">
        <textarea value="Take a note..." />
        <div className="addNote">
          <img src={addIcon} className="addIcon" alt="Add Note" />
          <img src={addHover} className="addHover" alt="Add Hover Note" />
        </div>
      </div>
    </div>
  );
}

export default App;
