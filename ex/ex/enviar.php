<?php



# alterar a variavel abaixo colocando o seu email

$destinatario = "sac@excellentglobalararaquara.com";

$nome = $_REQUEST['nome'];
$sobrenome = $_REQUEST['sobrenome'];
$email = $_REQUEST['email'];
$telefone = $_REQUEST['telefone'];
$mensagem = $_REQUEST['mensagem'];
$assunto = $_REQUEST['Contato Via site'];

 // monta o e-mail na variavel $body

$body = "===================================" . "\n";
$body = $body . "FALE CONOSCO - TESTE COMPROVATIVO" . "\n";
$body = $body . "===================================" . "\n\n";
$body = $body . "Nome: " . $nome . "\n";
$body = $body . "Sobrenome: " . $sobrenome . "\n";
$body = $body . "Email: " . $email . "\n";
$body = $body . "Telefone: " . $telefone . "\n";
$body = $body . "Mensagem: " . $mensagem . "\n\n";
$body = $body . "===================================" . "\n";

// envia o email
mail($destinatario, $assunto , $body, "From: $email\r\n");

// redireciona para a página Index.html

echo '<script language="javascript">';   
echo 'alert("Email enviado com sucesso, em breve entraremos em contato!");';
echo 'location.href="index.html";';    
echo '</script>';







?>

		
