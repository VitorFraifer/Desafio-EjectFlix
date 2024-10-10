const btnAbrirModalAdicionarFilme = document.querySelector(".adicionar-filme");
const btnFecharModalAdicionarFilme = document.querySelector(".btn-fechar-modal");
const modalAdicionarFilme = document.querySelector("#cadastrarFilme") as HTMLElement | null;

console.log("TESTE");

btnAbrirModalAdicionarFilme?.addEventListener("click", () =>{
    if(modalAdicionarFilme){
        modalAdicionarFilme.style.display = "flex";
    }
})

btnFecharModalAdicionarFilme?.addEventListener("click", () => {
    if(modalAdicionarFilme){
        modalAdicionarFilme.style.display = "none";
    }
})