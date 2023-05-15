const botaoAlterarTema = document.getElementById("button-change-theme");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".img-button");

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("dark-mode");
  
    body.classList.toggle("dark-mode");
  
    if (modoEscuroEstaAtivo) {
      imagemBotaoTrocaDeTema.setAttribute("src", "./src/images/sun.png");
    } else {
      imagemBotaoTrocaDeTema.setAttribute("src", "./src/images/moon.png");
    }
  });