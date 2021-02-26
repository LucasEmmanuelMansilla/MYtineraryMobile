import axios from "axios"

const citiesActions = {
    getCities : () =>  {
        try{
            return async (dispatch, getState) => {
                const response = await axios.get('http://192.168.0.103:4000/api/cities')
                dispatch({type: 'GET_CITIES', payload: response.data.res})
                   
                }
        }catch(error){
            console.log(error)
        }
      
        }
}


export default citiesActions