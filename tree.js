// day tree - analise do codigo 

const area = prompt ("voce quer seguir para a area de 'frontend' ou de 'backend'?");
let linguagem = "";

if (area === "frontend"){
   linguagem = prompt ("voce quer aprender react ou vue?");

}
else if (area === "backend");{
linguagem = prompt ("voce quer aprender C# ou java?");
} 

else {
   alert("voce nao inseriu uma area valida!");
}


const especialidadeoufullstack = prompt("digite 1 para seguir se especializando na area escolhida ou 2 para continuar se desenvolvendo para se tornar full stack");
if (especialidadeoufullstack ==1);{
      alert (`continue a se especializar em ${linguagem} para dominar a area de ${area}!`);

}



else if (especialidadeoufullstack == 2){
   alert (`chegou a hora de começar a aprender outras linguagens alem de ${linguagem} se voce quer se tornar fullstack`);
}
else {
   alert (" voce nao inseriu uma opção valida!");

}

let msg = prompt ("tem mais alguma tecnologia que voce gostaria de aprender ? digite 'ok' em caso postivo");
while (msg === 'ok'){
   let novatecnologia = prompt ("qual ?");
   alert (`${novatecnologia} é realmente muito boa !`);
   msg = prompt ("tem mais alguma tecnologia que voce gostaria de aprender ? digite 'ok' em caso postivo");
}



 

 
 
    


