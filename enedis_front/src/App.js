import "./App.css";
import Camera from "./components/Camera";
import Geo from "./components/Geo";

function App() {
  Camera.startCamera();
  Camera.takeSnapshot();
  return (
    <div className="App">
      <Geo />
      <Camera />
    </div>
  );
}

export default App;
