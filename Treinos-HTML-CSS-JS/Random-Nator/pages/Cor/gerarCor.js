
var r = 0;
var g = 0;
var b = 0;

const redFixo = document.getElementById('redValue');
const greenFixo = document.getElementById('greenValue');
const blueFixo = document.getElementById('blueValue');
const backgroundNovo = document.getElementById('areaGerador');

function geraCor() {
    
    redFixo.value = Math.floor(Math.random()*255);
    greenFixo.value = Math.floor(Math.random()*255);
    blueFixo.value = Math.floor(Math.random()*255);

    backgroundNovo.style.backgroundColor

}