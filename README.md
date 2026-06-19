#  Portal Escolar

## Sobre o Projeto

O Portal Escolar é um sistema desenvolvido para auxiliar professores no gerenciamento de turmas e atividades escolares.

O sistema permite:

* Realizar login
* Cadastrar turmas
* Listar turmas
* Excluir turmas
* Cadastrar atividades
* Listar atividades
* Fazer logout

---

# 🛠 Tecnologias Utilizadas

## Front-end

* HTML5
* CSS3
* JavaScript

## Back-end

* Node.js
* Express.js
* Prisma ORM

## Banco de Dados

* MySQL

---

#  Infraestrutura

## IDE Utilizada

* Visual Studio Code (VS Code)

## SGBD Utilizado

* MySQL 8.0
* MySQL Workbench

## Servidor de Aplicação

* Node.js

## Linguagens Utilizadas

* HTML5
* CSS3
* JavaScript

---

#  Estrutura do Projeto

```text
frontend/
│
├── index.html
├── login.html
├── dashboard.html
├── atividades.html
│
├── css/
│   └── style.css
│
└── js/
    ├── login.js
    ├── dashboard.js
    └── atividades.js

backend/
│
├── src/
│   ├── controllers/
│   ├── routes/
│   └── data/
│
├── prisma/
│   └── schema.prisma
│
└── server.js
```

---

#  Banco de Dados

Nome do banco:

```sql
turmas_db
```

Tabelas criadas:

* Professor
* Turma
* Atividade

Relacionamentos:

* Um professor pode ter várias turmas.
* Uma turma pertence a um professor.
* Uma turma pode ter várias atividades.
* Uma atividade pertence a uma turma.

---

#  Como Executar o Back-end

## 1. Instalar as dependências

```bash
npm install
```

## 2. Gerar o Prisma

```bash
npx prisma generate
```

## 3. Criar as tabelas

```bash
npx prisma db push
```

## 4. Iniciar o servidor

```bash
node server.js
```

Mensagem esperada:

```text
Online na porta 3000
```

---

#  Testando a API

Utilizar o Insomnia para testar as rotas.

## Login

```http
POST /professor/login
```

## Cadastrar Professor

```http
POST /professor/cadastrar
```

## Listar Professores

```http
GET /professor/listar
```

## Cadastrar Turma

```http
POST /turma/cadastrar
```

## Listar Turmas

```http
GET /turma/listar/:professorId
```

## Excluir Turma

```http
DELETE /turma/excluir/:id
```

## Cadastrar Atividade

```http
POST /atividade/cadastrar
```

## Listar Atividades

```http
GET /atividade/listar/:turmaId
```

---

# Como Executar o Front-end

## 1. Abrir a pasta frontend

## 2. Abrir o arquivo

```text
index.html
```

ou utilizar a extensão:

```text
Live Server
```

do Visual Studio Code.

---

#  Como Utilizar o Sistema

### Passo 1

Abrir a página inicial.

### Passo 2

Acessar a tela de login.

### Passo 3

Entrar com um professor cadastrado.
email: Robson@portalsesi.com
senha: Robson123

### Passo 4

Cadastrar uma nova turma.

### Passo 5

Visualizar as turmas cadastradas.

### Passo 6

Cadastrar atividades para a turma.

### Passo 7

Visualizar as atividades cadastradas.

### Passo 8

Realizar logout utilizando o botão "Sair".

---

#  Prints das Telas

Inserir os prints das seguintes telas:

* Tela Inicial
* Tela de Login
* Tela Principal do Professor
* Tela de Atividades
* Tela de Cadastro de Turma
* Tela de Cadastro de Atividade

---

#  Desenvolvido por

Lívia Morais

Projeto desenvolvido para a disciplina de Desenvolvimento de Sistemas.
