// create redux store
// logger ,crashreporter , thunk is middleware
var store = Redux.createStore(combineReducer,Redux.applyMiddleware(logger,crashReporter,thunk))
      
function render() {
    var state = store.getState();
    document.getElementById('value').innerHTML = state.count.result;
    document.getElementById('value2').innerHTML = state.sum;
    
    if(state.count.loading){
        document.getElementById('status').innerHTML = "is loading...";
    } else {
        document.getElementById('status').innerHTML = "loaded";
    }
};

store.subscribe(render);
render();

