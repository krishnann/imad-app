console.log('Loaded!');

//change the content of html
var element = document.getElementById('element');

element.innerHTML = 'hello world!';

//change the position of an image 
var image = document.getElementById('img');

image.onclick = function(){
    image.style.marginLeft = '100px';
};