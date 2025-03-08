# Backend

Este é o repositório do backend do projeto. Ele utiliza tecnologias como **Fastify**, **Prisma**, **TypeScript** e outras para fornecer uma API robusta e escalável.

## 🚀 Como rodar o projeto

Siga os passos abaixo para configurar e executar o projeto localmente.

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/) (gerenciador de pacotes)
- [Git](https://git-scm.com/) (para clonar o repositório)
- [Prisma](https://www.prisma.io/) (já incluído como dependência)

### Passo 1: Clonar o repositório

Clone o repositório para o seu ambiente local:

```bash
git clone https://github.com/VictorMattosOW/divisao-contas.git
cd divisao-contas/backend
``` 
### Passo 2: Instalar dependências
Instale as dependências do projeto usando npm ou Yarn:
```bash
npm install
# ou
yarn install
```

### Passo 3: Configurar variáveis de ambiente
Crie um arquivo .env na raiz do projeto e adicione as variáveis de ambiente necessárias. Você pode usar o arquivo .env.example como modelo (se existir).

Exemplo de .env:

### Exemplo de .env:
```bash
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
JWT_SECRET="sua_chave_secreta_aqui"
``` 

### Passo 4: Configurar o banco de dados
Execute o comando abaixo para gerar as migrações do Prisma e aplicar as mudanças no banco de dados:

```bash
npx prisma migrate dev --name init
``` 

### Passo 5: Rodar o projeto
Você pode rodar o projeto em modo de desenvolvimento ou produção:

Modo de desenvolvimento
Use o comando abaixo para rodar o projeto com hot-reload (automaticamente recarrega ao salvar alterações):
```bash
npm run dev
# ou
yarn dev
``` 
### Modo de produção
1) Primeiro, compile o projeto TypeScript para JavaScript:

```bash
npm run build
# ou
yarn build
``` 

2) Depois, inicie o servidor:
```bash
npm start
# ou
yarn start
``` 
O servidor estará rodando em http://localhost:3000 (ou na porta configurada no seu ambiente).

### 🛠 Tecnologias utilizadas

- Fastify: Framework web rápido e eficiente para Node.js.
- Prisma: ORM para gerenciamento de banco de dados.
- TypeScript: Adiciona tipagem estática ao JavaScript.
- Zod: Biblioteca para validação de dados.
- Bcryptjs: Para criptografia de senhas.
- Dotenv: Gerenciamento de variáveis de ambiente.