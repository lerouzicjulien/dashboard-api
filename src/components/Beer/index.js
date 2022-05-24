import './styles.scss';
import PropTypes from 'prop-types';

function Beer({ beer }) {
  return (
    <div className="beer">
      <h1 className="beer-title">Beer of the day</h1>
      <div className="beer-result">
        <div className="beer-result-partOne">
          <div className="beer-result-partOne-name">{beer.name}</div>
          <div className="beer-result-partOne-tagline">{beer.tagline}</div>
          <div className="beer-result-partOne-description">{beer.description}</div>
        </div>
        <div className="beer-result-image"><img className="beer-result-image-img" src={beer.image_url} alt="beer" /></div>
      </div>

    </div>
  );
}

Beer.propTypes = {
  beer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Beer;
