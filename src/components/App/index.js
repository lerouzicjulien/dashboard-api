// == Imports
import { useState, useEffect } from 'react';
import { PacmanLoader } from 'react-spinners';
import axios from 'axios';

import User from '../User';
import Meteo from '../Meteo';
import Image from '../Image';
import Beer from '../Beer';
import './styles.scss';

// == Composants
function App() {
  const [meteo, setMeteo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // const [inputValue, setInputValue] = useState('');
  const [locationToSearche, setLocationToSearch] = useState('bordeaux');

  const loadMeteo = () => {
    setIsLoading(true);
    axios.get(`https://weatherdbi.herokuapp.com/data/weather/${locationToSearche}`)
      .then((response) => {
      // console.log(response.data.region);
        setMeteo(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
      });
  };

  useEffect(() => {
    loadMeteo();
  }, []);

  return (
    <div className="app">
      <h1 className="dashboard-title">Dashboard</h1>
      {isLoading ? <PacmanLoader className="pacman" color="#4D5764" size={150} /> : (
        <div className="dashboard">
          <Meteo
            meteo={meteo}
            setLocationToSearch={setLocationToSearch}
            locationToSearche={locationToSearche}
            loadMeteo={loadMeteo}
          />
          <div className="part-one">
            <User />
            <Image />
            <Beer />
          </div>
        </div>
      )}

    </div>
  );
}

// == Export
export default App;
