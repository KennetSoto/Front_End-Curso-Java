








/*
console.log(parseInt(Math.random()*20));

document.querySelector('h1').innerHTML = "Meu titulo Js";

document.getElementById('tituloid').innerHTML = "titulo do id no js";

document.getElementsByClassName('TituloClass').innerHTML = "h1 alterado pelo class"

document.querySelector('TituloClass').innerHTML = "Alterado por QuerySelector"
*/

//vetor em js, segue mesmo de java
//os dados tem que ser do mesmo tipo..
var vetorNumerico = [1, 2, 3, 4, 5];

//recupera o indice do vetor e retorna o valor no indice
console.log(vetorNumerico[3]);

//funçao pode ou não ter condição
//assemelha ao void do java
function multiplicar(a, b){
    console.log(a * b);
}
//chama a função para ser execultada
multiplicar(9,10);


function funcaoComRetorno(x,y){
    return x * y;
}
console.log(funcaoComRetorno(7,5));


//atribuindo uma funçao a uma variavel (ArrowFunction) -- usado no buscar dos sites
var mensagemOla = () => {
    return "Olá Mundo!";
}
console.log(mensagemOla());

//quando o quadro recebe o foco do mouse, ou seja o clique, muda a cor do quadro
document.getElementById('recebeuFoco').onfocus = function(){
    focado()
}
 function focado (){
     document.getElementById('recebeuFoco').style.background = "green"
 }



function valorDigitado(){
    let recebido = document.getElementById('recebeuFoco').value;
    alert("valor recebido via input: " + recebido);
}