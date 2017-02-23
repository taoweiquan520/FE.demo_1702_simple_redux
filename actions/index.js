import { 
    ADD, 
    addAction
} from './add';
import {
    REMOVE, 
    removeAction
} from './remove';

var actionTypes = {
        'ADD': ADD, 
        'REMOVE': REMOVE
    };

export {
    actionTypes, 

    addAction, 
    removeAction
};
