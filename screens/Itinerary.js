import React from 'react';
import { Image, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import Activities from './Activities';

const Itinerary = (props) =>{
    const {itineraryTitle, hashtag, hours, likes, photoUser, price, userItinerary, activities, comments, _id} = props


    return (     
        <ScrollView style={{padding: 10}}>
             <View style={{flex: 1, width: '100%',borderRadius: 15, borderWidth: 1}}>
                <Text style={{textAlign: 'center', marginVertical: 15, fontSize: 15}}>{itineraryTitle}</Text>
                <View style={{flexDirection: 'row', width: '100%'}}>
                    <View style={{marginLeft: '5%', width: '40%', alignItems: 'center'}}>                
                        <Image resizeMode='contain' style={{width: '100%', height: 160}} source={{uri: photoUser}}/>
                        <Text style={{fontSize: 15}}>{userItinerary}</Text>
                    </View>
                    <View style={{marginLeft: '5%', width: '100%'}}>
                        {hashtag.map(tag => <Text style={{color: 'blue'}}>{tag}</Text>)}
                        <Text>Hours: {hours}</Text>
                        <Text><FontAwesomeIcon icon={faThumbsUp} style={{color: 'black'}} /> {likes.length}</Text>
                        <View style={{flexDirection: 'row'}}>{Array(price).fill(                    
                            <FontAwesomeIcon icon={faMoneyBillAlt} style={{color: 'green', width: '100%', marginRight: '3%', marginTop: '3%' }} />)}
                        </View>            
                    </View>
                </View> 
                <Activities activities={activities} />      
            </View>         
        </ScrollView>
    ) }   
;

export default Itinerary;
