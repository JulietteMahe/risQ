
import React from 'react';
import { Link } from 'react-router-dom';
import Geo from '../components/Geo';
import Navbar from '../components/Navbar';
import Fondamentaux from './Fondamentaux.jsx';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <Fondamentaux />
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