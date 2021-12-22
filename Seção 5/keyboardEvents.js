// Evento para quando pressionamos uma tecla
$('#form_login [name=username]').keydown(function(event) {
    console.log(`Voce apertou a tecla com um código ${event.keyCode}`)
})

// Evento para quando soltarmos um tecla
$('#form_login [name=username]').keyup(function(event) {
    console.log(`Voce apertou a tecla com um código ${event.keyCode}`)
})

// Evento para quando a tecla esta sendo pressionada alem de detectar letras maiusculas e minuscula.
$('#form_login [name=username]').keypress(function(event) {
    console.log(`Voce apertou a tecla com um código ${event.keyCode}`)
})