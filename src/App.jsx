import React from 'react';
import { Provider } from 'react-redux';
import store from './store/STORE.JS';
import CartPage from './Components/CartPage';


const App = () => {
  return (
    <Provider store={store}>
      <CartPage />
    </Provider>
  );
};

export default App;

