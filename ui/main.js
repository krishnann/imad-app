//incrementing the counter
var button = document.getElementById('counter');
var count = 0;

button.onclick = function(){
   
    //make the request to the counter end point
    var request = new XMLHttpRequest();
    
    //if the state of the request change 
    request.onreadystatechange = function(){
        //if the request has been successfully done
        if(request.readyState === XMLHttpRequest.DONE){
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



//code to get the names from index file and display the names on the same index file
var naam = document.getElementById('username');
var username = naam.value;

var btn = document.getElementById('subtn');


btn.onclick = function(){
      
    //make the request to the counter end point
    var request = new XMLHttpRequest();
    
    //if the state of the request change 
    request.onreadystatechange = function(){
        //if the request has been successfully done
        if(request.readyState === XMLHttpRequest.DONE){
            //request has been successfully completed
            if(request.status === 200){
               var nms = request.responseText;//returns the string
               names = JSON.parse(nms);
                var list = '';
                for(var i = 0; i < names.length; i++){
                    list += '<li>'+names[i]+'</li>';
            }
                var ulData = document.getElementById('listOfNames');
                ulData.innerHTML = list;
        }
           
    }
    
    };
    
    //make request
    request.open('GET', 'http://knaik0901.imad.hasura-app.io/send_name?name='+naam, true);
    request.send(null);

};

//then we have to make an request to the server