📚 API de Treinamento - Usuários e Alunos ainda em desenvolvimento...
Este projeto é uma API RESTful desenvolvida em Node.js usando Express e Sequelize ORM, com o objetivo de treinar os principais conceitos de criação de APIs para, futuramente, migrar para projetos em NestJS.

🚀 Tecnologias utilizadas
Node.js

Express

Sequelize

PostgreSQL (ou outro banco relacional compatível)

bcryptjs (criptografia de senhas)

dotenv (variáveis de ambiente)

Sucrase + Nodemon (para rodar com ES Modules no ambiente de desenvolvimento)

🏗️ Funcionalidades implementadas
Cadastro de usuários (User)

Cadastro de alunos (Aluno)

Validação de dados diretamente nos Models

Hash de senhas utilizando bcryptjs

Tratamento de erros

Padrão de estrutura MVC (Model - Controller - Route)

src/
├── config/
│   └── database.js     # Configurações de conexão com o banco de dados
├── controllers/
│   ├── HomeController.js
│   └── UserController.js
├── database/
│   └── index.js        # Inicialização da conexão com Sequelize
├── models/
│   ├── User.js
│   └── Aluno.js
├── routes/
│   └── homeRoutes.js   # Rotas principais da aplicação
├── app.js              # Inicialização da aplicação Express
└── server.js           # Arquivo para rodar o servidor

🛠️ Como rodar o projeto
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/api-treinamento.git
cd api-treinamento
Instale as dependências:

bash
Copiar
Editar
npm install
Configure as variáveis de ambiente:

Crie um arquivo .env na raiz do projeto:

bash
Copiar
Editar
DATABASE_URL=postgres://usuario:senha@localhost:5432/nome_do_banco
APP_PORT=3001
Configure seu banco de dados e rode as migrations (se necessário).

Inicie o servidor em modo de desenvolvimento:

bash
Copiar
Editar
npm run dev
(Usando Nodemon + Sucrase para suporte a ESModules)

⚠️ Observações
O campo de senha (password) é virtual e não é salvo diretamente no banco. Apenas o password_hash é persistido.

As validações de dados são feitas no Sequelize, e erros de validação são retornados em formato JSON.

🎯 Objetivo
Este projeto é um treinamento prático para reforçar:

Conceitos de APIs REST

Manipulação de dados com Sequelize

Validação de dados

Boas práticas de estruturação de projetos

Preparo para trabalhar futuramente com NestJS e Arquitetura Limpa.

✨ Futuras melhorias
Implementar autenticação com JWT

Adicionar testes automatizados (Jest)

Criar serviços (Services) para separar responsabilidades

Implementar DDD (Domain-Driven Design) básico

Migrar o projeto para NestJS com classes e decorators

Feito com para treinar e evoluir!
