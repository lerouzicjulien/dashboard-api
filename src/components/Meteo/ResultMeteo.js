import './styles.scss';

import PropTypes from 'prop-types';

function ResultMeteo({ meteo }) {
  return (
    <div className="meteoResult">
      <div className="meteo-Result-firstRow">
        <div className="meteo-region">{meteo.region}</div>
        <div className="meteo-currentDay">
          <div className="meteo-currentDay-dayhour">{meteo.currentConditions.dayhour}</div>
          <div className="meteo-currentDay-tempAndicon">
            <div className="meteo-currentDay-temp">{meteo.currentConditions.temp.c}°c</div>
            <div className="meteo-currentDay-icon"><img src={meteo.currentConditions.iconURL} alt="meteo" /></div>
          </div>
          <div className="meteo-currentDay-precAndhumAndwind">
            <div className="meteo-currentDay-precip">{meteo.currentConditions.precip} de précipitations</div>
            <div className="meteo-currentDay-humidity">{meteo.currentConditions.humidity} d'humidité</div>
            <div className="meteo-currentDay-wind">{meteo.currentConditions.wind.km} km de vent</div>
          </div>
        </div>
      </div>
      <div className="meteo-nextdays">
        {meteo.next_days.map((item) => (
          <div className="meteo-nextday" key={item.day}>
            <div className="meteo-nextday-day">{item.day}</div>
            <div className="meteo-nextday-temp">
              <div className="meteo-nextday-temp-minmax">
                <div className="meteo-nextday-temp-minTemp">{item.min_temp.c}°c</div>
                <div className="meteo-nextday-temp-maxTemp">{item.max_temp.c}°c</div>
              </div>
              <div className="meteo-nextday-icon"><img src={item.iconURL} alt="meteo" /></div>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
}

ResultMeteo.propTypes = {
  meteo: PropTypes.shape({
    region: PropTypes.string.isRequired,
    currentConditions: PropTypes.shape({
      dayhour: PropTypes.string.isRequired,
      temp: PropTypes.shape({
        c: PropTypes.number.isRequired,
      }).isRequired,
      precip: PropTypes.string.isRequired,
      humidity: PropTypes.string.isRequired,
      wind: PropTypes.shape({
        km: PropTypes.number.isRequired,
      }).isRequired,
      iconURL: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
    }).isRequired,
    next_days: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired,
        max_temp: PropTypes.shape({
          c: PropTypes.number.isRequired,
        }).isRequired,
        min_temp: PropTypes.shape({
          c: PropTypes.number.isRequired,
        }).isRequired,
        iconURL: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};

export default ResultMeteo;
