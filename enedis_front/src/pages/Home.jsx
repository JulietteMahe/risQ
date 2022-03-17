
import React from 'react';
import { Link } from 'react-router-dom';
import Geo from '../components/Geo';
import Navbar from '../components/Navbar';
import Fondamentaux from './Fondamentaux.jsx';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
          <Navbar />
            <Fondamentaux />
            <Geo />
<<<<<<< HEAD
            <Link to="/camera1">test photo1</Link>
            <Link to="/camera2">test photo2</Link>
            <Link to="/camera3">test photo3</Link>
            <Link to="/camera4">test photo4</Link>
            <Navbar />
=======
            <ul>
            <li><Link to="/camera1">test photo1</Link></li>
            <li><Link to="/camera2">test photo2</Link></li>
            <li><Link to="/camera3">test photo3</Link></li>
            <li><Link to="/camera4">test photo4</Link></li>
            <li><Link to="/osmap">test map</Link></li>
            <li><Link to="/camera4">test photo4</Link></li>
            </ul>
>>>>>>> 8cd47f73bed85c197d44b81588814d8a2a148b9c
        </div>
    )
}

export default Home;
