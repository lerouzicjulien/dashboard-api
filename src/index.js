import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from 'src/components/App';

import store from './store';

const rootReactElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

const target = document.getElementById('root');

render(rootReactElement, target);
