<?php

#arrays são tipos especiais em php, conjunto de chaves e valor

$variavel = array (1,2,3,4,5,6,7,8,9);
$vari = array ("A" =>"Abacaxi", "B" => "Bola");

print_r($variavel);
echo '<br><br> imprimindo vari um por um:   ';
echo $vari [ "B"];

print_r($vari);

#imprimindo valor por valor com foreach

echo ' <br><br> Foreach valor valor :     ';
foreach($variavel as $v){
    echo $v;

}

?>