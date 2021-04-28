import { Filme } from './filme';
import { Video } from './video';

function funcao (): number {
    var a = 1;
    return 2+a;
}

type Veiculo = {
    marca: Marca,
    modelo: String,
    numero_de_rodas: number
}

enum Marca {
    honda,
    toyota,
    ford
}

let carro = {
    marca: Marca.honda,
    modelo: "svu",
    numero_de_rodas: 4
};



const video: Video = new Filme("Interestelar", 180, "Nolan");

console.log(funcao());