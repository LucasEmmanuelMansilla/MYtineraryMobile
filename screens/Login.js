import React, { useState } from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux';
import userActions from '../redux/actions/userActions';
import { styles } from './../styles/styles';

const Login = (props) => {
    const [user, setUser] = useState({userName: '', password: ''})
    const [error, setError] = useState("")
  
    const image = require('../assets/pexels-sergio-souza-2249602.jpg')


    const loguearUsuario = async ()=> {
        if(user.userName === '' || user.password === ''){
            alert('Fill in all the fields')
            return false
        }
        setError([])
        const respuesta = await props.loginUser(user)
         
        if(respuesta && !respuesta.success){
            setError(respuesta.respuesta)
        }else{ 
            alert(`Welcome`)
    
        }
    }

    return (
        <ImageBackground source={image} style={{width: '100%', height: '100%'}}>
            <View style={{width: '100%', justifyContent: 'space-around', alignItems: 'center', flex: 1}}>
                <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', flex: 1}}>
                    <TextInput keyboardType='email-address' style={styles.input} name="username" placeholder="Enter your mail" onChangeText={(value) => setUser({...user, userName: value.trim() })} />
                    <TextInput secureTextEntry autoCorrect={false} style={styles.input} name="password" placeholder="Enter your password" onChangeText={(value) => setUser({...user, password: value.trim()})} />
                    <View style={styles.btnLogin}>
                        <TouchableOpacity >
                            <Text onPress={() => loguearUsuario()}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>                         
                <View style={{alignItems: 'center', width: '100%', marginBottom: '10%'}}>
                    <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white', marginBottom: '5%'}}>Don't have account? Create one here!</Text>
                    <View style={styles.btnLogin}>
                        <TouchableOpacity >
                            <Text>Register</Text>
                        </TouchableOpacity>
                    </View>                
                </View>
                <Text>{error}</Text>
            </View>
        </ImageBackground>
    )
}
const mapDispatchToProps = {
    loginUser: userActions.loguearUser
}

export default connect(null, mapDispatchToProps)(Login)