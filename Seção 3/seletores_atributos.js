            // verificando se possui um atributo
            $('.header-border li [href]').text('Link'); 

            // selecionando mais de um atributo na mesma tag
            $('.header-border li [href][title]').text('Link');

            // retorna o texto do li , no caso About, pois estamos selecionando o item que contem um link para about.html
            $('.header-border li [href="about.html"]').text();

            // retorna About, pois adicionado o assento circunflexo antes do sinal de igual, ele pega nesse caso TODAS as Li'
            // que começam com a letra A ou a. 
             $('.header-border li [href^="a"]').text();

            // verificando os atributos que terminam com uma expressao expecifica. 
            $('.header-border li [href$="html"]').text();
            
            // verificando os atributos que possuem a expressão informada
            $('.header-border li [href*="html"]').text();