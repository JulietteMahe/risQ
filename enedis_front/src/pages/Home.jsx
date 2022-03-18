
import React from 'react';
import { Link } from 'react-router-dom';
import Fondamentaux from './Fondamentaux.jsx';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <div className='Welcome'>
                <p className='welcomeTitle'>Bienvenue sur votre application sécurité</p>
                <p className='welcomeText'>Signalez les risques sur vos lieux d'intervention</p>
                <p className='welcomeText'>Signalez les risques sur vos lieux d'intervention</p>
            </div>
            <Fondamentaux />
        </div>
    )
}

export default Home;
