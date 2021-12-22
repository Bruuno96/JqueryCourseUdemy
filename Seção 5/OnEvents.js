// Exemplo método on()
$('#books_list tbody td').on('click contextmenu', function(e) {

    if (e.type == 'contextmenu') e.preventDefault();

    $('#books_list tbody td').css({
        background: 'initial',
        color: 'initial',
    })

    $(this).css({
        background: 'black',
        color: 'white',
    })

})