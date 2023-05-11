const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API projeto TS_Powerful - TCC PUC Minas",
      version: "1.0.0",
      description: `Documentação da API do trabalho de conclusão de curso de Especialização de Desenvolvimento FullStack da universidade PUC Minas Virtual. <br>
        Aplicação de Gerenciamento de Tarefas e Pontos para controle das atividades durante expediente.`,
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Ambiente Local"
      },
    ],
    components: {
      schemas: {
        Usuarios: {
          type: "object",
          properties: {
            id_usuarios: {
              type: "integer",
              format: "int64",
            },
            nome: {
              type: "string",
            },
            sobrenome: {
              type: "string",
            },
            email: {
              type: "string",
            },
            senha: {
              type: "string",
            },
            ativo: {
              type: "boolean",
            },
            ddd: {
              type: "integer",
            },
            telefone: {
              type: "integer",
            },
            data_nascimento: {
              type: "string",
              format: "date",
            },
            cpf: {
              type: "string",
            },
            descricao: {
              type: "string",
            },
            foto: {
              type: "string",
              format: "byte",
            },
            cod_sexo: {
              type: "integer",
            },
            cod_perfil: {
              type: "integer",
            },
            id_cargos: {
              type: "integer",
            },
            id_organizacoes: {
              type: "integer",
            },
            createdAt: {
              type: "string",
              format: "date-time",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
            },
            deletedAt: {
              type: "string",
              format: "date-time",
            }
          },
          required: [
            "nome",
            "sobrenome",
            "email",
            "senha",
            "ativo"
          ],
          example: {
            id_usuarios: 1,
            nome: "Fulano",
            sobrenome: "de Tal",
            email: "fulano@example.com",
            senha: "123456",
            ativo: true,
            ddd: 11,
            telefone: 987654321,
            data_nascimento: "1990-01-01",
            cpf: "123.456.789-00",
            descricao: "Descrição do usuário",
            foto: "AQIDBA==",
            cod_sexo: 1,
            cod_perfil: 2,
            id_cargos: 3,
            id_organizacoes: 4,
            createdAt: "2023-05-09T12:34:56Z",
            updatedAt: "2023-05-09T12:34:56Z",
            deletedAt: null
          },
        },
        Parametros: {
          type: "object",
          properties: {
            id_tabGenerica: {
              type: "integer",
              format: "int64",
              description: "Identificador único da tabela genérica",
              example: 1,
            },
            id_propriedade: {
              type: "integer",
              description: "Identificador da propriedade",
              example: 1,
            },
            descricao_propriedade: {
              type: "string",
              description: "Descrição da propriedade",
              example: "Nome",
            },
            cod_propriedade: {
              type: "integer",
              description: "Código da propriedade",
              example: 100,
            },
            descricao_codigo: {
              type: "string",
              description: "Descrição do código da propriedade",
              example: "Código do nome",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "Data de criação da tabela genérica",
              example: "2023-05-09T12:34:56Z",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              description: "Data de atualização da tabela genérica",
              example: "2023-05-09T12:34:56Z",
            },
            deletedAt: {
              type: "string",
              format: "date-time",
            }
          },
          required: [
            "id_propriedade",
            "descricao_propriedade",
            "cod_propriedade",
            "descricao_codigo",
          ],
          example: {
            id_tabGenerica: 2,
            id_propriedade: 1,
            descricao_propriedade: "Sexo",
            cod_propriedade: 2,
            descricao_codigo: "Feminino",
            createdAt: "2023-05-09T12:34:56Z",
            updatedAt: "2023-05-09T12:34:56Z",
            deletedAt: null
          },
        },
        Cargos: {
          type: "object",
          properties: {
            id_cargos: {
              type: "integer",
              format: "int64",
              nullable: false,
              readOnly: true,
            },
            nome: {
              type: "string",
              nullable: false,
            },
            descricao_cargo: {
              type: "string",
            },
            data_inicio: {
              type: "string",
              format: "date",
            },
            data_fim: {
              type: "string",
              format: "date",
            },
            cod_categoria: {
              type: "integer",
              nullable: false,
            },
            createdAt: {
              type: "string",
              format: "date-time",
              nullable: false,
              readOnly: true,
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              nullable: false,
              readOnly: true,
            },
            deletedAt: {
              type: "string",
              format: "date-time",
            }
          },
          required: ["nome", "cod_categoria"],
          example: {
            id_cargos: 1,
            nome: "Gerente de Vendas",
            descricao_cargo: "Responsável pela equipe de vendas",
            data_inicio: "2022-01-01",
            data_fim: "2022-12-31",
            cod_categoria: 1,
            createdAt: "2023-05-09T12:34:56Z",
            updatedAt: "2023-05-09T12:34:56Z",
            deletedAt: null
          },
        },
        Organizacoes: {
          type: "object",
          properties: {
            id_organizacoes: {
              type: "integer",
              format: "int64",
              description: "Identificador único da organização",
              nullable: false,
              readOnly: true,
            },
            nome: {
              type: "string",
              description: "Nome da organização",
              example: "Minha Empresa",
              nullable: false,
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "Data de criação do registro",
              readOnly: true,
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              description: "Data da última atualização do registro",
              readOnly: true,
            },
            deletedAt: {
              type: "string",
              format: "date-time",
            }
          },
          required: ["nome"],
          example: {
            id_organizacoes: 1,
            nome: "Empresa de Exemplo",
            createdAt: "2023-05-09T12:34:56Z",
            updatedAt: "2023-05-09T12:34:56Z",
            deletedAt: null
          },
        },
        "Equipes": {
          "type": "object",
          "properties": {
            "id_equipes": {
              "type": "integer",
              "format": "int64",
              "nullable": false
            },
            "nome": {
              "type": "string",
              "nullable": false
            },
            "descricao": {
              "type": "string"
            },
            "data_inicio": {
              "type": "string",
              "format": "date",
              "nullable": false
            },
            "data_fim": {
              "type": "string",
              "format": "date"
            },
            "id_organizacoes": {
              "type": "integer",
              "format": "int64",
              "nullable": false
            },
            "createdAt": {
              "type": "string",
              "format": "date-time",
              "nullable": false
            },
            "updatedAt": {
              "type": "string",
              "format": "date-time",
              "nullable": false
            },
            deletedAt: {
              type: "string",
              format: "date-time",
            }
          },
          "required": [
            "nome",
            "data_inicio",
            "id_organizacoes",
          ],
          example: {
            id_equipes: 1,
            nome: "Equipes de Desenvolvimento Exemplo",
            descricao: "Descrição exemplo para Swagger",
            data_inicio: "2023-05-01",
            data_inicio: "2023-05-21",
            id_organizacoes: 1,
            createdAt: "2023-05-09T12:34:56Z",
            updatedAt: "2023-05-09T12:34:56Z",
            deletedAt: null
          },
        },
        "Clientes": {
          "type": "object",
          "properties": {
            "id_clientes": {
              "type": "integer",
              "format": "int32",
              "description": "ID do cliente",
              "readOnly": true
            },
            "nome": {
              "type": "string",
              "description": "Nome do cliente"
            },
            "data_inicio": {
              "type": "string",
              "format": "date",
              "description": "Data de início do relacionamento com o cliente"
            },
            "data_fim": {
              "type": "string",
              "format": "date",
              "description": "Data de término do relacionamento com o cliente, se aplicável"
            },
            "email": {
              "type": "string",
              "description": "Endereço de e-mail do cliente"
            },
            "descricao": {
              "type": "string",
              "description": "Descrição do cliente"
            },
            "cod_prioridade": {
              "type": "integer",
              "format": "int32",
              "description": "Código de prioridade do cliente",
              "minimum": 0,
              "maximum": 999,
              "default": 0
            },
            "createdAt": {
              "type": "string",
              "format": "date-time",
              "description": "Data e hora de criação do registro",
              "readOnly": true
            },
            "updatedAt": {
              "type": "string",
              "format": "date-time",
              "description": "Data e hora da última atualização do registro",
              "readOnly": true
            },
            deletedAt: {
              type: "string",
              format: "date-time",
            }
          },
          "required": [
            "nome",
            "data_inicio",
            "cod_prioridade",
          ],
          example: {
            id_equipes: 1,
            nome: "PUC Minas Virtual",
            descricao: "Analise, codificação, teste, implantação e treinamento do sistema para o cliente",
            data_inicio: "2023-05-01",
            data_fim: "2023-05-21",
            email: "atendimento@pucminas.com.br",
            cod_prioridade: 5,
            createdAt: "2023-05-09T12:34:56Z",
            updatedAt: "2023-05-09T12:34:56Z",
            deletedAt: null
          },
        },
        "Projetos": {
          "type": "object",
          "properties": {
            "id_projetos": {
              "type": "integer",
              "format": "int32",
              "autoIncrement": true,
              "primaryKey": true
            },
            "nome": {
              "type": "string"
            },
            "data_inicio": {
              "type": "string",
              "format": "date"
            },
            "data_fim": {
              "type": "string",
              "format": "date"
            },
            "duracao_prevista": {
              "type": "integer",
              "format": "int32"
            },
            "id_organizacoes": {
              "type": "integer",
              "format": "int32"
            },
            "id_clientes": {
              "type": "integer",
              "format": "int32"
            },
            "id_equipes": {
              "type": "integer",
              "format": "int32"
            },
            "createdAt": {
              "type": "string",
              "format": "date-time"
            },
            "updatedAt": {
              "type": "string",
              "format": "date-time"
            },
            deletedAt: {
              type: "string",
              format: "date-time",
            }
          },
          "required": [
            "nome",
            "data_inicio",
            "id_organizacoes",
            "id_clientes",
            "id_equipes",
          ],
          example: {
            id_projetos: 1,
            nome: "Desenvolvimento Backend",
            data_inicio: "2023-05-01",
            data_fim: "2023-05-21",
            duracao_prevista: 3,
            id_organizacoes: 1,
            id_equipes: 1,
            id_clientes: 1,
            createdAt: "2023-05-09T12:34:56Z",
            updatedAt: "2023-05-09T12:34:56Z",
            deletedAt: null
          },
        },
        "Tarefas": {
          "type": "object",
          "properties": {
            "id_tarefas": {
              "type": "integer",
              "format": "int64",
              "description": "ID da tarefa",
              "example": 1
            },
            "entrada": {
              "type": "integer",
              "format": "int64",
              "description": "ID de entrada",
              "example": 2
            },
            "descricao": {
              "type": "string",
              "description": "Descrição da tarefa"
            },
            "data_inicio": {
              "type": "string",
              "format": "date-time",
              "description": "Data de início da tarefa",
              "example": "2023-05-09T13:00:00Z"
            },
            "data_fim": {
              "type": "string",
              "format": "date-time",
              "description": "Data de conclusão da tarefa",
              "example": "2023-05-09T18:00:00Z"
            },
            "id_usuarios": {
              "type": "integer",
              "format": "int64",
              "description": "ID do usuário responsável pela tarefa",
              "example": 1
            },
            "id_projetos": {
              "type": "integer",
              "format": "int64",
              "description": "ID do projeto associado à tarefa",
              "example": 1
            },
            "createdAt": {
              "type": "string",
              "format": "date-time",
              "description": "Data de criação do registro",
              "example": "2023-05-09T13:00:00Z"
            },
            "updatedAt": {
              "type": "string",
              "format": "date-time",
              "description": "Data da última atualização do registro",
              "example": "2023-05-09T14:00:00Z"
            },
            deletedAt: {
              type: "string",
              format: "date-time",
            }
          },
          "required": [
            "entrada",
            "descricao",
            "data_inicio",
            "id_usuarios",
          ],
          example: {
            id_tarefas: 1,
            entrada : 1,
            descricao : "Fazendo atividade do backend",
            data_inicio : "2023-05-07 15:55:35",
            data_fim : "2023-05-07 16:00:23",
            id_usuarios : 1,
            id_projetos : 1,
            createdAt: "2023-05-09T12:34:56Z",
            updatedAt: "2023-05-09T12:34:56Z",
            deletedAt: null
          },
        },  
        "Pontos": {
          "type": "object",
          "properties": {
            "id_pontos": {
              "type": "integer",
              "format": "int64",
              "description": "ID do ponto gerado automaticamente."
            },
            "situacao": {
              "type": "string",
              "description": "Situação do ponto."
            },
            "hora_ponto": {
              "type": "string",
              "format": "date-time",
              "description": "Hora em que o ponto foi registrado."
            },
            "descricao": {
              "type": "string",
              "description": "Descrição do ponto."
            },
            "id_usuarios": {
              "type": "integer",
              "format": "int64",
              "description": "ID do usuário que registrou o ponto."
            },
            "createdAt": {
              "type": "string",
              "format": "date-time",
              "description": "Data de criação do registro do ponto."
            },
            "updatedAt": {
              "type": "string",
              "format": "date-time",
              "description": "Data da última atualização do registro do ponto."
            },
            deletedAt: {
              type: "string",
              format: "date-time",
            }
          },
          "required": [
            "situacao",
            "hora_ponto",
            "descricao",
            "id_usuarios",
          ],
          example: {
            id_pontos: 1,
            situacao: "Entrada",
            hora_ponto: "2023-05-07 10:30:00",
            descricao: "Entrada Normal",
            id_usuarios: 1,
            createdAt: "2023-05-09T12:34:56Z",
            updatedAt: "2023-05-09T12:34:56Z",
            deletedAt: null
          },
        },
        "Auditorias": {
          "type": "object",
          "properties": {
            "id_auditorias": {
              "type": "integer",
              "format": "int64",
              "readOnly": true
            },
            "descricao": {
              "type": "string",
              "nullable": false
            },
            "data_hora_inicio": {
              "type": "string",
              "format": "date-time",
              "nullable": false
            },
            "data_hora_fim": {
              "type": "string",
              "format": "date-time"
            },
            "id_tarefas": {
              "type": "integer",
              "format": "int64",
              "nullable": true
            },
            "id_pontos": {
              "type": "integer",
              "format": "int64",
              "nullable": true
            },
            "createdAt": {
              "type": "string",
              "format": "date-time",
              "readOnly": true
            },
            "updatedAt": {
              "type": "string",
              "format": "date-time",
              "readOnly": true
            },
            deletedAt: {
              type: "string",
              format: "date-time",
            }
          },
          "required": [
            "descricao",
            "data_hora_inicio"
          ],
          example: {
            id_auditorias: 1,
            descricao : "Tarefa Editada",
            data_hora_inicio : "2023-05-07 15:55:35",
            data_hora_fim : "2023-05-07 16:07:23",
            id_tarefas : 1,
            id_pontos : null,
            createdAt: "2023-05-09T12:34:56Z",
            updatedAt: "2023-05-09T12:34:56Z",
            deletedAt: null
          },
        },
        "Objetivos": {
          "type": "object",
          "properties": {
            "id_objetivos": {
              "type": "integer",
              "format": "int32",
              "description": "ID do objetivo",
              "example": 1
            },
            "descricao": {
              "type": "string",
              "description": "Descrição do objetivo",
              "example": "Concluir o projeto até o fim do mês",
              "nullable": true
            },
            "marcado": {
              "type": "integer",
              "format": "int32",
              "description": "Marcação do objetivo",
              "example": 1
            },
            "id_projetos": {
              "type": "integer",
              "format": "int32",
              "description": "ID do projeto associado ao objetivo",
              "example": 1,
              "nullable": true
            },
            "createdAt": {
              "type": "string",
              "format": "date-time",
              "description": "Data de criação do objetivo",
              "example": "2023-05-09T12:00:00Z"
            },
            "updatedAt": {
              "type": "string",
              "format": "date-time",
              "description": "Data de atualização do objetivo",
              "example": "2023-05-09T12:00:00Z"
            },
            deletedAt: {
              type: "string",
              format: "date-time",
            }
          },
          "required": [
            "descricao",
            "id_projetos"
          ],
          example: {
            id_objetivos: 1,
            descricao: "Finalizando Teste Automatizados",
            marcado: 0,
            id_projetos: 1,
            createdAt: "2023-05-09T12:34:56Z",
            updatedAt: "2023-05-09T12:34:56Z",
            deletedAt: null
          },
        },
        "EquipesUsuarios": {
          "type": "object",
          "properties": {
            "id_equipes_usuarios": {
              "type": "integer",
              "format": "int64",
              "nullable": false,
              "readOnly": true
            },
            "id_equipes": {
              "type": "integer",
              "nullable": false,
              "readOnly": false,
              "description": "ID da equipe relacionada",
              "example": 1
            },
            "id_usuarios": {
              "type": "integer",
              "nullable": false,
              "readOnly": false,
              "description": "ID do usuário relacionado",
              "example": 1
            },
            "createdAt": {
              "type": "string",
              "format": "date-time",
              "nullable": false,
              "readOnly": true,
              "description": "Data de criação do registro"
            },
            "updatedAt": {
              "type": "string",
              "format": "date-time",
              "nullable": false,
              "readOnly": true,
              "description": "Data de atualização do registro"
            },
            deletedAt: {
              type: "string",
              format: "date-time",
            }
          },
          "required": [
            "id_equipes_usuarios",
            "id_equipes",
            "id_usuarios"
          ],
          example: [
            {
              id_equipes_usuarios: 1,
              id_equipes: 1,
              id_usuarios: 1,
              createdAt: "2023-05-09T12:34:56Z",
              updatedAt: "2023-05-09T12:34:56Z",
              deletedAt: null
            },
            {
              id_equipes_usuarios: 2,
              id_equipes: 1,
              id_usuarios: 2,
              createdAt: "2023-05-09T12:34:56Z",
              updatedAt: "2023-05-09T12:34:56Z",
              deletedAt: null
            }
          ],
        },
      },
      requestBody: {
        Usuarios_put_post: {
          type: "object",
          properties: {
            nome: {
              type: "string",
            },
            sobrenome: {
              type: "string",
            },
            email: {
              type: "string",
            },
            senha: {
              type: "string",
            },
            ativo: {
              type: "boolean",
            },
            ddd: {
              type: "integer",
            },
            telefone: {
              type: "integer",
            },
            data_nascimento: {
              type: "string",
              format: "date",
            },
            cpf: {
              type: "string",
            },
            descricao: {
              type: "string",
            },
            foto: {
              type: "string",
              format: "byte",
            },
            cod_sexo: {
              type: "integer",
            },
            cod_perfil: {
              type: "integer",
            },
            id_cargos: {
              type: "integer",
            },
            id_organizacoes: {
              type: "integer",
            }
          },
          required: [
            "nome",
            "sobrenome",
            "email",
            "senha",
            "ativo",
          ],
          example: {
            nome: "Fulano",
            sobrenome: "de Tal",
            email: "fulano@example.com",
            senha: "123456",
            ativo: true,
            ddd: 11,
            telefone: 987654321,
            data_nascimento: "1990-01-01",
            cpf: "123.456.789-00",
            descricao: "Descrição do usuário",
            foto: "AQIDBA==",
            cod_sexo: 1,
            cod_perfil: 2,
            id_cargos: 1,
            id_organizacoes: 1
          },
        },
        Parametros_put_post: {
          type: "object",
          properties: {
            id_tabGenerica: {
              type: "integer",
              format: "int64",
              description: "Identificador único da tabela genérica",
              example: 1,
            },
            id_propriedade: {
              type: "integer",
              description: "Identificador da propriedade",
              example: 1,
            },
            descricao_propriedade: {
              type: "string",
              description: "Descrição da propriedade",
              example: "Nome",
            },
            cod_propriedade: {
              type: "integer",
              description: "Código da propriedade",
              example: 100,
            },
            descricao_codigo: {
              type: "string",
              description: "Descrição do código da propriedade",
              example: "Código do nome",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "Data de criação da tabela genérica",
              example: "2023-05-09T12:34:56Z",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              description: "Data de atualização da tabela genérica",
              example: "2023-05-09T12:34:56Z",
            },
          },
          required: [
            "id_propriedade",
            "descricao_propriedade",
            "cod_propriedade",
            "descricao_codigo"
          ],
          example: {
            id_propriedade: 1,
            descricao_propriedade: "Sexo",
            cod_propriedade: 3,
            descricao_codigo: "Outros",
          },
        },
        Cargos_put_post: {
          type: "object",
          properties: {
            id_cargos: {
              type: "integer",
              format: "int64",
              nullable: false,
              readOnly: true,
            },
            nome: {
              type: "string",
              nullable: false,
            },
            descricao_cargo: {
              type: "string",
            },
            data_inicio: {
              type: "string",
              format: "date",
            },
            data_fim: {
              type: "string",
              format: "date",
            },
            cod_categoria: {
              type: "integer",
              nullable: false,
            },
            createdAt: {
              type: "string",
              format: "date-time",
              nullable: false,
              readOnly: true,
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              nullable: false,
              readOnly: true,
            },
          },
          required: ["nome", "cod_categoria"],
          example: {
            nome: "Gerente de Vendas",
            descricao_cargo: "Responsável pela equipe de vendas",
            data_inicio: "2022-01-01",
            data_fim: "2022-12-31",
            cod_categoria: 1
          },
        },
        Organizacoes_put_post: {
          type: "object",
          properties: {
            id_organizacoes: {
              type: "integer",
              format: "int64",
              description: "Identificador único da organização",
              nullable: false,
              readOnly: true,
            },
            nome: {
              type: "string",
              description: "Nome da organização",
              example: "Minha Empresa",
              nullable: false,
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "Data de criação do registro",
              readOnly: true,
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              description: "Data da última atualização do registro",
              readOnly: true,
            },
          },
          required: ["nome"],
          example: {
            nome: "Empresa de Exemplo"
          },
        },
        "Equipes_put_post": {
          "type": "object",
          "properties": {
            "id_equipes": {
              "type": "integer",
              "format": "int64",
              "nullable": false
            },
            "nome": {
              "type": "string",
              "nullable": false
            },
            "descricao": {
              "type": "string"
            },
            "data_inicio": {
              "type": "string",
              "format": "date",
              "nullable": false
            },
            "data_fim": {
              "type": "string",
              "format": "date"
            },
            "id_organizacoes": {
              "type": "integer",
              "format": "int64",
              "nullable": false
            },
            "createdAt": {
              "type": "string",
              "format": "date-time",
              "nullable": false
            },
            "updatedAt": {
              "type": "string",
              "format": "date-time",
              "nullable": false
            }
          },
          "required": [
            "nome",
            "data_inicio",
            "id_organizacoes",
          ],
          example: {
            nome: "Equipes de Desenvolvimento Exemplo",
            descricao: "Descrição exemplo para Swagger",
            data_inicio: "2023-05-01",
            data_inicio: "2023-05-21"
          },
        },
        "Clientes_put_post": {
          "type": "object",
          "properties": {
            "id_clientes": {
              "type": "integer",
              "format": "int32",
              "description": "ID do cliente",
              "readOnly": true
            },
            "nome": {
              "type": "string",
              "description": "Nome do cliente"
            },
            "data_inicio": {
              "type": "string",
              "format": "date",
              "description": "Data de início do relacionamento com o cliente"
            },
            "data_fim": {
              "type": "string",
              "format": "date",
              "description": "Data de término do relacionamento com o cliente, se aplicável"
            },
            "email": {
              "type": "string",
              "description": "Endereço de e-mail do cliente"
            },
            "descricao": {
              "type": "string",
              "description": "Descrição do cliente"
            },
            "cod_prioridade": {
              "type": "integer",
              "format": "int32",
              "description": "Código de prioridade do cliente",
              "minimum": 0,
              "maximum": 999,
              "default": 0
            },
            "createdAt": {
              "type": "string",
              "format": "date-time",
              "description": "Data e hora de criação do registro",
              "readOnly": true
            },
            "updatedAt": {
              "type": "string",
              "format": "date-time",
              "description": "Data e hora da última atualização do registro",
              "readOnly": true
            }
          },
          "required": [
            "nome",
            "data_inicio",
            "cod_prioridade",
          ],
          example: {
            nome: "PUC Minas Virtual",
            descricao: "Analise, codificação, teste, implantação e treinamento do sistema para o cliente",
            data_inicio: "2023-05-01",
            data_fim: "2023-05-21",
            email: "atendimento@pucminas.com.br",
            cod_prioridade: 5
          },
        },
        "Projetos_put_post": {
          "type": "object",
          "properties": {
            "id_projetos": {
              "type": "integer",
              "format": "int32",
              "autoIncrement": true,
              "primaryKey": true
            },
            "nome": {
              "type": "string"
            },
            "data_inicio": {
              "type": "string",
              "format": "date"
            },
            "data_fim": {
              "type": "string",
              "format": "date"
            },
            "duracao_prevista": {
              "type": "integer",
              "format": "int32"
            },
            "id_organizacoes": {
              "type": "integer",
              "format": "int32"
            },
            "id_clientes": {
              "type": "integer",
              "format": "int32"
            },
            "id_equipes": {
              "type": "integer",
              "format": "int32"
            },
            "createdAt": {
              "type": "string",
              "format": "date-time"
            },
            "updatedAt": {
              "type": "string",
              "format": "date-time"
            }
          },
          "required": [
            "nome",
            "data_inicio",
            "id_organizacoes",
            "id_clientes",
            "id_equipes",
          ],
          example: {
            nome: "Desenvolvimento Backend",
            data_inicio: "2023-05-01",
            data_fim: "2023-05-21",
            duracao_prevista: 3,
            id_equipes: 1,
            id_clientes: 1
          },
        },
        "Tarefas_put_post": {
          "type": "object",
          "properties": {
            "id_tarefas": {
              "type": "integer",
              "format": "int64",
              "description": "ID da tarefa",
              "example": 1
            },
            "entrada": {
              "type": "integer",
              "format": "int64",
              "description": "ID de entrada",
              "example": 2
            },
            "descricao": {
              "type": "string",
              "description": "Descrição da tarefa"
            },
            "data_inicio": {
              "type": "string",
              "format": "date-time",
              "description": "Data de início da tarefa",
              "example": "2023-05-09T13:00:00Z"
            },
            "data_fim": {
              "type": "string",
              "format": "date-time",
              "description": "Data de conclusão da tarefa",
              "example": "2023-05-09T18:00:00Z"
            },
            "id_usuarios": {
              "type": "integer",
              "format": "int64",
              "description": "ID do usuário responsável pela tarefa",
              "example": 1
            },
            "id_projetos": {
              "type": "integer",
              "format": "int64",
              "description": "ID do projeto associado à tarefa",
              "example": 1
            },
            "createdAt": {
              "type": "string",
              "format": "date-time",
              "description": "Data de criação do registro",
              "example": "2023-05-09T13:00:00Z"
            },
            "updatedAt": {
              "type": "string",
              "format": "date-time",
              "description": "Data da última atualização do registro",
              "example": "2023-05-09T14:00:00Z"
            }
          },
          "required": [
            "entrada",
            "descricao",
            "data_inicio",
            "id_usuarios",
          ],
          example: {
            entrada : 1,
            descricao : "Fazendo atividade do backend",
            data_inicio : "2023-05-07 15:55:35",
            data_fim : "2023-05-07 16:00:23",
            id_projetos : 1
          },
        },  
        "Pontos_put_post": {
          "type": "object",
          "properties": {
            "id_pontos": {
              "type": "integer",
              "format": "int64",
              "description": "ID do ponto gerado automaticamente."
            },
            "situacao": {
              "type": "string",
              "description": "Situação do ponto."
            },
            "hora_ponto": {
              "type": "string",
              "format": "date-time",
              "description": "Hora em que o ponto foi registrado."
            },
            "descricao": {
              "type": "string",
              "description": "Descrição do ponto."
            },
            "id_usuarios": {
              "type": "integer",
              "format": "int64",
              "description": "ID do usuário que registrou o ponto."
            },
            "createdAt": {
              "type": "string",
              "format": "date-time",
              "description": "Data de criação do registro do ponto."
            },
            "updatedAt": {
              "type": "string",
              "format": "date-time",
              "description": "Data da última atualização do registro do ponto."
            }
          },
          "required": [
            "situacao",
            "hora_ponto",
            "descricao",
            "id_usuarios",
          ],
          example: {
            situacao: "Entrada",
            hora_ponto: "2023-05-07 10:30:00",
            descricao: "Entrada Normal"
          },
        },
        "Auditorias_put_post": {
          "type": "object",
          "properties": {
            "id_auditorias": {
              "type": "integer",
              "format": "int64",
              "readOnly": true
            },
            "descricao": {
              "type": "string",
              "nullable": false
            },
            "data_hora_inicio": {
              "type": "string",
              "format": "date-time",
              "nullable": false
            },
            "data_hora_fim": {
              "type": "string",
              "format": "date-time"
            },
            "id_tarefas": {
              "type": "integer",
              "format": "int64",
              "nullable": true
            },
            "id_pontos": {
              "type": "integer",
              "format": "int64",
              "nullable": true
            },
            "createdAt": {
              "type": "string",
              "format": "date-time",
              "readOnly": true
            },
            "updatedAt": {
              "type": "string",
              "format": "date-time",
              "readOnly": true
            }
          },
          "required": [
            "descricao",
            "data_hora_inicio"
          ],
          example: {
            descricao : "Tarefa Atualizada|",
            data_hora_inicio : "2023-05-07 15:55:35",
            data_hora_fim : "2023-05-07 16:07:23",
            id_tarefas : 1,
            id_pontos : null
          },
        },
        "Objetivos_put_post": {
          "type": "object",
          "properties": {
            "id_objetivos": {
              "type": "integer",
              "format": "int32",
              "description": "ID do objetivo",
              "example": 1
            },
            "descricao": {
              "type": "string",
              "description": "Descrição do objetivo",
              "example": "Concluir o projeto até o fim do mês",
              "nullable": true
            },
            "marcado": {
              "type": "integer",
              "format": "int32",
              "description": "Marcação do objetivo",
              "example": 1
            },
            "id_projetos": {
              "type": "integer",
              "format": "int32",
              "description": "ID do projeto associado ao objetivo",
              "example": 1,
              "nullable": true
            },
            "createdAt": {
              "type": "string",
              "format": "date-time",
              "description": "Data de criação do objetivo",
              "example": "2023-05-09T12:00:00Z"
            },
            "updatedAt": {
              "type": "string",
              "format": "date-time",
              "description": "Data de atualização do objetivo",
              "example": "2023-05-09T12:00:00Z"
            }
          },
          "required": [
            "descricao",
            "id_projetos"
          ],
          example: {
            descricao: "Finalizando Teste Automatizados",
            marcado: 0
          },
        },
        "EquipesUsuarios_put_post": {
          "type": "object",
          "properties": {
            "id_equipes_usuarios": {
              "type": "integer",
              "format": "int64",
              "nullable": false,
              "readOnly": true
            },
            "id_equipes": {
              "type": "integer",
              "nullable": false,
              "readOnly": false,
              "description": "ID da equipe relacionada",
              "example": 1
            },
            "id_usuarios": {
              "type": "integer",
              "nullable": false,
              "readOnly": false,
              "description": "ID do usuário relacionado",
              "example": 1
            },
            "createdAt": {
              "type": "string",
              "format": "date-time",
              "nullable": false,
              "readOnly": true,
              "description": "Data de criação do registro"
            },
            "updatedAt": {
              "type": "string",
              "format": "date-time",
              "nullable": false,
              "readOnly": true,
              "description": "Data de atualização do registro"
            }
          },
          "required": [
            "id_usuarios"
          ],
          example:
            {
              id_usuarios: 1
            },
        },
      },
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: [`${__dirname}/routes/v1/*.js`],
  //apis: ['../api/routes/v1/*.js'], // caminho dos arquivos com as rotas
};

module.exports = options;
