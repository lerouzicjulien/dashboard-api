// == Imports
import { useEffect } from 'react';
import logo from 'src/assets/images/logoRZK-dashboard.png';
import { useDispatch, useSelector } from 'react-redux';
import { getMeteo } from 'src/actions/meteo';
import Meteo from '../Meteo';
import './styles.scss';

export default function App() {
  const dispatch = useDispatch();
  const { locationToSearch } = useSelector((state) => state.meteo);
  useEffect(() => {
    dispatch(getMeteo(locationToSearch));
  }, []);
  return (
    <div className="app">
      <div className="part-one">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Dashboard</h1>
          <img className="dashboard-logoRzk" src={logo} alt="logo" />
        </div>
        <Meteo />

      </div>
    </div>
  );
}
