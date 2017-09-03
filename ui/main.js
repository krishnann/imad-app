//incrementing the counter
var count = 0;
var button = document.getElementById('cntrbtn');
button.onclick = function(){
    count = count + 1;
    var data = document.getElementById('cntr');
    data.innerHTML = count;
};