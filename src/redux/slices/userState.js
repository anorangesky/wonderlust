
const initialUserState = {
    isUserLoggedIn: false
}

export const setIsUserLoggedIn = userLoggedIn => {
    return{
        type: 'userState/setIsUserLoggedIn',
        payload: userLoggedIn,
    }
}

export default function userState (state = initialUserState, action){
    
    switch(action.type){
        case 'userState/setIsUserLoggedIn':
            return{
                ...state,
                isUserLoggedIn: action.payload,
            }
        default:
            return state;
    }
}