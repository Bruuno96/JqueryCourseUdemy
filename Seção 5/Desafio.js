$(window).scroll(function() {
    if ($(this).scrollTop() > 0 && $(this).scrollTop() < 39) {
        $('h1').attr('style', 'color:red;');
        $('h3:contains(Lista de Livros)').css('color', 'black');
        $('h3:contains(Formulário de Cadastro)').css('color', 'black');

    }

    if ($(this).scrollTop() > 40 && $(this).scrollTop() < 69) {
        $('h1').attr('style', 'color:black;');
        $('h3:contains(Lista de Livros)').css('color', 'red');
        $('h3:contains(Formulário de Cadastro)').css('color', 'black');

    }

    if ($(this).scrollTop() > 70) {
        $('h1').attr('style', 'color:black;');
        $('h3:contains(Lista de Livros)').css('color', 'black');
        $('h3:contains(Formulário de Cadastro)').css('color', 'red');
    }
})

//Outra maneira refatorada

$(window).scroll(function() {

    let position = $(window).scrollTop();

    // elementos que serão mudados de cor
    let array = ['.title', '.register', '.books']

    // index do array
    let index;

    if (position < 50) {
        index = 0
    } else if (position < 200) {
        index = 1
    } else {
        index = 2
    }

    // adiciona a classe no elemento da posicao 'index' do array de elementos
    $(array[index]).addClass('selected_section');

    // adiciona a classe na posicao 'index' no array
    array.splice(index, 1);

    // remove a classe selected_section do indices do array de elementos
    $(array.join(', ')).removeClass('selected_section');
})