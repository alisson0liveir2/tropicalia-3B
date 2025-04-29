 document.addEventListener('DOMContentLoaded', function(){
     
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')

    botaoDeAcessibilidade.addEventListener('click', function(){
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.toggle('apresenta-lista')
    })

    const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded')==='true';
    botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado);
    
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    const alterContraste= document.getElementById('alterna-contraste')

    let tamanhaAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function(){
        tamanhaAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhaAtualFonte}rem`;
    });

    diminuiFonteBotao.addEventListener('click', function(){
        tamanhaAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhaAtualFonte}rem`;
    });
   
    alterContraste.addEventListener('click', function(){
        document.body.classList.toggle('alto-contraste');
    })

});

ScrollReveal().reveal('#inicio',{delay: 500});
ScrollReveal().reveal('#galeria',{delay: 500});
ScrollReveal().reveal('#tropicalia',{delay: 500});
ScrollReveal().reveal('#contato',{delay: 500});


