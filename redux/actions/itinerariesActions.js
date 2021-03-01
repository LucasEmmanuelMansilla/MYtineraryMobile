import axios from 'axios';

const itinerariesActios = {

    getItineraries: id => {
        return async (dispatch, getState) => {
            const respuestaAPI = await axios.get(`https://mytinerarymansilla.herokuapp.com/api/itineraries/${id}`)
            dispatch({type:'ITINERARIES', payload: respuestaAPI.data.respuesta})
           
        }
    },
    likeItinerary: (id) => {
       
        const token = id.token
     
        return async (dispatch) => {
            const itineraryLikeado = await axios.put('https://mytinerarymansilla.herokuapp.com/api/like/', {itineraryId: id.itineraryId}, {
            headers: {
                Authorization: `Bearer ${token}`
            }} )
           
            if(itineraryLikeado.data.success === true){
                const respuesta = await axios.get('https://mytinerarymansilla.herokuapp.com/api/itineraries/'+id.id)
                dispatch({type:'ITINERARIES', payload: respuesta.data.respuesta})
            } 
          
        }
    },

    dislikeItinerary: (id) => {
        const token = id.token
        return async (dispatch) => {
            const itineraryDislikeado = await axios.put('https://mytinerarymansilla.herokuapp.com/api/dislike/', {itineraryId: id.itineraryId}, {
            headers: {
                Authorization: `Bearer ${token}`
            }} )
            
            if(itineraryDislikeado.data.success === true){
                const respuesta = await axios.get('https://mytinerarymansilla.herokuapp.com/api/itineraries/'+id.id)
                dispatch({type:'ITINERARIES', payload: respuesta.data.respuesta})
            }        
        }
    
    }
}

export default itinerariesActios