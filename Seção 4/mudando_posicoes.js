//retornando ou definindo a  posição de um elemento
$('form .field:eq(1)').offset({top:5,left:100});

// retorna a posição de um elementose baseando no elemento pai
$('form .field:eq(1)').position


// define ou retorna a posicao da barra de rolagem (400) -> define em pixels quanto ela ja desceu.
$(document).scrollTop(400);

// define ou retorna a posicao da barra de rolagem horizontal (600) -> define em pixels quanto ela ja foi para o lado.
$(document).scrollLeft(600)