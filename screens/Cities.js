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
            <Text style={{textAlign: 'center', marginBottom: 20, marginTop: 20}} >CITIES</Text>
              {props.cities.map(({name, url, _id}) =>                          
                        <View key={_id} style={styles.cities}>      
                            <TouchableHighlight style={{width: '100%'}}>                            
                                <ImageBackground source={{uri: `${url}`}} style={styles.image} >
                                    <Text style={{textAlign: 'center', fontSize: 25, width: '100%', backgroundColor: 'hsla(221, 93%, 17%, 0.53)', color: 'white'}}>{name}</Text>         
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