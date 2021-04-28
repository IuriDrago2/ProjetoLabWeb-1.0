export abstract class Video {
    
    private nome: String;
    public duracao: number;

    constructor(nome: String, duracao: number) {
        this.nome = nome;
        this.duracao = duracao;
    }

    assistir (): boolean {
        // assistindo
        return true;
    }

    getNome(): String {
        return this.nome;
    }
}