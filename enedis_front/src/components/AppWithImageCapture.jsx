import React, { useState } from "react";
import { Camera, FACING_MODES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import "./AppWithImageCapture.css";

export default function AppWithImageCapture() {
    const [dataURI, setdataURI] = useState("");
    return (
        <div className="AppWithImageCapture">
            <Camera
                idealFacingMode={FACING_MODES.ENVIRONMENT}
                isImageMirror={false}
                isFullScreen={true}
                isMaxResolution={true}
                isSilentMode={false}
                // idealResolution={{
                //     width: 3024,
                //     height: 4032
                // }}
                sizeFactor={1}
                onTakePhoto={(dataURI) => {
                    setdataURI(dataURI);
                    console.log(dataURI);
                }}
                className="camera"
            />
            <a href={dataURI} download>
                <img src={dataURI} alt="" className="photoTaken" onChange={(event) =>setPicture(event.target.files[0])}/>
            </a>
        </div>
    );
}
