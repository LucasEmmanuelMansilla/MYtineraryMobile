const initialState = {
    cities: []
}

export const citiesReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_CITIES':
            return {
                ...state,
                cities: action.payload
            }
         default:
             return state  
    }
}


