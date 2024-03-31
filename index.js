/*Objetivo 1 - Quando clicar no botão do personagem na lista, marcar o botão como selecionado*/
/*Passo 1 - Pegar o botao no JS para poder verificar quando o usuario clicar em cima de um deles*/

const botoes = document.querySelectorAll(".botao");

/*Objeto 2 - Quando clicar no botão do personagem mostrar as informações do personagem*/

/*O2Passo 1 - Pegar os personagens no JS pra poder mostrar ou esconder ele*/

const personagens = document.querySelectorAll(".personagem");

/*Passo 2 - adicionar a classe 'selecionado' no botao que o usuario clicar*/

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        /*Passo 3 - Verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele*/

        desselecionarBotao();

        /*Passo 2 - adicionar a classe 'selecionado' no botao que o usuario clicar*/

        botao.classList.add("selecionado");

        /*O2Passo 3 - Verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele*/

        desselecionarPersonagem();

        /*O2Passo 2 - adicionar a classe "Selecionado" no personagem que o usuario selecionou*/

        personagens[indice].classList.add("selecionado");

    });
});


function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

