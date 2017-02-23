const REMOVE = 'REMOVE';

var removeAction = (index) => {
    return ({
        type   : REMOVE, 
        payload: {
            index: index
        }
    });
};

export {
    REMOVE, 
    removeAction
};