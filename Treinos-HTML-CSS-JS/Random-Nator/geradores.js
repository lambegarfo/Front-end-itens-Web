


function updateSelector() {

    const geradorAtivo = document.getElementById('inputGeradores');
    const option = geradorAtivo.options[geradorAtivo.selectedIndex];

    return option.value
}


function showSelector(sel = updateSelector()){

    var geradorAtivo = sel;
    console.log(geradorAtivo);
}