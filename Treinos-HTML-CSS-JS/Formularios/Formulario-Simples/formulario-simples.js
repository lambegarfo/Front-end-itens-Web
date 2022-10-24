



function validaformulario() {

    var user = document.forms["formCadastro"]["usuario"].value;
    var password = document.forms["formCadastro"]["senha"].value;
    var confirmSenha = document.forms["formCadastro"]["confirmarSenha"].value;
    var email = document.forms["formCadastro"]["email"].value;

    if(user == '' || password == '' || confirmSenha == '' || email == '') {
        alert("Por favor preencha todos os campos.");
        return false;
    } else{

        let passLength = password.length;

        if(passLength < 6){
            alert("Senha curta demais.");
            return false;
        } else if(password != confirmSenha){
            alert("A senha confirmada não é igual a senha proposta.");
            return false;
        }
    }

    console.log('user');
    alert("Confirma seus dados ?");
}

