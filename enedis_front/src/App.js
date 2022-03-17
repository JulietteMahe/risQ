import './App.css';
// import camera from './components/camera'

import Geo from './components/geo';
import AppWithImageCapture from './components/AppWithImageCapture';

function App() {
    // camera.startCamera();
    // camera.takeSnapshot();

    return ( <
        div className = "App" >
        <
        Geo / >
        <
        camera / >
        <AppWithImageCapture />
        <
        /div>
    );
}

export default App;