$('.cars_list li').click(function(){
    console.log(`Esse carro é do ano de ${$(this).data('ano')}`);
})

// Definindo o dado de um elemento, (armazenando)
$('.cars_list li:first').data('ano','1990')

$('.cars_list li:first').removeData('ano')

$('.cars_list li:first').data('pais','Itália')

// Armazendo elementos virtuais