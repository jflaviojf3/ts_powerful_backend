const request = require ("supertest")
const app = require ('../api/server.js')

describe('Testes dos endpoints de projetos', ()=>{

    var id_projetos_criado = ''

    it('Teste para consultar um projeto de uma organização, deve retornar 200', async ()=>{
        const res = await request(app)
        .get(`/v1/organizacoes/1/projetos/1`)

        expect(res.statusCode).toEqual(200)
        expect(res.body.nome).toEqual("Desenvolvimento Backend")
        expect(res.body).toMatchObject( expect.objectContaining({
            "id_organizacoes": expect.any(Number),
            "id_projetos": expect.any(Number),
            "duracao_prevista": expect.any(Number),
            "id_clientes": expect.any(Number),
            "id_equipes": expect.any(Number),
            "nome": expect.any(String),
            "data_inicio": expect.any(String),
            "createdAt": expect.any(String),
            "updatedAt": expect.any(String),
          }),
        );
    })

    it('Teste para criar novos projetos de uma organização, deve retornar 200', async ()=>{
        const res = await request(app)
        .post('/v1/organizacoes/1/projetos')
        .send({
            "nome": "Projeto de Implantação",
            "data_inicio": "2023-05-08",
            "data_fim": "2023-05-08",
            "duracao_prevista": "1",
            "id_equipes": "1",
            "id_clientes": "1"
        })

        expect(res.statusCode).toEqual(200)
        expect(res.body.nome).toEqual("Projeto de Implantação")
        expect(res.body).toMatchObject( expect.objectContaining({
            "id_organizacoes": expect.any(String),
            "id_projetos": expect.any(Number),
            "duracao_prevista": expect.any(String),
            "id_clientes": expect.any(String),
            "id_equipes": expect.any(String),
            "nome": expect.any(String),
            "data_inicio": expect.any(String),
            "createdAt": expect.any(String),
            "updatedAt": expect.any(String),
          }),
        );
        id_projetos_criado =  res.body.id_projetos;
    })

    it('Teste para consultar todos os projetos da organização, deve retornar 200', async ()=>{
        const res = await request(app)
        .get('/v1/organizacoes/1/projetos')

        expect(res.statusCode).toEqual(200)
        expect(res.body).not.toHaveLength(1);
        expect(res.body[0].nome).toEqual("Desenvolvimento Backend")
        expect(res.body[0]).toMatchObject( expect.objectContaining({
            "id_organizacoes": expect.any(Number),
            "id_projetos": expect.any(Number),
            "duracao_prevista": expect.any(Number),
            "id_clientes": expect.any(Number),
            "id_equipes": expect.any(Number),
            "nome": expect.any(String),
            "data_inicio": expect.any(String),
            "createdAt": expect.any(String),
            "updatedAt": expect.any(String),
          }),
        );
    })

    it('Teste para atualizar um projeto que foi criado, deve retornar 200', async ()=>{
        const res = await request(app)
        .put(`/v1/organizacoes/1/projetos/${id_projetos_criado}`)
        .send({
            "nome": "Projeto de CI-CD"
        })

        expect(res.statusCode).toEqual(200)
        expect(res.body.nome).toEqual("Projeto de CI-CD")
        expect(res.body).toMatchObject( expect.objectContaining({
            "id_organizacoes": expect.any(Number),
            "id_projetos": expect.any(Number),
            "duracao_prevista": expect.any(Number),
            "id_clientes": expect.any(Number),
            "id_equipes": expect.any(Number),
            "nome": expect.any(String),
            "data_inicio": expect.any(String),
            "createdAt": expect.any(String),
            "updatedAt": expect.any(String),
          }),
        );
    })

    it('Teste para deletar um projeto que foi atualizado, deve retornar 200', async ()=>{
        const res = await request(app)
        .del(`/v1/organizacoes/1/projetos/${id_projetos_criado}`)

        expect(res.statusCode).toEqual(200)
        expect(res.body.mensagem).toEqual(`Id Projeto ${id_projetos_criado} deletado`)
    })

})