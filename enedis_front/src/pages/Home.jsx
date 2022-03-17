
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
            <Link to="/camera4">test photo4</Link>            
        </div>
    )
}

export default Home;
