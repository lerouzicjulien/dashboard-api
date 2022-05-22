import './styles.scss';
import PropTypes from 'prop-types';
import ResultMeteo from './ResultMeteo';

function Meteo({
  meteo,
  setLocationToSearch,
  locationToSearch,
  loadMeteo,
  // setInputValue,
  // inputValue,
}) {
  return (
    <div className="meteo">
      {/* <h1 className="meteo-title">Meteo</h1> */}
      {/* <button type="button" onClick={handleMeteo}>load meteo</button> */}
      <form className="meteo-form" onSubmit={loadMeteo}>
        <input
          className="meteo-form-input"
          placeholder="Tape, tape petit clavier... Cherche, cherche tu vas trouver !"
          value={locationToSearch}
          onChange={(event) => {
            setLocationToSearch(event.target.value);
          }}
        />
        <button type="button" className="meteo-form-button">&#128270;</button>
      </form>
      <ResultMeteo meteo={meteo} />
    </div>
  );
}

Meteo.propTypes = {
  meteo: PropTypes.shape({}).isRequired,
  setLocationToSearch: PropTypes.func.isRequired,
  // setMeteo: PropTypes.func.isRequired,
  locationToSearch: PropTypes.string.isRequired,
  loadMeteo: PropTypes.func.isRequired,
  // inputValue: PropTypes.string.isRequired,
};

export default Meteo;
