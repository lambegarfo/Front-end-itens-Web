

function gerarSenha(){
    
    const tamanhoSenha = document.getElementById('lengthSenha').value;
    var senha = "";

    for(i=0; i < tamanhoSenha; i++){
        
        var checkboxCaracteres = document.getElementById('symbolSenha').checked;

        if(checkboxCaracteres === true){
            var caractereSenha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%&*()_-';
        }else{
            var caractereSenha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
        }

        senha += caractereSenha.charAt(Math.floor(Math.random()*caractereSenha.length));
    }

    const boxSenha = document.querySelector('.novaSenha');
    boxSenha.textContent = senha;
}

async function copiaSenha(){

    try {

        var senhaCopiada = document.querySelector('.novaSenha');
        await navigator.clipboard.writeText(senhaCopiada.textContent);
        alert('Senha copiada com sucesso!');

    } catch {
        
        alert('Erro ao copiar senha!');
    }

}