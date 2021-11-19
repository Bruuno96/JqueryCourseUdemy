    // Adicionando um elemento ao final de outro usando o append.
    $('.menu ul').append('<li><a href="#">News</a></li>')

    // Mudamos a ordem referente ao comando acima com o appendTo. 
    $('<li><a href="#">News</a></li>').appendTo('.menu ul')

    // Adicionando um elemento no inicio de outro, o mesmo serve para inverto com o prependTo
    $('.menu ul').prepend('<li><a href="#">Products</a></li>')

    // Adiciona APÓS o elemento ul. Não dentro de ul como o append
    $('.menu ul').after('<li><a href="#">Products</a></li>')
                
    // Adicionando um elemento após outro
    $('.paragrafo').after('<h2>Hcode treinamentos</h2>')

    // Adicionando um elemento após outro, com outra sintaxe
    $('<h2>Hcode treinamentos</h2>').insertAfter('.paragrafo')


    // Adicionando um elemento antes do outro
    $('.paragrafo').before('<h2>Introdução</h2>')

    // adicionando um elemento em volta de outro
    $('.cars_list li').wrap('<i></i>')

    // adicionando um elemento em volta do conteudo da tag
    $('.cars_list li').wrapInner('<b></b>')
