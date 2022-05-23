// == Imports
import { useState, useEffect } from 'react';
import { PacmanLoader } from 'react-spinners';
import axios from 'axios';

import Cocktail from '../Cocktail';
import Meteo from '../Meteo';
import Image from '../Image';
import Beer from '../Beer';
import './styles.scss';

export default function App() {
  const [meteo, setMeteo] = useState({});
  const [beer, setBeer] = useState({});
  const [image, setImage] = useState({});
  const [cocktail, setCocktail] = useState({});
  const [isLoadingMeteo, setIsLoadingMeteo] = useState(true);
  const [isLoadingBeer, setIsLoadingBeer] = useState(true);
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  const [isLoadingCocktail, setIsLoadingCocktail] = useState(true);
  const [locationToSearch, setLocationToSearch] = useState('Bordeaux');

  const loadMeteo = () => {
    setIsLoadingMeteo(true);
    axios.get(`https://weatherdbi.herokuapp.com/data/weather/${locationToSearch}`)
      .then((response) => {
        setMeteo(response.data);
        setIsLoadingMeteo(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
      });
  };

  const loadBeer = () => {
    setIsLoadingBeer(true);
    axios.get('https://api.punkapi.com/v2/beers/random')
      .then((response) => {
        setBeer(response.data[0]);
        // console.log(response.data[0]);
        setIsLoadingBeer(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
      });
  };

  const loadCocktail = () => {
    setIsLoadingCocktail(true);
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((response) => {
        setCocktail(response.data.drinks[0]);
        setIsLoadingCocktail(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loadImage = () => {
    setIsLoadingImage(true);
    axios.get('https://api.nasa.gov/planetary/apod?api_key=oSb6jTnweEa6c03LDvV0dwJ8I8N0fvqIH09Y67Hu')
      .then((response) => {
        setImage(response.data);
        setIsLoadingImage(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadBeer();
    loadMeteo();
    loadCocktail();
    loadImage();
  }, []);

  return (
    <div className="app">
      <div className="part-one">
        <h1 className="dashboard-title">Dashboard</h1>
        {isLoadingMeteo ? <PacmanLoader className="pacman" color="#4D5764" size={150} /> : (
          <Meteo
            meteo={meteo}
            setLocationToSearch={setLocationToSearch}
            locationToSearch={locationToSearch}
            loadMeteo={loadMeteo}
          />
        )}
      </div>
      <div className="part-two">
        {isLoadingImage ? <PacmanLoader className="pacman" color="#4D5764" size={50} /> : <Image image={image} />}
        {isLoadingCocktail ? <PacmanLoader className="pacman" color="#4D5764" size={50} /> : <Cocktail cocktail={cocktail} />}
        {isLoadingBeer ? <PacmanLoader className="pacman" color="#4D5764" size={50} /> : <Beer beer={beer} />}
      </div>
    </div>
  );
}
