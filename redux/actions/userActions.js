import  axios  from 'axios';

 const userActions = {
    loguearUser: usuario => {
        return async (dispatch) => {
            const respuesta = await axios.post('http://192.168.0.103:4000/api/user/login', {usuario})
            if(!respuesta.data.success){
           
                return respuesta.data
            }     
            console.log(respuesta)
            dispatch({type: 'LOG_USER', payload: respuesta.data.respuesta})
        }      
    },
    agregarUser: nuevoUsuario => {
        return async (dispatch) => {
            const nuevoUser = await axios.post('http://192.168.0.103:4000/api/user/signup', nuevoUsuario)
            if(!nuevoUser.data.success){
                return nuevoUser.data
            }
            dispatch({type: 'LOG_USER', payload: nuevoUser.data.respuesta})  
        }
    },
 }

 export default userActions