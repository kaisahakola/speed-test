import './App.css'
import CircleContainer from "./components/CircleContainer/CircleContainer.tsx";
import Header from "./components/Header/Header.tsx";
import HighScore from "./components/HighScore/HighScore.tsx";
import Score from "./components/Score/Score.tsx";

function App() {

  return (
    <>
        <Header />
        <div id="scores">
            <HighScore />
            <Score />
        </div>
        <CircleContainer />
    </>
  )
}

export default App
