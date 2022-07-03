// == Import :
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from 'src/store';

// == Import : local
// Composants
import App from 'src/components/App';

// == Render
const rootReactElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

const target = document.getElementById('root');

render(rootReactElement, target);
