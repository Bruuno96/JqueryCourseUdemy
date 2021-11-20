// Evento para quando o navegador mudar seu tamanho
$(window).resize(function() {
    console.log(`A luargura do navegador é  ${$(this).width()} e a altura é ${$(this).height()}`)
})

//
$(window).scroll(function() {
    console.log(`Voce está na posição:  ${$(this).scrollTop()}`)
})