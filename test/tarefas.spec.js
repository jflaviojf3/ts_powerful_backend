const request = require("supertest");
const app = require("../api/server.js");
const { fazerLogin } = require("../api/utils.js");

describe("Testes dos endpoints de tarefas do usuario", () => {
  let id_tarefas_criado;
  let token;

  beforeAll(async () => {
    token = await fazerLogin();
  });

  it("Teste consultar uma tarefa do usuario, deve retornar 200", async () => {
    const res = await request(app)
      .get("/v1/usuarios/1/tarefa/1")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).not.toHaveLength(1);
    expect(res.body[0].descricao).toEqual("Fazendo atividade do backend");
    expect(res.body[0]).toMatchObject(
      expect.objectContaining({
        id_tarefas: expect.any(Number),
        id_projetos: expect.any(Number),
        id_usuarios: expect.any(Number),
        entrada: expect.any(Number),
        data_fim: expect.any(String),
        data_inicio: expect.any(String),
        descricao: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
  });

  it("Teste consulta tarefas do dia buscando dia atual, deve retornar 200", async () => {
    const res = await request(app)
      .get("/v1/usuarios/1/tarefaDia/2023-09-20")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).not.toHaveLength(1);
    expect(res.body[0].descricao).toEqual(
      "Teste Automatizado Jest alterado por Atualização"
    );
    // expect(res.body[0]).toMatchObject(
    //   expect.objectContaining({
    //     id_tarefas: expect.any(Number),
    //     id_projetos: expect.any(Number),
    //     id_usuarios: expect.any(Number),
    //     entrada: expect.any(Number),
    //     data_inicio: expect.any(String),
    //     descricao: expect.any(String),
    //     createdAt: expect.any(String),
    //     updatedAt: expect.any(String),
    //   })
    // );
  });

  it("Teste consulta todas as tarefas do usuario, deve retornar 200", async () => {
    const res = await request(app)
      .get("/v1/usuarios/1/tarefaDia/2023-09-20")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).not.toHaveLength(1);
    expect(res.body[0].descricao).toEqual(
      "Teste Automatizado Jest alterado por Atualização"
    );
    // expect(res.body[0]).toMatchObject(
    //   expect.objectContaining({
    //     id_tarefas: expect.any(Number),
    //     id_projetos: expect.any(Number),
    //     id_usuarios: expect.any(Number),
    //     entrada: expect.any(Number),
    //     data_inicio: expect.any(String),
    //     descricao: expect.any(String),
    //     createdAt: expect.any(String),
    //     updatedAt: expect.any(String),
    //   })
    // );
  });

  it("Teste consulta as tarefas buscando por periodo, deve retornar 200", async () => {
    const res = await request(app)
      .get("/v1/usuarios/1/tarefaInicio/20230501/tarefaFim/20230510")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).not.toHaveLength(1);
    expect(res.body[0].descricao).toEqual("Fazendo atividade do backend");
    expect(res.body[0]).toMatchObject(
      expect.objectContaining({
        id_tarefas: expect.any(Number),
        id_projetos: expect.any(Number),
        id_usuarios: expect.any(Number),
        entrada: expect.any(Number),
        data_fim: expect.any(String),
        data_inicio: expect.any(String),
        descricao: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
  });

  it("Teste consulta todas tarefas de um projeto buscando por periodo, deve retornar 200", async () => {
    const res = await request(app)
      .get("/v1/usuarios/1/tarefaInicio/20230501/tarefaFim/20230510")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).not.toHaveLength(1);
    expect(res.body[0].descricao).toEqual("Fazendo atividade do backend");
    expect(res.body[0]).toMatchObject(
      expect.objectContaining({
        id_tarefas: expect.any(Number),
        id_projetos: expect.any(Number),
        id_usuarios: expect.any(Number),
        entrada: expect.any(Number),
        data_fim: expect.any(String),
        data_inicio: expect.any(String),
        descricao: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
  });

  it("Teste para inserir uma nova tarefa para o usuario 1, deve retornar 200", async () => {
    const res = await request(app)
      .post("/v1/usuarios/1/tarefa")
      .send({
        entrada: 1,
        descricao: "Teste Automatizado via Jest",
        data_inicio: "2023-05-10 22:40:35",
        id_projetos: "2",
      })
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.descricao).toEqual("Teste Automatizado via Jest");
    expect(res.body).toMatchObject(
      expect.objectContaining({
        id_tarefas: expect.any(Number),
        id_projetos: expect.any(String),
        id_usuarios: expect.any(String),
        entrada: expect.any(Number),
        data_inicio: expect.any(String),
        descricao: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
    id_tarefas_criado = res.body.id_tarefas;
  });

  it("Teste para atualizar uma tarefa do usuário 1, deve retornar 200", async () => {
    const res = await request(app)
      .put(`/v1/usuarios/1/tarefa/${id_tarefas_criado}/entrada/1`)
      .send({
        descricao: "Teste Automatizado Jest alterado por Atualização",
        data_inicio: "2023-05-09 16:55:35",
        id_projetos: "1",
      })
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.id_projetos).toEqual(1);
    expect(res.body.entrada).toEqual(1);
    expect(res.body.descricao).toEqual(
      "Teste Automatizado Jest alterado por Atualização"
    );
    expect(res.body).toMatchObject(
      expect.objectContaining({
        id_tarefas: expect.any(Number),
        id_projetos: expect.any(Number),
        id_usuarios: expect.any(Number),
        entrada: expect.any(Number),
        data_inicio: expect.any(String),
        descricao: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
  });

  it("Teste para deletar tarefas de um usuario que foi atualizado, deve retornar 200", async () => {
    const res = await request(app)
      .del(`/v1/usuarios/1/tarefa/${id_tarefas_criado}/entrada/1`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.mensagem).toEqual(
      `Id tarefa ${id_tarefas_criado} deletado`
    );
  });
});
