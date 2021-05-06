
const initialUserState = {
    isUserLoggedIn: false,
    user: null,
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
        default:
            return state;
    }
}
