//incrementing the counter
var button = document.getElementById('counter');
var count = 0;
button.onclick = function(){
    count = count + 1;
    var data = document.getElementById('count');
    data.innerHTML = data.toString();
};