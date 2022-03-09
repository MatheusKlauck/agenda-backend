# agenda-backend

Agenda simples para organizar rotinas diárias.
Road map:
    [x]  Criação dockerfile, dockerignore, .gitignore
    [x]  Criação do docker-compose
    [x]  Instalação typescript
    [x] Instalação e configuração eslint
    [x] Criação do .editorconfig (para nao dar conflito no eslint com a quebra de linha windows vs. unix)
    []  Instalação prettier
    [x] Instalação ts-node-dev -D para fazer automaticamente o processo de transcição de arquivos typescript para javascript
    [x] Inclusão do script no arquivo package.json
     "ts-node-dev --inspect --transpile-only --ignore-watch node_modules --respawn src/server.ts"
    [x]  Criação da base express
    [ ]  Instalação prisma orm
    [x]  Criação da imagem do postgres
    [ ]  Criação da camada de repositório
    [ ]  Criação da camada de models
    