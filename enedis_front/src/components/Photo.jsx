import React from 'react'

const Photo = () => {
    const [image, setImage]=React.useState();

    const handleImageChange = (event) => {
        // URL.createObjectURL(event.target.files[0])
        // console.log(image)
    };

    return (
        <div>
            <label>
                <image src={image} />
                <input
                    style={{ display: 'none' }}
                    type='file'
                    accept="image/*"
                    capture="environment"
                    onChange={handleImageChange}
                />
                <button>Take a snapshot</button>
            </label>
        </div >
    )
}

export default Photo;