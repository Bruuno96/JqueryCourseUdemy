  // retorna ou define uma propriedade
  $('form [type=checkbox]').prop('checked',false);

  // criamos aqui uma propriedade na memória do DOM chamada 'nome'
  $('h1').prop('nome','Titulo')

  // removendo uma propriedade virtual (na memoria)  ou seja, nao nativa do DOM.
  $('h1').removeProp('nome')