import * as types from './../constants/ActionTypes'
import * as messagetypes from './../constants/Message'
var initialState = messagetypes.MSG_WELCOME;

const message = (state = initialState, action) => {
    switch(action.type) {
        case types.CHANGE_MESSAGE:
            return action.message;
        default: return [...state];
    }
}

export default message;