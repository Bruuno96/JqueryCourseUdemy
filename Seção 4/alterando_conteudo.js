// retornando um conteudo html de um elemento
$('header .menu li:eq(1)').html();

$('header .menu li:eq(1)').html('<a href="https://github.com">GitHub</a>')


// retornando o conteudo de texto do elemento
$('header .menu li:eq(1)').text();

// redefinindo o conteudo de um elemento
$('form button').replaceWith('<h4 style="color:red; text-align:center">Registre-se</h4>')