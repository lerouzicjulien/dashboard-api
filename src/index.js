// == Import :
import { render } from 'react-dom';

// Composants
import App from 'src/components/App';

// == Render
const rootReactElement = <App />;

const target = document.getElementById('root');

render(rootReactElement, target);
