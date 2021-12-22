// passando como segundo parametro na função ON o td (elemento que vai ser inserido), logo a ação do clique acaba em tbody
$('#books_list tbody').on('click', 'tr', function(e) {

    // modo usando o evento
    $(e.delegateTarget).find('tr').removeClass('trselected');

    // modo antigo 
    // $('#books_list tbody tr').removeClass('trselected');

    $(this).addClass('trselected');
})


$('#btn_add_livro').on('click', function(e) {
    let tr = `
        <tr>
            <td>Til</td>
            <td>José de alencar</td>
        </tr>
            `

    $('#books_list tbody').append(tr);
})


// Parando a propagação de eventos

$('#form_login').on('change', '[name]', function(e) {

    alert("Elemento mudou. Seu valor: " + $(this).val());
})

$('#form_login [name=bio]').on('change', function(e) {

    e.stopPropagation();
    $(this).css('background-color', 'red');
})