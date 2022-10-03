

function validaformulario() {

    let user = document.forms["formCadastro"]["usuario"].value;
    let password = document.forms["formCadastro"]["senha"].value;
    let confirm = document.forms["formCadastro"]["confirmarSenha"].value;
    let email = document.forms["formCadastro"]["email"].value;

    if(user == '') {
        alert("Campo Usuário não preenchido.");
        return false;
    }

    if(password == ''){
        alert("Campo Senha não preenchido.");
        return false;
    }

    if(confirm == ''){
        alert("Campo Confirmar Senha não preenchido.");
        return false;
    }

    let passLength = password.length;

    if(passLength < 6){
        alert("Senha curta demais.");
        return false;
    }

    if(password != confirm){
        alert("A senha confirmada não é igual a senha proposta.");
        return false;
    }

    if(email == ''){
        alert("Campo E-mail não preenchido.");
        return false
    }

}