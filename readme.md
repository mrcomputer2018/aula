### npm init
- Em nome eu numero e dou um nome ao projeto. Ex.: 01-calcula-valor

### npm test
- Para verificar se vai dar erro pois nao temos nehum teste feito ate o momento

### npm install --save jest
- Instalando a biblioteca de teste
- --save - para ser usada somente durante o tempo de desenvolvimento e nao ira para o deploy

### src
- Sera local aonde ficara a aplicacao

### test
- Sera o local aonde ficaram os nossos arquivos de teste

### Arquivo.test.js
- Sao os arquivos de teste da aplicacao e que o jest reconhece.

### TDD
- Sempre começamos pelos testes
- Depois fazemos app. A cada novo teste e uma nova apliacao.

### npm install --save eslint
- Save para ser usado somente no desenvolvimento do app.
- No periodo de refatoracao quando os teste ja passaram, usar o
eslint para ajudar na refatoracao da app.

### Testando
- No package.json eu substituo o texto existente em teste por jest.
- Executo npm test.

### npx eslint --init
- Chamando o eslint para fazer a configuracao
- 1ª pergunta: opcao 4
- 2ª pergunta: opcao 1
- 3ª pergunta: opcao 3
- 6ª pergunta: opcao 1
- 7ª pergunta: opcao 2
- 8ª pergunta: opcao 3 json
- 9ª pergunta: opcao yes

### npx eslint *
- Executa o eslint pelo terminal
- Com asterisco no final do comando ele executa em todos os arquivos da app.

### npx eslint src/** test/** --fix
- Executa em pastas especificas

### .eslintrc.json
- Em "env": {
        "browser": true,
        "es2021": true,
        "commonjs": true,
        "jest": true
    }

Adicionamos "commonjs": true e "jest": true no final

### package.json
- Inserir a linha  "lint": "eslint src/** test/** --fix"

em 
  "scripts": {
    "test": "jest",
    "lint": "eslint src/** test/** --fix"
  }

- Rodar com npm run lint

### npm run lint
- Executa a verificacao do ESlint pelo coamndo configurado em package.json
acertando os erros nos arquivos das pastas src e test.

### package.json
- Inserir a linha  "watch": "jest --watch"
  "scripts": {
    "test": "jest",
    "lint": "eslint src/** test/** --fix",
    "watch": "jest --watch"
  }
  
- Excutar com npm run watch

### Debugg no jest
- Inserir a linha debugger no inicio do codigo de teste
- digtar o comando "node --inspect-brk ./node_modules/jest/bin/jest.js --runInBand"
para executar o debugg linha por linha do codigo
- Acessar a aba inspect do Chrome

### Relatorio de cobertura dos testes
Adicionar ao package.json --coverage logo apos jest "test": "jest"

  "scripts": {
    "test": "jest --coverage",
    "lint": "eslint src/** test/** --fix",
    "watch": "jest --watch"
  }