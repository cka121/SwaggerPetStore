import ReactDOM from 'react-dom';
import 'tw-elements';
import { Provider } from 'react-redux';


import './styles.css';
import './index.css';
import App from './App';
import configureStore from './redux/store/configureStore';
import  { initialState }  from './data/initialState';


const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
