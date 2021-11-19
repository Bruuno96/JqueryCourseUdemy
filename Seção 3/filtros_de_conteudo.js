// Selecionando um elemento pelo seu conteudo
$('.menu li a:contains(About)').css('outline', 'solid red 2px');

// Selecionando um elemento que nao possui conteudo 
$('.cars_list li:empty').text('Vazio').css({
    'background-color': 'red',
    'colot':'white'
});

//Selecionando elementos que possuem conteudo
$('.cars_list li:parent').append('<span style="color:green"> - Tem valor</span>');


// Selecionando elementos aninhados com o has, mainupulando o span dentro de um li 
$('.cars_list li:has(span)').animate({
fontSize:'30px',
opacity: 0.6
}, 2000)