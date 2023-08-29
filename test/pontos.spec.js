const request = require("supertest");
const app = require("../api/server.js");
const { fazerLogin } = require("../api/utils.js");

describe("Testes dos endpoints de pontos do usuario", () => {
  let id_ponto_criado;
  let token;

  beforeAll(async () => {
    token = await fazerLogin();
  });

  it("Teste consultar um ponto de usuario, deve retornar 200", async () => {
    const res = await request(app)
      .get("/v1/usuarios/1/pontos/1")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.id_pontos).toEqual(1);
    expect(res.body.id_usuarios).toEqual(1);
    expect(res.body.situacao).toEqual("Entrada");
    expect(res.body).toMatchObject(
      expect.objectContaining({
        id_usuarios: expect.any(Number),
        id_pontos: expect.any(Number),
        situacao: expect.any(String),
        hora_ponto: expect.any(String),
        descricao: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
  });

  it("Teste consulta pontos do dia buscando dia atual, deve retornar 200", async () => {
    const res = await request(app)
      .get("/v1/usuarios/1/pontosDia/20230507")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).not.toHaveLength(1);
    expect(res.body[0].descricao).toEqual("Entrada Normal");
    expect(res.body[0]).toMatchObject(
      expect.objectContaining({
        id_usuarios: expect.any(Number),
        id_pontos: expect.any(Number),
        situacao: expect.any(String),
        hora_ponto: expect.any(String),
        descricao: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
  });

  it("Teste consulta pontos do dia buscando por periodo, deve retornar 200", async () => {
    const res = await request(app)
      .get("/v1/usuarios/1/pontoInicio/20230501/pontoFim/20230510")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).not.toHaveLength(1);
    expect(res.body[0].descricao).toEqual("Entrada Normal");
    expect(res.body[0]).toMatchObject(
      expect.objectContaining({
        id_usuarios: expect.any(Number),
        id_pontos: expect.any(Number),
        situacao: expect.any(String),
        hora_ponto: expect.any(String),
        descricao: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
  });

  it("Teste consulta todos os pontos do usuário, deve retornar 200", async () => {
    const res = await request(app)
      .get("/v1/usuarios/1/pontos")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).not.toHaveLength(1);
    expect(res.body[0].situacao).toEqual("Entrada");
    expect(res.body[0].hora_ponto).toEqual("2023-05-07 10:30:00");
    expect(res.body[0].descricao).toEqual("Entrada Normal");
    expect(res.body[0]).toMatchObject(
      expect.objectContaining({
        id_usuarios: expect.any(Number),
        id_pontos: expect.any(Number),
        situacao: expect.any(String),
        hora_ponto: expect.any(String),
        descricao: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
  });

  it("Teste para inserir um novo ponto para o usuario 1, deve retornar 200", async () => {
    const res = await request(app)
      .post("/v1/usuarios/1/pontos")
      .send({
        situacao: "Saida Almoço",
        hora_ponto: "2023-05-08 18:55:52",
        descricao: "Saida Almoço Normal",
      })
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.descricao).toEqual("Saida Almoço Normal");
    expect(res.body).toMatchObject(
      expect.objectContaining({
        id_usuarios: expect.any(String),
        id_pontos: expect.any(Number),
        situacao: expect.any(String),
        hora_ponto: expect.any(String),
        descricao: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
    id_ponto_criado = res.body.id_pontos;
  });

  it("Teste para atualizar uma descrição de ponto do usuário 1, deve retornar 200", async () => {
    const res = await request(app)
      .put(`/v1/usuarios/1/pontos/${id_ponto_criado}`)
      .send({
        situacao: "Saida Almoço",
        hora_ponto: "2023-05-08 15:55:52",
        descricao: "Saida Almoço Alterado Erro ao bater ponto",
      })
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.situacao).toEqual("Saida Almoço");
    expect(res.body.hora_ponto).toEqual("2023-05-08 15:55:52");
    expect(res.body.descricao).toEqual(
      "Saida Almoço Alterado Erro ao bater ponto"
    );
    expect(res.body).toMatchObject(
      expect.objectContaining({
        id_usuarios: expect.any(Number),
        id_pontos: expect.any(Number),
        situacao: expect.any(String),
        hora_ponto: expect.any(String),
        descricao: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
  });

  it("Teste para deletar usuário que foi atualizado, deve retornar 200", async () => {
    const res = await request(app)
      .del(`/v1/usuarios/1/pontos/${id_ponto_criado}`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.mensagem).toEqual(`Id ponto ${id_ponto_criado} deletado`);
  });
});
