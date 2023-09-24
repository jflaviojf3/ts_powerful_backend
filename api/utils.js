const axios = require("axios");

class Utils {


  static getCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Adiciona zero à esquerda, se necessário
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return formattedDateTime;
  }

  static formataData(data) {
    const ano = data.slice(0, 4);
    const mes = data.slice(4, 6);
    const dia = data.slice(6, 8);

    const dataFormatada = `${ano}-${mes}-${dia}`;

    return dataFormatada;
  }

  static trataUsuarioGoogle(userGoogle){
  const novoUsuario = {
    nome: userGoogle.name.split(" ")[0],
    sobrenome: userGoogle.name.split(" ")[1] || null,
    email: userGoogle.email,
    senha: userGoogle.sub,
    provedor: 'google',
    cod_perfil: 1,
    foto: userGoogle.picture
  }
  const usuarioGoogle = {
    body: novoUsuario
  }
    return usuarioGoogle
  }


  static async criaAuditoriaPonto(descricao, id_ponto) {
    let res;
    let app;
    if (process.env.SERVER_PROD) {
      app = process.env.SERVER_PROD
  } else {
      app = `http://localhost:${process.env.PORT}`
  }
    try {
      res = await axios.post(
        `${app}/v1/auditorias/pontos`,
        {
          descricao: descricao,
          data_hora_inicio: new Date(),
          id_pontos: id_ponto,
        }
      );
      if (res.status === 200) {
        //console.log("2 = Status "+ res.status + " Token "+ res.data.token)
        return res.data.token; // Supondo que o token seja retornado na propriedade 'token' do objeto de resposta
      } else {
        throw new Error("Erro ao obter o token");
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  static async criaAuditoriaTarefa(
    descricao,
    data_inicio,
    data_fim,
    id_tarefa
  ) {

    let res;
    let app;
    if (process.env.SERVER_PROD) {
      app = process.env.SERVER_PROD
  } else {
      app = `http://localhost:${process.env.PORT}`
  }
    try {
      res = await axios.post(
        `${app}/v1/auditorias/tarefas`,
        {
          descricao: descricao,
          data_hora_inicio: data_inicio,
          data_hora_fim: data_fim == undefined ? null : data_fim,
          id_tarefas: id_tarefa,
        }
      );
      if (res.status === 200) {
        //console.log("2 = Status "+ res.status + " Token "+ res.data.token)
        return res.data.token; // Supondo que o token seja retornado na propriedade 'token' do objeto de resposta
      } else {
        throw new Error("Erro ao obter o token");
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  static async fazerLogin() {
    let app;
    if (process.env.SERVER_PROD) {
      app = process.env.SERVER_PROD
  } else {
      app = `http://localhost:${process.env.PORT}`
  }
    try {
      const res = await axios.post(
        `${app}/v1/auth`,
        {
          email: "jflaviojf3@gmail.com",
          senha: "admin12345678",
        }
      );
      if (res.status === 200) {
        //console.log("2 = Status "+ res.status + " Token "+ res.data.token)
        return res.data.token; // Supondo que o token seja retornado na propriedade 'token' do objeto de resposta
      } else {
        throw new Error("Erro ao obter o token");
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = {
  trataUsuarioGoogle: Utils.trataUsuarioGoogle,
  fazerLogin: Utils.fazerLogin,
  getCurrentDateTime: Utils.getCurrentDateTime,
  formataData: Utils.formataData,
  criaAuditoriaTarefa: Utils.criaAuditoriaTarefa,
  criaAuditoriaPonto: Utils.criaAuditoriaPonto,
};
