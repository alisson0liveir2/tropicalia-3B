 document.addEventListener('DOMContentLoaded', function(){
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');

    let tamanhaAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function(){
        tamanhaAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhaAtualFonte}rem`;
    });
});