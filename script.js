const display = document.getElementById("display")

const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");

const btnSomar = document.getElementById("btnSomar");
const btnMenos = document.getElementById("btnMenos");
const btnMult = document.getElementById("btnMult");
const btnDividir = document.getElementById("btnDividir");
const btnIgual = document.getElementById("btnIgual");
const btnLimpar = document.getElementById("btnLimpar");

let valorAtual = "";
let valorAnterior = "";
let operacao =null;
function adicionarNumero(numero){
    valorAtual = valorAtual +numero;
    atualizarDisplay();
}
function atualizarDisplay(){
    if(valorAtual===""){
        display.value = 0;
    }
    else{
        display.value = valorAtual
    }
}
btn9.addEventListener("click",
    function (){
        adicionarNumero("9");
    }

);