function valida(){

var nome = document.getElementById('nome');;
//imprimindo valor
alert(nome.value);

if(nome.value == ""){
    alert("campo nome nao pode ser enviado em branco");
}else{
    alert("nenhum problema foi detectado. Formulário enviado com sucesso!");
}

}