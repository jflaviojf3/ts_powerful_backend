const request = require("supertest");
const app = require("../api/server.js");
const { fazerLogin } = require("../api/utils.js");

describe("Testes dos endpoints de organizações", () => {
  let id_organizacoes_criado;
  let token;

  beforeAll(async () => {
    token = await fazerLogin();
  });

  it("Teste para consultar uma organização, deve retornar 200", async () => {
    const res = await request(app)
      .get(`/v1/organizacoes/1`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.nome).toEqual("JFPLtda");
    expect(res.body).toMatchObject(
      expect.objectContaining({
        id_organizacoes: expect.any(Number),
        nome: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
  });

  it("Teste para criar novas organizações, deve retornar 200", async () => {
    const res = await request(app)
      .post("/v1/organizacoes")
      .send({
        nome: "Empresa Teste",
      })
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.nome).toEqual("Empresa Teste");
    expect(res.body).toMatchObject(
      expect.objectContaining({
        id_organizacoes: expect.any(Number),
        nome: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
    id_organizacoes_criado = res.body.id_organizacoes;
  });

  it("Teste para consultar todas as organizações, deve retornar 200", async () => {
    const res = await request(app)
      .get("/v1/organizacoes")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).not.toHaveLength(1);
    expect(res.body[0].nome).toEqual("JFPLtda");
    expect(res.body[0]).toMatchObject(
      expect.objectContaining({
        id_organizacoes: expect.any(Number),
        nome: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
  });

  it("Teste para atualizar uma organização que foi criado, deve retornar 200", async () => {
    const res = await request(app)
      .put(`/v1/organizacoes/${id_organizacoes_criado}`)
      .send({
        nome: "Empresa Teste Atualizada",
      })
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.nome).toEqual("Empresa Teste Atualizada");
    expect(res.body).toMatchObject(
      expect.objectContaining({
        id_organizacoes: expect.any(Number),
        nome: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
  });

  it("Teste para deletar uma organização que foi atualizado, deve retornar 200", async () => {
    const res = await request(app)
      .del(`/v1/organizacoes/${id_organizacoes_criado}`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.mensagem).toEqual(
      `Id Organização ${id_organizacoes_criado} deletado`
    );
  });
});
