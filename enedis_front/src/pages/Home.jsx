
import React from 'react';
import { Link } from 'react-router-dom';
import Geo from '../components/Geo';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Geo />
            <ul>
            <li><Link to="/camera1">test photo1</Link></li>
            <li><Link to="/camera2">test photo2</Link></li>
            <li><Link to="/camera3">test photo3</Link></li>
            <li><Link to="/osmap">test map</Link></li>
            </ul>
        </div>
    )
}

export default Home;