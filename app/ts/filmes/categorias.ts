//2)Função para percorrer a lista de filmes e trazer seu conteúdo com base na categoria escolhida
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
    let butCons = document.getElementById('butConsult');
    butCons.style.marginTop = '20px';

    let selectFilmes = <HTMLSelectElement>document.getElementById('selectFilmes');
    let formFilmes = <HTMLFormElement>document.getElementById('formFilmes');
    formFilmes.style.color = 'black';
    var filmeOption: string;
    

    for(let i=0; i< categ.length; i++){
        filmeOption += `<option>${categ[i]}</option>`
        selectFilmes.innerHTML = filmeOption;
    }

}

//5)Função para limpar os filmes exibidos na área de exibição quando escolher outra categoria
function limparFilmesExibidos(){
    let divFilme = <HTMLSelectElement>document.getElementById('d3');
    let divSinop = <HTMLSelectElement>document.getElementById('d4');
    divFilme.innerHTML = "";
    divSinop.innerHTML = "";
}

//1)Função responsavel por capturar qual categoria foi escolhida e fazer a consulta chamando outras funções
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
