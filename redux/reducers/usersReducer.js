import AsyncStorage from '@react-native-async-storage/async-storage'

const initialState = {
    loggedUser: null
}

export const usersReducers = (state = initialState, action) =>{ 
    switch (action.type){
        case 'LOG_USER':
            //PERSISTENCIA DE USUARIO CARGANDO DATOS EN LOCALSTORAGE
            AsyncStorage.setItem('name', action.payload.name)
            AsyncStorage.setItem('token', action.payload.token)
            action.payload.profilePic && AsyncStorage.setItem('profilePic', action.payload.profilePic)
            return{
                ...state,
                loggedUser: action.payload
            }
        case 'LOG_OUT':
            AsyncStorage.clear()
            return {
                ...state,
                loggedUser: null
            }
      
            default: 
            return state
    }
}