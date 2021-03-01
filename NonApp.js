import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, View } from 'react-native';
import { Home } from './screens/Home';
import Cities from './screens/Cities';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import Register from './screens/Register';
import City from './screens/City';
import userActions from './redux/actions/userActions';
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import  AsyncStorage  from '@react-native-async-storage/async-storage';


const NonApp = (props) => {


  const Stack = createStackNavigator()
  const Drawer = createDrawerNavigator()

  const ScreenCities = (props) => (
    <Stack.Navigator screenOptions={
      {
      headerLeft: () =>(
          <TouchableOpacity padding transparent marginHorizontal onPress={() => props.navigation.openDrawer()}>
              <Feather name="menu" size={30}/>
          </TouchableOpacity>)}
    }>
      <Stack.Screen name="Cities" component={Cities} />
      <Stack.Screen name='City' component={City} /> 
    </Stack.Navigator>
  )
  const ScreenHome = (props) => (
    <Stack.Navigator screenOptions={
      {
      headerLeft: () =>(
          <TouchableOpacity padding transparent marginHorizontal onPress={() => props.navigation.openDrawer()}>
              <Feather name="menu" size={30}/>
          </TouchableOpacity>)}
    }>
        <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
  
  const { logout } = props
  
  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Logout"
           onPress={() => (logout(), props.navigation.closeDrawer())}
        />
      </DrawerContentScrollView>
    );
  }

  useEffect(() => {
    loguearStorage()  
    }, [])
  

    const [prueba, setPrueba] = useState("")
   
  const loguearStorage = async () => {  
    //SI EXISTE UN TOKEN EN LOCALSTORAGE, EJECUTA UNA ACTION, QUE ENVÍA EL TOKEN AL BACK DONDE PASSPORT LA EVALUA
    AsyncStorage && await AsyncStorage.getItem('token')
    .then(token => setPrueba(token))
    props.logFromLocalStorage(prueba)
  }
  
  return(
    <>        
      <NavigationContainer>
      {!props.loggedUser ?
       <Drawer.Navigator>          
            <Drawer.Screen name="Home" children={ScreenHome} /> 
            <Drawer.Screen name="Cities" children={ScreenCities}  />
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Register" component={Register} />           
        </Drawer.Navigator> : 
        <Drawer.Navigator  drawerContent={props => <CustomDrawerContent {...props  }/> }>     
          <Drawer.Screen name="Home" children={ScreenHome} />        
          <Drawer.Screen name="Cities" children={ScreenCities} /> 
          
        </Drawer.Navigator> 
        }
        
      </NavigationContainer>   
    </>
      )
}

const mapStateToProps = state => {
    return {
        loggedUser: state.usersR.loggedUser
    }
}
  

const mapDispatchToProps = {
  logout: userActions.logoutUser,
  logFromLocalStorage: userActions.logFromLocalStorage
}


export default connect(mapStateToProps, mapDispatchToProps)(NonApp)