var addFunc = (originState, action) => {
    var listCount  = originState.length,
        newState   = originState.slice(0);
    
    newState.push({
        index: listCount, 
        text : action.payload.text
    });

    return newState;
}

export default addFunc;