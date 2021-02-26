import React, { useState } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './../styles/styles';
import { connect } from 'react-redux';
import userActions from '../redux/actions/userActions';
import { Select } from './Select';

const Register = (props) => {
    const [ newUser, setNewUser ] = useState({})

    const register = () => {
        props.newUser(newUser)
    }

    const image = require('../assets/pexels-sergio-souza-2249602.jpg')
    return(
        <View>
            <ImageBackground source={image} style={{width: '100%', height: '100%'}}>
                <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <TextInput style={styles.input} name="username" placeholder="Enter your mail" onChangeText={(value) => setNewUser({username: value, password: user.password})} />
                <TextInput secureTextEntry autoCorrect={false} style={styles.input} name="password" placeholder="Enter your password" onChangeText={(value) => setUser({password: value, username: user.username})} />
                <TextInput secureTextEntry autoCorrect={false} style={styles.input} name="password" placeholder="Enter your password" onChangeText={(value) => setUser({password: value, username: user.username})} />
                <TextInput secureTextEntry autoCorrect={false} style={styles.input} name="password" placeholder="Enter your password" onChangeText={(value) => setUser({password: value, username: user.username})} />
                <Select />
                <View style={styles.btnLogin}>
                    <TouchableOpacity >
                        <Text onPress={register}>Loguear</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </ImageBackground>
        </View>
    )
};

const mapDispatchToProps = {
    newUser: userActions.agregarUser
}
export default connect(null, mapDispatchToProps)(Register);
