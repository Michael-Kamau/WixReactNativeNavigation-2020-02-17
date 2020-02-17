import { ADD_USER} from '../actions/types';

const initialState = {
    users: [
        {
            name:'Michael',
            password:'mysecret'
        },
        {
            name:'Miriam',
            password:'mysecret'
        }
    ],
    counter: 0,
    loading:false
}

//Checking the necessary actions

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_USER:
            console.log('ADD_USER REDUCER')
            console.log(action.payload)
            return {
                ...state,
                users: [action.payload,...state.users]
            }
        case 'INCREASE_COUNTER':
            return {counter:state.counter+1}
        case 'DECREASE_COUNTER':
            return {counter:state.counter-1}
        default:
            return state;
    }
}
