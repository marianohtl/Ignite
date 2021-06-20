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

###
