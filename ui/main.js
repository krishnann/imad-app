console.log('Loaded!');

//change the content of html
var element = document.getElementById('element');

element.innerHTML = 'hello world!';

//change the position of an image 
var image = document.getElementById('img');
var marginLeft = 0;

function moveLeft(){
    marginLeft = marginLeft+10;
    image.style.marginLeft = marginLeft + 'px';
}

image.onclick = function(){
   setInterval( moveLeft, 200);
};

function incrementCount(){
var count = 0;
var countr = document.getElementById('cntr');
count = count + 1;
countr.innerHTML = countr;
}