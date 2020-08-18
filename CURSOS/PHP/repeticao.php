<?php

#while

$i = 0;

echo "While:   ";
while($i < 10){

    echo $i;
    $i++;

}

#do...while
 echo '<br> do...while:   ';

 $i = 0;

 do{
     echo $i;
     $i++;

 }while( $i <10);

 #for

 echo '<br> For:   ';

 $i = 0;
 for($i = 0; $i<10; $i++){
     echo $i;
}

#foreach
echo '<br> Foreach:   ';
 $i= [0,1,2,3,4,5,6,7,8,9];
 foreach($i as $j){
     echo $j;
 }

?>