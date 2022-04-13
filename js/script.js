const button = document.querySelector("button");
const h1= document.querySelector("h1");
const div = document.querySelector("div");

function atualiza() {
const novoH1 ="<h1>conteúdo</h1>";
h1.textContent ="coisa!!!!!!Atualizado";

div.insertAdjacentHTML('beforeend', novoH1);

}

button.addEventListener("click", atualiza );

