import './styles.scss';
import PropTypes from 'prop-types';

function Beer({ beer }) {
  return (
    <div className="beer">
      <h1 className="beer-title">Beer</h1>
      <div className="name">{beer.name}</div>
      <div className="tagline">{beer.tagline}</div>
      <div className="description">{beer.description}</div>
      {/* <div className="image"><img src={beer.image} alt="image-beer"/></div> */}
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
