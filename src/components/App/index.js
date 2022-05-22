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
  const [beer, setBeer] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [locationToSearch, setLocationToSearch] = useState('Bordeaux');

  const loadMeteo = () => {
    setIsLoading(true);
    axios.get(`https://weatherdbi.herokuapp.com/data/weather/${locationToSearch}`)
      .then((response) => {
        setMeteo(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
      });
  };

  const loadBeer = () => {
    setIsLoading(true);
    axios.get('https://api.punkapi.com/v2/beers/random')
      .then((response) => {
        setBeer(response.data[0]);
        // console.log(response.data[0]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
      });
  };
  useEffect(() => {
    // loadBeer();
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
            locationToSearch={locationToSearch}
            loadMeteo={loadMeteo}
          />
          <div className="part-one">
            <User />
            <Image />
            {/* <Beer beer={beer} /> */}
          </div>
        </div>
      )}

    </div>
  );
}

// == Export
export default App;
