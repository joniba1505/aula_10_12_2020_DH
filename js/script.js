/*
var numero = 4;

numero%2==0 ? console.log("Número par.") : console.log("Número ímpar.");


var idade = 10;
idade >= 18 ? console.log("Pode entrar na festa!") : console.log("Sai fora! Você é menor de idade!");
*/


var diaSemana = "quinta";
switch (diaSemana) {
    case "domingo":
        console.log("Estamos no domingo! Dia de churrasco!");
        break;
        case "segunda":
            console.log("Hoje é segunda-feira! Dia de ir trabalhar!");
break;
default:
    console.log("Não é domingo nem segunda-feira");
}


var cargo = "gerente";
var salario = 3000;
switch (cargo) {
    case "gerente":
        salario= salario * 1.15;
        console.log("O gerente recebe " + Math.round(salario) + ".")
        break;
        case "diretor":
            salario = salario * 1.5;
console.log("O diretor recebe " + Math.round(salario) + ".")
break;        
default:
    salario = salario*1.05;
    console.log("Os demais funcionários recebem " + Math.round(salario)  + ".");
}
        

       var mes = "Maio";
/*
       switch (mes) {
           case "Janeiro":
           case "Fevereiro":
           case "Março":
               console.log("Verão!");
               break;
           case "Abril":
           case "Maio":
           case "Junho":
               console.log("Outono!");
               break;
           case "Julho":
           case "Agosto":
           case "Setembro":
               console.log("Inverno!");
               break;
           case "Outubro":
           case "Novembro":
           case "Dezembro":
               console.log("Primavera!");
       }
       */

       var mes = "junho";
       if (mes == "janeiro" || mes == "fevereiro" || mes == "março") {
           console.log(`Estamos em ${mes}. Logo, é verão!`);
       }
       else if (mes == "abril" || mes == "maio" || mes == "junho") {
           console.log(`Estamos em ${mes}. Logo, é outono!`);
       }
       else if (mes == "julho" || mes == "agosto" || mes == "setembro") {
           console.log(`Estamos em ${mes}. Logo, é inverno!`);
       }

       else if (mes == "outubro" || mes == "novembro" || mes == "dezembro")
       {
console.log(`Estamos em ${mes}. É primavera!`);
       }
       else {
           console.log(` ${mes} não é um mês válido!`);
       }