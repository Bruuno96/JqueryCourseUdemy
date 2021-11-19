// Selecionando um botao
            // $('#register :button').text();

            //$('#register :button').css('opacity', '0.5')
         
            // Selecionando um checkbox com gatilho simulando um click
            // $('#register :checkbox').trigger('click');

            $('[type=radio]').change(function () {

                // selecionando os elementos checados
                let value= $('input:checked').val();
                let gender = (value=='M') ? 'Masculino' : 'Feminino';

                alert(`Você selecionou o sexo ${gender}`)
            })

            // Selecionando os elementos desabilitado
            //$('#register :disabled').val('brunotkd96@gmail.com').prop('disabled',false);

            // $('input').focus(function () {
            //     $('input:focus').val('Olá voce clicou aqui')
            // })

            // Selecionando o botao submit
            //$('#register :submit').css('background-color','orange');
              
            $('#register :submit').click(function (event) {
                event.preventDefault(); // com o event paramos o comportamento padrão que é de atualizar a pagina (submit)
                console.log('voce clicou no submit')
            })