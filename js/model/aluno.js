class Aluno {
    constructor(nome, idade) {
        this._matricula = Math.floor(Math.random() * 1000);
        this._nome = nome;
        this.idade = idade;
    }

    get matricula() {
        return this._matricula;
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    get idade() {
        return this._idade;
    }

    set idade(novaIdade) {
        this._idade = novaIdade;
    }
    
}
