 document.addEventListener('DOMContentLoaded', function(){
     
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')

    botaoDeAcessibilidade.addEventListener('click', function(){
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.toggle('apresenta-lista')
    })


    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhaAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function(){
        tamanhaAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhaAtualFonte}rem`;
    });

    diminuiFonteBotao.addEventListener('click', function(){
        tamanhaAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhaAtualFonte}rem`;
    });
});