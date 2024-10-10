"use strict";
const btnAbrirModalAdicionarFilme = document.querySelector(".adicionar-filme");
const btnFecharModalAdicionarFilme = document.querySelector(".btn-fechar-modal");
const modalAdicionarFilme = document.querySelector("#cadastrarFilme");
console.log("TESTE");
btnAbrirModalAdicionarFilme === null || btnAbrirModalAdicionarFilme === void 0 ? void 0 : btnAbrirModalAdicionarFilme.addEventListener("click", () => {
    if (modalAdicionarFilme) {
        modalAdicionarFilme.style.display = "flex";
    }
});
btnFecharModalAdicionarFilme === null || btnFecharModalAdicionarFilme === void 0 ? void 0 : btnFecharModalAdicionarFilme.addEventListener("click", () => {
    if (modalAdicionarFilme) {
        modalAdicionarFilme.style.display = "none";
    }
});
//# sourceMappingURL=modal-adicionar-filme.js.map