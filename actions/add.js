const ADD = 'ADD';

var addAction = (text) => {
    return ({
        type   : ADD, 
        payload: {
            text: text
        }
    });
};

export {
    ADD, 
    addAction
};