// ===============================
// LOJA DE RECARGA ASSIS CASSUQUE
// SISTEMA DE PEDIDO WHATSAPP
// ===============================


// Número do WhatsApp do vendedor
const numeroVendedor = "244956574560";


// Elementos do formulário

const formulario = document.getElementById("pedidoForm");

const operadora = document.getElementById("operadora");

const titulo = document.getElementById("tituloOperadora");



// Verificar operadora recebida pela URL

const parametros = new URLSearchParams(window.location.search);

const operadoraURL = parametros.get("operadora");



if(operadoraURL){

    operadora.value = 
    operadoraURL.charAt(0).toUpperCase() +
    operadoraURL.slice(1).toLowerCase();


    atualizarTitulo();

}
// Selecionar valor rápido

function selecionarValor(valor){


    document.getElementById("valor").value = valor;


}

// Selecionar valor rápido

function selecionarValor(valor){


    document.getElementById("valor").value = valor;


}

// Alterar título quando mudar operadora

operadora.addEventListener("change", atualizarTitulo);



function atualizarTitulo(){

    if(operadora.value === "Africell"){

        titulo.innerHTML =
        "🟡 Comprar Recarga Africell";

        titulo.style.color="#FFD400";

    }


    else{


        titulo.innerHTML =
        "🔵 Comprar Recarga Unitel";

        titulo.style.color="#00A8FF";


    }

}



// Enviar pedido

formulario.addEventListener("submit", function(event){


    event.preventDefault();



    const nome =
    document.getElementById("nome").value;



    const numeroRecarga =
    document.getElementById("numeroRecarga").value;



    const whatsappCliente =
    document.getElementById("whatsapp").value;



    const valor =
    document.getElementById("valor").value;



    const operadoraEscolhida =
    operadora.value;

const arquivo = document.getElementById("arquivoPagamento").files[0];


if(!arquivo){

    alert("Por favor anexe o comprovativo do pagamento.");

    return;

}
const arquivo = document.getElementById("arquivoPagamento").files[0];


if(!arquivo){

    alert("Por favor anexe o comprovativo do pagamento.");

    return;

}
    const mensagem =

`🟢 NOVO PEDIDO DE RECARGA

🏪 Loja de Recarga Assis Cassuque

📱 Operadora:
${operadoraEscolhida}


👤 Nome:
${nome}


📞 Número da Recarga:
${numeroRecarga}


💬 WhatsApp do Cliente:
${whatsappCliente}


💰 Valor:
${valor} Kz


💳 Pagamento:
Multicaixa Express

Número:
956 574 560


Aguardando confirmação do pagamento.`;



    const mensagemCodificada =
    encodeURIComponent(mensagem);



    const linkWhatsapp =

    `https://wa.me/${numeroVendedor}?text=${mensagemCodificada}`;



    window.open(linkWhatsapp, "_blank");


});
setTimeout(()=>{

window.location.href="confirmado.html";

},2000);

setTimeout(()=>{

window.location.href="confirmado.html";

},2000);


// ===============================
// ATUALIZAR RESUMO DO PEDIDO
// ===============================


const campos = document.querySelectorAll(
"#pedidoForm input, #pedidoForm select"
);



campos.forEach(campo => {


    campo.addEventListener("input", atualizarResumo);


    campo.addEventListener("change", atualizarResumo);


});



function atualizarResumo(){


document.getElementById("resumoOperadora").innerHTML =
document.getElementById("operadora").value;



document.getElementById("resumoNome").innerHTML =
document.getElementById("nome").value || "-";



document.getElementById("resumoNumero").innerHTML =
document.getElementById("numeroRecarga").value || "-";



document.getElementById("resumoValor").innerHTML =
document.getElementById("valor").value || "-";


}
// ===============================
// ATUALIZAR RESUMO DO PEDIDO
// ===============================


const campos = document.querySelectorAll(
"#pedidoForm input, #pedidoForm select"
);



campos.forEach(campo => {


    campo.addEventListener("input", atualizarResumo);


    campo.addEventListener("change", atualizarResumo);


});



function atualizarResumo(){


document.getElementById("resumoOperadora").innerHTML =
document.getElementById("operadora").value;



document.getElementById("resumoNome").innerHTML =
document.getElementById("nome").value || "-";



document.getElementById("resumoNumero").innerHTML =
document.getElementById("numeroRecarga").value || "-";



document.getElementById("resumoValor").innerHTML =
document.getElementById("valor").value || "-";


}