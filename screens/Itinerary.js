import React from 'react';
import { Image, Text, View, TouchableHighlight } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import Activities from './Activities';
import { connect } from 'react-redux';
import itinerariesActios from '../redux/actions/itinerariesActions';

const Itinerary = (props) =>{
    const {itineraryTitle, hashtag, hours, likes, photoUser, price, userItinerary, activities, comments, _id, loggedUser} = props


    const likear = async () => {
        like({itineraryId: _id, token: loggedUser.token,
        id})
    }

    const dislikear = async () => {
        dislike({
            itineraryId: _id, token: loggedUser.token, 
            token: loggedUser.token,
        id})
    }

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
                        {hashtag.map(tag => <Text style={{color: 'black',}}>{tag}</Text>)}
                        <Text style={{marginVertical: 5}}>Hours: {hours}</Text>
                        <View>{
                        // loggedUser ? 
                        // likes.find(likeUser => likeUser === loggedUser._id ? 
                        //     <TouchableOpacity onPress={() => likear()}>
                        //         <Text>
                        //             <FontAwesomeIcon icon={faThumbsUp} style={{color: 'red'}} /><Text>{likes.length}</Text>
                        //         </Text>
                        //     </TouchableOpacity> : 
                        //     <TouchableOpacity onPress={() => dislikear()}>
                        //         <Text>
                        //             <FontAwesomeIcon icon={faThumbsUp} style={{color: 'black'}} /><Text>{likes.length}</Text>
                        //         </Text>
                        //     </TouchableOpacity> ) :
                            <TouchableOpacity onPress={() => alert("Functionality under development")}>
                                <Text>
                                    <FontAwesomeIcon icon={faThumbsUp} style={{color: 'black'}} /><Text>{likes.length}</Text>
                                </Text>
                            </TouchableOpacity> }
                        </View>          
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

const mapStateToProps = state => {
    return {
        loggedUser: state.usersR.loggedUser
    }
}

const mapDispatchToProps = {
    like: itinerariesActios.likeItinerary,
    dislike: itinerariesActios.dislikeItinerary
}
export default connect(mapStateToProps, mapDispatchToProps)(Itinerary)
