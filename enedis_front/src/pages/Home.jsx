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

export default Home;
