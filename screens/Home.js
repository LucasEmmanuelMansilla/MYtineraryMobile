import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Button, ToastAndroid, Alert, ScrollView, TouchableOpacity, Image } from 'react-native';
import CarouselCards from './CarouselCard';
import {styles} from '../styles/styles'
import { TouchableHighlight } from 'react-native-gesture-handler';




export const Home =  (props) => {
    const image = require('../assets/Turismo.jpg')
    const logo = require('../assets/pixlr-bg-result.png')
    return (
        <>
            <ScrollView >
               <View style={styles.container}>           
                        <ImageBackground source={image} style={styles.portada} >
                            <View style={styles.home}>
                                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 150}}>
                                    <Image source={logo} resizeMode='contain'  style={{width: '15%' }} />
                                    <Text style={styles.title}>MYtinerary</Text> 
                                </View>                                                         
                                <View style={styles.boton}>
                                    <View style={{alignItems: 'center', height: 300, justifyContent: 'space-between', marginTop: 20}}>
                                        <Text style={styles.textoPortada}>Lets go now</Text>  
                                        <Text style={styles.textoPortada}>Explore and travel</Text>
                                        <Text style={styles.textoPortada}>Find your perfect trip, designed by insiders who know and love their cities</Text>
                                    </View>                   
                                    <TouchableOpacity style={styles.callToAction} onPress={() => props.navigation.navigate("Cities")}>
                                        <Text style={{fontSize: 30, color: 'white', textAlign: 'center'}}>VIEW MORE</Text>
                                    </TouchableOpacity>
                                </View>   
                            </View>
                                
                        </ImageBackground>             
                </View>         
                <Text style={styles.titleCarrusel}>Popular MYtineraries</Text>
                <CarouselCards style={styles.carrusel} />              
            </ScrollView>
            
         </>
    )
}
