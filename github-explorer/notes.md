#### Iniciando um Projeto

    yarn init -y

Informações Principais do Projeto
( são também as dependêcias [libs])
package.json

    yarn add react

node_modules (todas as dependêcias da aplicação)

    yarn add react-dom

Permite que o react se comunique com a árvore de componentes do html

#### Utilizando o Babel

Conversor para todos os brownsers

    yarn add @babel/core @babel/cli @babel/preset-env -D

Dependência de desenvolvimento significa que não usamos nenhuma dessas
bibliotecas quando este for posto em produção.

Convertendo um arquivo

    yarn babel src/index.js --out-file dist/bundle.js

### WebPack

    yarn add webpack-cli webpack-dev-server -D

Podemos importar no html arquivos css, saas , les, json
Este estipula loaders que dita como cada um destes arquivos devem ser tratados pelo brownser.

Para gerar um bundle do hello word vindo de app, tive que fazer algumas alterações que não são sujeridas na aulo:

    yarn add webpack

    yarn add @babel/preset-react

(e adicionar em presets "@babel/preset-react")

    yarn add babel-loader -D

sempre que forem feitas alterações no arquivo que corresponde ao bundle.js, deve-se re-executar o comando:

    yarn webpack

### Algumas melhorias no fluxo da aplicação:

Introduzindo plugin no webpack.

yarn add html-webpack-plugin -D

#### AUTOMATIZANDO O yarn webpack

    yarn add webpack-dev-server -D

a aplicação ficará executando no 'localhost/8080'

### Source maps

Tornando a forma de identificar os erros conforme o código original.

# Ambiente de Desenvolvimento e Ambiente d e Produção

Para criar a variável de ambiente seguimos desta forma:
no unix (seja no MAC ou no Linux)

    NODE_ENV=production yarn webpack

no Windows:

    yarn add cross-env -D

(serve para definir variáveis de ambiente independente do sistema operacional da pessoa)

Agora temos um atalho para rodar os ambientes:

    yarn dev

(roda o ambiente de desenvolvimento)

    yarn build

(roda o ambiente de produção)

# Interpretando o arquivos css no projeto

Crie uma regra no webpack para interpretar arquivos do tipo css.

    yarn add style-loader css-loader -D

### Configurando o pré-processador SAAS

Configure o webpack e adicione este comando:

    yarn add node-sass -D

    yarn add sass-loader -D

### Criando Componentes

Componentes são como as "tags" do html.
Códigos encapsulados com sua estrutura, estilização e funcionalidade.

Função que inicia em maiúscula e retornando um html.

Uma convensão é termos apenas um componente por arquivo.

### Propriedades

Passando informações de componentes pais para componentes filhos;

### Conceito ESTADO
