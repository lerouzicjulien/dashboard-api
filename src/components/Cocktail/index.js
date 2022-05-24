import './styles.scss';
import PropTypes from 'prop-types';

const Cocktail = ({ cocktail }) => (
  <div className="cocktail">
    <h1 className="cocktail-title">Cocktail of the day</h1>
    <div className="cocktail-result">
      <div className="cocktail-result-partOne">
        <h3 className="cocktail-result-partOne-name">{cocktail.strDrink}</h3>
        <p className="cocktail-result-partOne-instructions">{cocktail.strInstructions}</p>
      </div>
      <div className="cocktail-result-image"><img className="cocktail-result-image-img" src={cocktail.strDrinkThumb} alt="cocktail" /></div>
    </div>
  </div>
);

Cocktail.propTypes = {
  cocktail: PropTypes.shape({
    strDrink: PropTypes.string.isRequired,
    strInstructions: PropTypes.string.isRequired,
    strDrinkThumb: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cocktail;
