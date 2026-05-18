<script src="main.js"></script>
const botoes = document.querySelectorAll(".botao");
console.log(botoes);
botoes[i].onclick = function () {};
botoes[i].onclick = function () {
    botoes[i].classList.add("ativo");
  };
  botoes[i].onclick = function () {
    botoes[i].classList.add("ativo");
  };
  for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
      botoes[i].classList.add("ativo");
    };
  }
  for (let j = 0; j < botoes.length; j++) {
    botoes[j].classList.remove("ativo");
  }
