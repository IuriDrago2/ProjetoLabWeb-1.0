function percorrerListaInCategoria(categoria) {
    let categ;
    switch (categoria) {
        case 'acao':
            categ = filmes_acao;
            break;
        case 'aventura':
            categ = filmes_aventura;
            break;
        case 'romance':
            categ = filmes_romance;
            break;
    }
    let butCons = document.getElementById('butConsult');
    butCons.style.marginTop = '20px';
    let selectFilmes = document.getElementById('selectFilmes');
    let formFilmes = document.getElementById('formFilmes');
    formFilmes.style.color = 'black';
    var filmeOption;
    for (let i = 0; i < categ.length; i++) {
        filmeOption += `<option>${categ[i]}</option>`;
        selectFilmes.innerHTML = filmeOption;
    }
}
function limparFilmesExibidos() {
    let divFilme = document.getElementById('d3');
    let divSinop = document.getElementById('d4');
    divFilme.innerHTML = "";
    divSinop.innerHTML = "";
}
function consulta() {
    let selectCategorias = document.getElementById('selectCateg');
    if (selectCategorias.value == 'Ação') {
        percorrerListaInCategoria('acao');
        botaoEscolherFilme();
        limparFilmesExibidos();
    }
    if (selectCategorias.value == 'Aventura') {
        percorrerListaInCategoria('aventura');
        botaoEscolherFilme();
        limparFilmesExibidos();
    }
    if (selectCategorias.value == 'Romance') {
        percorrerListaInCategoria('romance');
        botaoEscolherFilme();
        limparFilmesExibidos();
    }
}
