// clonando um elemento
$('.title').click(function() {
    $(this).css('outline', '5px solid red')
})

let el = $('.title').clone(true);

el.appendTo('section main'); // clonando um elemento
$('.title').click(function() {
    $(this).css('outline', '5px solid red')
})

let el = $('.title').clone(true);

el.appendTo('section main');