// == Imports
import { useState } from 'react';

import User from '../User';
import Meteo from '../Meteo';
import Image from '../Image';
import Beer from '../Beer';
import './styles.scss';

// == Composants
function App() {
  const [meteo, setMeteo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  console.log(meteo);
  return (
    <div className="app">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="part-one">
        <User />
        <Image />
        <Beer />
      </div>
      <Meteo
        meteo={meteo}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setMeteo={setMeteo}
      />
    </div>
  );
}

// == Export
export default App;
