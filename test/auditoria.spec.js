const request = require("supertest");
const app = require("../api/server.js");
const { fazerLogin } = require("../api/utils.js");

describe("Testes dos endpoints de auditoria do sistema", () => {
  let token;

  beforeAll(async () => {
    token = await fazerLogin();
  });

  it("Teste consultar todas as auditorias, deve retornar 200", async () => {
    const res = await request(app)
      .get("/v1/auditorias")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).not.toHaveLength(1);
    expect(res.body[0].descricao).toEqual("Ponto Finalizado");
    // expect(res.body[0]).toMatchObject(
    //   expect.objectContaining({
    //     id_tarefas: expect.any(Number),
    //     id_auditorias: expect.any(Number),
    //     data_hora_inicio: expect.any(String),
    //     data_hora_fim: expect.any(String),
    //     descricao: expect.any(String),
    //     createdAt: expect.any(String),
    //     updatedAt: expect.any(String),
    //     deletedAt: expect.any(NULL),
    //   })
    // );
  });

  it("Teste consulta todos os pontos na auditoria, deve retornar 200", async () => {
    const res = await request(app)
      .get("/v1/auditorias/pontos/periodoInicio/20230501/periodoFim/20230509")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).not.toHaveLength(1);
    expect(res.body[2].descricao).toEqual("Saida Normal");
    expect(res.body[2]).toMatchObject(
      expect.objectContaining({
        id_pontos: expect.any(Number),
        id_auditorias: expect.any(Number),
        data_hora_inicio: expect.any(String),
        descricao: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
  });

  it("Teste consulta todos as tarefas da auditoria, deve retornar 200", async () => {
    const res = await request(app)
      .get("/v1/auditorias/tarefas/periodoInicio/20230501/periodoFim/20230510")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).not.toHaveLength(1);
    expect(res.body[2].descricao).toEqual(
      "Tarefa Criada| Teste Automatizado Postman"
    );
    expect(res.body[2]).toMatchObject(
      expect.objectContaining({
        id_tarefas: expect.any(Number),
        id_auditorias: expect.any(Number),
        data_hora_inicio: expect.any(String),
        descricao: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
  });

  it("Teste para inserir uma nova auditoria de ponto, deve retornar 200", async () => {
    const res = await request(app)
      .post("/v1/auditorias/pontos")
      .send({
        descricao: "Saida Normal Via JEST",
        data_hora_inicio: "2023-05-09 01:55:52",
        id_pontos: 1,
      })
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.descricao).toEqual("Saida Normal Via JEST");
    expect(res.body).toMatchObject(
      expect.objectContaining({
        id_auditorias: expect.any(Number),
        id_pontos: expect.any(Number),
        data_hora_inicio: expect.any(String),
        descricao: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
  });

  it("Teste para inserir uma nova auditoria de tarefas, deve retornar 200", async () => {
    const res = await request(app)
      .post("/v1/auditorias/tarefas")
      .send({
        descricao: "Tarefa Criada| Teste via JEST",
        data_hora_inicio: "2023-05-09T19:55:35.000Z",
        id_tarefas: 1,
      })
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.descricao).toEqual("Tarefa Criada| Teste via JEST");
    expect(res.body).toMatchObject(
      expect.objectContaining({
        id_auditorias: expect.any(Number),
        id_tarefas: expect.any(Number),
        data_hora_inicio: expect.any(String),
        descricao: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
  });
});
