import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { PacmanLoader } from 'react-spinners';
import ResultMeteo from './ResultMeteo';
import { changeLocationToSearch, getMeteo } from '../../actions/meteo';

const Meteo = () => {
  const dispatch = useDispatch;
  const { meteo, isMeteoLoaded, locationToSearch } = useSelector((state) => state.meteo);
  const handleChange = (event) => {
    dispatch(changeLocationToSearch(event.target.value));
  };
  const handleSubmit = () => {
    dispatch(getMeteo(locationToSearch));
  };
  return (
    <div className="meteo">
      <form className="meteo-form" onSubmit={handleSubmit}>
        <input className="meteo-form-input" placeholder="Tape, tape petit clavier... Cherche, cherche tu vas trouver !" onChange={handleChange} />
        <button type="button" className="meteo-form-button">&#128270;</button>
      </form>
      {isMeteoLoaded ? <ResultMeteo meteo={meteo} /> : <PacmanLoader color="#4D5764" size={150} />}
    </div>

  );
};

export default Meteo;
