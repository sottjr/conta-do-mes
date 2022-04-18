//declarando/resetando valores iniciais para contadores e acumuladores
var numContas = 0;
var valTotal = 0;

//string que acumulará as contas
var resposta = 0;

// function registrar conta
registrarConta = () => {
    //referências
    var inDescricao = document.querySelector("#inDescricao");
    var inValor = document.querySelector("#inValor");
    var outListaContas = document.querySelector("#outListaContas");
    var outTotal = document.querySelector("#outTotal");

    //conteúdo dos campos 
    var descricao = inDescricao.value;
    var valor = Number(inValor.value);

    //verifica se os campos estão preenchidos
    if (descricao == "" || valor == 0 || isNaN(valor)) {
        alert("Informe a descricao corretamente")
        inDescricao.focus();
        return;
    }
    if (valor == "" || valor == 0 || isNaN(valor)) {
        alert("Informe o valor corretamente")
        valor.focus();
        return;
    }

    // adiciona valores ao contador e acumulador
    numContas++
    valTotal = valTotal + valor;

    //concatenar as conta
    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n";
    
    //alterar o conteúdo das tags de resposta
    outListaContas.textContent = resposta + "------------------------";
    outTotal.textContent = numContas + " Conta(s) - Total R$: " + valTotal.toFixed(2);

    //limpa o campo e posiciona cursos em inDescricao
    inDescricao.value = "";
    inValor.value = "";
    inDescricao.focus();
}

//referencia elemento após associar funcition ao evento click:
var btRegistrar = document.querySelector("#btRegistrar");
btRegistrar.addEventListener("click", registrarConta);