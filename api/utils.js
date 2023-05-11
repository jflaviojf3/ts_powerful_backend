const axios = require('axios');

class Utils {

static formataData(data) {
    const ano = data.slice(0, 4);
    const mes = data.slice(4, 6);
    const dia = data.slice(6, 8);

    const dataFormatada = `${ano}-${mes}-${dia}`;

    return dataFormatada
  }

  static async criaAuditoriaPonto(descricao, id_ponto ) {
    try {
      await axios.post('http://localhost:3000/v1/auditorias/pontos', {
        descricao: descricao,
        data_hora_inicio: new Date(),
        id_pontos: id_ponto
      });
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao chamar o endpoint');
    }
  }

  static async criaAuditoriaTarefa(descricao, data_inicio, data_fim, id_tarefa ) {
    try {
      await axios.post('http://localhost:3000/v1/auditorias/tarefas', {
        descricao: descricao,
        data_hora_inicio: data_inicio,
        data_hora_fim: data_fim==undefined?null:data_fim,
        id_tarefas: id_tarefa
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

}

module.exports = Utils;
