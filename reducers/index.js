/*
    data struct:
        [
            {
                index: 0,
                text : 'test text'
            }
        ]
*/
import { actionTypes } from '../actions';
import addFunc from './add';
import removeFunc from './remove';

var listApp = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD:
            return addFunc(state, action);
        case actionTypes.REMOVE:
            return removeFunc(state, action);
        default:
            return state;
    }
};

export default listApp;
