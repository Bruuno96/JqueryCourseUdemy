// Evento para quando o elemento receber o foco
$('[name]').focus(function() {
    $(this).css('background-color', 'yellow');
});

// // Evento para quando o elemento perder o foco
$('[name]').blur(function() {
    $(this).css('background-color', 'white');

});

// Evento para quando o elemento receber o foco, mesmo que seja um elemento filho
$('.form-group').focusin(function() {
    console.log('Você selecionou um campo')
});

// Evento para quando o elemento tirar o foco, mesmo que seja um elemento filho
$('.form-group').focusout(function() {
    alert('voce deixou um elemento')
});

// Evento para quando o campo mudar seu valor
$('[name]').change(function() {
    console.log(`valor do campo: ${$(this).val()}`);
})

// Evento para quando selecionarmos o valor de um campo do formulário
$('[type=text]').select(function() {
    console.log(`valor do campo: ${$(this).val()}`)
})

$('form').submit(function(event) {

    event.preventDefault();

    console.log($(this).serializeArray())
})

$('#link_logo').click(function(event) {

    event.preventDefault();

    $(this).find('img').attr('src', 'img/logo-jqyery');
})