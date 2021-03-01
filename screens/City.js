import React, { useEffect, useState } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Itineraries from './Itineraries';
import { styles } from './../styles/styles';
import { ScrollView } from 'react-native-gesture-handler';

const City = (props) => {
    const { idCity } = props.route.params
    const {allCities} = props
     const [city, setCity] = useState({})

    useEffect(() => {
        setCity(allCities.filter(ciudad => ciudad._id === idCity))
    }, [idCity])

    return (
    <ScrollView>
        <View>
            {city.length && 
            <>
            <ImageBackground source={{uri: city[0].url}} style={styles.cityPortada}>
                 <Text style={styles.titlePortada}>{city[0].name}</Text>
            </ImageBackground>      
            <Itineraries idCity={idCity} />
            </>
        }     
    </View>
    </ScrollView>
    )
    
    };

    const mapStateToProps = state => {
        return {
            allCities: state.citiesR.cities
        }
    }

export default connect(mapStateToProps)(City);
