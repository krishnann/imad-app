//incrementing the counter
var count = 0;
var button = document.getElementById('counter');
button.onclick = function(){
    count = count + 1;
    var data = document.getElementById('count');
    data.innerHTML = data.toString();
};