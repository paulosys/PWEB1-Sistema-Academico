class Disciplina {
    constructor(codigo, nome, alunos = []) {
        this._codigo = codigo;
        this._nome = nome;
        this._alunos = alunos;
    }

    get codigo() { 
        return this._codigo 
    };

    set codigo(novoCodigo) {
        this._codigo = novoCodigo;
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    get alunos() {
        return this._alunos;
    }

    set alunos(novosAlunos) {
        this._alunos = novosAlunos;
    }

    adicionarAluno(aluno) {
        this._alunos.push(aluno);
    }

    removerAluno(aluno) {
        const indiceAluno = this._alunos.indexOf(aluno);
        if (indiceAluno >= 0) {
            this._alunos.splice(indiceAluno, 1);
        }
    }
}
