const request = require ("supertest")
const app = require ('../api/server.js')

describe('Testes dos endpoints de atribuicao a um cargo', ()=>{

    var id_atribuicao_criado = ''

    it('Teste para consultar todas atribuições de um cargo, deve retornar 200', async ()=>{
        const res = await request(app)
        .get(`/v1/cargos/1/atribuicoes`)

        expect(res.statusCode).toEqual(200)
        expect(res.body).not.toHaveLength(1);
        expect(res.body[0].ativo).toEqual(1)
        expect(res.body[0]).toMatchObject( expect.objectContaining({
            "id_atribuicoes": expect.any(Number),
            "id_cargos": expect.any(Number),
            "ativo": expect.any(Number),
            "descricao": expect.any(String),
            "createdAt": expect.any(String),
            "updatedAt": expect.any(String),
          }),
        );
    })

    it('Teste para criar uma nova atribuição ao cargo, deve retornar 200', async ()=>{
        const res = await request(app)
        .post('/v1/cargos/1/atribuicoes')
        .send({
            "descricao": "Nova Atribuicao para o Cargo",
            "ativo": 1
        })

        expect(res.statusCode).toEqual(200)
        expect(res.body.descricao).toEqual("Nova Atribuicao para o Cargo")
        expect(res.body).toMatchObject( expect.objectContaining({
            "id_atribuicoes": expect.any(Number),
            "id_cargos": expect.any(String),
            "ativo": expect.any(Number),
            "descricao": expect.any(String),
            "createdAt": expect.any(String),
            "updatedAt": expect.any(String),
          }),
        );
        id_atribuicao_criado =  res.body.id_atribuicoes;
    })

    it('Teste para atualizar uma atribuição ao cargo que foi criado, deve retornar 200', async ()=>{
        const res = await request(app)
        .put(`/v1/cargos/1/atribuicoes/${id_atribuicao_criado}`)
        .send({
            "descricao": "Finalizando Atribuicao",
            "ativo": 0
        })

        expect(res.statusCode).toEqual(200)
        expect(res.body.descricao).toEqual("Finalizando Atribuicao")
        expect(res.body.ativo).toEqual(0)
        expect(res.body).toMatchObject( expect.objectContaining({
            "id_atribuicoes": expect.any(Number),
            "id_cargos": expect.any(Number),
            "ativo": expect.any(Number),
            "descricao": expect.any(String),
            "createdAt": expect.any(String),
            "updatedAt": expect.any(String),
          }),
        );
    })

    it('Teste para deletar uma tribuição de um cargo que foi atualizado, deve retornar 200', async ()=>{
        const res = await request(app)
        .del(`/v1/cargos/1/atribuicoes/${id_atribuicao_criado}`)

        expect(res.statusCode).toEqual(200)
        expect(res.body.mensagem).toEqual(`Id atribuicao ${id_atribuicao_criado} deletado`)
    })

})