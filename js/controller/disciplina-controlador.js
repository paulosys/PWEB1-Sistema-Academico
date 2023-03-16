class DisciplinaControlador {
    constructor() {
        this.disciplinaServico = new DisciplinaServico();
        this.estahAtualizando = false;
    }

    inserirAlunoNaDisciplina(aluno, codigoDisciplina) {
        const result = this.disciplinaServico.inserirAlunoNaDisciplina(aluno, codigoDisciplina);
        if (!result) alert("Disciplina não encontrada");

    }

    _mudarTextoBotaoCadastrar() {
        const texto = this.estahAtualizando ? 'Atualizar' : 'Cadastrar';
        const buttonInserir = document.querySelector('#button-inserir');
        buttonInserir.textContent = texto;
    }

    inserir() {
        const campoCodigo = document.querySelector("#codigo-disciplina");
        const campoNome = document.querySelector("#nome-disciplina")

        const nomeDisciplina = campoNome.value;
        const codigoDisciplina = Number(campoCodigo.value);

        let disciplina;

        if (this.estahAtualizando) {
            disciplina = this.disciplinaServico.atualizar(codigoDisciplina, nomeDisciplina);
            this.estahAtualizando = false;
            document.querySelector("#codigo-disciplina").disabled = false;
            this._mudarTextoBotaoCadastrar();

        } else {
            disciplina = this.disciplinaServico.inserir(codigoDisciplina, nomeDisciplina);
        }

        if (disciplina) {
            this.mostrarDisciplinaNoHTML();
            campoCodigo.value = '';
            campoNome.value = '';
        }
    }

    _criarBotaoEditar(codigo) {
        const itemBotaoEditar = document.createElement("button");
        itemBotaoEditar.textContent = '✎';
        itemBotaoEditar.addEventListener('click', (event) => {
            this.atualizarDisciplinaDaLista(codigo);
            event.target.parentElement.remove();
        });

        return itemBotaoEditar;
    }

    _criarBotaoApagar(codigo) {
        const itemBotaoApagar = document.createElement("button");
        itemBotaoApagar.textContent = "X";
        itemBotaoApagar.addEventListener('click', (event) => {
            this.removerDisciplinaDaLista(codigo);
            event.target.parentElement.remove();
        });
        return itemBotaoApagar;
    }

    _criarBotaoVerAlunos(codigo) {
        const itemBotaoVerAlunos = document.createElement("button");
        itemBotaoVerAlunos.textContent = "👁‍🗨";
        itemBotaoVerAlunos.addEventListener('click', (event) => {
            const alunos = this.disciplinaServico.pegarAlunos(codigo).map(aluno => `${aluno.matricula} - ${aluno.nome}`);
            alert(alunos);
        });
        return itemBotaoVerAlunos;
    }

    mostrarDisciplinaNoHTML() {

        const lista = document.querySelector('#lista-disciplina');

        while (lista.firstChild) {
            lista.removeChild(lista.lastChild);
        }

        const listaDisciplinas = this.disciplinaServico.listar();

        for (const e of listaDisciplinas) {

            const codigo = e.codigo;
            const nome = e.nome;

            const itemLista = document.createElement("li");
            itemLista.textContent = `${codigo} - ${nome} `;

            const botaoEditar = this._criarBotaoEditar(codigo);
            const botaoApagar = this._criarBotaoApagar(codigo);
            const botaoVerAlunos = this._criarBotaoVerAlunos(codigo)

            itemLista.appendChild(botaoEditar);
            itemLista.appendChild(botaoApagar);
            itemLista.appendChild(botaoVerAlunos);
            lista.appendChild(itemLista);
        }
    }

    atualizarDisciplinaDaLista(codigo) {
        this.estahAtualizando = true;
        this._mudarTextoBotaoCadastrar();

        let disciplina = this.disciplinaServico.buscarPorCodigo(codigo)[0];

        document.querySelector("#codigo-disciplina").disabled = true;
        document.querySelector("#codigo-disciplina").value = disciplina.codigo;
        document.querySelector("#nome-disciplina").value = disciplina.nome;
    }

    removerDisciplinaDaLista(codigo) {
        this.disciplinaServico.remover(codigo);
    }

}
