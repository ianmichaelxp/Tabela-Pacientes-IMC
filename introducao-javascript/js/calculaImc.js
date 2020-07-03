
// var paciente = document.querySelector("#primeiro-paciente");
var pacientes = document.querySelectorAll(".paciente");
var titulo = document.querySelector(".titulo")

for(var i = 0;i < pacientes.length;i++)
{
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");
        
    if (!isPesoValido(peso)) 
    {   
        console.log("Peso inválido!");
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!isAlturaValida(altura)) 
    {
        console.log("Altura inválida!");
        tdImc.textContent = "Altura inválida";
        paciente.style.backgroundColor = "red";
    }

    if (isAlturaValida(altura) && isPesoValido(peso)) 
    {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function isPesoValido(peso){
    var pesoEhValido = true
    if(peso <= 0 || peso >= 500){
        pesoEhValido = false;
    }
    return pesoEhValido;
}

function isAlturaValida(altura)
{
    var alturaEhValida = true;
    if(altura <= 0 || altura >= 3.00)
    {
        alturaEhValida = false;
    }
    return alturaEhValida;
}

