import React, { useState } from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux';
import userActions from '../redux/actions/userActions';
import { styles } from './../styles/styles';

const Login = (props) => {
    const [user, setUser] = useState({username: '', password: ''})
  
    const image = require('../assets/pexels-sergio-souza-2249602.jpg')
    const login = () => {
        props.navigation.navigate('home')
        props.user(user)
    }

    return (
        <ImageBackground source={image} style={{width: '100%', height: '100%'}}>
            <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <TextInput style={styles.input} name="username" placeholder="Enter your mail" onChangeText={(value) => setUser({username: value, password: user.password})} />
                <TextInput secureTextEntry autoCorrect={false} style={styles.input} name="password" placeholder="Enter your password" onChangeText={(value) => setUser({password: value, username: user.username})} />
                <View style={styles.btnLogin}>
                    <TouchableOpacity >
                        <Text onPress={login}>Loguear</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}
const mapDispatchToProps = {
    user: userActions.loguearUser
}

export default connect(null, mapDispatchToProps)(Login)