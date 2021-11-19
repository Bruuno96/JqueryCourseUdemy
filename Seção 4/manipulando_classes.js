// Adicionando uma classe

$('header .menu ul li:last a').addClass('stylized_menu');

// removendo uma classe 
$('header .menu ul li:last a').removeClass('stylized_menu');


// Alternando uma classe com toggleClass, adiciona um estilo no elemento e ao clicar novamente retira o estilo ou ação.
$('header .menu ul li a').click(function(event){
    
    event.preventDefault();

    $(this).toggleClass('stylized_menu');
})


// Verifica se tem a classe passada, no caso (stylized menu)
$('header .menu ul li:last a').hasClass('stylized_menu');

$('p').each(function(){
    if($(this).hasClass('paragrafo')){
        $(this).append('<span style="color:green">Eu tenho a classe</span>')
    }
}) 