// == Import
import User from '../User';
import Meteo from '../Meteo';
import Image from '../Image';
import Beer from '../Beer';
import './styles.scss';

// == Composant
function App() {
  console.log('where is the problem (App)');
  return (
    <div className="app">
      <h1>Dashboard</h1>
      <User />
      <Meteo />
      <Image />
      <Beer />
    </div>
  );
}

// == Export
export default App;
