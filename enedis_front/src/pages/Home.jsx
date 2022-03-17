import React from 'react'
import { Link } from 'react-router-dom'
import Geo from '../components/geo'

const Home = () => {
    return (
        <div>
            <Geo />
            <Link to="/camera1">test photo1</Link>
            <Link to="/camera2">test photo2</Link>
            <Link to="/camera3">test photo3</Link>
        </div>
    )
}

export default Home