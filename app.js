let listaDeNumeroSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentivas = 1;

console.log(`O numero secreto é  ${numeroSecreto}`)

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;    
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibiMensagemIncial(){
    exibirTextoNaTela('h1', 'Jogo do Nunão');
    exibirTextoNaTela('p', `Escolhe um numero aí, entre 1 e ${numeroLimite}`);
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
       exibirTextoNaTela('h1', 'Você acertou!') 
       let palavraTentativa = tentivas > 1 ? 'tentativas' : 'Tentativa';
       let mensagemTentativas =  `Você descobriu o numero secreto com ${tentivas} ${palavraTentativa}`;
       exibirTextoNaTela('p', mensagemTentativas);
       document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute < numeroSecreto){ 
            exibirTextoNaTela('p', 'O numero é maior')
        }else {
            exibirTextoNaTela('p', 'O numero é menor')}
        tentivas ++;
        limparCampo();
    }
    
}

function gerarNumeroAleatorio(){ 
    let numeroSorteados = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumeros = listaDeNumeroSorteados.length;
    if (quantidadeDeNumeros == numeroLimite){
        listaDeNumeroSorteados = [];
    }

    if (listaDeNumeroSorteados.includes(numeroSorteados)){
        return gerarNumeroAleatorio();
    }else {
        listaDeNumeroSorteados.push(numeroSorteados);
        console.log(listaDeNumeroSorteados);
        return numeroSorteados;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentivas = 1;
    exibiMensagemIncial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

exibiMensagemIncial();

