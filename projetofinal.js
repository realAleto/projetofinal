
//calcular imc e mostrar tabela imc

function calcularIMC() {
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);
    

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        alert("Por favor, insira valores válidos para altura e peso.");
        return;
    }
    
    
     var imc = peso / (altura * altura);
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerText = "Seu IMC é: " + imc.toFixed(2) + " - " + interpretarIMC(imc);
    var tabela = document.getElementById("tabela123");
    tabela.style.display = "table";
    var titulo = document.getElementById("tabela44");
    titulo.style.display = "block";
    

}

function interpretarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc < 25) {
        return "Peso normal";
    } else if (imc < 30) {
        return "Sobrepeso";
    } else if (imc < 35) {
        return "Obesidade Grau 1";
    } else if (imc < 40) {
        return "Obesidade Grau 2";
    } else {
        return "Obesidade Grau 3";
    }
}




//calcular planos
function calcular() {
    var altura = parseFloat(document.getElementById('altura').value);
    var peso = parseFloat(document.getElementById('peso').value);
    var idade = parseInt(document.getElementById('idade').value);

    if (isNaN(altura) || isNaN(peso) || isNaN(idade)) {
        document.getElementById('resultado').innerText = 'Por favor, preencha todos os campos corretamente.';
        return;
    }

    var imc = peso / (altura * altura);
    var melhorPlano;
// Operadora A (cálculo de planos)
    var precoBasicoA = 100 + (idade * 10 * (imc / 10));
    var precoStandardA = (150 + (idade * 15)) * (imc / 10);
    var precoPremiumA = (200 - (imc * 10) + (idade * 20)) * (imc / 10);
// Operadora B(cálculo de planos)
    var fatorComorbidadeB;
    if (imc < 18.5) {
        fatorComorbidadeB = 10;
    } else if (imc < 25) {
        fatorComorbidadeB = 1;
    } else if (imc < 30) {
        fatorComorbidadeB = 6;
    } else if (imc < 35) {
        fatorComorbidadeB = 10;
    } else if (imc < 40) {
        fatorComorbidadeB = 20;
    } else {
        fatorComorbidadeB = 30;
    }

var precoBasicoB = 100 + (fatorComorbidadeB * 10 * (imc / 10));
var precoStandardB = (150 + (fatorComorbidadeB * 15)) * (imc / 10);
var precoPremiumB = (200 - (imc * 10) + (fatorComorbidadeB * 20)) * (imc / 10);


var menorpreço;


// Exibir os resultados das duas operadoras(estacio e liberty)
var resultadoCorpo = document.getElementById("resultadoCorpo");
resultadoCorpo.innerHTML = "";
adicionarLinhaResultado("Liberty Med", precoBasicoA, precoStandardA, precoPremiumA);
adicionarLinhaResultado("Estacio Life", precoBasicoB, precoStandardB, precoPremiumB);
var tabela = document.getElementById("tabela133");
tabela.style.display = "table";

}


function adicionarLinhaResultado(operadora, precoBasico, precoStandard, precoPremium) {
var resultadoCorpo = document.getElementById("resultadoCorpo");

var novaLinha = document.createElement("tr");
novaLinha.innerHTML = `<td>${operadora}</td><td>${precoBasico.toFixed(2)}</td><td>${precoStandard.toFixed(2)}</td><td>${precoPremium.toFixed(2)}</td>`;

resultadoCorpo.appendChild(novaLinha);
}





