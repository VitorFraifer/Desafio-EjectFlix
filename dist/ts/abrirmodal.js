"use strict";
const btnAbrirModal = document.querySelector(".adicionar-filme");
const modal = document.querySelector("#cadastrarFilme");
btnAbrirModal === null || btnAbrirModal === void 0 ? void 0 : btnAbrirModal.addEventListener("click", () => {
    if (modal) {
        modal.style.display = "flex";
    }
});
//# sourceMappingURL=abrirmodal.js.map