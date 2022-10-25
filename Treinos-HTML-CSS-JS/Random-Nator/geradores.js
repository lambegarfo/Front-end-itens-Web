


function updateSelector() {

    const geradorAtivo = document.getElementById('inputGeradores');
    const option = geradorAtivo.options[geradorAtivo.selectedIndex];

    return option.value
}


function showSelector(sel = updateSelector()){

    var geradorAtivo = sel;
    console.log(geradorAtivo);
}

function gerarSenha(){
    var senha = 5;
    senha = Math.floor(Math.random()*100)+1;
    const senhaCriada = document.getElementById('geradorSenha');

    var div = document.createElement("div");
    div.textContent = senha
    div.classList.add("novaSenha");


    return div
}

const senhaCriada = document.getElementById('geradorSenha');
senhaCriada.appendChild(gerarSenha());