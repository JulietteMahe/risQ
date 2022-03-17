<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import Geo from "../components/Geo";
import Navbar from "../components/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Link to="/camera1">test photo1</Link>
      <Link to="/camera2">test photo2</Link>
      <Link to="/camera3">test photo3</Link>
      <Link to="/camera4">test photo4</Link>
      <Geo />
    </div>
  );
};
=======

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
>>>>>>> 7362dcde2a1a945768ede231aade8f77fd1388e0

export default Home;
