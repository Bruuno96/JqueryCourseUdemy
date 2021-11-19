// Selecionando os elementos que estao hidden
            $('.cars_list li:hidden').show();

            // Selecionando os elementos visiveis
            $('.cars_list li:visible').show();

            $('#show_cars').click(function () {
                $('.cars_list li:hidden').css('text-decoration', 'underline').show();
            })

            $('#hide_cars').click(function () {
                $('.cars_list li:visible').hide();
            })