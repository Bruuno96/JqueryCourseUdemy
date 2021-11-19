$(document).ready(function() {

    $('#toggle_cars').click(function() {

        let hiddenCars = $('.cars_list li:hidden').length;
        let method = (hiddenCars > 0) ? 'show' : 'hide';

        eval(`$('.cars_list li').${method}()`);

    });

    $.expr[':'].carsCentury21 = function(el) {

        return ($(el).data('ano') > 2000);

    }

    $.expr[':'].carsBeforeYear = $.expr.createPseudo(function(year) {

        return function(el) {

            return ($(el).data('ano') < year);

        }

    });

    // Criando nosso próprio filtro
    // $('.cars_list li:carsCentury21').css('font-size', '30px')

});