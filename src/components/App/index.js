// == Imports
import { useEffect } from 'react';
import logo from 'src/assets/images/logoRZK-dashboard.png';
import Meteo from '../Meteo';
import './styles.scss';
import { getMeteo } from '../../actions/meteo';

export default function App() {
  useEffect(() => {
    getMeteo();
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
