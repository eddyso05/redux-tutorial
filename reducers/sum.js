function sum(currentState, action){
    var DEFAULT_STATE = 3;
    if (currentState === undefined) { 
        nextState = DEFAULT_STATE;
        return nextState;
    }
    switch (action.type) {

      case 'SUM': 
        nextState = parseInt(action.a) + parseInt(action.b);
        return nextState;
      default:
        nextState = currentState;
        return nextState;
    }
}