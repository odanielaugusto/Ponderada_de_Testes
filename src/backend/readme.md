# API Gallaudet

Esta é uma API backend construída com **Node.js**, **TypeScript**, **Express**, **PostgreSQL** e outras bibliotecas essenciais. A API está estruturada para fornecer um backend robusto e escalável, com autenticação via **JWT** e operações de banco de dados feitas através de repositórios.

## Arquitetura

A arquitetura da API segue o padrão **POO (Programação Orientada a Objetos)** e é dividida em várias camadas que se comunicam entre si:

- **Controllers**: São responsáveis por receber as requisições HTTP, validar os dados e passar para a camada de lógica de negócios.
- **Business (Serviços)**: Contêm a lógica de negócios da aplicação. Responsável por interagir com os repositórios e realizar as operações necessárias.
- **Repositories**: Fazem a interação com o banco de dados, utilizando o PostgreSQL.
- **Routes**: Definem as rotas da API e mapeiam para os métodos dos controllers.

Além disso, a autenticação da API é feita via **JWT (JSON Web Tokens)**, garantindo que apenas usuários autenticados possam acessar certas rotas da aplicação.

## Funcionalidades

- Registro de usuários
- Login com autenticação via JWT
- Proteção de rotas com verificação de token JWT
- Operações básicas de banco de dados com PostgreSQL

## Bibliotecas Utilizadas

### Dependências

- **express**: Framework minimalista para criar o servidor HTTP e definir as rotas da API.
- **jsonwebtoken**: Biblioteca para criação e verificação de **JWTs**. Usada para gerenciar a autenticação da API.
- **bcryptjs**: Usada para fazer o hash das senhas dos usuários, garantindo a segurança dos dados.
- **cors**: Middleware para permitir **CORS** (Cross-Origin Resource Sharing), permitindo que o frontend possa acessar a API de diferentes domínios.
- **dotenv**: Biblioteca para carregar variáveis de ambiente a partir de um arquivo `.env`, permitindo a configuração de parâmetros sensíveis como a chave secreta do JWT e credenciais do banco de dados.
- **pg**: Cliente para PostgreSQL, utilizado para fazer a comunicação entre a API e o banco de dados.

### Dependências de Desenvolvimento

- **@types/express**: Tipagens para o Express, necessárias para o desenvolvimento com TypeScript.
- **@types/node**: Tipagens para o Node.js, também necessárias para o desenvolvimento com TypeScript.
- **nodemon**: Ferramenta para reiniciar automaticamente o servidor sempre que houver alterações no código-fonte. Usado no modo de desenvolvimento.
- **ts-node**: Executa arquivos TypeScript diretamente, sem a necessidade de compilar manualmente para JavaScript.
- **typescript**: Compilador TypeScript, utilizado para compilar o código TypeScript para JavaScript.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte maneira:

```
src/
│
├── controllers/        # Contém os controllers para cada entidade/funcionalidade
│   └── AuthController.ts
│
├── business/           # Contém a lógica de negócios
│   └── UserBusiness.ts
│
├── repositories/       # Contém os repositórios para interação com o banco de dados
│   └── UserRepository.ts
│
├── routes/             # Define as rotas da API
│   └── authRoutes.ts
│
├── utils/              # Contém utilitários, como a lógica de autenticação
│   └── auth.ts
│
├── index.ts            # Arquivo principal que inicializa o servidor
├── tsconfig.json       # Configurações do TypeScript
└── .env                # Variáveis de ambiente
```

### **src/controllers**:
A camada de controllers recebe as requisições HTTP, valida os dados e encaminha para a lógica de negócios.

### **src/business**:
Contém a lógica de negócios. A camada de negócios é onde as regras da aplicação são executadas.

### **src/repositories**:
Interage diretamente com o banco de dados (PostgreSQL). Os repositórios fazem consultas SQL e retornam dados para os serviços de negócios.

### **src/routes**:
Define as rotas da API e as mapeia para os respectivos métodos dos controllers.

### **src/utils**:
Contém utilitários como o arquivo `auth.ts`, que gerencia a criação e validação do JWT.

## Como Rodar a Aplicação

### 1. Instalar as dependências:

Primeiro, instale as dependências utilizando o comando abaixo:

```bash
npm install
```

### 2. Criar o arquivo `.env`:

Crie um arquivo `.env` na raiz do seu projeto e adicione as variáveis de ambiente necessárias, como as credenciais do banco de dados e o segredo do JWT.

Exemplo de `.env`:

```
DB_HOST=localhost
DB_PORT=5432
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=seu_banco_de_dados
JWT_SECRET=seu_segredo_de_jwt
```

### 3. Rodar o servidor em modo de desenvolvimento:

Utilize o **nodemon** para rodar o servidor. Isso irá permitir que o servidor seja reiniciado automaticamente sempre que você fizer alterações no código-fonte.

```bash
npm run dev
```

### 4. Acessando a API:

O servidor estará rodando localmente, geralmente na URL `http://localhost:3000`, a menos que você tenha configurado uma porta diferente.

### 5. Testando as rotas:

- **Registrar um usuário**: `POST /auth/register` – Envie os dados de nome, email e senha no corpo da requisição.
- **Fazer login**: `POST /auth/login` – Envie o email e senha para obter um token JWT.
- **Rotas protegidas**: Para acessar rotas protegidas, envie o token JWT no cabeçalho `Authorization` como `Bearer <token>`.

## Considerações Finais

Esta API foi projetada para ser simples, escalável e fácil de entender. A estrutura de pastas facilita a separação de responsabilidades e a adição de novas funcionalidades no futuro.