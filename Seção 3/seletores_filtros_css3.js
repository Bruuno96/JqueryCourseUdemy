
// Selecionando o ultimo elemento, mesmo que seja mais de um caso ( 2 listas são afetadas )
$('.cars_list li:last-child').css('text-decoration','underline')

// Selecionando o PRIMEIRO elemento, mesmo que seja mais de um caso ( 2 listas são afetadas )
$('.cars_list li:first-child').css('font-size','14px')


// Selecionando os elementos de maneira par com css aplicando o nth-child()
$('.cars_list li:nth-child(even)').css('background-color','#ccc')
    
// Selecionando os elementos de maneira ímpar com css aplicando o nth-child()
$('.cars_list li:nth-child(odd)').css('background-color','#ccc')

// Selecionando um elemento em uma posicao especifica mesmo que seja mais de um elemento
$('.cars_list li:nth-child(1)').css('font-size','40px')

// Selecionando um elemento em uma posicao especifica, começando a contar de forma decrescente
$('.cars_list li:nth-last-child(3)').css('font-weight','bold')