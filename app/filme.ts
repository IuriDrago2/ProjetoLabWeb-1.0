import { Video } from './video';

export interface Propaganda<T> {
    pularPropaganda(pular: boolean): T;
}

export class Facebook {
    pular(conteudo: Propaganda<Video>): void {
        conteudo.pularPropaganda(true);
    };
}

export class Filme extends Video {

    diretor: String;

    constructor(nome: String, duracao: number, diretor: String) {
        super(nome, duracao);
        this.diretor = diretor;
    }

}