import React, { useEffect, useState } from 'react'
import { View, Text, ImageBackground, TouchableHighlight, ActivityIndicator } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
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
            <TextInput onChangeText={(value) => props.filterCities(value)} style={{textAlign: 'center', height: 40, margin: 10, borderWidth: 1, borderRadius: 15}} placeholder="Search city..." />
              {props.cities ? props.filteredCities.length ? props.filteredCities.map(({name, url, _id}) =>                          
                        <View key={_id} style={styles.cities}>      
                            <TouchableHighlight style={{width: '100%'}} onPress={() => props.navigation.navigate('City', {idCity: _id})}>                            
                                <ImageBackground source={{uri: url}} style={styles.image} >
                                    <Text style={styles.titlePortada}>{name}</Text>         
                                </ImageBackground> 
                            </TouchableHighlight>                    
                        </View>
                        )   :     
                        props.cities.map(({name, url, _id}) =>                          
                        <View key={_id} style={styles.cities}>      
                            <TouchableHighlight style={{width: '100%'}} onPress={() => props.navigation.navigate('City', {idCity: _id})}>                            
                                <ImageBackground source={{uri: url}} style={styles.image} >
                                    <Text style={styles.titlePortada}>{name}</Text>         
                                </ImageBackground> 
                            </TouchableHighlight>                    
                        </View>  )        
                    :
                    <ActivityIndicator />} 
        </View>
        </ScrollView>
    )
}


const mapStateToProps = (state) =>  {
    return {
        cities: state.citiesR.cities,
        filteredCities: state.citiesR.citiesFiltradas
    }
}

const mapDispatchToProps = {
    getCities: citiesActions.getCities,
    filterCities: citiesActions.filterCities
}


export default connect(mapStateToProps, mapDispatchToProps)(Cities)