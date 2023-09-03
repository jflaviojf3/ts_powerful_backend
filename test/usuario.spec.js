const request = require("supertest");
const app = require("../api/server.js");
const { fazerLogin } = require("../api/utils.js");

describe("Testes dos endpoints de usuarios", () => {
  let id_update_criado;
  let token;

  beforeAll(async () => {
    token = await fazerLogin();
  });

  it("Teste para retornar todos os usuários, deve retornar 200", async () => {
    const res = await request(app)
      .get("/v1/usuarios")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).not.toHaveLength(1);
  });

  it("Teste para retornar um usuário, deve retornar 200", async () => {
    const res = await request(app)
      .get("/v1/usuarios/1")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toMatchObject(
      expect.objectContaining({
        nome: expect.any(String),
        sobrenome: expect.any(String),
        email: expect.any(String),
        provedor: expect.any(String),
        ativo: expect.any(Number),
        ddd: expect.any(Number),
        telefone: expect.any(Number),
        data_nascimento: expect.any(String),
        cpf: expect.any(String),
        descricao: expect.any(String),
        cod_sexo: expect.any(Number),
        cod_perfil: expect.any(Number),
        id_cargos: expect.any(Number),
        id_organizacoes: expect.any(Number),
      })
    );
  });

  it("Teste para retornar criar o usuário, deve retornar 200", async () => {
    const res = await request(app)
      .post("/v1/usuarios")
      .send({
        nome: "Manoel",
        sobrenome: "Sousa",
        email: `msousa+${Math.random(0, 1000)}@gmail.com`,
        senha: "usuario123456",
      })
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toMatchObject(
      expect.objectContaining({
        id_usuarios: expect.any(Number),
        nome: expect.any(String),
        sobrenome: expect.any(String),
        email: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );

    id_update_criado = res.body.id_usuarios;
  });

  it("Teste para atualizar o usuário que foi criado, deve retornar 200", async () => {
    const res = await request(app)
      .put(`/v1/usuarios/${id_update_criado}`)
      .send({
        ddd: 99,
        telefone: 999999999,
        data_nascimento: "1996-03-17",
        cpf: "77788855522",
        descricao: "Analista de Sistema, Analista!",
      })
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.descricao).toEqual("Analista de Sistema, Analista!");
    /*expect(res.body).toMatchObject( expect.objectContaining({
            "nome": expect.any(String),
            "sobrenome": expect.any(String),
            "email": expect.any(String),
            "ativo": expect.any(Number),
            "ddd": expect.any(Number),
            "telefone": expect.any(Number),
            "data_nascimento": expect.any(String),
            "cpf": expect.any(String),
            "descricao": expect.any(String),
            "cod_sexo": expect.anything(),
            "foto": expect.anything(),
            "cod_perfil": expect.anything(),
            "id_cargos": expect.anything(),
            "id_organizacoes": expect.anything()
          }),
        );*/
  });

  it("Teste para deletar usuário que foi atualizado, deve retornar 200", async () => {
    const res = await request(app)
      .del(`/v1/usuarios/${id_update_criado}`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.mensagem).toEqual(`id ${id_update_criado} deletado`);
  });
});
