const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
for(let i=0; i.botoes.length; i++){
    botoes[i].oneclick = function(){
        for(letj=0; j<botoes.length; j++){
            botoes[i].classList.remove("ativo");
            textos[i].classList.remove("ativo");
        }
    }
}
