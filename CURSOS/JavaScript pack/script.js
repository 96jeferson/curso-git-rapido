//abaixo inserimos uma mensagem de alerta
//var mensagem = "Olá mundo";
//alert(mensagem);

/*var a = 2;
var b = 3;
var c = "olá mundo";

var soma = a +b;

if(a%2 == 1){
    alert("número impar");
}else if (c%2 ==0){
    alert("Número par");
}
else{
    alert("Valor inválido");
} */

//abaixo estruturas de repetição

//while

var i = 0;

while(i<3){
    alert("while executando:  " +i);
    i= i+1;

}

//for
var j;
for(j=0; j<3; j++){

    alert("for executado:  " +j);

}

// tipos de dados

var numero = 6;
var decimal = 4.5;
var texto = "Olá mundo";
var lista = ["laranja", "maça","banana" ];


for( i in lista){
 alert(lista[i]);
}

// criando comando de console sem ser alert

console.log("Olá mundo");

//funções

function soma (a,b){
    console.log(a+b);
}

soma(2,2);

fuction subtracao(a,b){
    return a-b;

}
 var s = subtracao (5,2);
 console.log(s);

function mult(a,b){
    return a*b;
}
console.log(mult(5*5));


//alert("o resultado de sua soma é: " +soma);

//comentando códigos em javascript utilize "//"



/* criando comentários de várias linhas
entendeu?*/

//condicional em javascript





