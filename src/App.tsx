import React from 'react';
import { Provider } from 'react-redux';
import HomePage from './containers';
import store from './store';
import '../src/assets/common.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
};

export default App;
