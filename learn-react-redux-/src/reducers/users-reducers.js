import {UPDATE_USER} from '../actions/user-action'
import {SHOW_ERROR} from '../actions/user-action'

export default function userReducers(state = '',{type, payload})
{
    // alert(type);
    switch(type){
        case UPDATE_USER:
            return payload.user; 
        case SHOW_ERROR:
            return payload.user; 
        default : 
            return state;
    }
    
}