import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import itinerariesActios from './../redux/actions/itinerariesActions';
import Itinerary from './Itinerary';



const Itineraries = (props) => {
    const {idCity, getItineraries, itineraries} = props
    useEffect(() => {
        getItineraries(idCity)
    }, [idCity])

    return (
        <ScrollView>
            {itineraries.length > 0 ? <View>
                {itineraries.map(({itineraryTitle, hashtag, hours, likes, photoUser, price, userItinerary, activities, comments, _id}) => <Itinerary itineraryTitle={itineraryTitle} hashtag={hashtag} hours={hours} likes={likes} photoUser={photoUser} price={price}  userItinerary={userItinerary} activities={activities} comments={comments} _id={_id} />)}
            </View> : 
            <Text>No hay nada</Text> }           
        </ScrollView>
    )
    
}    
;
const mapStateToProps = state => {
    return {
        itineraries: state.itinerariesR.itineraries
    }
}

const mapDispatchToProps = {
    getItineraries: itinerariesActios.getItineraries
}

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries);
