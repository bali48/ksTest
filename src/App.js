import "./App.css";
import Draggable from "react-draggable";
function App() {
  return (
    <div className='App'>
      <Draggable bounds='.App'>
        <div className='box'>
          <div>Drag me</div>
        </div>
      </Draggable>
    </div>
  );
}

export default App;
