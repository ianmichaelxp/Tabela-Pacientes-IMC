
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) 
{
   event.preventDefault();

   var form = document.querySelector("#form-adiciona");

   var paciente = informacoesDoPaciente(form);

   var tabela = document.querySelector("#tabela-pacientes");

   var pacienteTr = montaTr(paciente);

   if(!isPesoValido(paciente.peso) && !isAlturaValida(paciente.peso))
   {
       console.log("Invalidado");
       return;
   }

   tabela.appendChild(pacienteTr);

   form.reset();

   function informacoesDoPaciente(form)
   {
       var paciente =
            {
                nome: form.nome.value,
                peso: form.peso.value,
                altura: form.altura.value,
                gordura: form.gordura.value,
                imc: calculaImc(form.peso.value, form.altura.value)
            }

       return paciente;
    }

    function montaTr(paciente)
    {
        var pacienteTr = document.createElement("tr");
        pacienteTr.classList.add("Paciente");

        pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
        pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
        pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
        pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
        pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

        return pacienteTr;
    }

    function montaTd(info, classe)
    {
        var td = document.createElement("td");
        td.textContent = info;
        td.classList.add(classe);
        return td;
    }
}
);