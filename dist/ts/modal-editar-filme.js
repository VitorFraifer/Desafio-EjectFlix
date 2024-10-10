"use strict";
const btnAbrirModalEditarFilme = document.querySelectorAll(".icone-edição");
const btnFecharModalEditarFilme = document.querySelectorAll(".btn-fechar-modal");
const modalEditarFilme = document.querySelector("#editarFilme");
console.log("TESTE");
btnAbrirModalEditarFilme.forEach((buttoneditarfilme) => {
    buttoneditarfilme.addEventListener("click", () => {
        if (modalEditarFilme) {
            modalEditarFilme.style.display = "flex";
        }
    });
});
btnFecharModalEditarFilme.forEach((buttonfecharmodal) => {
    buttonfecharmodal.addEventListener("click", () => {
        if (modalEditarFilme) {
            modalEditarFilme.style.display = "none";
        }
    });
});
//# sourceMappingURL=modal-editar-filme.js.map