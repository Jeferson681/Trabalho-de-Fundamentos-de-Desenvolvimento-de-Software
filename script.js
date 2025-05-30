document.addEventListener("DOMContentLoaded", function () {
    const botao = document.getElementById("botao");
    const paragrafo = document.getElementById("mensagem");

    botao.addEventListener("click", function () {
    paragrafo.innerText = "Seja bem vindo(a). Neste link 👇 você pode acessar o site da Netflix.";

  });
});