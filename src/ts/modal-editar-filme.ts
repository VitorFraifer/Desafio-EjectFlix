const btnAbrirModalEditarFilme = document.querySelectorAll(".icone-edição");
const btnFecharModalEditarFilme = document.querySelectorAll(".btn-fechar-modal");
const modalEditarFilme = document.querySelector("#editarFilme") as HTMLElement | null;

console.log("TESTE");

btnAbrirModalEditarFilme.forEach((buttoneditarfilme) => {
    buttoneditarfilme.addEventListener("click", () => {
        if(modalEditarFilme){
            modalEditarFilme.style.display = "flex";
        }
    })
})

btnFecharModalEditarFilme.forEach((buttonfecharmodal) => {
    buttonfecharmodal.addEventListener("click", () => {
        if(modalEditarFilme){
            modalEditarFilme.style.display = "none";
        }
    })
})