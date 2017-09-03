//incrementing the counter
var button = document.getElementById('counter');
var count = 0;

button.onclick = function(){
   
    //make the request to the counter end point
    var request = new XMLhttpRequest();
    
    //if the state of the request change 
    request.onreadystatechange = function(){
        //if the request has been successfully done
        if(request.readystate === XMLhttpRequest.DONE){
            //request has been successfully completed
            if(request.status === 200){
                //take the response from the request
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    
    //make request
    request.open('GET', 'http://knaik0901.imad.hasura-app.io/counter', true);
    request.send(null);
};