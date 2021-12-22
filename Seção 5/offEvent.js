// Retirando o evento de um elemento
let entries = 100;

$('.register').append(`<u> - Ainda restam ${100 - entries} vagas </u>`);

$('#form_login [type=submit]').on('submit', function(e) {

    e.preventDefault();

    alert('Voce foi cadastrado. Parabens!!');
})

if (entries >= 100) {

    $('#form_login [type=submit]').off('click');
}