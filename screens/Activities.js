import React, { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Activities = (props) => {
    const [visible, setVisible] = useState(false)
    const { activities, id, idCiudad, comments } = props
   
    return (
        <View style={{width: '100%'}}>  
             
            { visible &&
            <View>
                <Text style={{textAlign: 'center', fontSize: 20}}>Activities</Text>  
                <View style={{width: '100%', alignItems: 'center' }} >             
                {activities && activities.length > 0 ? activities.map(({imageActivity, titleActivity, _id}) => {                                             
                    return(
                            <View horizontal={true} key={_id} style={{width: '80%', alignItems: 'center', marginVertical: 15}}>
                                <Image resizeMode='cover' style={{width: '100%', height: 150, borderRadius: 10}} source={{uri: imageActivity}} />
                                <Text>{titleActivity}</Text>                             
                            </View>
                       )}) : 
                    <Text>No hay actividades</Text>
                }          
                </View>
            </View>   
        }  
            <View style={{justifyContent: 'center', alignItems: 'center'}}> 
                <Pressable style={{backgroundColor: '#8ac4d0', width: '50%', height: 40, alignItems: 'center', justifyContent: 'center', marginVertical: 10, borderRadius: 10}} onPress={() => setVisible(!visible)}>{<Text style={{fontSize: 15}}>{!visible ? 'View More' : 'View Less'}</Text>}</Pressable>
            </View>               
        </View>)
}

export default Activities;
