import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, RefreshControl, View, TouchableOpacity } from 'react-native';
import { Home } from './screens/Home';
import Cities from './screens/Cities';
import { Provider } from 'react-redux';
import store from './redux/reducers/rootReducer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import { createDrawerNavigator } from '@react-navigation/drawer'
import Register from './screens/Register';


const App = () => {

  const Stack = createStackNavigator()
  const Drawer = createDrawerNavigator()

  const ScreenCities = () => (
    <Stack.Navigator screenOptions={
      {headerShown: false}
    }>
      <Stack.Screen name="Cities" component={Cities} />
      {/* <Stack.Screen name='City' component={City} /> */}
    </Stack.Navigator>
  )

  return(
    <Provider store={store}>  
      <View style={{height: 30}}>

      </View>
      <NavigationContainer>
        <Drawer.Navigator>      
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Cities" children={ScreenCities} /> 
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Register" component={Register} />             
        </Drawer.Navigator>
      </NavigationContainer>   
    </Provider>
      )
}
  


export default App