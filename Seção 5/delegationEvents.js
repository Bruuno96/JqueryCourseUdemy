// passando como segundo parametro na função ON o td (elemento que vai ser inserido), logo a ação do clique acaba em tbody
$('#books_list tbody').on('click', 'td', function(e) {

    $('#books_list tbody td').removeClass('trselected');

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