import React from 'react';
import camera from '../components/camera'

function CameraPage3() {
    React.useEffect(() => {
        camera.startCamera();
        camera.takeSnapshot();
    }, []);

    return (
        <div className="App" >
            <camera />
        </div>
    );
}

export default CameraPage3;