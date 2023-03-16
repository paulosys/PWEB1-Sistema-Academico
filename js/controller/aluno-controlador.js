class AlunoControlador {
    constructor() {
        this.alunoServico = new AlunoServico();
        this._inserirAlunoParaTestar('João', 20);
        this._inserirAlunoParaTestar('Maria', 18);
        this._inserirAlunoParaTestar('José', 19);
    }

    _inserirAlunoParaTestar(nome, idade){
        const aluno = this.alunoServico.inserir(nome, idade);

        const listaAlunos = document.querySelector("#lista-alunos");

        const novoAlunoHTML = document.createElement("li");
        novoAlunoHTML.textContent = `${aluno.matricula} - ${aluno.nome} - ${aluno.idade}`;

        listaAlunos.appendChild(novoAlunoHTML);
    }

    inserir() {
        const nomeAluno = document.querySelector("#nome").value;
        const idadeAluno = Number(document.querySelector("#idade").value);

        const aluno = this.alunoServico.inserir(nomeAluno, idadeAluno);
        if (aluno) {
            this.mostrarAlunoNoHTML(aluno);
            alert('Aluno inserido com sucesso!');
        } else {
            alert('Aluno menor de idade não permitido!');
        }
    }

    mostrarAlunoNoHTML(aluno) {
        const listaAlunos = document.querySelector("#lista-alunos");

        const novoAlunoHTML = document.createElement("li");
        novoAlunoHTML.textContent = `${aluno.matricula} - ${aluno.nome} - ${aluno.idade}`;

        const elementoBotaoApagar = this._criarBotaoApagar(aluno);

        novoAlunoHTML.appendChild(elementoBotaoApagar);
        listaAlunos.appendChild(novoAlunoHTML);
    }

    _criarBotaoApagar(aluno) {
        const elementoBotaoApagar = document.createElement("button");
        elementoBotaoApagar.textContent = "X";
        elementoBotaoApagar.addEventListener('click', (event) => {
            event.preventDefault()
            this.removerAlunoDaLista(aluno.nome);
            event.target.parentElement.remove();
        }
        );
        return elementoBotaoApagar;
    }

    removerAlunoDaLista(nome) {
        this.alunoServico.remover(nome);
    }

    buscarAlunoPorMatricula(matricula) {
        return this.alunoServico.buscarPorMatricula(matricula);
    }

}