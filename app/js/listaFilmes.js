// Arrays responsaveis pelos titulos de filmes
const filmes_acao = ["Resgate", "The Old Guard", "Mundo Duplo"];
const filmes_aventura = ["Artemis Fowl", "Dolittle", "Mulan"];
const filmes_romance = ["The Photograph", "Enquanto Estivermos Juntos", "A Batida Perfeita"];

//3)Função responsavel por criar o botão para escolher o filme após ter consultado a categoria
// posteriormente acionar a função de filme escolhido
function botaoEscolherFilme() {
    let butCons = document.getElementById('butConsult');
    let butNovo = document.createElement('button');
    butNovo.setAttribute('id', 'butFilme');
    butNovo.textContent = 'Escolher Filme';
    butNovo.setAttribute('id', 'butNovo');
    butNovo.onclick = filmeEscolhido;
    document.body.insertBefore(butNovo, butCons);
}

//4)Função responsavel por trazer os dados do filme escolhido
function filmeEscolhido() {
    let selFilm = document.getElementById('selectFilmes');
    if (selFilm.value == 'Resgate') {
        console.log(selFilm.value);
        let divFilme = document.getElementById('d3');
        let divSinop = document.getElementById('d4');
        divFilme.innerHTML = "<img class='imgFilme' src='./assets/filmes-acao/resgate.jpg' height='398px' width='498px'>";
        divSinop.innerHTML = "Em Bangladesh, o mercenário do mercado negro Tyler Rake luta para sobreviver durante a missão para resgatar o filho sequestrado de um chefe do crime internacional.";
    }
    else if (selFilm.value == 'The Old Guard') {
        console.log(selFilm.value);
        let divFilme = document.getElementById('d3');
        let divSinop = document.getElementById('d4');
        divFilme.innerHTML = "<img class='imgFilme' src='./assets/filmes-acao/the-old-guard.png' height='398px' width='498px'>";
        divSinop.innerHTML = "Em The Old Guard, Andy (Charlize Theron) e seus companheiros formam um grupo de soldados que possuem a inestimável virtude da vida eterna. Eles vivem através dos anos oferecendo seus serviços como mercenários para aqueles que podem pagar, se passando como seres humanos comuns dentre os demais. No entanto, tudo muda com a descoberta de que existe uma outra imortal que atua como fuzileira naval.";
    }
    else if (selFilm.value == 'Mundo Duplo') {
        console.log(selFilm.value);
        let divFilme = document.getElementById('d3');
        let divSinop = document.getElementById('d4');
        divFilme.innerHTML = "<img class='imgFilme' src='./assets/filmes-acao/mundo-duplo.jpg' height='398px' width='498px'>";
        divSinop.innerHTML = "Para honrar seu clã, o jovem Dong Yilong embarca em uma perigosa jornada para competir em um torneio que seleciona guerreiros para batalhas. Assista o quanto quiser.";
    }
    else if (selFilm.value == 'Artemis Fowl') {
        console.log(selFilm.value);
        let divFilme = document.getElementById('d3');
        let divSinop = document.getElementById('d4');
        divFilme.innerHTML = "<img class='imgFilme' src='./assets/filmes-aventura/artemis-fowl.jpeg' height='398px' width='498px'>";
        divSinop.innerHTML = "Artemis Fowl é um garoto de 12 anos muito inteligente que usa sua capacidade para roubar. Um dia, ele descobre um local mágico chamado mundo das fadas. Decidido a roubar a fortuna local, ele sequestra um elfo e cobra um resgate para libertá-lo.";
    }
    else if (selFilm.value == 'Dolittle') {
        console.log(selFilm.value);
        let divFilme = document.getElementById('d3');
        let divSinop = document.getElementById('d4');
        divFilme.innerHTML = "<img class='imgFilme' src='./assets/filmes-aventura/dolittle.jpg' height='398px' width='498px'>";
        divSinop.innerHTML = "O Dr. Dolittle vive com uma variedade de animais exóticos e conversa com eles diariamente. Quando a jovem rainha Victoria fica doente, o excêntrico médico e seus amigos peludos embarcam em uma aventura épica em uma ilha mítica para encontrar a cura.";
    }
    else if (selFilm.value == 'Mulan') {
        console.log(selFilm.value);
        let divFilme = document.getElementById('d3');
        let divSinop = document.getElementById('d4');
        divFilme.innerHTML = "<img class='imgFilme' src='./assets/filmes-aventura/mulan.jpg' height='398px' width='498px'>";
        divSinop.innerHTML = "Em Mulan, Hua Mulan (Liu Yifei) é a espirituosa e determinada filha mais velha de um honrado guerreiro. Quando o Imperador da China emite um decreto que um homem de cada família deve servir no exército imperial, Mulan decide tomar o lugar de seu pai, que está doente. Assumindo a identidade de Hua Jun, ela se disfarça de homem para combater os invasores que estão atacando sua nação, provando-se uma grande guerreira.";
    }
}
