
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Router from './pages/Router';
import {Provider} from 'react-redux'
import {store} from './redux'
const App = () => {
  return (
      <Provider store = {store}>
       <NavigationContainer>
         <Router />
       </NavigationContainer>
     </Provider>
    );
  };
  
  export default App;