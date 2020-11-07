var _fakeServerApi = {
    //imitiate the server API
    increaseCount: function ( currentCount,cb ){
        setTimeout(function(){
            cb(currentCount + 1);
        },2000)
    }
}