class DisciplinaRepositorio {
    constructor() {
        this._disciplinas = [];
    }

    inserir(disciplina) {
        this._disciplinas.push(disciplina);
        return disciplina;
    }

    inserirAlunoNaDisciplina(aluno, codigoDisciplina) {
        const disciplina = this._disciplinas.find(disciplina => disciplina.codigo === codigoDisciplina);
        if(!disciplina) return false;

        disciplina.adicionarAluno(aluno);

        return true;
    }

    remover(codigo) {
        const indxRemocao = this._disciplinas.indexOf(disciplina => disciplina.codigo === codigo);
        this._disciplinas.splice(indxRemocao, 1);
    }

    listar() {
        return this._disciplinas;
    }

    buscarPorNome(nome) {
        return this._disciplinas.filter(disciplina => disciplina.nome === nome);
    }

    buscarPorCodigo(codigo) {
        return this._disciplinas.filter(disciplina => disciplina.codigo === codigo);
    }

    atualizar(codigo, novoNome){
        this._disciplinas.map((e) => {
            if (e.codigo === codigo) e.nome = novoNome;
        });

        const disciplinaAtualizada = new Disciplina(codigo, novoNome);

        return disciplinaAtualizada;
    }

    pegarAlunos(codigoDisciplina) {
        const disciplina = this._disciplinas.find(disciplina => disciplina.codigo === codigoDisciplina);
        if(!disciplina) return false;
        
        return disciplina.alunos;
    }
}
