let jogadorAtual = "X";
let fimDeJogo = false;
let tabuleiro = ["", "", "", "", "", "", "", "", ""];

const celulas = document.querySelectorAll(".celula");

celulas.forEach((celula) => {
  celula.addEventListener("click", () => {
    if (fimDeJogo) return;
    const indice = celula.id;
    if (tabuleiro[indice] !== "") return;
    tabuleiro[indice] = jogadorAtual;
    celula.textContent = jogadorAtual;
    verificarVitoria();
    jogadorAtual = jogadorAtual === "X" ? "O" : "X";
  });
});

function verificarVitoria() {
  const condicoesVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < condicoesVitoria.length; i++) {
    const [a, b, c] = condicoesVitoria[i];
    if (tabuleiro[a] !== "" && tabuleiro[a] === tabuleiro[b] && tabuleiro[b] === tabuleiro[c]) {
      fimDeJogo = true;
      celulas[a].classList.add("win");
      celulas[b].classList.add("win");
      celulas[c].classList.add("win");
      setTimeout(() => {
        alert(`${tabuleiro[a]} ganhou!`);
      }, 100);
    }
  }

  if (tabuleiro.every((celula) => celula !== "")) {
    fimDeJogo = true;
    setTimeout(() => {
      alert("Empate!");
    }, 100);
  }
}
