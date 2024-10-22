## API de Gerenciamento de Livraria
Esta API permite gerenciar uma livraria, incluindo funcionalidades para gerenciar autores, livros e usuários. Ela fornece endpoints para criar, atualizar, listar e excluir autores e livros, além de recuperar dados específicos. A autenticação baseada em JWT é utilizada para proteger determinadas rotas. A API foi desenvolvida usando Node.js, Express, Prisma ORM, TypeScript e TSyringe para injeção de dependência.

# Índice

  ### Tecnologias
  ### Funcionalidade
  ### Instalação
  ### Uso
    - Autenticação
    - Endpoints de Autor
    - Endpoints de Livro
    - Endpoints de Usuário
  ### Executando Testes
  ### Licença

  ### Tecnologias
    - Node.js: Ambiente de execução JavaScript para construir a API.
    - Express: Framework web para rotas e middleware.
    - Prisma ORM: Mapeador objeto-relacional para interações com o banco de dados.
    - TSyringe: Contêiner de injeção de dependências para TypeScript.
    - JWT: JSON Web Token para autenticação e proteção de rotas.

  ### Funcionalidades
  - CRUD de Autores: Criar, ler, atualizar e excluir autores.
  - CRUD de Livros: Criar, ler, atualizar e excluir livros.
  - Relacionamento Muitos-para-Muitos: Autores podem ser associados a múltiplos livros, e livros podem ter múltiplos autores.
  - Autenticação JWT: Protege rotas específicas, exigindo que os usuários façam login para acessá-las.
  - Injeção de Dependência: Usando TSyringe para gerenciar dependências de serviços.


  ### Instalação
  - Clone o repositório:

  ### Copiar código
  - git clone https://github.com/seu-usuario/bookstore-api.git
  - Navegue até o diretório do projeto:
  - cd bookstore-api
    
  ### Instale as dependências:
    - npm install
    - Configure o arquivo .env com suas variáveis de ambiente. Por exemplo:

  

  - DATABASE_URL=sua-url-do-banco-de-dados
JWT_SECRET=sua-chave-secreta
Execute as migrações do Prisma para configurar o esquema do banco de dados:

bash
Copiar código
npx prisma migrate dev
Inicie a aplicação:

bash
Copiar código
npm run dev
Uso
Autenticação
