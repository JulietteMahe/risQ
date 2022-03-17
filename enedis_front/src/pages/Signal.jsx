import Map from '../components/basicmap/Map';
import FormSignal from '../components/formsignal/FormSignal';
import Navbar from '../components/Navbar';
import './Signal.css';

function Signal() {
  return (
    <div className="Signal">
      <div className="signalContainer">
        <FormSignal />
        <Map />
      </div>
      <Navbar />
    </div>
  );
}

export default Signal;