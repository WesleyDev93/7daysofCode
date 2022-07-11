

const numeracao = prompt ("qual numero voce acha que eu escolhi ?");
let resposta = "";


if ( numeracao === "10" ){
    resposta = prompt ("voce acertou miseravi");
}
else if (numeracao != "10" ){
        resposta = alert ("voce errou!");
        alert (" o jogo acabou tente denovo!");
} 


const avaliar = prompt ("Avalie o jogo por favor de '0' ou '10'!");
let notadojogo = "";

if (avaliar === "0"){
    alert ("Nem estava tao ruim assim !!!");
}
else if (avaliar === "10"){
    alert ("Ai sim eu dou valor genio !!");
}