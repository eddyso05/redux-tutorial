// reducer save to store
// centre of the reducers
function combineReducer(currentState, action) {
    var nextState = Object.assign({},currentState);
    nextState = {
        count:counter(nextState.count, action),
        sum: sum(nextState.sum, action)
    }
    return nextState;
}