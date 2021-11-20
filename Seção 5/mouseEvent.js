//Evento para quando pressionar o mouse no elemento
$('h1').mousedown(function() {
    console.log('apertei o mouse')
})

// Evento para quando soltar o mouse do elemento
$('h1').mouseup(function() {
    console.log('soltei o mouse')
})


// Evento para quando premissionar ou soltar o mouse
$('h1').click(function() {
    console.log('apertei e soltei o botao')
})


$('h3.books').click(function() {
    $(this).text('fui clicado')
})

// simulando click no elemento
$('h3.books').click()


// Evento para clique com o botao direito do mouse
$('img').contextmenu(function() {
    alert('clicamos com o botao direito')
})


// Evento para duplo clique nas linhas da tabela
$('table tbody tr').dblclick(function() {
    $(this).css({
        background: 'black',
        color: 'white',
    })
});

// simulando duplo clique em um elemento específico
$('table tbody tr:eq(0)').dblclick();

// Evento para quando o mouse passa por cima do elemento
$('table tbody tr').mouseenter(function() {
    $(this).addClass('trselected');
})

// // Evento para o cursor sai decima do elemento
$('table tbody tr').mouseleave(function() {
    $(this).removeClass('trselected');
})


// Evento hover em cima do elemento
$('table tbody tr').hover(function() {

    $(this).addClass('trselected');

}, function() {

    $(this).removeClass('trselected');
})

// Evento para mostrar quando o mouse se movimenta dentro do elemento
$('table tbody tr').mousemove(function(event) {

    $('h1').text(`Voce está na posição X:${event.pageX}; Y:${event.pageY}`)
})