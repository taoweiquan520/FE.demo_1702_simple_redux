var removeFunc = (originState, action) => {
    var listCount = originState.length,
        newState  = [], 
        count     = 0;
    
    for (var i = 0; i < listCount; i ++) {
        if (i == action.payload.index) {
            continue;
        }
        var tmp = {
                index: count ++, 
                text : originState[i].text
            };
        newState.push(tmp);
    }

    return newState;
};

export default removeFunc;