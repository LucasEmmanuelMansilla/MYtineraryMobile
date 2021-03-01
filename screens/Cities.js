import React, { useEffect } from 'react'
import { View, Text, ImageBackground, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import citiesActions from '../redux/actions/citiesActions';
import {styles} from '../styles/styles'

const Cities = (props) => {

    useEffect(() => {
        props.getCities()
    },[] )

   
    return (
        <ScrollView>
        <View>
              {props.cities.map(({name, url, _id}) =>                          
                        <View key={_id} style={styles.cities}>      
                            <TouchableHighlight style={{width: '100%'}} onPress={() => props.navigation.navigate('City', {idCity: _id})}>                            
                                <ImageBackground source={{uri: url}} style={styles.image} >
                                    <Text style={styles.titlePortada}>{name}</Text>         
                                </ImageBackground> 
                            </TouchableHighlight>                    
                        </View>
                        )                 
                    } 
        </View>
        </ScrollView>
    )
}


const mapStateToProps = (state) =>  {
    return {
        cities: state.citiesR.cities
    }
}

const mapDispatchToProps = {
    getCities: citiesActions.getCities
}


export default connect(mapStateToProps, mapDispatchToProps)(Cities)