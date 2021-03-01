import React, { useEffect, useState } from 'react';
import { Text, View, ImageBackground, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './../styles/styles';
import { connect } from 'react-redux';
import userActions from '../redux/actions/userActions';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';

const Register = (props) => {
    const [ newUser, setNewUser ] = useState({name: "", lastName: "", password: "", country: "", userName: ""})
    const [selectedValue, setSelectedValue] = useState("");
    const [cities, setCities] = useState([])

    
    useEffect(() => {
        pedido()
    }, [])

const pedido = async () => {
    const response = await axios.get('https://restcountries.eu/rest/v2/all')
    setCities(response.data)
}

const captureCoutry = country => {
    setSelectedValue(country)
    setNewUser({...newUser, country})
}

    const register = () => {
        if(newUser.userName === '' || newUser.name === '' || newUser.lastName === '' || newUser.country === '' || setNewUser.password === ''){
            alert('All fields are required')
            return false
        }
        props.newUser(newUser)
        alert("Welcome to MYtinerary")
    }

    const image = require('../assets/pexels-sergio-souza-2249602.jpg')
    return(
        <KeyboardAvoidingView behavior="padding" enabled> 
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>         
                <ImageBackground source={image} style={{width: '100%', height: '100%'}}>
                    <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', flex: 1, marginBottom: '10%'}}>
                        <TextInput keyboardType='email-address' style={styles.input}  placeholder="Enter your mail" onChangeText={(value) => setNewUser({...newUser, userName: value,})} />
                        <TextInput secureTextEntry autoCorrect={false} style={styles.input} name="password" placeholder="Enter your password" onChangeText={(value) => setNewUser({...newUser, password: value})} />
                        <TextInput autoCorrect={false} style={styles.input}  placeholder="First name" onChangeText={(value) => setNewUser({...newUser, name: value})} />
                        <TextInput autoCorrect={false} style={styles.input} placeholder="Last name" onChangeText={(value) => setNewUser({...newUser, lastName: value})} />
                        <Picker style={{alignItems: 'center', textAlign: 'center', borderRadius: 15}} style={styles.input} selectedValue={selectedValue} onValueChange={(itemValue, itemIndex) => captureCoutry(itemValue)}>
                            <Picker.Item label="Select your country" value="1" disabled={true} />
                            {cities.map(city => <Picker.Item label={city.name} value={city.name} key={city.numericCode} />)}
                        </Picker>
                        <View style={styles.btnLogin}>
                            <TouchableOpacity >
                                <Text onPress={register}>Register</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{alignItems: 'center', width: '100%', marginBottom: '10%'}}>
                    <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white', marginBottom: '5%'}}>Do you already have an account? Log in here!</Text>
                    <View style={styles.btnLogin}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Login")} >
                            <Text>Login</Text>
                        </TouchableOpacity>
                    </View>                
                </View>
                </ImageBackground>       
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
};

const mapDispatchToProps = {
    newUser: userActions.agregarUser
}
export default connect(null, mapDispatchToProps)(Register);
