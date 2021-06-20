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
