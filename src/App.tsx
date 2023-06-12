import React from 'react';
// import logo from './logo.svg';
// import './App.scss';
// import './shared/styles/theme.css'
import { store } from './store/store';
import { Provider } from 'react-redux';
import DefinedRoutes from './routing/DefinedRoutes';
import ThemeProvider from './theme/ThemeProvider';
import ThemeSetter from './theme/ThemeSetter';


function App() {
  return (
      <Provider store={store}>
        <DefinedRoutes></DefinedRoutes>
      </Provider>
  );
}

export default App;
