class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarPessoa()
    }

    criarPessoa() {
        const sql = 'CREATE TABLE IF NOT EXISTS Pessoa (idPessoa int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, cpf INT NOT NULL, nascimento datetime NOT NULL, tipoSanguineo varchar(20) NOT NULL, sexo varchar(20) NOT NULL, statusPessoa text, PRIMARY KEY(idPessoa))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Pessoa criada com sucesso')
            }
        })
    }


}

module.exports = new Tabelas