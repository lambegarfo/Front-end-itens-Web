

function geraCorRGB() {

    const redFixo = document.getElementById('redValue');
    const greenFixo = document.getElementById('greenValue');
    const blueFixo = document.getElementById('blueValue');
    
    redFixo.value = Math.floor(Math.random()*255);
    greenFixo.value = Math.floor(Math.random()*255);
    blueFixo.value = Math.floor(Math.random()*255);

    var r = 0;
    var g = 0;
    var b = 0;

    r = redFixo.value;
    g = greenFixo.value;
    b = blueFixo.value;


    let corNova = "rgb(" + r + "," + g + "," + b +")";

    const backgroundNovo = document.getElementsByClassName('areaGerador');
    backgroundNovo[0].style.backgroundColor = corNova;

}


const botaoGerar = document.getElementById('gerarCor');
botaoGerar.addEventListener('click', geraCorRGB);