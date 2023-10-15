const resultado = document.getElementById("resultado");

function digitar(tecla){
resultado.innerHTML = document.getElementById("resultado").innerHTML + tecla;
}

function limpar(){
    resultado.innerHTML = "";
}

function apagar(){
    let atual = resultado.innerHTML;
    resultado.innerHTML = atual.substring(0, atual.length -1);
}
function calcular(){
    let conta = resultado.innerHTML;
    resultado.innerHTML = eval(conta);
}