import './styles.scss';
import { PacmanLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import ResultMeteo from './ResultMeteo';

function Meteo({
  meteo,
  setLocationToSearch,
  loadMeteo,
  isLoading,
}) {
  return (
    <div className="meteo">
      {isLoading ? <PacmanLoader color="#4D5764" size={150} /> : (
        <>
          <form
            className="meteo-form"
            onSubmit={(e) => {
              e.preventDefault();
              loadMeteo();
            }}
          >
            <input
              className="meteo-form-input"
              placeholder="Tape, tape petit clavier... Cherche, cherche tu vas trouver !"
              // value={locationToSearch}
              onChange={(event) => {
                setLocationToSearch(event.target.value);
              }}
            />
            <button type="button" className="meteo-form-button">&#128270;</button>
          </form>
          <ResultMeteo meteo={meteo} />
        </>
      )}

    </div>
  );
}

Meteo.propTypes = {
  meteo: PropTypes.shape({}).isRequired,
  setLocationToSearch: PropTypes.func.isRequired,
  loadMeteo: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Meteo;
