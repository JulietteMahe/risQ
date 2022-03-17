import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signal from './pages/Signal';
import './App.css';

function App() {   
    return ( 
    <div className = "App" >
        <Routes>
           <Route exact path='/' element={<Home />}/>
           <Route path='/signal' element={<Signal />}/>
        </ Routes>   
    </div>
    );
}

export default App;

