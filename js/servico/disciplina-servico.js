class DisciplinaServico {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(codigo, nome) {
        if (!(this._validarCodigo(codigo) && this._validarNome(nome))) {
            return undefined;
        }

        const disciplina = new Disciplina(codigo, nome);

        return this.repositorio.inserir(disciplina);
        
    }

    inserirAlunoNaDisciplina(aluno, codigoDisciplina) {
        return this.repositorio.inserirAlunoNaDisciplina(aluno, codigoDisciplina);
    }
        

    remover(codigo) {
        this.repositorio.remover(codigo);
    }

    atualizar(codigo, novoNome){
        if(!this._validarNome) return undefined;
        
        return this.repositorio.atualizar(codigo, novoNome);
    }

    listar() {
        return this.repositorio.listar();
    }

    pegarAlunos(codigoDisciplina) {
        return this.repositorio.pegarAlunos(codigoDisciplina);
    }

    buscarPorNome(nome) {
        if(this._validarNome(nome)) 
        return this.repositorio.buscarPorNome(nome);
    }

    buscarPorCodigo(codigo) {
        if(this._validarCodigo(codigo))
        return this.repositorio.buscarPorCodigo(codigo);
    }

    _validarCodigo(codigo){
        if (codigo === undefined || codigo === '' || codigo < 0) return false;
        return true;
    }

    _validarNome(nome) {
        if(nome === undefined || nome === '') return false;
        return true;
    }
}
