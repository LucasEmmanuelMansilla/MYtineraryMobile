const initialState = {
    cities: [],
    citiesFiltradas: []
}

export const citiesReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_CITIES':
            return {
                ...state,
                cities: action.payload
            }
            case 'FILTER_CITIES':
                return{
                    ...state,
                     citiesFiltradas: state.cities.filter(ciudades => ciudades.name.toLowerCase().indexOf(action.payload, 0) === 0)
                }
         default:
             return state  
    }
}


