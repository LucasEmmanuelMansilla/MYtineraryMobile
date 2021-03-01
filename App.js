import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/reducers/rootReducer';
import NonApp from './NonApp';


const App = () => {


  return(
    <Provider store={store}>  
      <StatusBar hidden={true} />
      <NonApp />  
    </Provider>
      )
}


export default App