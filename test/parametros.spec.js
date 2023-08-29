const request = require("supertest");
const app = require("../api/server.js");
const { fazerLogin } = require("../api/utils.js");

describe("Testes dos endpoints de parametros", () => {
  let id_tabGenerica_criada;
  let token;

  beforeAll(async () => {
    token = await fazerLogin();
  });

  it("Teste para criar novo parametro, deve retornar 200", async () => {
    const res = await request(app)
      .post("/v1/parametros")
      .send({
        id_propriedade: 5,
        descricao_propriedade: "Novo Parametro",
        cod_propriedade: 1,
        descricao_codigo: "Codigo Parametro Criado",
      })
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.descricao_codigo).toEqual("Codigo Parametro Criado");
    expect(res.body).toMatchObject(
      expect.objectContaining({
        id_tabGenerica: expect.any(Number),
        id_propriedade: expect.any(Number),
        cod_propriedade: expect.any(Number),
        descricao_propriedade: expect.any(String),
        descricao_codigo: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
    id_tabGenerica_criada = res.body.id_tabGenerica;
  });

  it("Teste para consultar todos os parametros, deve retornar 200", async () => {
    const res = await request(app)
      .get("/v1/parametros")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).not.toHaveLength(1);
    expect(res.body[res.body.length - 1].descricao_propriedade).toEqual(
      "Novo Parametro"
    );
    expect(res.body[0]).toMatchObject(
      expect.objectContaining({
        id_tabGenerica: expect.any(Number),
        id_propriedade: expect.any(Number),
        cod_propriedade: expect.any(Number),
        descricao_propriedade: expect.any(String),
        descricao_codigo: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
  });

  it("Teste para consultar lista de propriedade, deve retornar 200", async () => {
    const res = await request(app)
      .get("/v1/parametros/propriedade/5")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).not.toHaveLength(1);
    expect(res.body[0].descricao_propriedade).toEqual("Novo Parametro");
    expect(res.body[0]).toMatchObject(
      expect.objectContaining({
        id_tabGenerica: expect.any(Number),
        id_propriedade: expect.any(Number),
        cod_propriedade: expect.any(Number),
        descricao_propriedade: expect.any(String),
        descricao_codigo: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
  });

  it("Teste para consultar um parametro, deve retornar 200", async () => {
    const res = await request(app)
      .get(`/v1/parametros/${id_tabGenerica_criada}`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.descricao_propriedade).toEqual("Novo Parametro");
    expect(res.body).toMatchObject(
      expect.objectContaining({
        id_tabGenerica: expect.any(Number),
        id_propriedade: expect.any(Number),
        cod_propriedade: expect.any(Number),
        descricao_propriedade: expect.any(String),
        descricao_codigo: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
  });

  it("Teste para atualizar o usuário que foi criado, deve retornar 200", async () => {
    const res = await request(app)
      .put(`/v1/parametros/${id_tabGenerica_criada}`)
      .send({
        descricao_codigo: "Codigo Parametro Atualizado",
      })
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.descricao_codigo).toEqual("Codigo Parametro Atualizado");
    expect(res.body.cod_propriedade).toEqual(1);
    expect(res.body.descricao_propriedade).toEqual("Novo Parametro");
    expect(res.body).toMatchObject(
      expect.objectContaining({
        id_tabGenerica: expect.any(Number),
        id_propriedade: expect.any(Number),
        cod_propriedade: expect.any(Number),
        descricao_propriedade: expect.any(String),
        descricao_codigo: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
  });

  it("Teste para deletar parametro que foi atualizado, deve retornar 200", async () => {
    const res = await request(app)
      .del(`/v1/parametros/${id_tabGenerica_criada}`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.mensagem).toEqual(
      `Id parametro ${id_tabGenerica_criada} deletado`
    );
  });
});
