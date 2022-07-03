// == Imports
import { useEffect } from 'react';
import logo from 'src/assets/images/logoRZK-dashboard.png';
import { getMeteo } from 'src/actions/meteo';
import Meteo from '../Meteo';
import './styles.scss';

export default function App() {
  useEffect(() => {
    console.log('je suis le useEffect');
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
