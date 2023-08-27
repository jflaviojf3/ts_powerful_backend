const request = require ("supertest")
const app = require ('../api/server.js')

describe.skip('Testes dos endpoints de objetivos para um projetos', ()=>{

    var id_objetivos_criado = ''

    it('Teste todos os objetivos do projetos da organização, deve retornar 200', async ()=>{
        const res = await request(app)
        .get('/v1/projetos/1/objetivos')

        expect(res.statusCode).toEqual(200)
        expect(res.body).not.toHaveLength(1);
        expect(res.body[0].descricao).toEqual("Finalização Models")
        expect(res.body[0]).toMatchObject( expect.objectContaining({
            "id_objetivos": expect.any(Number),
            "marcado": expect.any(Number),
            "id_projetos": expect.any(Number),
            "descricao": expect.any(String),
            "createdAt": expect.any(String),
            "updatedAt": expect.any(String),
          }),
        );
    })

    it('Teste para criar um novo objetivo, deve retornar 200', async ()=>{
        const res = await request(app)
        .post('/v1/projetos/1/objetivos')
        .send({
            "descricao": "Criando um Objetivo para o Projeto",
            "marcado": 0
        })

        expect(res.statusCode).toEqual(200)
        expect(res.body.descricao).toEqual("Criando um Objetivo para o Projeto")
        expect(res.body.marcado).toEqual(0)
        expect(res.body).toMatchObject( expect.objectContaining({
            "id_objetivos": expect.any(Number),
            "marcado": expect.any(Number),
            "id_projetos": expect.any(String),
            "descricao": expect.any(String),
            "createdAt": expect.any(String),
            "updatedAt": expect.any(String),
          }),
        );
        id_objetivos_criado =  res.body.id_objetivos;
    })

    it('Teste para atualizar um objetivo que foi criado, deve retornar 200', async ()=>{
        const res = await request(app)
        .put(`/v1/projetos/1/objetivos/${id_objetivos_criado}`)
        .send({
            "descricao": "Atualizando objetivo de um projeto",
            "marcado": 1
        })

        expect(res.statusCode).toEqual(200)
        expect(res.body.descricao).toEqual("Atualizando objetivo de um projeto")
        expect(res.body.marcado).toEqual(1)
        expect(res.body).toMatchObject( expect.objectContaining({
            "id_objetivos": expect.any(Number),
            "marcado": expect.any(Number),
            "id_projetos": expect.any(Number),
            "descricao": expect.any(String),
            "createdAt": expect.any(String),
            "updatedAt": expect.any(String),
          }),
        );
    })

    it('Teste para deletar um objetivo que foi atualizado, deve retornar 200', async ()=>{
        const res = await request(app)
        .del(`/v1/projetos/1/objetivos/${id_objetivos_criado}`)

        expect(res.statusCode).toEqual(200)
        expect(res.body.mensagem).toEqual(`Id Objetivo ${id_objetivos_criado} deletado`)
    })

})