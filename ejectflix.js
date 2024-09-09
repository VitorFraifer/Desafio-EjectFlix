// Aqui chamou o query.Selector, depois montou outra variável só com o valor e usou esse valor como parametro pra função listarFilmesNaTela

function adicionarFilme() {

    var campoFilmeFavorito = document.querySelector('#filme-imagem')

    var campoNomeDoFilme = document.querySelector('#filme-nome').value
    var campoAnoDoFilme = document.querySelector('#filme-ano').value

    var filmeFavorito = campoFilmeFavorito.value

    

        listarFilmesNaTela(filmeFavorito, campoNomeDoFilme, campoAnoDoFilme)

    
    campoFilmeFavorito.value = ""
}

function listarFilmesNaTela(filme, nome, ano) {

    var listaFilme = document.querySelector('#listaFilmes')

    var elementofilme = `
    <div class="secao-filme">
        <img src ="${filme}" class='filme-imagem'>
        <p class="filme-titulo">${nome}, ${ano}.</p>
    
    `



    listaFilme.innerHTML = listaFilme.innerHTML + elementofilme
}
//Nessa função usando o parametro escolhido, foi chamado outro query.Selector para 