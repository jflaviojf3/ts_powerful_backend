const request = require("supertest");
const app = require("../api/server.js");
const { fazerLogin } = require("../api/utils.js");

describe("Testes dos endpoints de equips", () => {
  let id_equipes_criado;
  let id_equipeUsuario1_criado;
  let id_equipeUsuario2_criado;
  let token;

  beforeAll(async () => {
    token = await fazerLogin();
  });

  it("Teste para consultar uma equipe de uma organização, deve retornar 200", async () => {
    const res = await request(app)
      .get(`/v1/organizacoes/1/equipes/1`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.nome).toEqual("Desenvolvimento FullStack");
    expect(res.body).toMatchObject(
      expect.objectContaining({
        id_organizacoes: expect.any(Number),
        id_equipes: expect.any(Number),
        nome: expect.any(String),
        descricao: expect.any(String),
        data_inicio: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
  });

  it("Teste para criar nova equipe em uma organização, deve retornar 200", async () => {
    const res = await request(app)
      .post("/v1/organizacoes/1/equipes")
      .send({
        nome: "Desenvolvimento DevOps",
        descricao: "Preparando A infra estrutura da aplicação",
        data_inicio: "2023-05-08",
        data_fim: null,
      })
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.nome).toEqual("Desenvolvimento DevOps");
    expect(res.body).toMatchObject(
      expect.objectContaining({
        id_organizacoes: expect.any(String),
        id_equipes: expect.any(Number),
        nome: expect.any(String),
        descricao: expect.any(String),
        data_inicio: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
    id_equipes_criado = res.body.id_equipes;
  });

  it("Teste para consultar todas as equipes de uma organização, deve retornar 200", async () => {
    const res = await request(app)
      .get("/v1/organizacoes/1/equipes")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).not.toHaveLength(1);
    expect(res.body[0].nome).toEqual("Desenvolvimento FullStack");
    expect(res.body[0]).toMatchObject(
      expect.objectContaining({
        id_organizacoes: expect.any(Number),
        id_equipes: expect.any(Number),
        nome: expect.any(String),
        descricao: expect.any(String),
        data_inicio: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
  });

  it("Teste para atualizar uma equipe da organização que foi criado, deve retornar 200", async () => {
    const res = await request(app)
      .put(`/v1/organizacoes/1/equipes/${id_equipes_criado}`)
      .send({
        nome: "Equipe de Infra e DevOps",
      })
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.nome).toEqual("Equipe de Infra e DevOps");
    expect(res.body).toMatchObject(
      expect.objectContaining({
        id_organizacoes: expect.any(Number),
        id_equipes: expect.any(Number),
        nome: expect.any(String),
        descricao: expect.any(String),
        data_inicio: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
  });

  it("Teste para adicionar um usuário id 1 a nova equipe criada, deve retornar 200", async () => {
    const res = await request(app)
      .post(`/v1/equipes/${id_equipes_criado}/usuarios/`)
      .send({
        id_usuarios: 1,
      })
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.id_usuarios).toEqual(1);
    expect(res.body.id_equipes).toEqual(`${id_equipes_criado}`);
    expect(res.body).toMatchObject(
      expect.objectContaining({
        id_equipes_usuarios: expect.any(Number),
        id_usuarios: expect.any(Number),
        id_equipes: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );

    id_equipeUsuario1_criado = res.body.id_equipes_usuarios;
  });

  it("Teste para adicionar um usuário id 2 a nova equipe criada, deve retornar 200", async () => {
    const res = await request(app)
      .post(`/v1/equipes/${id_equipes_criado}/usuarios/`)
      .send({
        id_usuarios: 2,
      })
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.id_usuarios).toEqual(2);
    expect(res.body.id_equipes).toEqual(`${id_equipes_criado}`);
    expect(res.body).toMatchObject(
      expect.objectContaining({
        id_equipes_usuarios: expect.any(Number),
        id_usuarios: expect.any(Number),
        id_equipes: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );

    id_equipeUsuario2_criado = res.body.id_equipes_usuarios;
  });

  it("Teste para consultar todas os usuários de uma equipe, deve retornar 200", async () => {
    const res = await request(app)
      .get(`/v1/equipes/${id_equipes_criado}/usuarios/`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).not.toHaveLength(1);
    expect(res.body[0].id_equipes).toEqual(id_equipes_criado);
    expect(res.body[0].id_usuarios).toEqual(1);
    expect(res.body[1].id_usuarios).toEqual(2);
    expect(res.body[0]).toMatchObject(
      expect.objectContaining({
        id_equipes_usuarios: expect.any(Number),
        id_equipes: expect.any(Number),
        id_usuarios: expect.any(Number),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
  });

  it("Teste para deletar um usuario id 1 da equipe, deve retornar 200", async () => {
    const res = await request(app)
      .del(`/v1/equipes/${id_equipes_criado}/usuarios/1`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.mensagem).toEqual(
      `Id EquipeUsuario ${id_equipeUsuario1_criado} deletado`
    );
  });

  it("Teste para deletar um usuario id 2 da equipe, deve retornar 200", async () => {
    const res = await request(app)
      .del(`/v1/equipes/${id_equipes_criado}/usuarios/2`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.mensagem).toEqual(
      `Id EquipeUsuario ${id_equipeUsuario2_criado} deletado`
    );
  });

  it("Teste para deletar uma equipe, deve retornar 200", async () => {
    const res = await request(app)
      .del(`/v1/organizacoes/1/equipes/${id_equipes_criado}`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.mensagem).toEqual(
      `Id Equipe ${id_equipes_criado} deletado`
    );
  });
});
