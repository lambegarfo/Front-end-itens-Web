const botaoGerar = document.getElementById('geraNumero');

botaoGerar.addEventListener('click', () => {

    const valorMinimo = document.getElementById('inputMinimo');
    const valorMaximo = document.getElementById('inputMaximo');

    const numero = document.getElementById('numeroGerado');

    if(valorMinimo.value !== '' && valorMaximo.value !== ''){
        numero.textContent = valorMinimo.value + Math.floor(Math.random()*(valorMaximo.value-valorMinimo.value));
    } else (
        alert("Insira os valores extremos (mínimo e máximo).")
    );


    return
});