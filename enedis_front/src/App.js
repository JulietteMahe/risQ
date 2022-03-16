import './App.css';
import camera from './components/camera'

import Geo from './components/geo';

function App() {
    camera.startCamera();
    camera.takeSnapshot();

    return ( <
        div className = "App" >
        <
        Geo / >
        <
        camera / >
        <
        /div>
    );
}

export default App;