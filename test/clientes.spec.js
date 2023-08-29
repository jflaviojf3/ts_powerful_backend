const request = require("supertest");
const app = require("../api/server.js");
const { fazerLogin } = require("../api/utils.js");

describe("Testes dos endpoints de clientes", () => {
  let id_cliente_criado;
  let token;

  beforeAll(async () => {
    token = await fazerLogin();
  });

  it("Teste para consultar um cliente, deve retornar 200", async () => {
    const res = await request(app)
      .get(`/v1/clientes/1`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.nome).toEqual("PUC Minas Virtual");
    expect(res.body.descricao).toEqual(
      "Analise, codificação, teste, implantação e treinamento do sistema para o cliente"
    );
    expect(res.body.cod_prioridade).toEqual(5);
    expect(res.body).toMatchObject(
      expect.objectContaining({
        id_clientes: expect.any(Number),
        cod_prioridade: expect.any(Number),
        nome: expect.any(String),
        descricao: expect.any(String),
        data_inicio: expect.any(String),
        data_fim: expect.any(String),
        email: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
  });

  it("Teste para criar novo cliente, deve retornar 200", async () => {
    const res = await request(app)
      .post("/v1/clientes")
      .send({
        nome: "Novo Cliente AutoJEST",
        data_inicio: "2023-05-01",
        data_fim: "2023-07-01",
        email: "novoClienteJest@gmail.com",
        descricao:
          "Descrição para um novo cliente criado via Automatizado no JEST",
        cod_prioridade: 3,
      })
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.nome).toEqual("Novo Cliente AutoJEST");
    expect(res.body.email).toEqual("novoClienteJest@gmail.com");
    expect(res.body.descricao).toEqual(
      "Descrição para um novo cliente criado via Automatizado no JEST"
    );
    expect(res.body.cod_prioridade).toEqual(3);
    expect(res.body).toMatchObject(
      expect.objectContaining({
        id_clientes: expect.any(Number),
        cod_prioridade: expect.any(Number),
        nome: expect.any(String),
        descricao: expect.any(String),
        data_inicio: expect.any(String),
        data_fim: expect.any(String),
        email: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
    id_cliente_criado = res.body.id_clientes;
  });

  it("Teste para consultar todos os clientes, deve retornar 200", async () => {
    const res = await request(app)
      .get("/v1/clientes")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).not.toHaveLength(1);
    expect(res.body[0].nome).toEqual("PUC Minas Virtual");
    expect(res.body[0]).toMatchObject(
      expect.objectContaining({
        id_clientes: expect.any(Number),
        cod_prioridade: expect.any(Number),
        nome: expect.any(String),
        descricao: expect.any(String),
        data_inicio: expect.any(String),
        data_fim: expect.any(String),
        email: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
  });

  it("Teste para atualizar o cliente que foi criado, deve retornar 200", async () => {
    const res = await request(app)
      .put(`/v1/clientes/${id_cliente_criado}`)
      .send({
        nome: "Cliente Atualizado",
        email: "clienteAtualizado@gmail.com",
        cod_prioridade: 5,
      })
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.nome).toEqual("Cliente Atualizado");
    expect(res.body.data_fim).toEqual("2023-07-01");
    expect(res.body.cod_prioridade).toEqual(5);
    expect(res.body).toMatchObject(
      expect.objectContaining({
        id_clientes: expect.any(Number),
        cod_prioridade: expect.any(Number),
        nome: expect.any(String),
        descricao: expect.any(String),
        data_inicio: expect.any(String),
        data_fim: expect.any(String),
        email: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
  });

  it("Teste para deletar cliente que foi atualizado, deve retornar 200", async () => {
    const res = await request(app)
      .del(`/v1/clientes/${id_cliente_criado}`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.mensagem).toEqual(
      `Id Cliente ${id_cliente_criado} deletado`
    );
  });
});
