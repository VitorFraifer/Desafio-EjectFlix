const btnAbrirModal = document.querySelector(".adicionar-filme");
const modal = document.querySelector("#cadastrarFilme") as HTMLElement | null;

btnAbrirModal?.addEventListener("click", () =>{
    if(modal){
        modal.style.display = "flex";
    }
})