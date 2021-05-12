
const initialUserState = {
    isUserLoggedIn: false,
    user: null,
    savedAttractions: [],
}

export const setIsUserLoggedIn = userLoggedIn => {
    return{
        type: 'userState/setIsUserLoggedIn',
        payload: userLoggedIn,
    }
}

export const setUserId = user => {
    return{
        type: 'userState/setUserId',
        payload: user,
    }
}

export const setSavedAttraction = attraction => {
    return{
        type: 'userState/setSavedAttraction',
        payload: attraction,
    }
}

export default function userState (state = initialUserState, action){
    switch(action.type){
        case 'userState/setIsUserLoggedIn':
            return{
                ...state,
                isUserLoggedIn: action.payload,
            }
        case 'userState/setUserId':
            return{
                ...state,
                user: action.payload,
            }
        case 'userState/setSavedAttraction':
          let keys = Object.keys(action.payload);
          let values = Object.values(action.payload);
          let list = [];
          keys.forEach((id, i) => list.push({pageid: id, ...values[i]}))
            return{
                ...state,
                savedAttractions: list,
            }
        default:
            return state;
    }
}
