function percorrerListaInCategoria(categoria: string) {

    let categ: string[];

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
    // ◘◘◘◘ Desabilitar o botão de Consulta ◘◘◘◘
    let butCons = document.getElementById('butConsult');
    butCons.style.marginTop = '20px';
    // butCons.setAttribute("disabled", "true");
    // butCons.style.backgroundColor = "#7a7a7a";

    let selectFilmes = <HTMLSelectElement>document.getElementById('selectFilmes');
    let formFilmes = <HTMLFormElement>document.getElementById('formFilmes');
    formFilmes.style.color = 'black';
    // selectFilmes.setAttribute('disabled', 'false');
    var filmeOption: string;
    

    for(let i=0; i< categ.length; i++){
        filmeOption += `<option>${categ[i]}</option>`
        selectFilmes.innerHTML = filmeOption;
    }

}

function limparFilmesExibidos(){
    let divFilme = <HTMLSelectElement>document.getElementById('d3');
    let divSinop = <HTMLSelectElement>document.getElementById('d4');
    divFilme.innerHTML = "";
    divSinop.innerHTML = "";
}

function consulta(): void {
    let selectCategorias = <HTMLSelectElement>document.getElementById('selectCateg');

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
