// Selecionando o ultimo elemento
 $('.cars_list li:last').click(function () {
    alert("ok");
 })

// Selecionando o primeiro elemento
 $('.cars_list li:first').click(function () {
     console.log("Primeiro elemento")
 });

// Selecionando elementos de maneira alterada com o :even
 $('.cars_list li:even').css('background-color','#ccc');

// Selecionando elementos de maneira alterada com começando com os pares
 $('.cars_list li:odd').css('background-color','#ccc');

// Selecionando um elemento em uma posicao expecifica baseado num array
$('.cars_list li:eq(0)').css('font-size','40px');

// Selecionar elementos abaixo de outro
$('.cars_list li:gt(2)').css('opacity','0.3');

// Selecionando todos elementos acima de outro
$('.cars_list li:lt(2)').css('opacity','0.3');