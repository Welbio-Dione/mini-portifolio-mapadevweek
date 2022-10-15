/*
objetivo: quando clicarmos na ba queremos que o conteudo da aba seja mostrado.

passo 1: dar um jeito de pegar os elementos no html

passo 2: indentificar o toque na imagem da aba

passo 3: quando o usuario clicar dasmarcar a aba selecionada 

passo 4: marcar a aba clicada como selecionado 

passo 5: esconder o conteudo anterior

passo 6: mostrar o conteudo da aba selecionada.

*/

//passo 1: dar um jeito de pegar os elementos que representam as abas no html

const abas = document.querySelectorAll(".aba");

//passo 2: indentificar o click no elemento da aba

abas.forEach(aba => {
    aba.addEventListener("click", function() {

        if (aba.classList.contains("selecionado")) {
            return;
        }

        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)
    });
});

function selecionarAba(aba) {
    //passo 3: quando o usuario clicar dasmarcar a aba selecionada 
        const abaSelecionada = document.querySelector(".aba.selecionado");
        abaSelecionada.classList.remove("selecionado");

        //passo 4: marcar a aba clicada como selecionado
        aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba) {
    //passo 5: esconder o conteudo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    //passo 6: mostrar o conteudo da aba selecionada.
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`
    
    const iformacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    iformacaoASerMostrada.classList.add("selecionado")
}