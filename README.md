# API REST Usando Arquitetura limpa e Teoria

### 1. Modelando a Entity User

- Essa entidade define toda estrutura que deve te rum usuário;
- Nesta entity é onde se encontra toda regra de negócio dessa entidade especifica;
- Deve ser modelada independente de frameworks e libs,ou seja, independente de terceiros;
- Nesta etapa então precisamos usar repository inMemory se necessario usar trasição de dados

OBS: 1 - Qualquer informação da Entidade so pode ser manipulada pela propria entidade (ex: metodos da entidade etc)
2 - Mas alteração da informação no banco de dados quem faz é o repositório

2. Criar uma Generic entity

Benefícios de usar uma classe base genérica para entidades
Reutilização de código:

- Geração de ID (UUID).
- Definição de propriedades.
- Métodos de serialização como toJSON().

O uso da herança permite:

- Garantir que todas as entidades tenham uma estrutura uniforme.
- Introduzir novas funcionalidades facilmente, como validações, métodos utilitários ou comportamentos comuns.
