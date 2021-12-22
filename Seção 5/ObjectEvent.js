// Retorna o nome do elemento que clicamos
// $('p').click(function(e) {
//     alert(e.target.localName)
// })

// $('p').click(function(e) {
//     console.log(e.target);
//     console.log(e.currentTarget) 
//     });

// Retorna a posição x e  y onde ocorreu o evento
// event.pageY e event.pageX

$('[name]').keydown(function(e) {
    // retorna o código da tecla pressionada assim como o keyCode
    // console.log(e.which)

    // console.log(e.key)

    // retorna o nome da tecla pressionada
    // if (e.key == 'Enter') {
    //     e.preventDefault();
    //     alert('Voce pressionou o enter')


    // Para a execução do evento
    e.preventDefault();

    // Para a propagação do evento
    e.stopPropagation()
});