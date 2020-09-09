function executar() {

    texto = document.getElementById("texto");
    lista = document.getElementById("historico");
    adicionar = true;

    opt = document.createElement("option");

    for (i = 0; i < Lista.options.length; i++) {
        if (texto == lista.options[i].value) {
            adicionar == false;
        }
    }
    if (adicionar == true) {
        opt.value = texto;
        lista.appendChild(opt);
    }



}

console.log('teste')



