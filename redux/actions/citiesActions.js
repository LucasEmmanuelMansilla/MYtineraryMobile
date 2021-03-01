import axios from "axios"

const citiesActions = {
    getCities : () =>  {
        try{
            return async (dispatch, getState) => {
                const response = await axios.get('https://mytinerarymansilla.herokuapp.com/api/cities')
                dispatch({type: 'GET_CITIES', payload: response.data.res})
                   
                }
        }catch(error){
            console.log(error)
        }     
        },
        filterCities: filtro => {
            return async (dispatch, getState) => {
                dispatch({type: 'FILTER_CITIES', payload: filtro})
            }
        },
}


export default citiesActions