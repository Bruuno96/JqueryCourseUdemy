// Selecionando os elementos que estao hidden
$('.cars_list li:hidden').show();

/*

A função eval() é uma função nativa do javascript que pega uma string e transforma em código js e executa.
Logo vimos que armazenamos a string 'show' e 'hidden' dentro da variavel method e com o eval fizemos a interpolação.

*/
$('#toggle_cars').click(function () {
    let hiddenCars = $('.cars_list li:hidden').length;
    
    let method = (hiddenCars > 0) ? 'show' : 'hide';
   
    eval(`$('.cars_list li').${method}()`);
})