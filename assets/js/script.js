
console.log ('Javascript carregado');

// Validação do CPF;

function validacao() {
    
    if (cpf.length != 11) {
        alert("CPF inválido. Verifique os dados e tente novamente.");
        return false;
    }

    else {
        var num = cpf.substring(0, 9);
        var dig = cpf.substring(9);
        var soma = 0;

        for (i = 10; i > 1; i--) {
            soma += num.charAt(10 - i) * i;
        }

        var verificacao = (soma % 11) < 2 ? 0 : 11 - (soma % 11);
        if (verificacao != dig.charAt(0)) {
            alert("CPF inválido. Verifique os dados e tente novamente.");
            return false;
        }

        num = cpf.substring(0, 10);
        soma = 0;

        for (j = 11; j > 1; j--) {
            soma += num.charAt(11 - j) * j;
        }

        var verificacao = (soma % 11) < 2 ? 0 : 11 - (soma % 11);
        if (verificacao != dig.charAt(1)) {
            alert("CPF inválido. Verifique os dados e tente novamente.");
            return false;
        }
    }
}

// Máscara de Telefone

function mascaraFixo() {
    if (fixo.value.length == 0)
        fixo.value = '(' + fixo.value;
    if (fixo.value.length == 3)
        fixo.value = fixo.value + ') ';
    if (fixo.value.length == 9)
        fixo.value = fixo.value + '-';
}

function mascaraCelular() {
    if (celular.value.length == 0)
        celular.value = '(' + celular.value;
    if (celular.value.length == 3)
        celular.value = celular.value + ')';
    if (celular.value.length == 10)
        celular.value = celular.value + '-';
}

// Alerta de submissão de dados

function enviar() {
    var r = confirm("Confirma o envio do formulário?");
}