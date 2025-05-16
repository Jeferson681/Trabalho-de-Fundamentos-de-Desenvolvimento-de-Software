document.addEventListener("DOMContentLoaded", function () {
    const botao = document.getElementById("botao");
    const paragrafo = document.getElementById("mensagem");

    botao.addEventListener("click", function () {
    paragrafo.innerText = "Seja bem vindo(a),Clique aqui 👇 para ver filmes e series.  ";

  });
});