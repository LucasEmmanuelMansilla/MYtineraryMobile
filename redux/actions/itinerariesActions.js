import axios from 'axios';

const itinerariesActios = {

    getItineraries: id => {
        return async (dispatch, getState) => {
            const respuestaAPI = await axios.get(`https://mytinerarymansilla.herokuapp.com/api/itineraries/${id}`)
            dispatch({type:'ITINERARIES', payload: respuestaAPI.data.respuesta})
           
        }
    }
}

export default itinerariesActios