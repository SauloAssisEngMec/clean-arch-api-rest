# API REST Usando Arquitetura limpa

### 1. Modelando a Entity User

- Essa entidade define toda estrutura que deve te rum usuário;
- Nesta entity é onde se encontra toda regra de negócio dessa entidade especifica;
- Deve ser modelada independente de frameworks e libs,ou seja, independente de terceiros;
- Nesta etapa então precisamos usar repository inMemory se necessario usar trasição de dados

OBS: 1 - Qualquer informação da Entidade so pode ser manipulada pela propria entidade (ex: metodos da entidade etc)
2 - Mas alteração da informação no banco de dados quem faz é o repositório
