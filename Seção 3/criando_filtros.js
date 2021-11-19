  /*
$.expr[':'] o dois pontos dentro do array define que apartir daquele momento occorerá a criação de um filtro
.carCentury21 é o nome do nosso filtro que recebe uma função com parametro el (elemento) onde foi aplicado o filtro
.data pega o atributo do li chamado data, entao precisamos informar o que vem depois do traço, no caso, ('ano')
este return verifica se o elemento que recebeu como paramentro é maior que 2000.

*/

$.expr[':'].carsCentury21 = function (el) {

    return ($(el).data('ano') > 2000)

}

$.expr[':'].carsBeforeYear = $.expr.createPseudo(function(year){

    // chamando outra função para retornar o ano
    return function(el) {

        // pegamos os itens cujo o ano seja menor que o paramentro
        return ($(el).data('ano') < year)
    }
})

$('.cars_list li:carsBeforeYear(1990)').css('color', 'green');

$('.cars_list li:carsCentury21').css('font-size', '30px');