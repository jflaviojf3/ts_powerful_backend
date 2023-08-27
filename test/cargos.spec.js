const request = require ("supertest")
const app = require ('../api/server.js')

describe('Testes dos endpoints de cargos', ()=>{

    var id_cargos_criado = ''

    it('Teste para consultar um cargo, deve retornar 200', async ()=>{
        const res = await request(app)
        .get(`/v1/cargos/1`)

        expect(res.statusCode).toEqual(200)
        expect(res.body.nome).toEqual("Analista de Sistema")
        expect(res.body).toMatchObject( expect.objectContaining({
            "id_cargos": expect.any(Number),
            "cod_categoria": expect.any(Number),
            "nome": expect.any(String),
            "descricao_cargo": expect.any(String),
            "data_inicio": expect.any(String),
            "createdAt": expect.any(String),
            "updatedAt": expect.any(String),
          }),
        );
    })

    it('Teste para criar novo cargo, deve retornar 200', async ()=>{
        const res = await request(app)
        .post('/v1/cargos')
        .send({
            "nome": "Analista de Qualidade",
            "descricao_cargo": "Cargo necessário para realização dos testes nos sistemas e qualidade no desenvolvimento",
            "cod_categoria": 3,
            "data_inicio": "2023-05-01"
        })

        expect(res.statusCode).toEqual(200)
        expect(res.body.nome).toEqual("Analista de Qualidade")
        expect(res.body).toMatchObject( expect.objectContaining({
            "id_cargos": expect.any(Number),
            "cod_categoria": expect.any(Number),
            "nome": expect.any(String),
            "descricao_cargo": expect.any(String),
            "data_inicio": expect.any(String),
            "createdAt": expect.any(String),
            "updatedAt": expect.any(String),
          }),
        );
        id_cargos_criado =  res.body.id_cargos;
    })

    it('Teste para consultar todos os cargos, deve retornar 200', async ()=>{
        const res = await request(app)
        .get('/v1/cargos')

        expect(res.statusCode).toEqual(200)
        expect(res.body).not.toHaveLength(1);
        expect(res.body[0].nome).toEqual("Analista de Sistema")
        expect(res.body[0]).toMatchObject( expect.objectContaining({
            "id_cargos": expect.any(Number),
            "cod_categoria": expect.any(Number),
            "nome": expect.any(String),
            "descricao_cargo": expect.any(String),
            "data_inicio": expect.any(String),
            "createdAt": expect.any(String),
            "updatedAt": expect.any(String),
          }),
        );
    })

    it('Teste para atualizar o cargo que foi criado, deve retornar 200', async ()=>{
        const res = await request(app)
        .put(`/v1/cargos/${id_cargos_criado}`)
        .send({
            "nome": "Assegurador de Qualidade"
        })

        expect(res.statusCode).toEqual(200)
        expect(res.body.nome).toEqual("Assegurador de Qualidade")
        expect(res.body.cod_categoria).toEqual(3)
        expect(res.body.data_fim).toEqual(null)
        expect(res.body).toMatchObject( expect.objectContaining({
            "id_cargos": expect.any(Number),
            "cod_categoria": expect.any(Number),
            "nome": expect.any(String),
            "descricao_cargo": expect.any(String),
            "data_inicio": expect.any(String),
            "createdAt": expect.any(String),
            "updatedAt": expect.any(String),
          }),
        );
    })

    it('Teste para deletar cargo que foi atualizado, deve retornar 200', async ()=>{
        const res = await request(app)
        .del(`/v1/cargos/${id_cargos_criado}`)

        expect(res.statusCode).toEqual(200)
        expect(res.body.mensagem).toEqual(`Id cargo ${id_cargos_criado} deletado`)
    })

})