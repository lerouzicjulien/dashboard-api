import './styles.scss';
import axios from 'axios';
import PropTypes from 'prop-types';
import { PacmanLoader } from 'react-spinners';
import ResultMeteo from './ResultMeteo';

function Meteo({
  meteo,
  setMeteo,
  isLoading,
  setIsLoading,
}) {
  const handleMeteo = () => {
    axios.get('https://weatherdbi.herokuapp.com/data/weather/soussans')
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

  return (
    <div className="meteo">
      <h1 className="meteo-title">Meteo</h1>
      <button type="button" onClick={handleMeteo}>load meteo</button>
      <form className="meteo-form">
        <input className="meteo-form-input" placeholder="Tape, tape petit clavier... Cherche, cherche tu vas trouver !" />
      </form>
      {isLoading ? <PacmanLoader className="pacman" color="#4D5764" size={150} /> : <ResultMeteo meteo={meteo} />}
    </div>
  );
}

Meteo.propTypes = {
  meteo: PropTypes.shape({}).isRequired,
  isLoading: PropTypes.bool.isRequired,
  setIsLoading: PropTypes.func.isRequired,
  setMeteo: PropTypes.func.isRequired,
};

export default Meteo;
