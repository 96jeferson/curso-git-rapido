//$(seletor).ação();

/*$(document).ready(function(){

    $('#zaul').click(function(){
       // $('h1').hide();
        //abaixo muda os estilos
        $('h1').css("color","red");
        $('#unico').css("color","blue");
        $('p').css("color","blue");
        $('p').css("color","red");

        


    });

});*/


//abaixo simplifica toda codificação do jquery

$(function(){

    $('#azul').click(function(){
        $('p').css("color","blue");
        //fadeout oculta de uma maneira suave
        $('p').fadeOut('');
        //delay é o tempo que ficará oculto
        $('p').delay(3000);

        $('p').fadeIn('');

    });

    $('#vermelho').click(function(){
        $('p').css("color","red");
        //fadeout oculta de uma maneira suave
        $('p').fadeOut(3000);
        //delay é o tempo que ficará oculto
        //$('p').delay(3000);
         $('p').fadeIn(3000);
         $('#mensagem').text("cor alterada com sucesso")
         //implementando css em uma unica linha
         .css({color:'red', border:'1px solid red'})
         .delay(3000)
         .addClass('green')
        $('button').removeClass('red');


    });
});


//jquery alterando CSS.

