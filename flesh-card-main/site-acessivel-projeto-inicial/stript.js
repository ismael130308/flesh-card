document.addEventListener('DOMContentLoaded', function () {
     const aumentabotao = document.getElementById('aumenta-botao');
     const diminuebotao = document.getElementById('diminue-botao');

     let tamanhoAtualFonte = 1;

     aumentabotao.addEventListener('click', function () {
        tamanhoAtualFonte +=0.1;
        document.body.style.fontSize = '${tamanhoAtuaFonte}rem'
     })

     diminuibotao.addEventListener('click', function () {
        tamanhoAtualFonte +=0.1;
        document.body.style.fontSize ='${tamanhoAtuaFonte}rem'
     })
})