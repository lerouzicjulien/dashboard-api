import PropTypes from 'prop-types';
import './styles.scss';

const Image = ({ image }) => (
  <div className="image">
    <h1 className="image-title">Nasa picture of the day</h1>
    <div className="image-result">
      <div className="image-result-title">
        <h3 className="image-result-title-nasaTitle">{image.title}</h3>
        <h3 className="image-result-title-date">{image.date}</h3>
      </div>
      <img className="image-result-img" src={image.url} alt="of the day" />
    </div>
  </div>
);

Image.propTypes = {
  image: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    // explanation: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Image;
