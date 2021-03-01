import  axios  from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

 const userActions = {
    loguearUser: usuario => {  
        console.log(usuario)
        try {
            return async (dispatch) => {
                const respuesta = await axios.post('https://mytinerarymansilla.herokuapp.com/api/user/login', usuario)
                if(!respuesta.data.success){          
                    return respuesta.data
                }     
                dispatch({type: 'LOG_USER', payload: respuesta.data.respuesta})
            }    
        }catch(error){
            console.log(error)
        }       
    },
    agregarUser: nuevoUsuario => {
        return async (dispatch) => {
            const nuevoUser = await axios.post('https://mytinerarymansilla.herokuapp.com/api/user/signup', nuevoUsuario)
            if(!nuevoUser.data.success){
                return nuevoUser.data
            }
            dispatch({type: 'LOG_USER', payload: nuevoUser.data.respuesta})  
        }
    },
    logoutUser: () => {
        return (dispatch) => {
            dispatch({type: 'LOG_OUT'})
        }
    },

    logFromLocalStorage: (token) => {

        return async (dispatch) => {
            try{
                const respuesta = await axios.post('https://mytinerarymansilla.herokuapp.com/api/user/ls', {token}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            
                dispatch({type: 'LOG_USER', payload: respuesta.data.respuesta})
            }catch(error){
                //SI EL TOKEN NO COINCIDE DEVUELVE UN ERROR AL FRONT Y UN RETURN FALSE, PARA QUE LA VARIABLE "RECARGA" DE APP ACTUALICE SU ESTADO
                AsyncStorage.clear()
                return false
            
            }           
        }
    }
 }

 export default userActions