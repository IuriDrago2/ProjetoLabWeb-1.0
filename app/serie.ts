import { Video } from './video';

export class Serie extends Video {

    private episodios: number;

    constructor(nome: String, duracao: number, episodios: number) {
        super(nome, duracao);
        this.episodios = episodios;
    }

    getDuracao(): number {
        
        return this.duracao/this.episodios;
    }
}